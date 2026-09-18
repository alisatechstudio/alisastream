/**
 * Alisa Movies - Local Storage & User State Management
 * Handles Watchlist, Watch History, and User Preferences
 */

const STORAGE_KEYS = {
  WATCHLIST: 'alisa_movies_watchlist',
  HISTORY: 'alisa_movies_history',
  PREFERENCES: 'alisa_movies_preferences'
};

const DEFAULT_PREFERENCES = {
  themeAccent: 'cyan', // 'cyan', 'red', 'gold', 'purple', 'emerald'
  defaultServer: '1',
  tmdbApiKey: '4e44d9029b1270a757cddc766a1bcb63', // Working public demo TMDB v3 key
  preferredLanguage: 'en-US',
  autoplayNext: true
};

const StorageManager = {
  // --- PREFERENCES ---
  getPreferences() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      return data ? { ...DEFAULT_PREFERENCES, ...JSON.parse(data) } : { ...DEFAULT_PREFERENCES };
    } catch (e) {
      console.warn('Could not read preferences from localStorage', e);
      return { ...DEFAULT_PREFERENCES };
    }
  },

  savePreferences(prefs) {
    try {
      const current = this.getPreferences();
      const updated = { ...current, ...prefs };
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('Could not save preferences to localStorage', e);
      return prefs;
    }
  },

  // --- WATCHLIST ---
  getWatchlist() {
    try {
      const list = localStorage.getItem(STORAGE_KEYS.WATCHLIST);
      return list ? JSON.parse(list) : [];
    } catch (e) {
      console.warn('Could not read watchlist', e);
      return [];
    }
  },

  isInWatchlist(id) {
    const list = this.getWatchlist();
    return list.some(item => String(item.id) === String(id));
  },

  addToWatchlist(item) {
    try {
      const list = this.getWatchlist();
      if (!list.some(existing => String(existing.id) === String(item.id))) {
        const minimalItem = {
          id: item.id,
          title: item.title || item.name,
          poster_path: item.poster_path,
          backdrop_path: item.backdrop_path,
          vote_average: item.vote_average,
          release_date: item.release_date || item.first_air_date,
          media_type: item.media_type || (item.first_air_date ? 'tv' : 'movie'),
          overview: item.overview,
          genres: item.genres || [],
          addedAt: Date.now()
        };
        list.unshift(minimalItem);
        localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(list));
        window.dispatchEvent(new CustomEvent('alisa:watchlist-updated', { detail: { list } }));
        return true;
      }
      return false;
    } catch (e) {
      console.warn('Could not add to watchlist', e);
      return false;
    }
  },

  removeFromWatchlist(id) {
    try {
      let list = this.getWatchlist();
      list = list.filter(item => String(item.id) !== String(id));
      localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('alisa:watchlist-updated', { detail: { list } }));
      return true;
    } catch (e) {
      console.warn('Could not remove from watchlist', e);
      return false;
    }
  },

  toggleWatchlist(item) {
    if (this.isInWatchlist(item.id)) {
      this.removeFromWatchlist(item.id);
      return false;
    } else {
      this.addToWatchlist(item);
      return true;
    }
  },

  // --- WATCH HISTORY / CONTINUE WATCHING ---
  getHistory() {
    try {
      const hist = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return hist ? JSON.parse(hist) : [];
    } catch (e) {
      console.warn('Could not read history', e);
      return [];
    }
  },

  addToHistory(item, season = null, episode = null) {
    try {
      let history = this.getHistory();
      // Remove any existing entry for this item to re-insert at top
      history = history.filter(h => String(h.id) !== String(item.id));
      
      const entry = {
        id: item.id,
        title: item.title || item.name,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
        vote_average: item.vote_average,
        media_type: item.media_type || (item.first_air_date ? 'tv' : 'movie'),
        season: season,
        episode: episode,
        watchedAt: Date.now()
      };
      
      history.unshift(entry);
      // Keep only recent 30 items
      if (history.length > 30) history = history.slice(0, 30);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      window.dispatchEvent(new CustomEvent('alisa:history-updated', { detail: { history } }));
    } catch (e) {
      console.warn('Could not update history', e);
    }
  },

  clearHistory() {
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
      window.dispatchEvent(new CustomEvent('alisa:history-updated', { detail: { history: [] } }));
    } catch (e) {
      console.warn('Could not clear history', e);
    }
  }
};

window.StorageManager = StorageManager;
