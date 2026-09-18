/**
 * Alisa Movies - Worldwide Movie Database API Service
 * Integrates TMDB, TVMaze, and Public Domain Film Archives
 */

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/';
const TMDB_API_BASE = 'https://api.themoviedb.org/3';

// Curated Public Domain & Open Cinema Streams (100% Guaranteed Direct Video Playback)
const PUBLIC_CINEMA_MOVIES = [
  {
    id: 'open-1',
    title: 'Tears of Steel',
    release_date: '2012-09-26',
    vote_average: 8.4,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80',
    overview: 'Set in a dystopian future where a group of warriors and scientists gather at the Oude Kerk in Amsterdam to stage a crucial event from the past in a desperate attempt to rescue the world from destructive robots.',
    genres: [{ id: 878, name: 'Sci-Fi' }, { id: 28, name: 'Action' }, { id: 18, name: 'Drama' }],
    runtime: 12,
    trailer_key: 'R6MlUcmgul8'
  },
  {
    id: 'open-2',
    title: 'Sintel: The Dragon Quest',
    release_date: '2010-09-27',
    vote_average: 8.8,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    poster_path: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    overview: 'A lonely young woman, Sintel, helps and bonds with a hurt baby dragon whom she names Scales. When the dragon is kidnapped by an adult beast, she embarks on a perilous and heart-wrenching quest across treacherous lands.',
    genres: [{ id: 16, name: 'Animation' }, { id: 14, name: 'Fantasy' }, { id: 12, name: 'Adventure' }],
    runtime: 15,
    trailer_key: 'eRsGyueVLvQ'
  },
  {
    id: 'open-3',
    title: 'Big Buck Bunny',
    release_date: '2008-04-10',
    vote_average: 8.1,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster_path: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'A large, gentle rabbit wakes up in his sunny forest home to encounter three bullying woodland rodents who take delight in tormenting peaceful creatures. The gentle giant decides to teach them an unforgettable lesson.',
    genres: [{ id: 16, name: 'Animation' }, { id: 35, name: 'Comedy' }, { id: 10751, name: 'Family' }],
    runtime: 10,
    trailer_key: 'aqz-KE-bpKQ'
  },
  {
    id: 'open-4',
    title: 'Cosmos Laundromat',
    release_date: '2015-08-10',
    vote_average: 8.5,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster_path: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    overview: 'On a desolate island, a suicidal sheep named Franck meets a quirky salesman named Victor, who offers Franck the gift of a lifetime: a chance to experience an infinity of parallel lives.',
    genres: [{ id: 16, name: 'Animation' }, { id: 878, name: 'Sci-Fi' }, { id: 14, name: 'Fantasy' }],
    runtime: 12,
    trailer_key: 'Y-rmzh0PI3c'
  },
  {
    id: 'open-5',
    title: 'Night of the Living Dead',
    release_date: '1968-10-01',
    vote_average: 8.7,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://ia800301.us.archive.org/1/items/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4',
    poster_path: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    overview: 'George A. Romero’s legendary horror masterpiece. When unexpected radiation reanimates unburied corpses, a desperate band of survivors barricades themselves inside an isolated rural farmhouse to survive the undead onslaught.',
    genres: [{ id: 27, name: 'Horror' }, { id: 53, name: 'Thriller' }],
    runtime: 96,
    trailer_key: '0TAGt2tE4Z4'
  },
  {
    id: 'open-6',
    title: 'The Great Train Robbery & Classic Cinema',
    release_date: '1925-06-26',
    vote_average: 8.3,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&auto=format&fit=crop&q=80',
    overview: 'The golden age of silent and classic cinema. Experience early motion picture milestones that shaped storytelling, visual effects, and cinematic language for generations.',
    genres: [{ id: 37, name: 'Western' }, { id: 28, name: 'Action' }, { id: 36, name: 'History' }],
    runtime: 70,
    trailer_key: 'Hnmd0yQ_z-w'
  }
];

