// Production Build & Minification Script for Alisa Movies
const { execSync } = require('child_process');

console.log('🚀 Minifying static CSS and JS assets for production...');

try {
  execSync('npx esbuild css/style.css --minify --outfile=css/style.min.css', { stdio: 'inherit' });
  execSync('npx esbuild js/api.js --minify --outfile=js/api.min.js', { stdio: 'inherit' });
  execSync('npx esbuild js/app.js --minify --outfile=js/app.min.js', { stdio: 'inherit' });
  execSync('npx esbuild js/player.js --minify --outfile=js/player.min.js', { stdio: 'inherit' });
  execSync('npx esbuild js/storage.js --minify --outfile=js/storage.min.js', { stdio: 'inherit' });
  console.log('✅ Build complete! All assets minified successfully.');
} catch (err) {
  console.error('❌ Build failed:', err);
  process.exit(1);
}
