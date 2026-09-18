/**
 * Alisa Movies - Multi-Server Streaming Video Player
 * Supports VidLink, AutoEmbed, VidSrc, SuperEmbed, and Custom HTML5 Player
 */

const STREAMING_SERVERS = [
  { id: '1', name: 'Server 1 (VidLink HD)', icon: '⚡' },
  { id: '2', name: 'Server 2 (AutoEmbed Fast)', icon: '🚀' },
  { id: '3', name: 'Server 3 (VidSrc Multi)', icon: '🌐' },
  { id: '4', name: 'Server 4 (SuperEmbed Global)', icon: '✨' },
  { id: '5', name: 'Server 5 (Embed.su Mirror)', icon: '🛡️' }
];

const Player = {
  currentMedia: null,
  currentSeason: 1,
  currentEpisode: 1,
  currentServer: '1',
  isTheaterMode: false,
  adShieldEnabled: false,

  init() {
    this.modal = document.getElementById('playerModal');
    this.container = document.getElementById('playerContainer');
    this.serverSelector = document.getElementById('serverSelector');
    this.tvEpisodeNav = document.getElementById('tvEpisodeNav');
    this.playerTitle = document.getElementById('playerTitle');
    this.playerMeta = document.getElementById('playerMeta');
    this.ambientGlow = document.getElementById('playerAmbientGlow');

    // Load preferred server
    const prefs = window.StorageManager ? window.StorageManager.getPreferences() : {};
    this.currentServer = prefs.defaultServer || '1';

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

    // Stop playback when modal closes (clears iframe to stop audio)
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

  getServerUrl(server, media, season = 1, episode = 1) {
    const isTV = media.media_type === 'tv' || media.first_air_date;
    const id = media.id;
    const imdb = media.imdb_id || '';

    switch (server) {
      case '1': // VidLink HD
        return isTV
          ? `https://vidlink.pro/tv/${id}/${season}/${episode}?primaryColor=00f2fe&autoplay=false`
          : `https://vidlink.pro/movie/${id}?primaryColor=00f2fe&autoplay=false`;
      case '2': // AutoEmbed
        return isTV
          ? `https://player.autoembed.cc/embed/tv/${id}/${season}/${episode}`
          : `https://player.autoembed.cc/embed/movie/${id}`;
      case '3': // VidSrc
        return isTV
          ? `https://vidsrc.to/embed/tv/${id}/${season}/${episode}`
          : `https://vidsrc.to/embed/movie/${id}`;
      case '4': // SuperEmbed
        return isTV
          ? `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`
          : `https://multiembed.mov/?video_id=${id}&tmdb=1`;
      case '5': // Embed.su
        return isTV
          ? `https://embed.su/embed/tv/${id}/${season}/${episode}`
          : `https://embed.su/embed/movie/${id}`;
      default:
        return `https://vidlink.pro/movie/${id}`;
    }
  },

  async open(media, season = 1, episode = 1) {
    this.currentMedia = media;
    this.currentSeason = Number(season) || 1;
    this.currentEpisode = Number(episode) || 1;

    // Update Titles and Metadata in player
    const title = media.title || media.name || 'Now Streaming';
    const isTV = media.media_type === 'tv' || media.first_air_date;
    
    if (this.playerTitle) {
      this.playerTitle.textContent = title;
    }
    
    if (this.playerMeta) {
      const year = (media.release_date || media.first_air_date || '').split('-')[0];
      const rating = media.vote_average ? `★ ${Number(media.vote_average).toFixed(1)}` : '';
      const tvInfo = isTV ? ` • Season ${this.currentSeason}, Ep ${this.currentEpisode}` : '';
      this.playerMeta.textContent = `${year} • ${rating}${tvInfo} • ${isTV ? 'TV Series' : 'Movie'}`;
    }

    // Set ambient glow backdrop color/image
    if (this.ambientGlow && (media.backdrop_path || media.poster_path)) {
      const imgUrl = window.MovieAPI ? window.MovieAPI.getImageUrl(media.backdrop_path || media.poster_path, 'w780') : '';
      this.ambientGlow.style.backgroundImage = `url("${imgUrl}")`;
    }

    // Record to Watch History
    if (window.StorageManager) {
      window.StorageManager.addToHistory(media, isTV ? this.currentSeason : null, isTV ? this.currentEpisode : null);
    }

    // Render Server Selector buttons
    this.renderServerSelector();

    // Render TV Season & Episode navigation if media is TV
    if (isTV && !media.is_public_domain) {
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

    // Check if media is direct stream (Public Domain / Open cinema)
    if (this.currentMedia.stream_url) {
      this.renderHTML5Player(this.currentMedia.stream_url);
      return;
    }

    // Build embed iframe
    const streamUrl = this.getServerUrl(
      this.currentServer,
      this.currentMedia,
      this.currentSeason,
      this.currentEpisode
    );

    // All ads allowed: when shield is disabled (default), no sandbox restriction is applied to iframe
    const sandboxAttr = this.adShieldEnabled 
      ? 'sandbox="allow-scripts allow-same-origin allow-forms allow-presentation"'
      : '';

    this.container.innerHTML = `
      <div class="iframe-wrapper">
        <iframe
          src="${streamUrl}"
          title="${this.currentMedia.title || this.currentMedia.name}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          ${sandboxAttr}
          referrerpolicy="origin"
          id="streamingIframe"
        ></iframe>
      </div>
    `;
  },

  renderHTML5Player(url) {
    this.container.innerHTML = `
      <div class="custom-video-wrapper">
        <video id="alisaHtml5Video" controls autoplay playsinline preload="metadata">
          <source src="${url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="direct-stream-badge">
          <span>✨ 100% Direct Stream (Public Cinema)</span>
        </div>
      </div>
    `;
  },

  renderServerSelector() {
    if (!this.serverSelector) return;

    if (this.currentMedia?.stream_url) {
      this.serverSelector.innerHTML = `
        <div class="server-pill active">
          <span>🎥 Direct High-Definition Stream</span>
        </div>
      `;
      return;
    }

    const serversHTML = STREAMING_SERVERS.map(srv => `
      <button 
        type="button"
        class="server-pill ${this.currentServer === srv.id ? 'active' : ''}" 
        data-server-id="${srv.id}"
      >
        <span class="server-icon">${srv.icon}</span>
        <span class="server-name">${srv.name}</span>
      </button>
    `).join('');

    const shieldHTML = `
      <button 
        type="button" 
        class="server-pill ${this.adShieldEnabled ? 'active' : ''}" 
        id="popunderShieldBtn"
        title="${this.adShieldEnabled ? 'Ad Shield is ON (sandbox active)' : 'All ads allowed. Click to block third-party popups'}"
        style="${this.adShieldEnabled ? 'background: #10b981; color: #fff; font-weight: 700;' : 'background: rgba(255,255,255,0.06); color: var(--text-secondary);'}"
      >
        <span>${this.adShieldEnabled ? '🛡️ Ad Shield: ON' : '📢 All Ads: ALLOWED'}</span>
      </button>
    `;

    this.serverSelector.innerHTML = serversHTML + shieldHTML;

    // Shield toggle listener
    const shieldBtn = document.getElementById('popunderShieldBtn');
    if (shieldBtn) {
      shieldBtn.addEventListener('click', () => {
        this.adShieldEnabled = !this.adShieldEnabled;
        this.renderServerSelector();
        this.loadStream();
      });
    }

    this.serverSelector.querySelectorAll('.server-pill[data-server-id]').forEach(btn => {
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
