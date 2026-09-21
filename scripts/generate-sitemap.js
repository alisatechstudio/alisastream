/**
 * Alisa Movies - Production Sitemap Generator
 * Generates an SEO-optimized sitemap.xml with image tags, categories, and deep links
 * from data/movies_3000.json and static landing pages.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://alisastream.site';
const MOVIES_PATH = path.join(__dirname, '..', 'data', 'movies_3000.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'sitemap.xml');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap() {
  console.log('Generating sitemap for Alisa Movies...');
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Core Static Pages
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily', lastmod: today },
    { url: `${BASE_URL}/about.html`, priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: `${BASE_URL}/dmca.html`, priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: `${BASE_URL}/contact.html`, priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: `${BASE_URL}/privacy.html`, priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: `${BASE_URL}/terms.html`, priority: '0.7', changefreq: 'monthly', lastmod: today }
  ];

  staticPages.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(p.url)}</loc>\n`;
    xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Category & Genre Sections
  const categories = [
    { slug: 'movies', title: 'Movies Catalog', priority: '0.9', freq: 'daily' },
    { slug: 'tv', title: 'TV Shows & Series', priority: '0.9', freq: 'daily' },
    { slug: 'top_rated', title: 'Top Rated Cinema Masterpieces', priority: '0.9', freq: 'weekly' }
  ];

  categories.forEach(c => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(`${BASE_URL}/#${c.slug}`)}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${c.freq}</changefreq>\n`;
    xml += `    <priority>${c.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Load Movies / TV Shows from movies_3000.json
  if (fs.existsSync(MOVIES_PATH)) {
    try {
      const rawData = fs.readFileSync(MOVIES_PATH, 'utf-8');
      const items = JSON.parse(rawData);
      console.log(`Processing ${items.length} titles from movies_3000.json...`);

      items.forEach(item => {
        const type = item.media_type === 'tv' ? 'tv' : 'movie';
        const title = item.title || item.name || 'Untitled';
        const id = item.id || item.tmdb_id;
        if (!id) return;

        const loc = `${BASE_URL}/#${type}/${id}`;
        const releaseYear = (item.release_date || item.first_air_date || '').split('-')[0];
        const lastmod = item.release_date || item.first_air_date || today;

        // Determine priority based on popularity or rating
        let priority = '0.7';
        if (item.vote_average >= 8.0 || item.popularity > 200) {
          priority = '0.9';
        } else if (item.vote_average >= 7.0 || item.popularity > 50) {
          priority = '0.8';
        }

        xml += `  <url>\n`;
        xml += `    <loc>${escapeXml(loc)}</loc>\n`;
        xml += `    <lastmod>${escapeXml(lastmod)}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;

        // Image sitemap integration for Google Images index
        const poster = item.poster_path ? (item.poster_path.startsWith('http') ? item.poster_path : `https://image.tmdb.org/t/p/w780${item.poster_path}`) : null;
        if (poster) {
          xml += `    <image:image>\n`;
          xml += `      <image:loc>${escapeXml(poster)}</image:loc>\n`;
          xml += `      <image:title>Watch Latest ${escapeXml(title)}${releaseYear ? ` (${releaseYear})` : ''} Free HD</image:title>\n`;
          xml += `      <image:caption>Stream latest ${escapeXml(title)} 100% free in 4K HD on Alisa Movies.</image:caption>\n`;
          xml += `    </image:image>\n`;
        }

        xml += `  </url>\n`;
      });
    } catch (err) {
      console.error('Error reading movies_3000.json:', err);
    }
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');
  console.log(`Sitemap written successfully to: ${OUTPUT_PATH}`);
}

generateSitemap();