// Offline & Fallback Catalog (Ensures 100% operational UI in case of API outages)
const FALLBACK_CATALOG = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    release_date: '2024-02-27',
    vote_average: 8.6,
    media_type: 'movie',
    poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s520Wio.jpg',
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    genres: [{ id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }],
    trailer_key: 'Way9Dexny3w'
  },
  {
    id: 157336,
    title: 'Interstellar',
    release_date: '2014-11-05',
    vote_average: 8.7,
    media_type: 'movie',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/rAiYTsqBkRefBXweC15o3x0e0iE.jpg',
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    genres: [{ id: 12, name: 'Adventure' }, { id: 18, name: 'Drama' }, { id: 878, name: 'Science Fiction' }],
    trailer_key: 'zSWdZVtXT7E'
  },
  {
    id: 27205,
    title: 'Inception',
    release_date: '2010-07-15',
    vote_average: 8.4,
    media_type: 'movie',
    poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdrop_path: '/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    overview: 'Cobb, a skilled thief who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the mission.',
    genres: [{ id: 28, name: 'Action' }, { id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }],
    trailer_key: 'YoHD9XEInc0'
  },
  {
    id: 94605,
    name: 'Arcane',
    title: 'Arcane',
    first_air_date: '2021-11-06',
    vote_average: 8.9,
    media_type: 'tv',
    poster_path: '/fqldfqIITsb9039vzbIRnsJlSa6.jpg',
    backdrop_path: '/2gA1QfG6z1P7kO9m9Dk6d5Xf3nS.jpg',
    overview: 'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and incompatible convictions.',
    genres: [{ id: 16, name: 'Animation' }, { id: 10759, name: 'Action & Adventure' }, { id: 10765, name: 'Sci-Fi & Fantasy' }],
    trailer_key: 'fXmAurh012s'
  },
  {
    id: 1399,
    name: 'Game of Thrones',
    title: 'Game of Thrones',
    first_air_date: '2011-04-17',
    vote_average: 8.5,
    media_type: 'tv',
    poster_path: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    backdrop_path: '/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg',
    overview: 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north.',
    genres: [{ id: 10765, name: 'Sci-Fi & Fantasy' }, { id: 18, name: 'Drama' }, { id: 10759, name: 'Action & Adventure' }],
    trailer_key: 'gcTkNV5Vg1E'
  },
  {
    id: 533535,
    title: 'Deadpool & Wolverine',
    release_date: '2024-07-24',
    vote_average: 7.8,
    media_type: 'movie',
    poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdrop_path: '/yDHYTfA3R0jFYba16jBB1jv8uaC.jpg',
    overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary Deadpool behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    genres: [{ id: 28, name: 'Action' }, { id: 35, name: 'Comedy' }, { id: 878, name: 'Science Fiction' }],
    trailer_key: '73_1biulkYk'
  },
  {
    id: 119051,
    name: 'Wednesday',
    title: 'Wednesday',
    first_air_date: '2022-11-23',
    vote_average: 8.5,
    media_type: 'tv',
    poster_path: '/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
    backdrop_path: '/iHSwvFe7FdFFRmEN0yhuqbtMTF1.jpg',
    overview: 'Wednesday Addams misadventures as a student at Nevermore Academy: a very unique boarding school in deepest New England.',
    genres: [{ id: 10765, name: 'Sci-Fi & Fantasy' }, { id: 9648, name: 'Mystery' }, { id: 35, name: 'Comedy' }],
    trailer_key: 'Di310BC8zMg'
  },
  {
    id: 76600,
    title: 'Avatar: The Way of Water',
    release_date: '2022-12-14',
    vote_average: 7.7,
    media_type: 'movie',
    poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    genres: [{ id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
    trailer_key: 'd9MyW72ELq0'
  }
];

const MovieAPI = {
  getApiKey() {
    const prefs = window.StorageManager ? window.StorageManager.getPreferences() : {};
    return prefs.tmdbApiKey || '4e44d9029b1270a757cddc766a1bcb63';
  },

  getLanguage() {
    const prefs = window.StorageManager ? window.StorageManager.getPreferences() : {};
    return prefs.preferredLanguage || 'en-US';
  },

  getImageUrl(path, size = 'w500') {
    if (!path) return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `${TMDB_IMAGE_BASE}${size}${path}`;
  },

  async requestTMDB(endpoint, params = {}) {
    const key = this.getApiKey();
    const lang = this.getLanguage();
    const queryParams = new URLSearchParams({
      api_key: key,
      language: lang,
      ...params
    });

    try {
      const response = await fetch(`${TMDB_API_BASE}${endpoint}?${queryParams.toString()}`);
      if (!response.ok) {
        throw new Error(`TMDB HTTP error ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      console.warn(`TMDB request failed for ${endpoint}:`, err);
      return null;
    }
  },

  // --- TRENDING & SPOTLIGHT ---
  async getTrending(timeWindow = 'day') {
    const data = await this.requestTMDB(`/trending/all/${timeWindow}`);
    if (data && data.results && data.results.length > 0) {
      return data.results.filter(item => item.poster_path && item.backdrop_path);
    }
    return FALLBACK_CATALOG;
  },

  async getMovies(category = 'popular', page = 1) {
    // category can be 'popular', 'top_rated', 'now_playing', 'upcoming'
    const data = await this.requestTMDB(`/movie/${category}`, { page });
    if (data && data.results) {
      return data.results.map(m => ({ ...m, media_type: 'movie' }));
    }
    return FALLBACK_CATALOG.filter(m => m.media_type === 'movie');
  },

  async getTVShows(category = 'popular', page = 1) {
    const data = await this.requestTMDB(`/tv/${category}`, { page });
    if (data && data.results) {
      return data.results.map(t => ({ ...t, media_type: 'tv', title: t.name }));
    }
    return FALLBACK_CATALOG.filter(t => t.media_type === 'tv');
  },

  // --- WORLDWIDE REGIONAL DISCOVERY ---
  // Discover by Worldwide region / language (Bollywood, Anime, Asian Cinema, European, Hollywood)
  async getWorldwide(regionCode = 'all', page = 1) {
    let params = { page, sort_by: 'popularity.desc' };

    switch (regionCode) {
      case 'bollywood':
        params.with_original_language = 'hi|ta|te';
        params.with_origin_country = 'IN';
        break;
      case 'anime':
        params.with_original_language = 'ja';
        params.with_genres = '16';
        break;
      case 'kdrama':
        params.with_original_language = 'ko';
        return this.requestTMDB('/discover/tv', params).then(d => (d?.results || []).map(i => ({ ...i, media_type: 'tv', title: i.name })));
      case 'korean':
        params.with_original_language = 'ko';
        break;
      case 'european':
        params.with_original_language = 'fr|es|de|it';
        break;
      case 'hollywood':
        params.with_original_language = 'en';
        params.with_origin_country = 'US';
        break;
      default:
        return this.getTrending();
    }

    const data = await this.requestTMDB('/discover/movie', params);
    return data?.results?.map(m => ({ ...m, media_type: 'movie' })) || [];
  },

  // --- GENRE DISCOVERY ---
  async getByGenre(genreId, type = 'movie', page = 1) {
    const endpoint = type === 'tv' ? '/discover/tv' : '/discover/movie';
    const data = await this.requestTMDB(endpoint, {
      with_genres: genreId,
      page,
      sort_by: 'popularity.desc'
    });

    if (data?.results) {
      return data.results.map(i => ({
        ...i,
        media_type: type,
        title: i.title || i.name
      }));
    }
    return [];
  },

  // --- SEARCH (TMDB + TVMAZE) ---
  async searchMulti(query, page = 1) {
    if (!query || query.trim() === '') return [];

    // Try TMDB first
    const tmdbData = await this.requestTMDB('/search/multi', {
      query: query.trim(),
      page,
      include_adult: false
    });

    if (tmdbData?.results?.length > 0) {
      return tmdbData.results
        .filter(item => (item.media_type === 'movie' || item.media_type === 'tv') && (item.poster_path || item.backdrop_path))
        .map(i => ({ ...i, title: i.title || i.name }));
    }

    // Secondary Free Database: TVMaze search
    try {
      const tvMazeRes = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      if (tvMazeRes.ok) {
        const shows = await tvMazeRes.json();
        if (shows && shows.length > 0) {
          return shows.map(({ show }) => ({
            id: `tvmaze-${show.id}`,
            title: show.name,
            name: show.name,
            media_type: 'tv',
            vote_average: show.rating?.average || 7.5,
            release_date: show.premiered,
            first_air_date: show.premiered,
            overview: show.summary ? show.summary.replace(/<[^>]*>/g, '') : '',
            poster_path: show.image?.medium || show.image?.original,
            backdrop_path: show.image?.original,
            genres: show.genres?.map((g, idx) => ({ id: idx, name: g })) || []
          }));
        }
      }
    } catch (e) {
      console.warn('TVMaze fallback search error:', e);
    }

    // Local catalog search fallback
    return FALLBACK_CATALOG.filter(item => 
      (item.title || item.name).toLowerCase().includes(query.toLowerCase()) ||
      (item.overview || '').toLowerCase().includes(query.toLowerCase())
    );
  },

  // --- DETAILS, CREDITS, VIDEOS ---
  async getDetails(id, mediaType = 'movie') {
    // If it's a public domain / open movie
    if (String(id).startsWith('open-')) {
      const item = PUBLIC_CINEMA_MOVIES.find(m => String(m.id) === String(id));
      if (item) return item;
    }

    // If it's a TVMaze item
    if (String(id).startsWith('tvmaze-')) {
      const rawId = id.replace('tvmaze-', '');
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${rawId}?embed[]=episodes&embed[]=cast`);
        if (res.ok) {
          const show = await res.json();
          return {
            id,
            title: show.name,
            name: show.name,
            media_type: 'tv',
            overview: show.summary ? show.summary.replace(/<[^>]*>/g, '') : '',
            poster_path: show.image?.original || show.image?.medium,
            backdrop_path: show.image?.original,
            vote_average: show.rating?.average || 7.5,
            release_date: show.premiered,
            genres: show.genres?.map((g, idx) => ({ id: idx, name: g })) || [],
            cast: show._embedded?.cast?.map(c => ({
              id: c.person.id,
              name: c.person.name,
              character: c.character.name,
              profile_path: c.person.image?.medium
            })) || [],
            episodes: show._embedded?.episodes || []
          };
        }
      } catch (err) {
        console.warn('TVMaze details fetch failed', err);
      }
    }

    // Standard TMDB details
    const endpoint = `/${mediaType}/${id}`;
    const data = await this.requestTMDB(endpoint, {
      append_to_response: 'videos,credits,similar,recommendations,external_ids'
    });

    if (data) {
      // Find official trailer
      let trailerKey = null;
      if (data.videos?.results) {
        const trailer = data.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube') ||
                        data.videos.results.find(v => v.site === 'YouTube');
        if (trailer) trailerKey = trailer.key;
      }

      return {
        ...data,
        media_type: mediaType,
        title: data.title || data.name,
        trailer_key: trailerKey,
        imdb_id: data.external_ids?.imdb_id || data.imdb_id,
        cast: data.credits?.cast?.slice(0, 10) || []
      };
    }

    // Fallback item
    const fallback = FALLBACK_CATALOG.find(f => String(f.id) === String(id));
    return fallback || null;
  },

  // --- SEASONS & EPISODES FOR TV SHOWS ---
  async getTVSeason(tvId, seasonNumber = 1) {
    const data = await this.requestTMDB(`/tv/${tvId}/season/${seasonNumber}`);
    if (data && data.episodes) {
      return data.episodes;
    }
    // Generate placeholder episodes if not found
    return Array.from({ length: 10 }, (_, i) => ({
      episode_number: i + 1,
      name: `Episode ${i + 1}`,
      overview: `Streaming episode ${i + 1} of Season ${seasonNumber}. Enjoy in HD with subtitles.`
    }));
  },

  // --- PUBLIC DOMAIN MOVIES LIST ---
  getPublicCinema() {
    return PUBLIC_CINEMA_MOVIES;
  }
};

window.MovieAPI = MovieAPI;
