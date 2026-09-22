/**
 * Alisa Movies - Server Movie Synchronization Engine
 * Automatically fetches fresh Trending, Now Playing, and Popular movies/TV from TMDB
 * Merges and deduplicates them into data/movies_3000.json
 * Updates sitemap.xml to index new titles
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TMDB_API_KEY = process.env.TMDB_API_KEY || '4e44d9029b1270a757cddc766a1bcb63';
const TMDB_BASE = 'https://api.themoviedb.org/3';
const MOVIES_PATH = path.join(__dirname, '..', 'data', 'movies_3000.json');

const GENRE_MAP = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
  10759: 'Action & Adventure',
  10762: 'Kids',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics'
};

async function fetchTMDB(endpoint, params = {}) {
  const query = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: 'en-US',
    ...params
  });
  const url = `${TMDB_BASE}${endpoint}?${query.toString()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[Sync] HTTP error ${res.status} for ${endpoint}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn(`[Sync] Fetch failed for ${endpoint}:`, err.message);
    return null;
  }
}

function normalizeItem(raw, defaultMediaType = 'movie') {
  if (!raw || (!raw.title && !raw.name)) return null;

  const isTV = raw.media_type === 'tv' || defaultMediaType === 'tv' || (!raw.title && !!raw.name);
  const title = raw.title || raw.name || 'Untitled';
  const releaseDate = raw.release_date || raw.first_air_date || '';
  const id = Number(raw.id);

  if (!id) return null;

  const genres = (raw.genre_ids || []).map(gid => ({
    id: gid,
    name: GENRE_MAP[gid] || 'Featured'
  }));

  const posterPath = raw.poster_path
    ? (raw.poster_path.startsWith('http') ? raw.poster_path : `https://image.tmdb.org/t/p/w500${raw.poster_path}`)
    : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80';

  const backdropPath = raw.backdrop_path
    ? (raw.backdrop_path.startsWith('http') ? raw.backdrop_path : `https://image.tmdb.org/t/p/w1280${raw.backdrop_path}`)
    : posterPath;

  return {
    id,
    tmdb_id: id,
    title,
    name: title,
    release_date: releaseDate,
    vote_average: Number(raw.vote_average ? Number(raw.vote_average).toFixed(1) : 7.5),
    vote_count: Number(raw.vote_count || 100),
    popularity: Number(raw.popularity || 100),
    media_type: isTV ? 'tv' : 'movie',
    poster_path: posterPath,
    backdrop_path: backdropPath,
    overview: raw.overview || `Watch ${title} in HD quality with multi-server streaming options on Alisa Movies.`,
    genres: genres.length > 0 ? genres : [{ id: 28, name: 'Cinema' }]
  };
}

async function runSync() {
  console.log('=== [Alisa Movies] Starting Movie Sync from Remote Servers ===');

  let existing = [];
  try {
    if (fs.existsSync(MOVIES_PATH)) {
      const data = fs.readFileSync(MOVIES_PATH, 'utf8');
      existing = JSON.parse(data);
      console.log(`Loaded existing catalog: ${existing.length} titles`);
    }
  } catch (err) {
    console.warn('Could not read existing movies file:', err.message);
  }

  const existingMap = new Map();
  existing.forEach(item => {
    if (item && item.id) {
      existingMap.set(String(item.id), item);
      if (item.title) {
        existingMap.set(`t_${item.title.toLowerCase().trim()}`, item);
      }
    }
  });

  const endpoints = [
    { path: '/trending/movie/day', pages: 3, type: 'movie' },
    { path: '/movie/now_playing', pages: 3, type: 'movie' },
    { path: '/movie/popular', pages: 3, type: 'movie' },
    { path: '/movie/top_rated', pages: 2, type: 'movie' },
    { path: '/trending/tv/day', pages: 2, type: 'tv' },
    { path: '/tv/popular', pages: 2, type: 'tv' }
  ];

  const fetchedItems = [];

  for (const ep of endpoints) {
    for (let page = 1; page <= ep.pages; page++) {
      console.log(`Fetching ${ep.path} (page ${page})...`);
      const data = await fetchTMDB(ep.path, { page });
      if (data && Array.isArray(data.results)) {
        data.results.forEach(raw => {
          const item = normalizeItem(raw, ep.type);
          if (item) fetchedItems.push(item);
        });
      }
      // Brief pause to be respectful to API rate limits
      await new Promise(r => setTimeout(r, 120));
    }
  }

  console.log(`Fetched total of ${fetchedItems.length} candidate items from live servers.`);

  let newCount = 0;
  let updatedCount = 0;
  const mergedNew = [];

  for (const item of fetchedItems) {
    const keyById = String(item.id);
    const keyByTitle = `t_${item.title.toLowerCase().trim()}`;

    if (!existingMap.has(keyById) && !existingMap.has(keyByTitle)) {
      existingMap.set(keyById, item);
      existingMap.set(keyByTitle, item);
      mergedNew.push(item);
      newCount++;
    } else {
      // Update popularity / vote average for existing title
      const curr = existingMap.get(keyById) || existingMap.get(keyByTitle);
      if (curr) {
        curr.popularity = Math.max(curr.popularity || 0, item.popularity || 0);
        curr.vote_average = item.vote_average || curr.vote_average;
        updatedCount++;
      }
    }
  }

  console.log(`Sync Results: ${newCount} brand-new titles added, ${updatedCount} existing titles refreshed.`);

  // Place newest freshly synced titles right at the front of catalog
  const finalCatalog = [...mergedNew, ...existing];

  // Save merged catalog back to disk
  fs.writeFileSync(MOVIES_PATH, JSON.stringify(finalCatalog, null, 2), 'utf8');
  console.log(`Catalog updated successfully: ${finalCatalog.length} total titles written to ${MOVIES_PATH}`);

  // Re-generate sitemap.xml so search engines index all new titles immediately
  const sitemapScript = path.join(__dirname, 'generate-sitemap.js');
  if (fs.existsSync(sitemapScript)) {
    console.log('Regenerating sitemap.xml...');
    try {
      execSync(`node "${sitemapScript}"`, { stdio: 'inherit' });
      console.log('Sitemap successfully regenerated.');
    } catch (sitemapErr) {
      console.warn('Could not regenerate sitemap:', sitemapErr.message);
    }
  }

  console.log('=== Movie Sync Completed Successfully ===');
}

if (require.main === module) {
  runSync().catch(err => {
    console.error('Fatal sync error:', err);
    process.exit(1);
  });
}

module.exports = { runSync };
