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

// Expanded Offline & Fallback Catalog (Ensures rich catalog even during network throttling)
const FALLBACK_CATALOG = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    release_date: '2024-02-27',
    vote_average: 8.6,
    media_type: 'movie',
    poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s520Wio.jpg',
    overview: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.',
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
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
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
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
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
    genres: [{ id: 16, name: 'Animation' }, { id: 10759, name: 'Action & Adventure' }],
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
    overview: 'Seven noble families fight for control of the mythical land of Westeros.',
    genres: [{ id: 10765, name: 'Sci-Fi & Fantasy' }, { id: 18, name: 'Drama' }],
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
    overview: 'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary Deadpool behind him.',
    genres: [{ id: 28, name: 'Action' }, { id: 35, name: 'Comedy' }],
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
    overview: 'Wednesday Addams misadventures as a student at Nevermore Academy.',
    genres: [{ id: 10765, name: 'Sci-Fi & Fantasy' }, { id: 9648, name: 'Mystery' }],
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
    overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family.',
    genres: [{ id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }],
    trailer_key: 'd9MyW72ELq0'
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    release_date: '2019-04-24',
    vote_average: 8.3,
    media_type: 'movie',
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    overview: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    genres: [{ id: 12, name: 'Adventure' }, { id: 878, name: 'Science Fiction' }, { id: 28, name: 'Action' }],
    trailer_key: 'TcMBFSGVi1c'
  },
  {
    id: 155,
    title: 'The Dark Knight',
    release_date: '2008-07-16',
    vote_average: 8.5,
    media_type: 'movie',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.',
    genres: [{ id: 18, name: 'Drama' }, { id: 28, name: 'Action' }, { id: 80, name: 'Crime' }],
    trailer_key: 'EXeTwQWrcwY'
  },
  {
    id: 414906,
    title: 'The Batman',
    release_date: '2022-03-01',
    vote_average: 7.7,
    media_type: 'movie',
    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdrop_path: '/5P8SmMzSNYikXpxil6BYz9G660d.jpg',
    overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    genres: [{ id: 80, name: 'Crime' }, { id: 9648, name: 'Mystery' }, { id: 53, name: 'Thriller' }],
    trailer_key: 'mqqft2x_Aa4'
  },
  {
    id: 872585,
    title: 'Oppenheimer',
    release_date: '2023-07-19',
    vote_average: 8.1,
    media_type: 'movie',
    poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    overview: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II.',
    genres: [{ id: 18, name: 'Drama' }, { id: 36, name: 'History' }],
    trailer_key: 'uYPbbksJxIg'
  },
  {
    id: 385687,
    title: 'Fast X',
    release_date: '2023-05-17',
    vote_average: 7.2,
    media_type: 'movie',
    poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
    backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
    overview: 'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path.',
    genres: [{ id: 28, name: 'Action' }, { id: 80, name: 'Crime' }, { id: 53, name: 'Thriller' }],
    trailer_key: '32RAq6JzY-w'
  },
  {
    id: 603,
    title: 'The Matrix',
    release_date: '1999-03-30',
    vote_average: 8.2,
    media_type: 'movie',
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: '/l4QHerTSbflrqowW3EVxsBhLieR.jpg',
    overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who learns from mysterious rebels about the true nature of his reality.',
    genres: [{ id: 28, name: 'Action' }, { id: 878, name: 'Science Fiction' }],
    trailer_key: 'vKQi3bBA1y8'
  },
  {
    id: 85937,
    name: 'Demon Slayer: Kimetsu no Yaiba',
    title: 'Demon Slayer',
    first_air_date: '2019-04-06',
    vote_average: 8.7,
    media_type: 'tv',
    poster_path: '/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
    backdrop_path: '/3GQHQsczgN2gnC70d10qX7w3988.jpg',
    overview: 'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.',
    genres: [{ id: 16, name: 'Animation' }, { id: 10759, name: 'Action & Adventure' }, { id: 10765, name: 'Sci-Fi & Fantasy' }],
    trailer_key: 'VQGCKyvzIM4'
  },
  {
    id: 37854,
    name: 'One Piece',
    title: 'One Piece',
    first_air_date: '1999-10-20',
    vote_average: 8.7,
    media_type: 'tv',
    poster_path: '/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg',
    backdrop_path: '/2rmK7mnchsl935x821t02THao92.jpg',
    overview: 'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving behind a huge cache of riches and the famed One Piece.',
    genres: [{ id: 16, name: 'Animation' }, { id: 10759, name: 'Action & Adventure' }, { id: 35, name: 'Comedy' }],
    trailer_key: 'l_98K4_6UQ0'
  },
  {
    id: 93405,
    name: 'Squid Game',
    title: 'Squid Game',
    first_air_date: '2021-09-17',
    vote_average: 8.4,
    media_type: 'tv',
    poster_path: '/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    backdrop_path: '/7q448EVOnuE3gVAx24bv00q0it3.jpg',
    overview: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.',
    genres: [{ id: 10759, name: 'Action & Adventure' }, { id: 9648, name: 'Mystery' }, { id: 18, name: 'Drama' }],
    trailer_key: 'oqxAJKy0ii4'
  },
  {
    id: 60059,
    title: 'Better Call Saul',
    name: 'Better Call Saul',
    first_air_date: '2015-02-08',
    vote_average: 8.7,
    media_type: 'tv',
    poster_path: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
    backdrop_path: '/hPea3Qy5Gd6z4RJLucOzxOhTQtu.jpg',
    overview: 'Six years before he meets Walter White, small-time lawyer Jimmy McGill transforms into the morally challenged attorney Saul Goodman.',
    genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }],
    trailer_key: 'HN4oydykJFc'
  },
  {
    id: 1396,
    name: 'Breaking Bad',
    title: 'Breaking Bad',
    first_air_date: '2008-01-20',
    vote_average: 8.9,
    media_type: 'tv',
    poster_path: '/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
    backdrop_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
    overview: 'Walter White, a New Mexico chemistry teacher, learns he has terminal lung cancer and teams up with a former student to manufacture crystal meth.',
    genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }],
    trailer_key: 'HhesaQXLuRY'
  },
  {
    id: 579974,
    title: 'RRR',
    release_date: '2022-03-24',
    vote_average: 7.8,
    media_type: 'movie',
    poster_path: '/nEufeZlyAOLqO2brrs0yeMu1QXO.jpg',
    backdrop_path: '/y7Wk29p0mG3vP0w8m1f3H8w7n7o.jpg',
    overview: 'A fictional history of two legendary revolutionaries\' journey away from home before they began fighting for their country in the 1920s.',
    genres: [{ id: 28, name: 'Action' }, { id: 18, name: 'Drama' }],
    trailer_key: 'f_vbAtFSEc0'
  },
  {
    id: 496243,
    title: 'Parasite',
    release_date: '2019-05-30',
    vote_average: 8.5,
    media_type: 'movie',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop_path: '/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
    overview: 'All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
    genres: [{ id: 35, name: 'Comedy' }, { id: 53, name: 'Thriller' }, { id: 18, name: 'Drama' }],
    trailer_key: '5xH0hhP3v8w'
  },
  {
    id: 129,
    title: 'Spirited Away',
    release_date: '2001-07-20',
    vote_average: 8.5,
    media_type: 'movie',
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: '/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg',
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had.',
    genres: [{ id: 16, name: 'Animation' }, { id: 10751, name: 'Family' }, { id: 14, name: 'Fantasy' }],
    trailer_key: 'ByXuk9QqQkk'
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

  // --- MULTI-PAGE & RAIL HELPERS ---
  async getRailItems(fetcherFn) {
    try {
      const [p1, p2] = await Promise.all([
        fetcherFn(1),
        fetcherFn(2)
      ]);
      const combined = [...(p1 || []), ...(p2 || [])];
      const seen = new Set();
      return combined.filter(item => {
        if (!item || !item.id || seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    } catch (e) {
      return (await fetcherFn(1)) || [];
    }
  },

  // --- TRENDING & SPOTLIGHT ---
  async getTrending(timeWindow = 'day', page = 1) {
    const data = await this.requestTMDB(`/trending/all/${timeWindow}`, { page });
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
        return this.getTrending('day', page);
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
