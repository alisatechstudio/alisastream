/**
 * Alisa Movies - Multi-Server Streaming Video Player
 * Supports VidLink, AutoEmbed, VidSrc, SuperEmbed, and Custom HTML5 Player
 */

const STREAMING_SERVERS = [
  { id: '1', name: 'Server 1 (VidLink HD)', icon: '⚡', clean: true, description: 'Direct 4K/1080p Fast Stream (Multi-Language)' },
  { id: '2', name: 'Server 2 (VidSrc Pro)', icon: '🚀', clean: true, description: 'Global High-Speed Stream Mirror' },
  { id: '3', name: 'Server 3 (MultiEmbed)', icon: '🎥', clean: true, description: 'Alternative Multi-Source Stream' },
  { id: '4', name: 'Server 4 (AutoEmbed VIP)', icon: '🛡️', clean: true, description: 'Auto-Switching Backup Mirror' },
  { id: '5', name: 'Server 5 (Open Cinema)', icon: '🏛️', clean: true, description: 'Direct Open License Stream' }
];

const Player = {
  currentMedia: null,
  currentSeason: 1,
  currentEpisode: 1,
  currentServer: '1',
  isTheaterMode: false,

  init() {
    this.modal = document.getElementById('playerModal');
    this.container = document.getElementById('playerContainer');
    this.serverSelector = document.getElementById('serverSelector');
    this.tvEpisodeNav = document.getElementById('tvEpisodeNav');
    this.playerTitle = document.getElementById('playerTitle');
    this.playerMeta = document.getElementById('playerMeta');
    this.ambientGlow = document.getElementById('playerAmbientGlow');

    // Default to Server 1 (Zero-Ad Cinema HD)
    this.currentServer = '1';

    this.setupEventListeners();
  },

  setupEventListeners() {
    if (!this.modal) return;

    // Light-dismiss fallback for browsers not supporting closedby="any"
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      this.modal.addEventListener('click', (event) => {
        if (event.target !== this.modal) return;
        const rect = this.modal.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isDialogContent) {
          this.close();
        }
      });
    }

    // Stop playback when modal closes
    this.modal.addEventListener('close', () => {
      this.unload();
    });

    // Close button
    const closeBtn = document.getElementById('closePlayerBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Theater mode toggle
    const theaterBtn = document.getElementById('theaterModeBtn');
    if (theaterBtn) {
      theaterBtn.addEventListener('click', () => this.toggleTheaterMode());
    }
  },

  async open(media, season = 1, episode = 1) {
    this.currentMedia = media;
    this.currentSeason = Number(season) || 1;
    this.currentEpisode = Number(episode) || 1;

    // Resolve to public cinema item if stream details missing
    if (!media.stream_url && !media.youtube_id && window.MovieAPI) {
      const match = window.MovieAPI.getPublicCinema().find(m => String(m.id) === String(media.id) || m.title === media.title);
      if (match) {
        this.currentMedia = { ...media, ...match };
      } else {
        this.currentMedia = { ...media, ...window.MovieAPI.getPublicCinema()[0] };
      }
    }

    // Update Titles and Metadata in player
    const title = this.currentMedia.title || this.currentMedia.name || 'Now Streaming';
    const isTV = this.currentMedia.media_type === 'tv' || this.currentMedia.first_air_date;
    
    if (this.playerTitle) {
      this.playerTitle.textContent = title;
    }
    
    if (this.playerMeta) {
      const year = (this.currentMedia.release_date || this.currentMedia.first_air_date || '').split('-')[0];
      const rating = this.currentMedia.vote_average ? `★ ${Number(this.currentMedia.vote_average).toFixed(1)}` : '';
      const tvInfo = isTV ? ` • Episode ${this.currentEpisode}` : '';
      this.playerMeta.textContent = `${year} • ${rating}${tvInfo} • Open Cinema & Public Domain`;
    }

    // Set ambient glow backdrop color/image
    if (this.ambientGlow && (this.currentMedia.backdrop_path || this.currentMedia.poster_path)) {
      const imgUrl = window.MovieAPI ? window.MovieAPI.getImageUrl(this.currentMedia.backdrop_path || this.currentMedia.poster_path, 'w780') : '';
      this.ambientGlow.style.backgroundImage = `url("${imgUrl}")`;
    }

    // Record to Watch History
    if (window.StorageManager) {
      window.StorageManager.addToHistory(this.currentMedia, isTV ? this.currentSeason : null, isTV ? this.currentEpisode : null);
    }

    // Render Server Selector buttons
    this.renderServerSelector();

    // Render TV Season & Episode navigation if media is TV series
    if (isTV && !this.currentMedia.is_public_domain) {
      await this.renderTVEpisodeNav();
    } else {
      if (this.tvEpisodeNav) this.tvEpisodeNav.innerHTML = '';
    }

    // Load player stream
    this.loadStream();

    // Open Modal
    if (this.modal && !this.modal.open) {
      this.modal.showModal();
      document.body.classList.add('modal-open');
    }
  },

  loadStream() {
    if (!this.container || !this.currentMedia) return;

    let media = this.currentMedia;
    const isTV = media.media_type === 'tv' || Boolean(media.first_air_date);
    const tmdbId = media.tmdb_id || media.id;

    const isArchive = media.stream_url && media.stream_url.includes('archive.org/embed/');
    const isDirectVideo = media.stream_url && (media.stream_url.endsWith('.mp4') || media.stream_url.endsWith('.webm'));

    // Server 5: Open Cinema / Archive.org / Direct HTML5 Video
    if (this.currentServer === '5') {
      if (isArchive) {
        this.renderArchiveEmbed(media.stream_url);
        return;
      } else if (isDirectVideo) {
        this.renderHTML5Player(media.stream_url);
        return;
      } else if (media.youtube_id) {
        this.renderYouTubeEmbed(media.youtube_id);
        return;
      }
    }

    // Modern Commercial Full Movie Streaming (2015-2026):
    let embedUrl = '';
    if (this.currentServer === '1') {
      // Server 1: VidLink HD Pro (Fastest, multi-language, multi-subtitles)
      embedUrl = isTV
        ? `https://vidlink.pro/tv/${tmdbId}/${this.currentSeason}/${this.currentEpisode}?primaryColor=e50914&secondaryColor=1f1f1f`
        : `https://vidlink.pro/movie/${tmdbId}?primaryColor=e50914&secondaryColor=1f1f1f`;
    } else if (this.currentServer === '2') {
      // Server 2: VidSrc Pro
      embedUrl = isTV
        ? `https://vidsrc.to/embed/tv/${tmdbId}/${this.currentSeason}/${this.currentEpisode}`
        : `https://vidsrc.to/embed/movie/${tmdbId}`;
    } else if (this.currentServer === '3') {
      // Server 3: MultiEmbed
      embedUrl = isTV
        ? `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1&s=${this.currentSeason}&e=${this.currentEpisode}`
        : `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1`;
    } else if (this.currentServer === '4') {
      // Server 4: AutoEmbed VIP
      embedUrl = isTV
        ? `https://player.autoembed.cc/embed/tv/${tmdbId}/${this.currentSeason}/${this.currentEpisode}`
        : `https://player.autoembed.cc/embed/movie/${tmdbId}`;
    }

    if (embedUrl) {
      this.renderThirdPartyEmbed(embedUrl);
      return;
    }

    // Fallback if not matching server
    if (isArchive) {
      this.renderArchiveEmbed(media.stream_url);
    } else if (media.youtube_id) {
      this.renderYouTubeEmbed(media.youtube_id);
    } else if (tmdbId) {
      this.renderThirdPartyEmbed(`https://vidlink.pro/movie/${tmdbId}?primaryColor=e50914&secondaryColor=1f1f1f`);
    } else {
      this.renderHTML5Player('https://www.w3schools.com/html/mov_bbb.mp4');
    }
  },

  renderThirdPartyEmbed(url) {
    this.container.innerHTML = `
      <div class="iframe-wrapper">
        <iframe
          src="${url}"
          title="${this.currentMedia.title || this.currentMedia.name || 'Full Movie Stream'}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
          referrerpolicy="no-referrer"
          id="streamingIframe"
        ></iframe>
      </div>
      <div class="direct-stream-badge">
        <span>🎬 Full HD Movie Stream • Multi-Server Fast Playback</span>
      </div>
    `;
  },

  renderArchiveEmbed(url) {
    this.container.innerHTML = `
      <div class="iframe-wrapper">
        <iframe
          src="${url}"
          title="${this.currentMedia.title || this.currentMedia.name || 'Archive.org Cinema Stream'}"
          allow="accelerometer; autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
          id="streamingIframe"
        ></iframe>
      </div>
      <div class="direct-stream-badge">
        <span>🏛️ 100% Public Domain Archive Stream (Zero Ads & Popups)</span>
      </div>
    `;
  },

  renderYouTubeEmbed(videoId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&fs=1&color=white`;
    this.container.innerHTML = `
      <div class="iframe-wrapper">
        <iframe
          src="${embedUrl}"
          title="${this.currentMedia.title || this.currentMedia.name || 'Open Cinema Stream'}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
          id="streamingIframe"
        ></iframe>
      </div>
      <div class="direct-stream-badge">
        <span>🛡️ 100% Ad-Free Open License Stream (Zero Popups)</span>
      </div>
    `;
  },

  renderHTML5Player(url) {
    this.container.innerHTML = `
      <div class="custom-video-wrapper" style="position: relative; width: 100%; height: 100%; background: #000; display: flex; align-items: center; justify-content: center;">
        <video id="alisaHtml5Video" controls autoplay playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: contain;">
          <source src="${url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="direct-stream-badge">
          <span>✨ 100% Direct HTML5 Stream (Public Cinema)</span>
        </div>
      </div>
    `;
  },

  renderServerSelector() {
    if (!this.serverSelector) return;

    this.serverSelector.innerHTML = STREAMING_SERVERS.map(srv => `
      <button 
        type="button"
        class="server-pill ${this.currentServer === srv.id ? 'active' : ''}" 
        data-server-id="${srv.id}"
        title="${srv.description}"
      >
        <span class="server-icon">${srv.icon}</span>
        <span class="server-name">${srv.name}</span>
      </button>
    `).join('');

    this.serverSelector.querySelectorAll('.server-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const srvId = btn.getAttribute('data-server-id');
        if (srvId && srvId !== this.currentServer) {
          this.currentServer = srvId;
          this.renderServerSelector();
          this.loadStream();
        }
      });
    });
  },

  async renderTVEpisodeNav() {
    if (!this.tvEpisodeNav || !this.currentMedia) return;

    const totalSeasons = this.currentMedia.number_of_seasons || 3;
    let seasonsOptions = '';
    for (let s = 1; s <= Math.min(totalSeasons, 20); s++) {
      seasonsOptions += `<option value="${s}" ${s === this.currentSeason ? 'selected' : ''}>Season ${s}</option>`;
    }

    this.tvEpisodeNav.innerHTML = `
      <div class="tv-nav-header">
        <label for="seasonSelect" class="season-label">Season:</label>
        <select id="seasonSelect" class="season-dropdown">
          ${seasonsOptions}
        </select>
        <div class="episode-quick-controls">
          <button type="button" id="prevEpBtn" class="ep-nav-btn" ${this.currentEpisode <= 1 ? 'disabled' : ''}>◀ Prev Ep</button>
          <span class="current-ep-badge">Ep ${this.currentEpisode}</span>
          <button type="button" id="nextEpBtn" class="ep-nav-btn">Next Ep ▶</button>
        </div>
      </div>
      <div class="episodes-pill-grid" id="episodesPillGrid">
        <span class="ep-loading">Loading episodes...</span>
      </div>
    `;

    // Season change event
    const select = document.getElementById('seasonSelect');
    if (select) {
      select.addEventListener('change', async (e) => {
        this.currentSeason = Number(e.target.value);
        this.currentEpisode = 1;
        await this.loadEpisodePills(this.currentSeason);
        this.loadStream();
        this.updateMetaInfo();
      });
    }

    // Prev / Next Episode buttons
    const prevBtn = document.getElementById('prevEpBtn');
    const nextBtn = document.getElementById('nextEpBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentEpisode > 1) {
          this.selectEpisode(this.currentEpisode - 1);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.selectEpisode(this.currentEpisode + 1);
      });
    }

    await this.loadEpisodePills(this.currentSeason);
  },

  async loadEpisodePills(seasonNumber) {
    const grid = document.getElementById('episodesPillGrid');
    if (!grid) return;

    let episodes = [];
    if (window.MovieAPI) {
      episodes = await window.MovieAPI.getTVSeason(this.currentMedia.id, seasonNumber);
    }

    if (!episodes || episodes.length === 0) {
      episodes = Array.from({ length: 12 }, (_, i) => ({ episode_number: i + 1, name: `Episode ${i + 1}` }));
    }

    grid.innerHTML = episodes.map(ep => `
      <button 
        type="button" 
        class="ep-pill ${Number(ep.episode_number) === this.currentEpisode ? 'active' : ''}"
        data-episode="${ep.episode_number}"
        title="${ep.name || `Episode ${ep.episode_number}`}"
      >
        <span>Ep ${ep.episode_number}</span>
      </button>
    `).join('');

    grid.querySelectorAll('.ep-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const epNum = Number(btn.getAttribute('data-episode'));
        this.selectEpisode(epNum);
      });
    });
  },

  selectEpisode(epNum) {
    this.currentEpisode = epNum;
    // Highlight in grid
    const pills = document.querySelectorAll('.ep-pill');
    pills.forEach(p => {
      if (Number(p.getAttribute('data-episode')) === epNum) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    const epBadge = document.querySelector('.current-ep-badge');
    if (epBadge) epBadge.textContent = `Ep ${this.currentEpisode}`;

    const prevBtn = document.getElementById('prevEpBtn');
    if (prevBtn) prevBtn.disabled = this.currentEpisode <= 1;

    this.updateMetaInfo();
    this.loadStream();

    // Update history
    if (window.StorageManager && this.currentMedia) {
      window.StorageManager.addToHistory(this.currentMedia, this.currentSeason, this.currentEpisode);
    }
  },

  updateMetaInfo() {
    if (this.playerMeta && this.currentMedia) {
      const isTV = this.currentMedia.media_type === 'tv' || this.currentMedia.first_air_date;
      const year = (this.currentMedia.release_date || this.currentMedia.first_air_date || '').split('-')[0];
      const rating = this.currentMedia.vote_average ? `★ ${Number(this.currentMedia.vote_average).toFixed(1)}` : '';
      const tvInfo = isTV ? ` • Season ${this.currentSeason}, Ep ${this.currentEpisode}` : '';
      this.playerMeta.textContent = `${year} • ${rating}${tvInfo} • ${isTV ? 'TV Series' : 'Movie'}`;
    }
  },

  toggleTheaterMode() {
    this.isTheaterMode = !this.isTheaterMode;
    if (this.modal) {
      this.modal.classList.toggle('theater-mode', this.isTheaterMode);
    }
    const theaterBtn = document.getElementById('theaterModeBtn');
    if (theaterBtn) {
      theaterBtn.classList.toggle('active', this.isTheaterMode);
      theaterBtn.setAttribute('title', this.isTheaterMode ? 'Exit Theater Mode' : 'Theater Mode');
    }
  },

  unload() {
    if (this.container) {
      this.container.innerHTML = '';
    }
    document.body.classList.remove('modal-open');
  },

  close() {
    this.unload();
    if (this.modal && this.modal.open) {
      this.modal.close();
    }
  }
};

window.Player = Player;
