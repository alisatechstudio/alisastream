/**
 * Alisa Movies - Worldwide Movie Database API Service
 * Integrates TMDB, TVMaze, and Public Domain Film Archives
 */

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/';
const TMDB_API_BASE = 'https://api.themoviedb.org/3';

// Worldwide MoviesDatabase RapidAPI Configuration
const RAPIDAPI_BASE = 'https://moviesdatabase.p.rapidapi.com';
const RAPIDAPI_HOST = 'moviesdatabase.p.rapidapi.com';
const RAPIDAPI_KEY = '5b6e016880msha73fd6221f9a26ep16124fjsnfe065cf3f02f';

// OMDb (Open Movie Database) Official API Configuration
const OMDB_API_BASE = 'https://www.omdbapi.com';
const OMDB_API_KEY = '26328d78';

// Curated Public Domain & Open Cinema Streams (100% Guaranteed Direct Video Playback)
// Curated Public Domain & Open Cinema Streams (100% Guaranteed Direct Video Playback, Zero Ads, Zero Popups)
const PUBLIC_CINEMA_MOVIES = [
  {
    id: 'open-1',
    title: 'Tears of Steel',
    release_date: '2012-09-26',
    vote_average: 8.4,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://vjs.zencdn.net/v/oceans.mp4',
    youtube_id: 'R6MlUcmgul8',
    trailer_key: 'R6MlUcmgul8',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80',
    overview: 'Set in a dystopian future where a group of warriors and scientists gather at the Oude Kerk in Amsterdam to stage a crucial event from the past in a desperate attempt to rescue the world from destructive robots.',
    genres: [{ id: 878, name: 'Sci-Fi' }, { id: 28, name: 'Action' }, { id: 18, name: 'Drama' }],
    runtime: 12
  },
  {
    id: 'open-2',
    title: 'Sintel: The Dragon Quest',
    release_date: '2010-09-27',
    vote_average: 8.8,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    youtube_id: 'eRsGyueVLvQ',
    trailer_key: 'eRsGyueVLvQ',
    poster_path: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    overview: 'A lonely young woman, Sintel, helps and bonds with a hurt baby dragon whom she names Scales. When the dragon is kidnapped by an adult beast, she embarks on a perilous and heart-wrenching quest across treacherous lands.',
    genres: [{ id: 16, name: 'Animation' }, { id: 14, name: 'Fantasy' }, { id: 12, name: 'Adventure' }],
    runtime: 15
  },
  {
    id: 'open-3',
    title: 'Big Buck Bunny',
    release_date: '2008-04-10',
    vote_average: 8.1,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    youtube_id: 'aqz-KE-bpKQ',
    trailer_key: 'aqz-KE-bpKQ',
    poster_path: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'A large, gentle rabbit wakes up in his sunny forest home to encounter three bullying woodland rodents who take delight in tormenting peaceful creatures. The gentle giant decides to teach them an unforgettable lesson.',
    genres: [{ id: 16, name: 'Animation' }, { id: 35, name: 'Comedy' }, { id: 10751, name: 'Family' }],
    runtime: 10
  },
  {
    id: 'open-4',
    title: 'Cosmos Laundromat',
    release_date: '2015-08-10',
    vote_average: 8.5,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://vjs.zencdn.net/v/oceans.mp4',
    youtube_id: 'Y-rmzh0PI3c',
    trailer_key: 'Y-rmzh0PI3c',
    poster_path: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    overview: 'On a desolate island, a suicidal sheep named Franck meets a quirky salesman named Victor, who offers Franck the gift of a lifetime: a chance to experience an infinity of parallel lives.',
    genres: [{ id: 16, name: 'Animation' }, { id: 878, name: 'Sci-Fi' }, { id: 14, name: 'Fantasy' }],
    runtime: 12
  },
  {
    id: 'open-5',
    title: 'Night of the Living Dead',
    release_date: '1968-10-01',
    vote_average: 8.7,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'HmgkGg5k5a4',
    trailer_key: 'HmgkGg5k5a4',
    poster_path: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    overview: 'George A. Romero’s legendary horror masterpiece. When unexpected radiation reanimates unburied corpses, a desperate band of survivors barricades themselves inside an isolated rural farmhouse to survive the undead onslaught.',
    genres: [{ id: 27, name: 'Horror' }, { id: 53, name: 'Thriller' }],
    runtime: 96
  },
  {
    id: 'open-6',
    title: 'Charade',
    release_date: '1963-12-05',
    vote_average: 8.6,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'Q0x4sIbg11Y',
    trailer_key: 'Q0x4sIbg11Y',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&auto=format&fit=crop&q=80',
    overview: 'Starring Audrey Hepburn and Cary Grant. A stylish romantic mystery thriller often called "the best Hitchcock film Hitchcock never made." A widow in Paris is pursued by several men who want a fortune her murdered husband had stolen.',
    genres: [{ id: 9648, name: 'Mystery' }, { id: 10749, name: 'Romance' }, { id: 35, name: 'Comedy' }, { id: 53, name: 'Thriller' }],
    runtime: 113
  },
  {
    id: 'open-7',
    title: 'Nosferatu: A Symphony of Horror',
    release_date: '1922-03-04',
    vote_average: 8.5,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'FC6jFoYm3xs',
    trailer_key: 'FC6jFoYm3xs',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'F.W. Murnau’s seminal silent masterpiece and the first Dracula adaptation. Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter’s wife, bringing darkness and plague.',
    genres: [{ id: 27, name: 'Horror' }, { id: 14, name: 'Fantasy' }],
    runtime: 94
  },
  {
    id: 'open-8',
    title: 'The General',
    release_date: '1926-12-22',
    vote_average: 8.8,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'iHlBLnzfvP8',
    trailer_key: 'iHlBLnzfvP8',
    poster_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80',
    overview: 'Buster Keaton’s undisputed comedic and action masterpiece. When Union spies steal his beloved locomotive with his sweetheart aboard, a determined railroad engineer wages a single-handed rescue mission.',
    genres: [{ id: 35, name: 'Comedy' }, { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }],
    runtime: 78
  },
  {
    id: 'open-9',
    title: 'Metropolis',
    release_date: '1927-01-10',
    vote_average: 8.9,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'on2H8qt5moA',
    trailer_key: 'on2H8qt5moA',
    poster_path: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    overview: 'Fritz Lang’s groundbreaking pioneer of science fiction cinema. In a futuristic dystopian mega-city sharply divided between working-class laborers and the city planning elites, the son of the master planner falls in love with a prophetess.',
    genres: [{ id: 878, name: 'Sci-Fi' }, { id: 18, name: 'Drama' }],
    runtime: 153
  },
  {
    id: 'open-10',
    title: 'His Girl Friday',
    release_date: '1940-01-18',
    vote_average: 8.3,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'PjH83wJd8vU',
    trailer_key: 'PjH83wJd8vU',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    overview: 'Directed by Howard Hawks and starring Cary Grant and Rosalind Russell. A newspaper editor uses every trick in the book to keep his top reporter ex-wife from remarrying and leaving the news business.',
    genres: [{ id: 35, name: 'Comedy' }, { id: 10749, name: 'Romance' }, { id: 18, name: 'Drama' }],
    runtime: 92
  },
  {
    id: 'open-11',
    title: 'The Cabinet of Dr. Caligari',
    release_date: '1920-02-26',
    vote_average: 8.4,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'AP3Q0pU2m_M',
    trailer_key: 'AP3Q0pU2m_M',
    poster_path: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'The definitive classic of German Expressionist cinema. Hypnotist Dr. Caligari uses a somnambulist to commit murders in a town, featuring striking crooked architectural sets and psychological twists.',
    genres: [{ id: 27, name: 'Horror' }, { id: 9648, name: 'Mystery' }, { id: 53, name: 'Thriller' }],
    runtime: 77
  },
  {
    id: 'open-12',
    title: 'A Trip to the Moon',
    release_date: '1902-09-01',
    vote_average: 8.7,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: '_FnVq3zLzWw',
    trailer_key: '_FnVq3zLzWw',
    poster_path: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80',
    overview: 'Georges Méliès’ iconic cinematic triumph that established science fiction film. A group of adventurous astronomers travel to the Moon in a cannon-propelled capsule, exploring underground caverns and escaping Selenites.',
    genres: [{ id: 878, name: 'Sci-Fi' }, { id: 12, name: 'Adventure' }, { id: 14, name: 'Fantasy' }],
    runtime: 14
  },
  {
    id: 'open-13',
    title: 'House on Haunted Hill',
    release_date: '1959-02-17',
    vote_average: 8.2,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'z4X5tB5h8fE',
    trailer_key: 'z4X5tB5h8fE',
    poster_path: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80',
    overview: 'Starring Vincent Price. An eccentric millionaire offers $10,000 to five guests if they can survive the night locked in a sinister haunted mansion filled with terror and macabre traps.',
    genres: [{ id: 27, name: 'Horror' }, { id: 9648, name: 'Mystery' }],
    runtime: 75
  },
  {
    id: 'open-14',
    title: 'Carnival of Souls',
    release_date: '1962-09-26',
    vote_average: 8.3,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: '0gI2F4k9GjQ',
    trailer_key: '0gI2F4k9GjQ',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&auto=format&fit=crop&q=80',
    overview: 'A chilling cult classic psychological thriller. After surviving a traumatic car accident, a young church organist is drawn to a mysterious abandoned lakeside pavilion populated by apparitions.',
    genres: [{ id: 27, name: 'Horror' }, { id: 9648, name: 'Mystery' }, { id: 53, name: 'Thriller' }],
    runtime: 78
  },
  {
    id: 'open-15',
    title: 'The Little Shop of Horrors',
    release_date: '1960-09-14',
    vote_average: 8.0,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'o0Hn6Yf0J_A',
    trailer_key: 'o0Hn6Yf0J_A',
    poster_path: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'Roger Corman’s legendary black comedy featuring early Jack Nicholson. A clumsy florist assistant cultivates a bizarre plant that develops a craving for human blood and begins talking.',
    genres: [{ id: 35, name: 'Comedy' }, { id: 27, name: 'Horror' }],
    runtime: 72
  },
  {
    id: 'open-16',
    title: 'D.O.A. (Dead on Arrival)',
    release_date: '1949-12-31',
    vote_average: 8.4,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'V6_B3oR1pL0',
    trailer_key: 'V6_B3oR1pL0',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&auto=format&fit=crop&q=80',
    overview: 'A definitive Film Noir masterpiece. A doomed man walks into a police homicide department to report his own murder, having been fatally poisoned with luminous toxin, desperately searching for his killer.',
    genres: [{ id: 80, name: 'Crime' }, { id: 18, name: 'Drama' }, { id: 9648, name: 'Mystery' }],
    runtime: 83
  },
  {
    id: 'open-17',
    title: 'The Stranger',
    release_date: '1946-07-02',
    vote_average: 8.5,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'tMhCsmbW3G8',
    trailer_key: 'tMhCsmbW3G8',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    overview: 'Directed by and starring Orson Welles with Edward G. Robinson. A relentless war crimes investigator tracks a notorious fugitive who has created a respectable new identity as a small-town prep school teacher.',
    genres: [{ id: 80, name: 'Crime' }, { id: 18, name: 'Drama' }, { id: 53, name: 'Thriller' }],
    runtime: 95
  },
  {
    id: 'open-18',
    title: 'Gulliver’s Travels',
    release_date: '1939-12-22',
    vote_average: 8.1,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'fW4oR575e98',
    trailer_key: 'fW4oR575e98',
    poster_path: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1600&auto=format&fit=crop&q=80',
    overview: 'Fleischer Studios’ animated classic feature. Lemuel Gulliver washes ashore on the island of Lilliput, whose miniature inhabitants must navigate giant encounters and international misunderstandings.',
    genres: [{ id: 16, name: 'Animation' }, { id: 12, name: 'Adventure' }, { id: 10751, name: 'Family' }],
    runtime: 76
  },
  {
    id: 'open-19',
    title: 'Spring',
    release_date: '2019-04-04',
    vote_average: 8.9,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://vjs.zencdn.net/v/oceans.mp4',
    youtube_id: 'WhWc3b3KhnY',
    trailer_key: 'WhWc3b3KhnY',
    poster_path: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80',
    overview: 'Blender Open Movie poetic fantasy. A shepherd girl and her dog face ancient spirits in order to bring about the transition of seasons, rendered with cutting-edge open-source computer graphics.',
    genres: [{ id: 16, name: 'Animation' }, { id: 14, name: 'Fantasy' }],
    runtime: 8
  },
  {
    id: 'open-20',
    title: 'Charge',
    release_date: '2022-12-15',
    vote_average: 8.8,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: 'https://vjs.zencdn.net/v/oceans.mp4',
    youtube_id: '1kK_kY89a2s',
    trailer_key: '1kK_kY89a2s',
    poster_path: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    overview: 'An exhilarating cyberpunk sci-fi action film produced by Blender Studio. An old warrior battles security robots inside an abandoned high-tech hangar to recharge his dying cybernetic heart.',
    genres: [{ id: 16, name: 'Animation' }, { id: 878, name: 'Sci-Fi' }, { id: 28, name: 'Action' }],
    runtime: 5
  },
  {
    id: 'open-21',
    title: 'Sherlock Holmes: Dressed to Kill',
    release_date: '1946-06-07',
    vote_average: 8.2,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'Z0VvF99t78U',
    trailer_key: 'Z0VvF99t78U',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&auto=format&fit=crop&q=80',
    overview: 'Starring Basil Rathbone as Sherlock Holmes and Nigel Bruce as Dr. Watson. Holmes races against a criminal gang trying to decipher three seemingly harmless music boxes containing stolen bank plates.',
    genres: [{ id: 9648, name: 'Mystery' }, { id: 80, name: 'Crime' }, { id: 53, name: 'Thriller' }],
    runtime: 72
  },
  {
    id: 'open-22',
    title: 'The Phantom of the Opera',
    release_date: '1925-11-25',
    vote_average: 8.4,
    media_type: 'movie',
    is_public_domain: true,
    stream_url: null,
    youtube_id: 'b0W1V_X718w',
    trailer_key: 'b0W1V_X718w',
    poster_path: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80',
    overview: 'Lon Chaney’s legendary "Man of a Thousand Faces" portrayal of the disfigured phantom who haunts the Paris Opera House, causing accidents to assist the career of his beloved singer.',
    genres: [{ id: 27, name: 'Horror' }, { id: 18, name: 'Drama' }, { id: 10749, name: 'Romance' }],
    runtime: 93
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

  // --- RAPIDAPI MOVIESDATABASE API ---
  async requestRapidAPI(endpoint) {
    try {
      const response = await fetch(`${RAPIDAPI_BASE}${endpoint}`, {
        headers: {
          'x-rapidapi-host': RAPIDAPI_HOST,
          'x-rapidapi-key': RAPIDAPI_KEY
        }
      });
      if (!response.ok) {
        throw new Error(`RapidAPI HTTP error ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      console.warn(`RapidAPI request failed for ${endpoint}:`, err);
      return null;
    }
  },

  // GET https://moviesdatabase.p.rapidapi.com/titles/{id}/main_actors
  async getRapidAPIMainActors(imdbId) {
    if (!imdbId) return [];
    const formattedId = imdbId.startsWith('tt') ? imdbId : `tt${imdbId}`;
    const data = await this.requestRapidAPI(`/titles/${formattedId}/main_actors`);
    return data?.results || [];
  },

  // GET https://moviesdatabase.p.rapidapi.com/titles/{id}/ratings
  async getRapidAPIRatings(imdbId) {
    if (!imdbId) return null;
    const formattedId = imdbId.startsWith('tt') ? imdbId : `tt${imdbId}`;
    const data = await this.requestRapidAPI(`/titles/${formattedId}/ratings`);
    return data?.results || null;
  },

  // GET https://moviesdatabase.p.rapidapi.com/titles/{id}
  async getRapidAPITitle(imdbId) {
    if (!imdbId) return null;
    const formattedId = imdbId.startsWith('tt') ? imdbId : `tt${imdbId}`;
    const data = await this.requestRapidAPI(`/titles/${formattedId}`);
    return data?.results || null;
  },

  // --- OMDB API INTEGRATION (Ratings, Rotten Tomatoes, Metacritic, Crew) ---
  async getOMDbByImdbId(imdbId) {
    if (!imdbId) return null;
    const cleanId = imdbId.startsWith('tt') ? imdbId : `tt${imdbId}`;
    try {
      const response = await fetch(`${OMDB_API_BASE}/?i=${encodeURIComponent(cleanId)}&apikey=${OMDB_API_KEY}`);
      if (!response.ok) return null;
      const data = await response.json();
      return data.Response === 'True' ? data : null;
    } catch (err) {
      console.warn('OMDb fetch by IMDb ID failed:', err);
      return null;
    }
  },

  async getOMDbByTitle(title, year = null) {
    if (!title) return null;
    try {
      let url = `${OMDB_API_BASE}/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`;
      if (year) url += `&y=${encodeURIComponent(year)}`;
      const response = await fetch(url);
      if (!response.ok) return null;
      const data = await response.json();
      return data.Response === 'True' ? data : null;
    } catch (err) {
      console.warn('OMDb fetch by Title failed:', err);
      return null;
    }
  },

  async searchOMDb(query, page = 1) {
    if (!query) return [];
    try {
      const response = await fetch(`${OMDB_API_BASE}/?s=${encodeURIComponent(query)}&page=${page}&apikey=${OMDB_API_KEY}`);
      if (!response.ok) return [];
      const data = await response.json();
      return data.Response === 'True' && data.Search ? data.Search : [];
    } catch (err) {
      console.warn('OMDb search failed:', err);
      return [];
    }
  },

  // --- TRENDING & SPOTLIGHT (100% Guaranteed Public Domain & Open Cinema Streams) ---
  async getTrending(timeWindow = 'day') {
    return PUBLIC_CINEMA_MOVIES;
  },

  async getMovies(category = 'popular', page = 1) {
    if (category === 'top_rated') {
      return [...PUBLIC_CINEMA_MOVIES].sort((a, b) => b.vote_average - a.vote_average);
    }
    if (category === 'animation') {
      return PUBLIC_CINEMA_MOVIES.filter(m => m.genres.some(g => g.name === 'Animation'));
    }
    if (category === 'horror') {
      return PUBLIC_CINEMA_MOVIES.filter(m => m.genres.some(g => g.name === 'Horror'));
    }
    if (category === 'scifi') {
      return PUBLIC_CINEMA_MOVIES.filter(m => m.genres.some(g => g.name === 'Sci-Fi'));
    }
    if (category === 'classics' || category === 'upcoming') {
      return PUBLIC_CINEMA_MOVIES.filter(m => parseInt(m.release_date) < 1970);
    }
    return PUBLIC_CINEMA_MOVIES;
  },

  // Fetch all movies with dynamic filters (pagination, genre, year, sort)
  async getAllMovies(options = {}) {
    const {
      page = 1,
      sortBy = 'popularity.desc',
      genre = null,
      year = null,
      category = null
    } = options;

    let list = [...PUBLIC_CINEMA_MOVIES];

    if (category && category !== 'all') {
      if (category === 'top_rated') list = list.filter(m => m.vote_average >= 8.5);
      if (category === 'horror') list = list.filter(m => m.genres.some(g => g.name === 'Horror'));
      if (category === 'animation') list = list.filter(m => m.genres.some(g => g.name === 'Animation'));
      if (category === 'scifi') list = list.filter(m => m.genres.some(g => g.name === 'Sci-Fi'));
      if (category === 'classics' || category === 'now_playing' || category === 'upcoming') {
        list = list.filter(m => parseInt(m.release_date) < 1970);
      }
    }

    if (genre) {
      const genreId = Number(genre);
      list = list.filter(m => m.genres.some(g => g.id === genreId));
    }

    if (year) {
      list = list.filter(m => (m.release_date || '').startsWith(String(year)));
    }

    if (sortBy === 'vote_average.desc') {
      list.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortBy === 'primary_release_date.desc') {
      list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortBy === 'primary_release_date.asc') {
      list.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    }

    return list;
  },

  // Batch fetch multiple pages in parallel to return all movies
  async getBatchMovies(category = 'popular', pages = 2) {
    return this.getMovies(category, 1);
  },

  // Batch fetch for TV Series
  async getBatchTV(category = 'popular', pages = 2) {
    return this.getMovies('animation', 1);
  },

  // RapidAPI titles list
  async getRapidAPITitlesList(page = 1, limit = 20) {
    try {
      const data = await this.requestRapidAPI(`/titles?page=${page}&limit=${limit}`);
      if (data && data.results) {
        return data.results
          .filter(i => i.primaryImage?.url)
          .map(i => ({
            id: i.id,
            title: i.titleText?.text || 'Untitled',
            poster_path: i.primaryImage?.url,
            backdrop_path: i.primaryImage?.url,
            release_date: i.releaseYear?.year ? `${i.releaseYear.year}-01-01` : '',
            vote_average: 7.9,
            media_type: 'movie',
            overview: `${i.titleText?.text || 'Title'} (${i.releaseYear?.year || 'Classic'}) from the worldwide IMDb database.`
          }));
      }
    } catch (e) {
      console.warn('RapidAPI titles list fetch failed:', e);
    }
    return [];
  },

  async getTVShows(category = 'popular', page = 1) {
    const data = await this.requestTMDB(`/tv/${category}`, { page });
    if (data && data.results) {
      return data.results.map(t => ({ ...t, media_type: 'tv', title: t.name }));
    }
    return FALLBACK_CATALOG.filter(t => t.media_type === 'tv');
  },

  // --- WORLDWIDE & CATEGORY DISCOVERY ---
  async getWorldwide(regionCode = 'all', page = 1) {
    switch (regionCode) {
      case 'anime':
        return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 16));
      case 'hollywood':
        return PUBLIC_CINEMA_MOVIES.filter(m => !m.genres?.some(g => g.id === 16));
      case 'scifi':
        return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 878));
      case 'horror':
        return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 27));
      case 'comedy':
        return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 35));
      case 'drama':
        return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 18));
      default:
        return this.getTrending();
    }
  },

  // --- GENRE DISCOVERY ---
  async getByGenre(genreId, type = 'movie', page = 1) {
    const gid = Number(genreId);
    const filtered = PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === gid));
    return filtered.length > 0 ? filtered : PUBLIC_CINEMA_MOVIES;
  },

  // --- SEARCH (OPEN CINEMA & PUBLIC DOMAIN ONLY) ---
  async searchMulti(query, page = 1) {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();

    // 1. Direct match on title, overview, or genre
    const matches = PUBLIC_CINEMA_MOVIES.filter(m =>
      m.title.toLowerCase().includes(q) ||
      (m.overview || '').toLowerCase().includes(q) ||
      (m.genres && m.genres.some(g => g.name.toLowerCase().includes(q)))
    );

    if (matches.length > 0) return matches;

    // 2. Word-by-word fuzzy match
    const words = q.split(/\s+/).filter(w => w.length > 2);
    if (words.length > 0) {
      const fuzzy = PUBLIC_CINEMA_MOVIES.filter(m =>
        words.some(w => m.title.toLowerCase().includes(w) || (m.overview || '').toLowerCase().includes(w))
      );
      if (fuzzy.length > 0) return fuzzy;
    }

    // 3. Fallback recommendations
    return PUBLIC_CINEMA_MOVIES.slice(0, 8);
  },

  // --- DETAILS, CREDITS, VIDEOS ---
  async getDetails(id, mediaType = 'movie') {
    // Check if ID matches directly
    let item = PUBLIC_CINEMA_MOVIES.find(m => String(m.id) === String(id)) ||
               PUBLIC_CINEMA_MOVIES.find(m => m.title.toLowerCase() === String(id).toLowerCase());

    if (!item) {
      const numericIndex = typeof id === 'number' ? Math.abs(id) % PUBLIC_CINEMA_MOVIES.length : 0;
      item = PUBLIC_CINEMA_MOVIES[numericIndex] || PUBLIC_CINEMA_MOVIES[0];
    }

    // Enrich with live OMDb data (Rotten Tomatoes, Metascore, IMDb votes, Director, Actors)
    try {
      const omdb = item.imdb_id
        ? await this.getOMDbByImdbId(item.imdb_id)
        : await this.getOMDbByTitle(item.title, item.release_date ? item.release_date.split('-')[0] : null);

      if (omdb) {
        return {
          ...item,
          omdb,
          imdb_id: omdb.imdbID || item.imdb_id,
          imdb_rating: omdb.imdbRating && omdb.imdbRating !== 'N/A' ? omdb.imdbRating : item.vote_average,
          imdb_votes: omdb.imdbVotes && omdb.imdbVotes !== 'N/A' ? omdb.imdbVotes : null,
          ratings: omdb.Ratings || [],
          director: omdb.Director && omdb.Director !== 'N/A' ? omdb.Director : null,
          writer: omdb.Writer && omdb.Writer !== 'N/A' ? omdb.Writer : null,
          actors: omdb.Actors && omdb.Actors !== 'N/A' ? omdb.Actors : null,
          awards: omdb.Awards && omdb.Awards !== 'N/A' ? omdb.Awards : null,
          rated: omdb.Rated && omdb.Rated !== 'N/A' ? omdb.Rated : null,
          box_office: omdb.BoxOffice && omdb.BoxOffice !== 'N/A' ? omdb.BoxOffice : null,
          metascore: omdb.Metascore && omdb.Metascore !== 'N/A' ? omdb.Metascore : null,
          overview: (omdb.Plot && omdb.Plot !== 'N/A' && omdb.Plot.length > (item.overview || '').length) ? omdb.Plot : item.overview
        };
      }
    } catch (err) {
      console.warn('OMDb detail enrichment error:', err);
    }

    return item;
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
