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
  dynamicState: {
    page: 1,
    isLoading: false,
    fetchFn: null,
    hasMore: true,
    totalLoaded: 0
  },

  async init() {
    this.applyUserPreferences();
    this.setupModalFallbacks();
    this.setupNavigation();
    this.setupSearch();
    this.setupFilterChips();
    this.setupRailNavigation();
    this.setupDynamicPagination();
    this.setupSettingsModal();
    this.setupGlobalShortcuts();
    this.setupCookieConsent();

    // Initialize Player module
    if (window.Player) {
      window.Player.init();
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

    // Close detail modal btn
    const closeDetail = document.getElementById('closeDetailBtn');
    if (closeDetail) {
      closeDetail.addEventListener('click', () => {
        const d = document.getElementById('detailModal');
        if (d) d.close();
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
    this.refreshWatchlistSection();

    // Render public cinema immediately (local fast)
    const publicCinema = window.MovieAPI.getPublicCinema();
    this.renderRail('publicCinemaRail', publicCinema);

    // Concurrently fetch and render each rail progressively
    const railsToLoad = [
      { id: 'trendingRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getTrending('day', p)) },
      { id: 'popularMoviesRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getMovies('popular', p)) },
      { id: 'topRatedRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getMovies('top_rated', p)) },
      { id: 'actionRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getByGenre(28, 'movie', p)) },
      { id: 'scifiRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getByGenre(878, 'movie', p)) },
      { id: 'popularTVRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getTVShows('popular', p)) },
      { id: 'animeRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getWorldwide('anime', p)) },
      { id: 'bollywoodRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getWorldwide('bollywood', p)) },
      { id: 'kdramaRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getWorldwide('kdrama', p)) },
      { id: 'horrorRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getByGenre(27, 'movie', p)) },
      { id: 'comedyRail', fetcher: () => window.MovieAPI.getRailItems(p => window.MovieAPI.getByGenre(35, 'movie', p)) }
    ];

    railsToLoad.forEach(async ({ id, fetcher }) => {
      try {
        const items = await fetcher();
        this.renderRail(id, items);
      } catch (e) {
        console.warn(`Rail ${id} failed to load:`, e);
      }
    });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Switch to dynamic grid view
    switch (tab) {
      case 'movies':
        this.showDynamicView('FEATURED FILMS', 'Popular Movies', p => window.MovieAPI.getMovies('popular', p));
        break;
      case 'tv':
        this.showDynamicView('SERIES & EPISODES', 'Top TV Shows', p => window.MovieAPI.getTVShows('popular', p));
        break;
      case 'worldwide':
        this.showDynamicView('GLOBAL CINEMA', 'Worldwide Blockbusters', p => window.MovieAPI.getWorldwide('all', p));
        break;
      case 'top_rated':
        this.showDynamicView('CRITICS CHOICE', 'Top Rated Masterpieces', p => window.MovieAPI.getMovies('top_rated', p));
        break;
      case 'action':
        this.showDynamicView('ADRENALINE RUSH', 'Action & Adventure Blockbusters', p => window.MovieAPI.getByGenre(28, 'movie', p));
        break;
      case 'scifi':
        this.showDynamicView('FUTURE VISIONS', 'Sci-Fi & Cyberpunk', p => window.MovieAPI.getByGenre(878, 'movie', p));
        break;
      case 'anime':
        this.showDynamicView('JAPANESE ANIMATION', 'Anime & Animation Hits', p => window.MovieAPI.getWorldwide('anime', p));
        break;
      case 'bollywood':
        this.showDynamicView('DESI BLOCKBUSTERS', 'Bollywood & South Asian Cinema', p => window.MovieAPI.getWorldwide('bollywood', p));
        break;
      case 'kdrama':
        this.showDynamicView('HALLYU WAVE', 'K-Drama & Asian Wave', p => window.MovieAPI.getWorldwide('kdrama', p));
        break;
      case 'horror':
        this.showDynamicView('DARK & CHILLING', 'Horror & Thriller Night', p => window.MovieAPI.getByGenre(27, 'movie', p));
        break;
      case 'comedy':
        this.showDynamicView('LAUGH OUT LOUD', 'Comedy & Feel-Good Hits', p => window.MovieAPI.getByGenre(35, 'movie', p));
        break;
      case 'public':
        this.showDynamicView('GUARANTEED DIRECT PLAY', 'Public Domain Cinema & Open Movies', () => window.MovieAPI.getPublicCinema());
        break;
      case 'watchlist':
        this.showWatchlistView();
        break;
      case 'trending':
        this.showDynamicView('GLOBAL CHARTS', 'Trending Now Worldwide', p => window.MovieAPI.getTrending('day', p));
        break;
      default:
        this.hideDynamicView();
    }
  },

  setupDynamicPagination() {
    const loadMoreBtn = document.getElementById('dynamicLoadMoreBtn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', async () => {
      if (this.dynamicState.isLoading || !this.dynamicState.hasMore || !this.dynamicState.fetchFn) return;

      this.dynamicState.isLoading = true;
      const btnText = document.getElementById('loadMoreBtnText');
      const status = document.getElementById('dynamicLoadMoreStatus');
      if (btnText) btnText.textContent = 'Loading titles... ⏳';

      this.dynamicState.page++;
      try {
        const nextItems = await this.dynamicState.fetchFn(this.dynamicState.page);
        const grid = document.getElementById('dynamicMediaGrid');

        if (!nextItems || nextItems.length === 0) {
          this.dynamicState.hasMore = false;
          if (btnText) btnText.textContent = 'All Titles Loaded ✓';
          loadMoreBtn.style.opacity = '0.6';
          loadMoreBtn.style.cursor = 'default';
          if (status) status.textContent = `Showing all ${this.dynamicState.totalLoaded} available titles.`;
        } else {
          // Append cards
          const newCardsHTML = nextItems.map(item => this.createCardHTML(item)).join('');
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newCardsHTML;
          const children = Array.from(tempDiv.children);
          children.forEach(child => grid.appendChild(child));
          this.attachCardEventListeners(grid);

          this.dynamicState.totalLoaded += nextItems.length;
          if (btnText) btnText.textContent = 'Load More Movies 🍿';
          if (status) status.textContent = `Showing ${this.dynamicState.totalLoaded} titles across ${this.dynamicState.page} pages. Click to load more.`;
        }
      } catch (err) {
        console.error('Failed to load more:', err);
        if (btnText) btnText.textContent = 'Retry Loading ⚠️';
      } finally {
        this.dynamicState.isLoading = false;
      }
    });
  },

  async showDynamicView(subtitle, title, fetchFn) {
    const dynamicSection = document.getElementById('dynamicViewSection');
    const railsContainer = document.getElementById('homeRailsContainer');
    const heroSpotlight = document.getElementById('heroSpotlight');
    const subEl = document.getElementById('dynamicViewSubtitle');
    const titleEl = document.getElementById('dynamicViewTitle');
    const grid = document.getElementById('dynamicMediaGrid');
    const loadMoreWrapper = document.getElementById('dynamicLoadMoreWrapper');
    const loadMoreBtn = document.getElementById('dynamicLoadMoreBtn');
    const loadMoreBtnText = document.getElementById('loadMoreBtnText');
    const loadMoreStatus = document.getElementById('dynamicLoadMoreStatus');

    if (!dynamicSection || !railsContainer || !grid) return;

    railsContainer.style.display = 'none';
    dynamicSection.style.display = 'block';

    if (subEl) subEl.textContent = subtitle;
    if (titleEl) titleEl.textContent = title;

    // Reset dynamic pagination state
    this.dynamicState.page = 1;
    this.dynamicState.isLoading = false;
    this.dynamicState.hasMore = true;
    this.dynamicState.fetchFn = fetchFn;
    this.dynamicState.totalLoaded = 0;

    if (loadMoreWrapper) loadMoreWrapper.style.display = 'none';
    if (loadMoreBtn) {
      loadMoreBtn.style.opacity = '1';
      loadMoreBtn.style.cursor = 'pointer';
    }
    if (loadMoreBtnText) loadMoreBtnText.textContent = 'Load More Movies 🍿';
    if (loadMoreStatus) loadMoreStatus.textContent = '';

    grid.innerHTML = Array.from({ length: 12 }, () => '<div class="skeleton-card"></div>').join('');
    window.scrollTo({ top: heroSpotlight?.offsetHeight || 300, behavior: 'smooth' });

    // Fetch initial 2 pages (40 items) for rich immediate catalog display
    try {
      const [p1, p2] = await Promise.all([
        fetchFn(1),
        fetchFn(2).catch(() => [])
      ]);
      const initialItems = [...(p1 || []), ...(p2 || [])];

      if (!initialItems || initialItems.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; padding: 3rem 1rem; text-align: center; color: var(--text-muted);">No movies or shows found.</p>`;
        return;
      }

      this.dynamicState.page = 2;
      this.dynamicState.totalLoaded = initialItems.length;

      grid.innerHTML = initialItems.map(item => this.createCardHTML(item)).join('');
      this.attachCardEventListeners(grid);

      if (loadMoreWrapper && initialItems.length >= 15) {
        loadMoreWrapper.style.display = 'block';
        if (loadMoreStatus) {
          loadMoreStatus.textContent = `Showing ${this.dynamicState.totalLoaded} titles across 2 pages. Click below to load more.`;
        }
      }
    } catch (err) {
      console.error('Error in showDynamicView:', err);
      grid.innerHTML = `<p style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted);">Unable to load catalog right now. Please try again.</p>`;
    }
  },

  showWatchlistView() {
    this.showDynamicView('SAVED TITLES', 'My Watchlist', () => {
      return window.StorageManager.getWatchlist();
    });
  },

  hideDynamicView() {
    const dynamicSection = document.getElementById('dynamicViewSection');
    const railsContainer = document.getElementById('homeRailsContainer');
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

        if (genreId) {
          this.showDynamicView('GENRE EXPLORATION', `${chip.textContent.trim()} Movies`, p => window.MovieAPI.getByGenre(genreId, 'movie', p));
          return;
        }

        switch (filter) {
          case 'trending':
            this.showDynamicView('GLOBAL CHARTS', 'Trending Worldwide', p => window.MovieAPI.getTrending('day', p));
            break;
          case 'top_rated':
            this.showDynamicView('HIGHEST RATED', 'Top Rated Masterpieces', p => window.MovieAPI.getMovies('top_rated', p));
            break;
          case 'hollywood':
            this.showDynamicView('US CINEMA', 'Hollywood Hits', p => window.MovieAPI.getWorldwide('hollywood', p));
            break;
          case 'bollywood':
            this.showDynamicView('INDIAN CINEMA', 'Bollywood & South Asian', p => window.MovieAPI.getWorldwide('bollywood', p));
            break;
          case 'anime':
            this.showDynamicView('JAPANESE ANIMATION', 'Anime Cinema & Series', p => window.MovieAPI.getWorldwide('anime', p));
            break;
          case 'kdrama':
            this.showDynamicView('KOREAN WAVE', 'K-Drama & Korean Cinema', p => window.MovieAPI.getWorldwide('kdrama', p));
            break;
          case 'public':
            this.showDynamicView('GUARANTEED DIRECT STREAM', 'Public Domain Cinema', () => window.MovieAPI.getPublicCinema());
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
          this.showDynamicView('SEARCH RESULTS', `Results for "${query}"`, p => window.MovieAPI.searchMulti(query, p));
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
          <div class="detail-genres">${genres}</div>
          <p class="detail-overview">${media.overview || 'No synopsis available for this title.'}</p>
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
          <!-- In-Article Sponsored Ad Unit -->
          <div class="ad-slot-wrapper" style="margin: 1.5rem 0 0 0; padding: 0;">
            <div class="ad-slot-box" style="min-height: 90px; text-align: center;">
              <span class="ad-label">Sponsored Story</span>
              <ins class="adsbygoogle"
                   style="display:block; text-align:center;"
                   data-ad-layout="in-article"
                   data-ad-format="fluid"
                   data-ad-client="ca-pub-2862340185854650"
                   data-ad-slot="1698295242"></ins>
            </div>
          </div>
        </div>
      </div>
    `;

    try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}

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
  }
};

// Initialize App on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.App = App;
