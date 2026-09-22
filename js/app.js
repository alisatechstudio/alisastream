/**
 * Alisa Movies - Main Application Orchestrator
 * Controls UI State, Carousels, Search, Filters, Detail Views, and Modals
 */

const App = {
  currentTab: 'home',
  currentFilter: 'all',
  carouselTimer: null,
  carouselIndex: 0,
  carouselSlides: [],
  searchDebounceTimer: null,

  // All Movies Catalog Explorer & Pagination State
  catalogState: {
    active: false,
    category: 'all',
    genre: '',
    sortBy: 'popularity.desc',
    year: '',
    page: 1,
    items: [],
    isLoading: false,
    hasMore: true
  },

  async init() {
    this.applyUserPreferences();
    this.setupModalFallbacks();
    this.setupNavigation();
    this.setupSearch();
    this.setupFilterChips();
    this.setupRailNavigation();
    this.setupCatalogExplorerControls();
    this.setupLoadMoreControls();
    this.setupSettingsModal();
    this.setupGlobalShortcuts();
    this.setupCookieConsent();
    this.setupAdAutoRefresh();
    this.initDisplayBanners();

    // Initialize Player module
    if (window.Player) {
      window.Player.init();
    }

    // Hero Explore All Movies button
    const heroExploreBtn = document.getElementById('heroExploreAllBtn');
    if (heroExploreBtn) {
      heroExploreBtn.addEventListener('click', () => {
        this.switchTab('movies');
      });
    }

    // Skyscraper Banner Close Button (Left)
    const closeSkyscraperBtn = document.getElementById('closeSkyscraperBtn');
    const skyscraperAd = document.getElementById('skyscraperAdLeft');
    if (closeSkyscraperBtn && skyscraperAd) {
      closeSkyscraperBtn.addEventListener('click', () => {
        skyscraperAd.style.display = 'none';
      });
    }

    // Load Initial Data
    await this.loadHeroSpotlight();
    await this.loadHomeRails();
    this.updateWatchlistBadge();

    // Listen for storage events
    window.addEventListener('alisa:watchlist-updated', () => {
      this.updateWatchlistBadge();
      this.refreshWatchlistSection();
      if (this.currentTab === 'watchlist') {
        this.showWatchlistView();
      }
    });

    window.addEventListener('alisa:history-updated', () => {
      this.refreshHistorySection();
    });

    // Handle initial URL hash routing
    this.handleHashRoute();
    window.addEventListener('hashchange', () => this.handleHashRoute());
  },

  // --- PREFERENCES & THEMING ---
  applyUserPreferences() {
    const prefs = window.StorageManager.getPreferences();
    if (prefs.themeAccent) {
      document.documentElement.setAttribute('data-theme-accent', prefs.themeAccent);
      // Highlight active accent button
      const activeBtn = document.querySelector(`.accent-choice[data-accent="${prefs.themeAccent}"]`);
      if (activeBtn) {
        document.querySelectorAll('.accent-choice').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
      }
    }
  },

  // --- LIGHT DISMISS MODAL FALLBACK FOR ALL DIALOGS ---
  setupModalFallbacks() {
    const modals = document.querySelectorAll('dialog.alisa-modal');
    modals.forEach(dialog => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener('click', (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isDialogContent) {
            dialog.close();
          }
        });
      }
    });

    // Close detail modal btn & close event
    const detailModal = document.getElementById('detailModal');
    if (detailModal) {
      detailModal.addEventListener('close', () => {
        this.resetDefaultSEO();
      });
    }

    const closeDetail = document.getElementById('closeDetailBtn');
    if (closeDetail) {
      closeDetail.addEventListener('click', () => {
        if (detailModal) detailModal.close();
      });
    }

    // Close trailer modal btn
    const closeTrailer = document.getElementById('closeTrailerBtn');
    if (closeTrailer) {
      closeTrailer.addEventListener('click', () => {
        const d = document.getElementById('trailerModal');
        const container = document.getElementById('trailerContainer');
        if (container) container.innerHTML = '';
        if (d) d.close();
      });
    }

    const trailerModal = document.getElementById('trailerModal');
    if (trailerModal) {
      trailerModal.addEventListener('close', () => {
        const container = document.getElementById('trailerContainer');
        if (container) container.innerHTML = '';
      });
    }
  },

  // --- GDPR / GOOGLE CONSENT MODE COOKIE BANNER ---
  setupCookieConsent() {
    const banner = document.getElementById('cookieConsentBanner');
    const acceptBtn = document.getElementById('cookieAcceptBtn');
    const declineBtn = document.getElementById('cookieDeclineBtn');
    if (!banner || !acceptBtn || !declineBtn) return;

    const consent = localStorage.getItem('alisa_cookie_consent');
    if (!consent) {
      // Display banner after short smooth delay
      setTimeout(() => {
        banner.style.display = 'flex';
      }, 1000);
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('alisa_cookie_consent', 'accepted');
      banner.style.display = 'none';
    });

    declineBtn.addEventListener('click', () => {
      localStorage.setItem('alisa_cookie_consent', 'declined');
      banner.style.display = 'none';
    });
  },

  // --- GLOBAL KEYBOARD SHORTCUTS ---
  setupGlobalShortcuts() {
    document.addEventListener('keydown', (e) => {
      // '/' to focus search input
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const search = document.getElementById('globalSearchInput');
        if (search) {
          search.focus();
          search.select();
        }
      }

      // Escape to dismiss search dropdown
      if (e.key === 'Escape') {
        const suggestions = document.getElementById('searchSuggestions');
        if (suggestions) suggestions.classList.remove('active');
      }
    });
  },

  // --- HERO SPOTLIGHT CAROUSEL ---
  async loadHeroSpotlight() {
    const track = document.getElementById('heroSliderTrack');
    const indicators = document.getElementById('heroIndicators');
    if (!track) return;

    let items = await window.MovieAPI.getTrending('week');
    if (!items || items.length === 0) return;

    // Pick top 5 with rich backdrops
    this.carouselSlides = items.slice(0, 5);

    track.innerHTML = this.carouselSlides.map((item, idx) => {
      const title = item.title || item.name;
      const backdrop = window.MovieAPI.getImageUrl(item.backdrop_path, 'w1280');
      const year = (item.release_date || item.first_air_date || '').split('-')[0];
      const rating = item.vote_average ? Number(item.vote_average).toFixed(1) : '8.5';
      const isTV = item.media_type === 'tv' || item.first_air_date;

      return `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${backdrop}');" data-slide-index="${idx}">
          <div class="hero-backdrop-gradient"></div>
          <div class="hero-content">
            <div class="hero-badges">
              <span class="spotlight-pill">FEATURED SPOTLIGHT</span>
              <span class="quality-pill">4K ULTRA HD</span>
              <span class="quality-pill">${isTV ? 'TV SERIES' : 'MOVIE'}</span>
            </div>
            <h1 class="hero-title">${title}</h1>
            <div class="hero-meta">
              <span class="hero-rating">★ ${rating}</span>
              <span>${year}</span>
              <span>Worldwide Audio & Subs</span>
            </div>
            <p class="hero-overview">${item.overview || 'Stream this cinematic masterpiece worldwide in high definition.'}</p>
            <div class="hero-actions">
              <button type="button" class="btn-primary hero-play-btn" data-id="${item.id}" data-type="${isTV ? 'tv' : 'movie'}">
                <span>▶ Watch Now</span>
              </button>
              <button type="button" class="btn-secondary hero-info-btn" data-id="${item.id}" data-type="${isTV ? 'tv' : 'movie'}">
                <span>ℹ Details</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (indicators) {
      indicators.innerHTML = this.carouselSlides.map((_, idx) => `
        <button type="button" class="hero-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
      `).join('');

      indicators.querySelectorAll('.hero-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = Number(dot.getAttribute('data-index'));
          this.goToSlide(idx);
        });
      });
    }

    // Attach Play & Info actions
    track.querySelectorAll('.hero-play-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const type = btn.getAttribute('data-type');
        const media = this.carouselSlides.find(s => String(s.id) === String(id));
        if (media) window.Player.open(media);
      });
    });

    track.querySelectorAll('.hero-info-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const type = btn.getAttribute('data-type');
        this.openDetail(id, type);
      });
    });

    // Start Auto rotation
    this.startCarouselTimer();
  },

  startCarouselTimer() {
    if (this.carouselTimer) clearInterval(this.carouselTimer);
    this.carouselTimer = setInterval(() => {
      if (!this.carouselSlides || this.carouselSlides.length === 0) return;
      this.carouselIndex = (this.carouselIndex + 1) % this.carouselSlides.length;
      this.goToSlide(this.carouselIndex);
    }, 6500);
  },

  goToSlide(index) {
    this.carouselIndex = index;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  },

  // --- HOME CONTENT RAILS ---
  async loadHomeRails() {
    this.refreshHistorySection();

    // 1. Trending Worldwide (Batch 40 titles)
    window.MovieAPI.getTrending('day')
      .then(items => this.renderRail('trendingRail', items))
      .catch(e => console.warn('Trending rail error:', e));

    // 2. Now Playing in Theaters (Batch 40 titles)
    window.MovieAPI.getBatchMovies('now_playing', 2)
      .then(items => this.renderRail('nowPlayingRail', items))
      .catch(e => console.warn('Now playing rail error:', e));

    // 3. Popular Movies Worldwide (Batch 40 titles)
    window.MovieAPI.getBatchMovies('popular', 2)
      .then(items => this.renderRail('popularMoviesRail', items))
      .catch(e => console.warn('Popular movies rail error:', e));

    // 4. Top Rated Masterpieces (Batch 40 titles)
    window.MovieAPI.getBatchMovies('top_rated', 2)
      .then(items => this.renderRail('topRatedRail', items))
      .catch(e => console.warn('Top rated rail error:', e));

    // 5. Upcoming Blockbusters (Batch 40 titles)
    window.MovieAPI.getBatchMovies('upcoming', 2)
      .then(items => this.renderRail('upcomingRail', items))
      .catch(e => console.warn('Upcoming rail error:', e));

    // 6. Popular TV Series (Batch 40 titles)
    window.MovieAPI.getBatchTV('popular', 2)
      .then(items => this.renderRail('popularTVRail', items))
      .catch(e => console.warn('TV rail error:', e));

    // 7. Public Cinema & Open Movies (100% Guaranteed Direct Streaming)
    const publicCinema = window.MovieAPI.getPublicCinema();
    this.renderRail('publicCinemaRail', publicCinema);

    // 8. Watchlist Rail
    this.refreshWatchlistSection();
  },

  renderRail(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!items || items.length === 0) {
      container.innerHTML = `<p style="padding: 1rem; color: var(--text-muted);">No titles found.</p>`;
      return;
    }

    container.innerHTML = items.map(item => this.createCardHTML(item)).join('');
    this.attachCardEventListeners(container);
  },

  createCardHTML(item) {
    const title = item.title || item.name;
    const poster = window.MovieAPI.getImageUrl(item.poster_path, 'w500');
    const year = (item.release_date || item.first_air_date || '').split('-')[0];
    const rating = item.vote_average ? Number(item.vote_average).toFixed(1) : '8.0';
    const isTV = item.media_type === 'tv' || item.first_air_date;
    const isPublic = item.is_public_domain;
    const inWatchlist = window.StorageManager.isInWatchlist(item.id);

    return `
      <article class="media-card" data-id="${item.id}" data-type="${isTV ? 'tv' : 'movie'}">
        <div class="card-poster-wrapper">
          <img src="${poster}" alt="${title}" class="card-poster" loading="lazy" />
          <div class="card-badges">
            <span class="badge-rating">★ ${rating}</span>
            <span class="badge-type">${isPublic ? 'FREE STREAM' : (isTV ? 'TV' : 'MOVIE')}</span>
          </div>
          <div class="card-hover-overlay">
            <div class="card-play-icon">▶</div>
          </div>
        </div>
        <div class="card-info">
          <h3 class="card-title" title="${title}">${title}</h3>
          <div class="card-meta">
            <span>${year || 'Recent'}</span>
            <button 
              type="button" 
              class="card-bookmark-btn ${inWatchlist ? 'active' : ''}" 
              data-id="${item.id}" 
              title="${inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}"
              aria-label="Bookmark"
            >
              ${inWatchlist ? '★' : '☆'}
            </button>
          </div>
        </div>
      </article>
    `;
  },

  attachCardEventListeners(container) {
    // Card click -> open detail or player
    container.querySelectorAll('.media-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent if user clicked bookmark button
        if (e.target.closest('.card-bookmark-btn')) return;
        const id = card.getAttribute('data-id');
        const type = card.getAttribute('data-type');
        this.openDetail(id, type);
      });
    });

    // Bookmark button click
    container.querySelectorAll('.card-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const card = btn.closest('.media-card');
        const type = card?.getAttribute('data-type') || 'movie';
        
        const media = await window.MovieAPI.getDetails(id, type);
        if (media) {
          const added = window.StorageManager.toggleWatchlist(media);
          btn.classList.toggle('active', added);
          btn.textContent = added ? '★' : '☆';
          btn.title = added ? 'Remove from Watchlist' : 'Add to Watchlist';
        }
      });
    });
  },

  // --- RAIL NAVIGATION BUTTONS (PREV / NEXT) ---
  setupRailNavigation() {
    document.querySelectorAll('.rail-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const rail = document.getElementById(targetId);
        if (!rail) return;
        const scrollAmount = rail.clientWidth * 0.75;
        if (btn.classList.contains('prev')) {
          rail.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          rail.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      });
    });

    // "See All" Buttons
    document.querySelectorAll('[data-see-all]').forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-see-all');
        this.switchTab(category);
      });
    });
  },

  // --- HISTORY & WATCHLIST RAILS REFRESH ---
  refreshHistorySection() {
    const section = document.getElementById('historySection');
    const rail = document.getElementById('historyRail');
    if (!section || !rail) return;

    const history = window.StorageManager.getHistory();
    if (history.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    this.renderRail('historyRail', history);

    const clearBtn = document.getElementById('clearHistoryBtn');
    if (clearBtn) {
      clearBtn.onclick = () => {
        if (confirm('Clear your continue watching history?')) {
          window.StorageManager.clearHistory();
        }
      };
    }
  },

  refreshWatchlistSection() {
    const section = document.getElementById('watchlistSection');
    const rail = document.getElementById('watchlistRail');
    if (!section || !rail) return;

    const list = window.StorageManager.getWatchlist();
    if (list.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    this.renderRail('watchlistRail', list);
  },

  updateWatchlistBadge() {
    const badge = document.getElementById('watchlistCountBadge');
    if (badge) {
      const count = window.StorageManager.getWatchlist().length;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
  },

  // --- NAVIGATION TABS ---
  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Footer nav links
    document.querySelectorAll('.footer-links [data-tab]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        if (tab) this.switchTab(tab);
      });
    });

    // Footer genre buttons
    document.querySelectorAll('.footer-links [data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter');
        const genreMap = {
          action: '28',
          scifi: '878',
          anime: '16',
          comedy: '35',
          horror: '27'
        };
        if (genreMap[filter]) {
          this.openMovieCatalog({ genre: genreMap[filter] });
        }
      });
    });

    // Brand click -> Home
    const brand = document.getElementById('brandHomeBtn');
    if (brand) {
      brand.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab('home');
      });
    }

    // Dynamic view close button
    const closeDynamicBtn = document.getElementById('closeDynamicViewBtn');
    if (closeDynamicBtn) {
      closeDynamicBtn.addEventListener('click', () => {
        this.switchTab('home');
      });
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.main-nav');
    if (mobileBtn && nav) {
      mobileBtn.addEventListener('click', () => {
        const isFlex = nav.style.display === 'flex';
        nav.style.display = isFlex ? 'none' : 'flex';
        if (!isFlex) {
          nav.style.flexDirection = 'column';
          nav.style.position = 'absolute';
          nav.style.top = '100%';
          nav.style.left = '0';
          nav.style.width = '100%';
          nav.style.background = 'var(--bg-surface)';
          nav.style.padding = '1rem';
          nav.style.borderBottom = '1px solid var(--border-subtle)';
        }
      });
    }
  },

  // --- CATALOG EXPLORER & FILTER CONTROLS ---
  setupCatalogExplorerControls() {
    const catSelect = document.getElementById('catalogCategorySelect');
    const genreSelect = document.getElementById('catalogGenreSelect');
    const sortSelect = document.getElementById('catalogSortSelect');
    const yearSelect = document.getElementById('catalogYearSelect');

    const handleFilterChange = () => {
      if (!this.catalogState.active) return;
      this.catalogState.category = catSelect ? catSelect.value : 'all';
      this.catalogState.genre = genreSelect ? genreSelect.value : '';
      this.catalogState.sortBy = sortSelect ? sortSelect.value : 'popularity.desc';
      this.catalogState.year = yearSelect ? yearSelect.value : '';
      this.catalogState.page = 1;
      this.catalogState.items = [];
      this.catalogState.hasMore = true;
      this.fetchAndRenderCatalogPage(false);
    };

    if (catSelect) catSelect.addEventListener('change', handleFilterChange);
    if (genreSelect) genreSelect.addEventListener('change', handleFilterChange);
    if (sortSelect) sortSelect.addEventListener('change', handleFilterChange);
    if (yearSelect) yearSelect.addEventListener('change', handleFilterChange);
  },

  // --- PAGINATION & LOAD MORE BUTTONS ---
  setupLoadMoreControls() {
    const loadMoreBtn = document.getElementById('loadMoreMoviesBtn');
    const loadBatchBtn = document.getElementById('loadBatchMoviesBtn');

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        this.fetchNextCatalogPages(1);
      });
    }

    if (loadBatchBtn) {
      loadBatchBtn.addEventListener('click', () => {
        this.fetchNextCatalogPages(2);
      });
    }
  },

  // Open Full Movie Catalog Explorer
  async openMovieCatalog(options = {}) {
    this.catalogState.active = true;
    this.catalogState.category = options.category || 'all';
    this.catalogState.genre = options.genre || '';
    this.catalogState.sortBy = options.sortBy || 'popularity.desc';
    this.catalogState.year = options.year || '';
    this.catalogState.page = 1;
    this.catalogState.items = [];
    this.catalogState.hasMore = true;

    // Update select dropdowns to match
    const catSelect = document.getElementById('catalogCategorySelect');
    const genreSelect = document.getElementById('catalogGenreSelect');
    const sortSelect = document.getElementById('catalogSortSelect');
    const yearSelect = document.getElementById('catalogYearSelect');
    const toolbar = document.getElementById('catalogToolbar');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    if (catSelect) catSelect.value = this.catalogState.category;
    if (genreSelect) genreSelect.value = this.catalogState.genre;
    if (sortSelect) sortSelect.value = this.catalogState.sortBy;
    if (yearSelect) yearSelect.value = this.catalogState.year;

    if (toolbar) toolbar.style.display = 'flex';
    if (loadMoreContainer) loadMoreContainer.style.display = 'flex';

    // Show dynamic section and hide home rails
    const dynamicSection = document.getElementById('dynamicViewSection');
    const railsContainer = document.getElementById('homeRailsContainer');
    const heroSpotlight = document.getElementById('heroSpotlight');
    const subEl = document.getElementById('dynamicViewSubtitle');
    const titleEl = document.getElementById('dynamicViewTitle');

    if (railsContainer) railsContainer.style.display = 'none';
    if (dynamicSection) dynamicSection.style.display = 'block';

    if (subEl) subEl.textContent = 'EXPLORE COLLECTION';
    if (titleEl) {
      const titlesMap = {
        all: 'All Movies (2015–2026)',
        popular: 'Popular Blockbusters',
        top_rated: 'Top Rated Masterpieces',
        now_playing: 'Now Playing in Theaters',
        upcoming: 'Upcoming Blockbusters',
        rapidapi: 'IMDb Top Movies',
        public: 'Featured Spotlight Movies'
      };
      titleEl.textContent = titlesMap[this.catalogState.category] || 'Movie Catalog';
    }

    window.scrollTo({ top: heroSpotlight?.offsetHeight || 300, behavior: 'smooth' });

    await this.fetchAndRenderCatalogPage(false);
  },

  async fetchAndRenderCatalogPage(append = false) {
    const grid = document.getElementById('dynamicMediaGrid');
    const countPill = document.getElementById('catalogCountPill');
    const loadMoreBtn = document.getElementById('loadMoreMoviesBtn');
    if (!grid) return;

    if (!append) {
      grid.innerHTML = Array.from({ length: 12 }, () => '<div class="skeleton-card"></div>').join('');
    }

    this.catalogState.isLoading = true;

    try {
      const newItems = await window.MovieAPI.getAllMovies({
        page: this.catalogState.page,
        sortBy: this.catalogState.sortBy,
        genre: this.catalogState.genre || null,
        year: this.catalogState.year || null,
        category: this.catalogState.category === 'all' ? null : this.catalogState.category
      });

      if (!newItems || newItems.length === 0) {
        if (!append) {
          grid.innerHTML = `<p style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">No movies match your filter criteria.</p>`;
        }
        this.catalogState.hasMore = false;
        if (loadMoreBtn) loadMoreBtn.disabled = true;
        return;
      }

      if (append) {
        this.catalogState.items = [...this.catalogState.items, ...newItems];
        const newHtml = newItems.map(item => this.createCardHTML(item)).join('');
        grid.insertAdjacentHTML('beforeend', newHtml);
      } else {
        this.catalogState.items = newItems;
        grid.innerHTML = newItems.map(item => this.createCardHTML(item)).join('');
      }

      this.attachCardEventListeners(grid);

      if (countPill) {
        countPill.textContent = `Showing ${this.catalogState.items.length} Movies • Page ${this.catalogState.page}`;
      }

      if (loadMoreBtn) {
        loadMoreBtn.disabled = false;
      }
    } catch (err) {
      console.warn('Error fetching catalog page:', err);
    } finally {
      this.catalogState.isLoading = false;
    }
  },

  async fetchNextCatalogPages(pagesCount = 1) {
    if (this.catalogState.isLoading || !this.catalogState.hasMore) return;

    const loadMoreBtn = document.getElementById('loadMoreMoviesBtn');
    const textSpan = loadMoreBtn?.querySelector('.load-more-text');
    const spinnerSpan = loadMoreBtn?.querySelector('.load-more-spinner');

    if (textSpan) textSpan.style.display = 'none';
    if (spinnerSpan) spinnerSpan.style.display = 'inline';
    if (loadMoreBtn) loadMoreBtn.disabled = true;

    for (let p = 0; p < pagesCount; p++) {
      this.catalogState.page += 1;
      await this.fetchAndRenderCatalogPage(true);
    }

    if (textSpan) textSpan.style.display = 'inline';
    if (spinnerSpan) spinnerSpan.style.display = 'none';
    if (loadMoreBtn) loadMoreBtn.disabled = false;
  },

  switchTab(tab) {
    this.currentTab = tab;

    // Update active state in nav
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    // Close mobile menu if open
    const nav = document.querySelector('.main-nav');
    if (window.innerWidth <= 768 && nav) {
      nav.style.display = 'none';
    }

    if (tab === 'home') {
      this.hideDynamicView();
      this.resetDefaultSEO();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Switch to dynamic grid view
    switch (tab) {
      case 'movies':
        document.title = 'Watch Latest Movies Online Free in HD — Alisa Movies';
        this.openMovieCatalog({ category: 'all' });
        break;
      case 'now_playing':
        document.title = 'Latest Cinema Releases & In Theaters Free — Alisa Movies';
        this.openMovieCatalog({ category: 'now_playing' });
        break;
      case 'top_rated':
        document.title = 'Latest Top Rated Movies & Masterpieces Free — Alisa Movies';
        this.openMovieCatalog({ category: 'top_rated' });
        break;
      case 'upcoming':
        document.title = 'Latest Upcoming Movies & New Releases Free — Alisa Movies';
        this.openMovieCatalog({ category: 'upcoming' });
        break;
      case 'rapidapi':
        document.title = 'Latest IMDb Top Rated Movies Free — Alisa Movies';
        this.openMovieCatalog({ category: 'rapidapi' });
        break;
      case 'tv':
        document.title = 'Stream Latest TV Shows & Series Online Free in HD — Alisa Movies';
        this.showDynamicView('SERIES & EPISODES', 'Top TV Shows', () => window.MovieAPI.getBatchTV('popular', 2));
        break;
      case 'worldwide':
        document.title = 'Latest Worldwide Cinema & Global Blockbusters Free — Alisa Movies';
        this.showDynamicView('GLOBAL CINEMA', 'Worldwide Blockbusters', () => window.MovieAPI.getWorldwide('all'));
        break;
      case 'public':
        document.title = 'Watch Free Streaming Cinema Online — Alisa Movies';
        this.openMovieCatalog({ category: 'public' });
        break;
      case 'watchlist':
        document.title = 'My Saved Free Movies Watchlist — Alisa Movies';
        this.showWatchlistView();
        break;
      case 'trending':
        document.title = 'Latest Trending Movies & Shows Free Online — Alisa Movies';
        this.showDynamicView('CHARTS', 'Trending Now Worldwide', () => window.MovieAPI.getTrending('day'));
        break;
      default:
        this.hideDynamicView();
    }
  },

  async showDynamicView(subtitle, title, fetchFn) {
    this.catalogState.active = false;
    const toolbar = document.getElementById('catalogToolbar');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (toolbar) toolbar.style.display = 'none';
    if (loadMoreContainer) loadMoreContainer.style.display = 'none';

    const dynamicSection = document.getElementById('dynamicViewSection');
    const railsContainer = document.getElementById('homeRailsContainer');
    const heroSpotlight = document.getElementById('heroSpotlight');
    const subEl = document.getElementById('dynamicViewSubtitle');
    const titleEl = document.getElementById('dynamicViewTitle');
    const grid = document.getElementById('dynamicMediaGrid');

    if (!dynamicSection || !railsContainer || !grid) return;

    railsContainer.style.display = 'none';
    dynamicSection.style.display = 'block';

    if (subEl) subEl.textContent = subtitle;
    if (titleEl) titleEl.textContent = title;

    grid.innerHTML = Array.from({ length: 12 }, () => '<div class="skeleton-card"></div>').join('');
    window.scrollTo({ top: heroSpotlight?.offsetHeight || 300, behavior: 'smooth' });

    const items = await fetchFn();
    if (!items || items.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">No movies or shows found.</p>`;
      return;
    }

    grid.innerHTML = items.map(item => this.createCardHTML(item)).join('');
    this.attachCardEventListeners(grid);
  },

  showWatchlistView() {
    this.showDynamicView('SAVED TITLES', 'My Watchlist', () => {
      return window.StorageManager.getWatchlist();
    });
  },

  hideDynamicView() {
    this.catalogState.active = false;
    const dynamicSection = document.getElementById('dynamicViewSection');
    const railsContainer = document.getElementById('homeRailsContainer');
    const toolbar = document.getElementById('catalogToolbar');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    if (toolbar) toolbar.style.display = 'none';
    if (loadMoreContainer) loadMoreContainer.style.display = 'none';
    if (dynamicSection) dynamicSection.style.display = 'none';
    if (railsContainer) railsContainer.style.display = 'block';
  },

  // --- FILTER CHIPS BAR ---
  setupFilterChips() {
    const chipsBar = document.getElementById('filterChipsBar');
    if (!chipsBar) return;

    chipsBar.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', async () => {
        chipsBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.getAttribute('data-filter');
        const genreId = chip.getAttribute('data-genre');

        if (filter === 'all') {
          this.switchTab('home');
          return;
        }

        if (filter === 'now_playing') {
          this.openMovieCatalog({ category: 'now_playing' });
          return;
        }

        if (filter === 'upcoming') {
          this.openMovieCatalog({ category: 'upcoming' });
          return;
        }

        if (genreId) {
          this.openMovieCatalog({ genre: genreId });
          return;
        }

        switch (filter) {
          case 'trending':
            this.showDynamicView('CHARTS', 'Trending Worldwide', () => window.MovieAPI.getTrending('day'));
            break;
          case 'top_rated':
            this.openMovieCatalog({ category: 'top_rated' });
            break;
          case 'hollywood':
            this.showDynamicView('US CINEMA', 'Hollywood Hits', () => window.MovieAPI.getWorldwide('hollywood'));
            break;
          case 'bollywood':
            this.showDynamicView('INDIAN CINEMA', 'Bollywood & South Asian', () => window.MovieAPI.getWorldwide('bollywood'));
            break;
          case 'anime':
            this.showDynamicView('JAPANESE ANIMATION', 'Anime Cinema & Series', () => window.MovieAPI.getWorldwide('anime'));
            break;
          case 'kdrama':
            this.showDynamicView('KOREAN WAVE', 'K-Drama & Korean Cinema', () => window.MovieAPI.getWorldwide('kdrama'));
            break;
          case 'public':
            this.openMovieCatalog({ category: 'public' });
            break;
        }
      });
    });
  },

  // --- LIVE SEARCH WITH DEBOUNCE ---
  setupSearch() {
    const input = document.getElementById('globalSearchInput');
    const suggestions = document.getElementById('searchSuggestions');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (!input || !suggestions) return;

    input.addEventListener('input', () => {
      const query = input.value.trim();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'block' : 'none';

      clearTimeout(this.searchDebounceTimer);
      if (query.length < 2) {
        suggestions.classList.remove('active');
        return;
      }

      this.searchDebounceTimer = setTimeout(async () => {
        const results = await window.MovieAPI.searchMulti(query);
        this.renderSearchSuggestions(results);
      }, 280);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query.length > 0) {
          suggestions.classList.remove('active');
          this.showDynamicView('SEARCH RESULTS', `Results for "${query}"`, () => window.MovieAPI.searchMulti(query));
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        suggestions.classList.remove('active');
        input.focus();
      });
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.classList.remove('active');
      }
    });
  },

  renderSearchSuggestions(results) {
    const suggestions = document.getElementById('searchSuggestions');
    if (!suggestions) return;

    if (!results || results.length === 0) {
      suggestions.innerHTML = `<div style="padding: 0.8rem; color: var(--text-muted); font-size: 0.85rem;">No results found.</div>`;
      suggestions.classList.add('active');
      return;
    }

    suggestions.innerHTML = results.slice(0, 6).map(item => {
      const title = item.title || item.name;
      const thumb = window.MovieAPI.getImageUrl(item.poster_path, 'w92');
      const year = (item.release_date || item.first_air_date || '').split('-')[0];
      const type = item.media_type === 'tv' ? 'TV' : 'Movie';

      return `
        <div class="suggestion-item" data-id="${item.id}" data-type="${item.media_type || 'movie'}">
          <img src="${thumb}" alt="${title}" class="suggestion-thumb" />
          <div class="suggestion-info">
            <div class="suggestion-title">${title}</div>
            <div class="suggestion-meta">
              <span>${year || 'Recent'}</span>
              <span>•</span>
              <span>${type}</span>
              <span>•</span>
              <span>★ ${item.vote_average ? Number(item.vote_average).toFixed(1) : '8.0'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    suggestions.classList.add('active');

    suggestions.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const type = item.getAttribute('data-type');
        suggestions.classList.remove('active');
        this.openDetail(id, type);
      });
    });
  },

  // --- MOVIE DETAIL MODAL ---
  async openDetail(id, type = 'movie') {
    const modal = document.getElementById('detailModal');
    const body = document.getElementById('detailModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--text-secondary);">
        <p>Loading cinema details...</p>
      </div>
    `;
    modal.showModal();

    const media = await window.MovieAPI.getDetails(id, type);
    if (!media) {
      body.innerHTML = `<p style="padding: 2rem; text-align: center;">Unable to load cinema details.</p>`;
      return;
    }

    // Update dynamic SEO & Schema.org Structured Data
    this.updateMediaSEO(media, type);

    const title = media.title || media.name;
    const backdrop = window.MovieAPI.getImageUrl(media.backdrop_path, 'w1280');
    const poster = window.MovieAPI.getImageUrl(media.poster_path, 'w500');
    const year = (media.release_date || media.first_air_date || '').split('-')[0];
    const rating = media.vote_average ? Number(media.vote_average).toFixed(1) : '8.0';
    const runtime = media.runtime ? `${media.runtime} min` : (media.number_of_seasons ? `${media.number_of_seasons} Seasons` : '');
    const genres = (media.genres || []).map(g => `<span class="genre-pill">${g.name}</span>`).join('');
    const inWatchlist = window.StorageManager.isInWatchlist(media.id);

    // Cast list
    const castHTML = (media.cast || []).slice(0, 8).map(c => `
      <div class="cast-card">
        <img src="${window.MovieAPI.getImageUrl(c.profile_path, 'w185')}" alt="${c.name}" class="cast-img" />
        <div class="cast-name">${c.name}</div>
        <div class="cast-char">${c.character || 'Actor'}</div>
      </div>
    `).join('');

    // OMDb Ratings badges (Rotten Tomatoes, Metacritic, IMDb votes)
    let omdbRatingsHTML = '';
    if (media.ratings && media.ratings.length > 0) {
      omdbRatingsHTML = `
        <div class="omdb-ratings-row">
          ${media.ratings.map(r => {
            let icon = '⭐';
            let cls = 'imdb';
            if (r.Source && r.Source.includes('Rotten Tomatoes')) { icon = '🍅'; cls = 'rotten-tomatoes'; }
            else if (r.Source && r.Source.includes('Metacritic')) { icon = 'Ⓜ️'; cls = 'metacritic'; }
            return `<span class="omdb-badge ${cls}" title="${r.Source}">${icon} ${r.Source}: <strong>${r.Value}</strong></span>`;
          }).join('')}
          ${media.imdb_votes ? `<span class="omdb-badge" title="Total IMDb Votes">👥 ${media.imdb_votes} votes</span>` : ''}
          ${media.rated ? `<span class="omdb-badge" title="Age Rating">🏷️ ${media.rated}</span>` : ''}
        </div>
      `;
    }

    // OMDb Crew details (Director, Writer, Lead Actors)
    let omdbCrewHTML = '';
    if (media.director || media.writer || media.actors) {
      omdbCrewHTML = `
        <div class="omdb-crew-grid">
          ${media.director ? `<div class="omdb-crew-item"><strong>Director</strong><span>${media.director}</span></div>` : ''}
          ${media.writer ? `<div class="omdb-crew-item"><strong>Writer</strong><span>${media.writer}</span></div>` : ''}
          ${media.actors ? `<div class="omdb-crew-item" style="grid-column: 1 / -1;"><strong>Starring</strong><span>${media.actors}</span></div>` : ''}
        </div>
      `;
    }

    let omdbAwardsHTML = '';
    if (media.awards) {
      omdbAwardsHTML = `
        <div class="omdb-awards-pill">
          <span>🏆 ${media.awards}</span>
        </div>
      `;
    }

    body.innerHTML = `
      <div class="detail-backdrop-banner" style="background-image: url('${backdrop}');">
        <div class="detail-backdrop-gradient"></div>
      </div>
      <div class="detail-content-inner">
        <div class="detail-poster-col">
          <img src="${poster}" alt="${title}" class="detail-poster-img" />
        </div>
        <div class="detail-info-col">
          <h2 class="detail-title">${title}</h2>
          ${media.tagline ? `<p class="detail-tagline">“${media.tagline}”</p>` : ''}
          <div class="hero-meta">
            <span class="hero-rating">★ ${rating}</span>
            <span>${year}</span>
            ${runtime ? `<span>${runtime}</span>` : ''}
            <span>${media.media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
          </div>
          ${omdbRatingsHTML}
          <div class="detail-genres">${genres}</div>
          ${omdbAwardsHTML}
          <p class="detail-overview">${media.overview || 'No synopsis available for this title.'}</p>
          ${omdbCrewHTML}
          <div class="hero-actions" style="margin-top: 1rem;">
            <button type="button" class="btn-primary" id="detailPlayNowBtn">
              <span>▶ Watch Now</span>
            </button>
            ${media.trailer_key ? `
              <button type="button" class="btn-secondary" id="detailWatchTrailerBtn">
                <span>🎬 Trailer</span>
              </button>
            ` : ''}
            <button type="button" class="btn-watchlist-toggle ${inWatchlist ? 'in-watchlist' : ''}" id="detailWatchlistToggleBtn" title="Watchlist">
              ${inWatchlist ? '★' : '☆'}
            </button>
          </div>
          ${castHTML ? `
            <div class="cast-carousel">
              <h4 class="cast-carousel-title">Top Cast</h4>
              <div class="cast-list">${castHTML}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Button actions in Detail modal
    const playBtn = document.getElementById('detailPlayNowBtn');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        modal.close();
        window.Player.open(media);
      });
    }

    const trailerBtn = document.getElementById('detailWatchTrailerBtn');
    if (trailerBtn && media.trailer_key) {
      trailerBtn.addEventListener('click', () => {
        this.openTrailer(media.trailer_key);
      });
    }

    const watchlistBtn = document.getElementById('detailWatchlistToggleBtn');
    if (watchlistBtn) {
      watchlistBtn.addEventListener('click', () => {
        const added = window.StorageManager.toggleWatchlist(media);
        watchlistBtn.classList.toggle('in-watchlist', added);
        watchlistBtn.textContent = added ? '★' : '☆';
      });
    }
  },

  // --- TRAILER MODAL ---
  openTrailer(youtubeKey) {
    const modal = document.getElementById('trailerModal');
    const container = document.getElementById('trailerContainer');
    if (!modal || !container || !youtubeKey) return;

    container.innerHTML = `
      <div class="iframe-wrapper">
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${youtubeKey}?autoplay=1&rel=0" 
          title="Official Trailer" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    `;
    modal.showModal();
  },

  // --- SETTINGS & THEME PICKER ---
  setupSettingsModal() {
    const openBtn = document.getElementById('openSettingsBtn');
    const modal = document.getElementById('settingsModal');
    const closeBtn = document.getElementById('closeSettingsBtn');

    if (!modal) return;

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        const prefs = window.StorageManager.getPreferences();
        const serverSelect = document.getElementById('defaultServerSelect');
        const tmdbInput = document.getElementById('customTmdbKeyInput');

        if (serverSelect) serverSelect.value = prefs.defaultServer || '1';
        if (tmdbInput) tmdbInput.value = prefs.tmdbApiKey === '4e44d9029b1270a757cddc766a1bcb63' ? '' : prefs.tmdbApiKey;

        modal.showModal();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.close());
    }

    // Accent picker
    document.querySelectorAll('.accent-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const accent = btn.getAttribute('data-accent');
        document.querySelectorAll('.accent-choice').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.documentElement.setAttribute('data-theme-accent', accent);
        window.StorageManager.savePreferences({ themeAccent: accent });
      });
    });

    // Default Server Select
    const serverSelect = document.getElementById('defaultServerSelect');
    if (serverSelect) {
      serverSelect.addEventListener('change', (e) => {
        window.StorageManager.savePreferences({ defaultServer: e.target.value });
      });
    }

    // Custom TMDB Key input
    const tmdbInput = document.getElementById('customTmdbKeyInput');
    if (tmdbInput) {
      tmdbInput.addEventListener('change', (e) => {
        const key = e.target.value.trim() || '4e44d9029b1270a757cddc766a1bcb63';
        window.StorageManager.savePreferences({ tmdbApiKey: key });
        // Refresh home data with new key
        this.loadHomeRails();
      });
    }

    // Clear History Button in settings
    const clearHistBtn = document.getElementById('settingsClearHistoryBtn');
    if (clearHistBtn) {
      clearHistBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your watch history and local cache?')) {
          window.StorageManager.clearHistory();
          alert('Watch history cleared successfully.');
          modal.close();
        }
      });
    }
  },

  // --- URL HASH ROUTING ---
  handleHashRoute() {
    const hash = window.location.hash;
    if (!hash) return;

    if (hash === '#watchlist') {
      this.switchTab('watchlist');
    } else if (hash.startsWith('#movie/')) {
      const id = hash.replace('#movie/', '');
      this.openDetail(id, 'movie');
    } else if (hash.startsWith('#tv/')) {
      const id = hash.replace('#tv/', '');
      this.openDetail(id, 'tv');
    } else if (hash.startsWith('#search=')) {
      const query = decodeURIComponent(hash.replace('#search=', ''));
      this.showDynamicView('SEARCH RESULTS', `Results for "${query}"`, () => window.MovieAPI.searchMulti(query));
    }
  },

  // --- DYNAMIC SPA SEO & STRUCTURED DATA ENGINE ---
  defaultSEO: {
    title: 'Alisa Movies — Watch Latest Movies & TV Shows Free Online in 4K HD | Free Streaming',
    description: 'Watch the latest movies and trending TV shows 100% free online in crystal-clear 4K & 1080p HD on Alisa Movies (AlisaStream). Free movie streaming with zero subscription, latest cinema releases, and multi-language subtitles.',
    url: 'https://alisastream.site/',
    image: 'https://image.tmdb.org/t/p/w1280/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg'
  },

  updateMediaSEO(media, type = 'movie') {
    if (!media) return;
    const title = media.title || media.name || 'Title';
    const year = (media.release_date || media.first_air_date || '').split('-')[0];
    const typeLabel = type === 'tv' ? 'TV Series' : 'Movie';
    const yearStr = year ? ` (${year})` : '';
    const rating = media.vote_average ? Number(media.vote_average).toFixed(1) : '8.0';
    const seoTitle = `Watch ${title}${yearStr} Latest Full ${typeLabel} Free Online in HD | Alisa Movies`;
    const seoDesc = media.overview ? `${media.overview.slice(0, 150)}... Watch latest ${title} free online in 4K HD on Alisa Movies with no subscription.` : `Watch latest ${title} online 100% free in crystal-clear 4K & 1080p HD with multi-language subtitles on Alisa Movies.`;
    const poster = window.MovieAPI.getImageUrl(media.poster_path, 'w780') || this.defaultSEO.image;
    const deepLink = `https://alisastream.site/#${type}/${media.id}`;

    // Update document title & meta tags
    document.title = seoTitle;
    this.setMetaTag('name', 'description', seoDesc);
    this.setMetaTag('property', 'og:title', seoTitle);
    this.setMetaTag('property', 'og:description', seoDesc);
    this.setMetaTag('property', 'og:url', deepLink);
    this.setMetaTag('property', 'og:image', poster);
    this.setMetaTag('name', 'twitter:title', seoTitle);
    this.setMetaTag('name', 'twitter:description', seoDesc);
    this.setMetaTag('name', 'twitter:image', poster);

    // Dynamic Movie / TVSeries Schema.org injection
    let schemaEl = document.getElementById('dynamicMediaSchema');
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.type = 'application/ld+json';
      schemaEl.id = 'dynamicMediaSchema';
      document.head.appendChild(schemaEl);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": type === 'tv' ? "TVSeries" : "Movie",
      "name": title,
      "alternateName": media.original_title || media.original_name || title,
      "description": media.overview || seoDesc,
      "image": poster,
      "datePublished": media.release_date || media.first_air_date,
      "genre": (media.genres || []).map(g => g.name),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "bestRating": "10",
        "ratingCount": media.vote_count || 100
      },
      "potentialAction": {
        "@type": "WatchAction",
        "target": deepLink
      }
    };

    if (media.director) {
      schemaData.director = {
        "@type": "Person",
        "name": media.director
      };
    }

    if (media.cast && media.cast.length > 0) {
      schemaData.actor = media.cast.slice(0, 5).map(c => ({
        "@type": "Person",
        "name": c.name
      }));
    }

    schemaEl.textContent = JSON.stringify(schemaData, null, 2);

    // Update URL hash without reload for deep linking
    if (window.location.hash !== `#${type}/${media.id}`) {
      history.replaceState(null, '', `#${type}/${media.id}`);
    }
  },

  resetDefaultSEO() {
    document.title = this.defaultSEO.title;
    this.setMetaTag('name', 'description', this.defaultSEO.description);
    this.setMetaTag('property', 'og:title', this.defaultSEO.title);
    this.setMetaTag('property', 'og:description', this.defaultSEO.description);
    this.setMetaTag('property', 'og:url', this.defaultSEO.url);
    this.setMetaTag('property', 'og:image', this.defaultSEO.image);
    this.setMetaTag('name', 'twitter:title', this.defaultSEO.title);
    this.setMetaTag('name', 'twitter:description', this.defaultSEO.description);
    this.setMetaTag('name', 'twitter:image', this.defaultSEO.image);

    const schemaEl = document.getElementById('dynamicMediaSchema');
    if (schemaEl) schemaEl.remove();

    if (window.location.hash.startsWith('#movie/') || window.location.hash.startsWith('#tv/')) {
      history.replaceState(null, '', window.location.pathname);
    }
  },

  setMetaTag(attrType, attrName, content) {
    let el = document.querySelector(`meta[${attrType}="${attrName}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrType, attrName);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  },

  /**
   * INITIAL LOAD of the standard display banner ads.
   * Reads config from data-* attributes on each .ad-invoke node and injects
   * the vendor's atOptions config + invoke.js once. Safe to call repeatedly.
   */
  initDisplayBanners() {
    const DISPLAY_ADS = [
      {
        name: '468x60 Player Banner',
        selector: '.banner-468-wrapper .ad-invoke',
        key: '3db033b8a3c04d2969f6ad108501229f',
        width: 468,
        height: 60
      },
      {
        name: '160x300 Left Skyscraper',
        selector: '#skyscraperAdLeft .ad-invoke',
        key: 'e53edc39c97ff45450fcd274eaccaadd',
        width: 160,
        height: 300
      },
      {
        name: '300x250 Medium Rectangle',
        selector: '.banner-300-wrapper .ad-invoke',
        key: '2aa226d52097fda994ed5b960bc16238',
        width: 300,
        height: 250
      },
      {
        name: '728x90 Leaderboard',
        selector: '.banner-728-wrapper .ad-invoke',
        key: 'feb3fda8c8b027826f18640a3c80e6b1',
        width: 728,
        height: 90
      }
    ];

    DISPLAY_ADS.forEach((ad) => {
      const box = document.querySelector(ad.selector);
      if (!box) return;

      // Clean existing content
      box.querySelectorAll('script, iframe').forEach(el => el.remove());

      const configScript = document.createElement('script');
      configScript.text = `
        atOptions = {
          'key' : '${ad.key}',
          'format' : 'iframe',
          'height' : ${ad.height},
          'width' : ${ad.width},
          'params' : {}
        };
      `;
      box.appendChild(configScript);

      const invokeScript = document.createElement('script');
      invokeScript.src = `https://windowthrilling.com/${ad.key}/invoke.js`;
      box.appendChild(invokeScript);
    });
  },

  /**
   * Auto-refresh ALL banner ads (Native, Leaderboards, Skyscraper, Rectangles)
   * every 10 seconds for maximum impression yields.
   */
  setupAdAutoRefresh() {
    const REFRESH_INTERVAL_MS = 10000; // 10 seconds
    const NATIVE_KEY = '36f7f150e59a605d87206f6a138759d3';
    const NATIVE_CONTAINER_ID = `container-${NATIVE_KEY}`;

    // All standard display banner slots
    const DISPLAY_ADS = [
      {
        name: '468x60 Player Banner',
        selector: '.banner-468-wrapper .ad-invoke, .banner-468-wrapper .ad-slot-box',
        key: '3db033b8a3c04d2969f6ad108501229f',
        width: 468,
        height: 60
      },
      {
        name: '160x300 Left Skyscraper',
        selector: '#skyscraperAdLeft .ad-invoke, #skyscraperAdLeft .skyscraper-content',
        key: 'e53edc39c97ff45450fcd274eaccaadd',
        width: 160,
        height: 300
      },
      {
        name: '300x250 Medium Rectangle',
        selector: '.banner-300-wrapper .ad-invoke, .banner-300-wrapper .ad-slot-box',
        key: '2aa226d52097fda994ed5b960bc16238',
        width: 300,
        height: 250
      },
      {
        name: '728x90 Leaderboard',
        selector: '.banner-728-wrapper .ad-invoke, .banner-728-wrapper .ad-slot-box',
        key: 'feb3fda8c8b027826f18640a3c80e6b1',
        width: 728,
        height: 90
      }
    ];

    let refreshCycle = 0;

    const reinjectIframeBanner = (box, ad) => {
      box.querySelectorAll('script, iframe').forEach(el => el.remove());
      
      const configScript = document.createElement('script');
      configScript.text = `
        atOptions = {
          'key' : '${ad.key}',
          'format' : 'iframe',
          'height' : ${ad.height},
          'width' : ${ad.width},
          'params' : {}
        };
      `;
      box.appendChild(configScript);

      const invokeScript = document.createElement('script');
      invokeScript.src = `https://windowthrilling.com/${ad.key}/invoke.js?_t=${Date.now()}`;
      box.appendChild(invokeScript);
    };

    const refreshAllBanners = () => {
      // Pause refreshing if browser tab is hidden/inactive
      if (document.hidden) return;

      refreshCycle++;
      let refreshedCount = 0;

      // -------------------------------------------------------------
      // 1. REFRESH NATIVE IN-FEED BANNER AD(S)
      // -------------------------------------------------------------
      const nativeWrappers = document.querySelectorAll('.ad-slot-wrapper.in-feed-ad, .in-feed-ad');
      nativeWrappers.forEach((wrapper) => {
        const container = wrapper.querySelector(`div[id^="container-"]`) || wrapper.querySelector('.ad-slot-box > div');
        if (container && typeof container.reload === 'function') {
          try {
            container.style.transition = 'opacity 0.3s ease';
            container.style.opacity = '0.75';
            setTimeout(() => { container.style.opacity = '1'; }, 300);
            container.reload();
            refreshedCount++;
          } catch (e) {
            console.warn('[AdAutoRefresh] Native reload error:', e);
          }
        }
      });

      // Clear Adsterra internal placement duplicate array so refreshed requests proceed
      if (window['_0x196a1559e34586fdb'] && Array.isArray(window['_0x196a1559e34586fdb'])) {
        window['_0x196a1559e34586fdb'] = [];
      }

      // -------------------------------------------------------------
      // 2. REFRESH ALL DISPLAY BANNERS (468x60, 160x300, 160x600, 300x250, 728x90)
      // -------------------------------------------------------------
      DISPLAY_ADS.forEach((ad) => {
        const box = document.querySelector(ad.selector);
        if (!box) return;

        const iframes = box.querySelectorAll('iframe');
        if (iframes.length > 0) {
          // Micro visual transition
          box.style.transition = 'opacity 0.3s ease';
          box.style.opacity = '0.75';
          setTimeout(() => { box.style.opacity = '1'; }, 300);

          iframes.forEach((iframe) => {
            try {
              const currentSrc = iframe.src || iframe.getAttribute('src');
              if (currentSrc && currentSrc !== 'about:blank') {
                const clean = currentSrc.replace(/([?&]_t=)[^&]+/, '');
                const delim = clean.includes('?') ? '&' : '?';
                iframe.src = clean + delim + '_t=' + Date.now();
                refreshedCount++;
              } else {
                reinjectIframeBanner(box, ad);
                refreshedCount++;
              }
            } catch (err) {
              iframe.src = iframe.src;
              refreshedCount++;
            }
          });
        } else {
          reinjectIframeBanner(box, ad);
          refreshedCount++;
        }
      });

      console.log(`[AdAutoRefresh] All banner ads refreshed (Cycle #${refreshCycle} | ${refreshedCount} units checked | 10s interval)`);
    };

    // Run every 10 seconds (10,000 ms)
    setInterval(refreshAllBanners, REFRESH_INTERVAL_MS);

    // Refresh immediately when user switches back to active tab
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        refreshAllBanners();
      }
    });
  }
};

// Initialize App on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.App = App;
