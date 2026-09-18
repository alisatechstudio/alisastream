# 🍿 Alisa Movies — Worldwide Movie & TV Streaming Web Application

> **A complete, cinema-grade movie streaming web app engineered specifically for 100% serverless hosting on GitHub Pages.**  
> Connects to worldwide open movie database APIs, provides a multi-server streaming player with server switcher & TV episode selector, and includes direct-stream public cinema.

![Alisa Movies Preview Banner](https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80)

---

## ✨ Features

- **🌐 Worldwide Free Movie Databases**:
  - **The Movie Database (TMDB)**: Powers the worldwide movie and series catalog (Hollywood, Bollywood, Anime, Asian Cinema, European films, Documentaries) with rich posters, backdrops, ratings, trailers, cast profiles, and release dates. Includes a built-in working key plus custom key support in Settings.
  - **TVMaze API**: 100% free, unlimited worldwide TV show schedule and episode guide without API key requirements.
  - **Open Cinema & Public Domain Archives**: Curated collection of high-definition open films (*Tears of Steel*, *Sintel*, *Big Buck Bunny*, *Cosmos Laundromat*, *Night of the Living Dead*, and classic cinema) with 100% guaranteed direct video playback.

- **🎥 Multi-Server Streaming Video Player**:
  - **Server 1**: VidLink HD (Multi-language subtitles & fast streaming)
  - **Server 2**: AutoEmbed Fast (High bitrate & responsive)
  - **Server 3**: VidSrc Multi-Audio (Worldwide streams)
  - **Server 4**: SuperEmbed Global (Reliable fallback mirror)
  - **Server 5**: Embed.su Mirror (Alternative stream)
  - **Direct HTML5 Player**: Native player with speed control, Picture-in-Picture (PiP), and seek controls for Open Cinema titles.

- **📺 Dynamic TV Series Support**:
  - Season selector dropdown.
  - Interactive Episode pill grid with active episode highlight.
  - "Next Episode" and "Previous Episode" quick navigation buttons.

- **🔥 Rich Aesthetics & WOW Design**:
  - Dark obsidian cinema theme with ambient mesh lighting.
  - Hero Spotlight Carousel with auto-rotation, backdrop gradients, and instant play buttons.
  - Modern typography with Google Fonts (*Plus Jakarta Sans* & *Cinzel*).
  - Ambient backlight glow behind the video player creating a real theater atmosphere.
  - Shimmer skeleton loading cards during data fetches.

- **⚡ Fast Search & Worldwide Discovery**:
  - Instant live debounced search with dropdown suggestion previews.
  - Quick filter chips: *All Worldwide, Trending, Top Rated, Hollywood, Bollywood, Anime, K-Drama, Action, Sci-Fi, Horror, Comedy, Romance, and Open Cinema*.
  - Keyboard shortcut: Press `/` anywhere to focus search; press `Esc` to close dialogs.

- **💾 LocalStorage User State**:
  - **My Watchlist**: Add/remove any movie or series with 1 click; persists across sessions.
  - **Continue Watching / History**: Automatically logs recently watched titles and TV episodes.
  - **Custom Preferences**: Pick your favorite color accent, choose default streaming server, or insert your personal TMDB API key.

- **🎨 5 Color Theme Accents**:
  - Neon Cyan (Default)
  - Cinema Red (Netflix style)
  - Golden Amber (Cinematic Gold)
  - Royal Purple (HBO style)
  - Emerald Green

---

## 🚀 Instant Deployment to GitHub Pages (2 Minutes)

Because Alisa Movies is built entirely with client-side HTML5, CSS3, and ES6 JavaScript with relative asset paths, it runs natively on **GitHub Pages** with zero build configuration!

### Method 1: Push via Git Terminal

```bash
# 1. Initialize git (if not already initialized)
git init
git add .
git commit -m "Initial commit: Alisa Movies complete streaming web app"

# 2. Add your GitHub repository remote
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Method 2: Enable GitHub Pages

1. Navigate to your repository on [GitHub.com](https://github.com).
2. Click on **Settings** (top menu).
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
   - Click **Save**.
5. In approximately 60 seconds, your site will be live at:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

> [!NOTE]
> The included `.nojekyll` file ensures GitHub Pages bypasses Jekyll processing and serves all static assets directly.

---

## 💻 Local Preview & Testing

To test the application on your computer:

```bash
# Using Python (built into Windows, macOS, Linux):
python -m http.server 8080

# Or using Node.js:
npx serve .
```

Open `http://localhost:8080` in your web browser.

---

## 📂 Project Architecture

```
Alisa Movies/
├── index.html             # Semantic HTML5 markup, accessible dialogs & header
├── .nojekyll              # Disables Jekyll processing on GitHub Pages
├── README.md              # Project documentation & deployment guide
├── css/
│   └── style.css          # Cinema dark design system, glassmorphism, responsive styles
└── js/
    ├── storage.js         # LocalStorage manager (Watchlist, History, Preferences)
    ├── api.js             # Worldwide API integration (TMDB, TVMaze, Open Cinema)
    ├── player.js          # Multi-server streaming player, episode switcher & HTML5 player
    └── app.js             # UI controller, carousel, live search, filters, and routing
```

---

## 📜 Legal & API Attribution

- Movie and TV metadata is powered by community databases: [The Movie Database (TMDB)](https://www.themoviedb.org/) and [TVMaze API](https://www.tvmaze.com/api).
- Open movies are distributed under Creative Commons licenses by the [Blender Foundation](https://cloud.blender.org/open-projects/) and the [Internet Archive](https://archive.org/).
- This project is an open-source demonstration designed for personal educational and portfolio use.
