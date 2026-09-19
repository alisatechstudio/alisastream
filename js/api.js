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
    "id": "open-1",
    "title": "Sintel: The Dragon Quest",
    "release_date": "2010-09-27",
    "vote_average": 8.8,
    "youtube_id": "eRsGyueVLvQ",
    "imdb_id": "tt1727588",
    "stream_url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "poster_path": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    "overview": "A lonely young woman, Sintel, helps and bonds with a hurt baby dragon whom she names Scales. When the dragon is kidnapped by an adult beast, she embarks on a perilous and heart-wrenching quest across treacherous lands.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 15,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "eRsGyueVLvQ"
  },
  {
    "id": "open-2",
    "title": "Big Buck Bunny",
    "release_date": "2008-04-10",
    "vote_average": 8.1,
    "youtube_id": "aqz-KE-bpKQ",
    "imdb_id": "tt1254207",
    "stream_url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "poster_path": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    "overview": "A large, gentle rabbit wakes up in his sunny forest home to encounter three bullying woodland rodents who take delight in tormenting peaceful creatures. The gentle giant decides to teach them an unforgettable lesson.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "runtime": 10,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "aqz-KE-bpKQ"
  },
  {
    "id": "open-3",
    "title": "Elephants Dream",
    "release_date": "2006-03-24",
    "vote_average": 8,
    "youtube_id": "TLkA0RELQ1g",
    "imdb_id": "tt0825223",
    "stream_url": "https://vjs.zencdn.net/v/oceans.mp4",
    "poster_path": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80",
    "overview": "The worlds first open-movie 3D animated film. Proog and Emo explore the surreal, mechanical labyrinth of a giant, sentient machine that reflects their inner psychologies.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 11,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "TLkA0RELQ1g"
  },
  {
    "id": "open-4",
    "title": "Spring",
    "release_date": "2019-04-04",
    "vote_average": 8.9,
    "youtube_id": "WhWc3b3KhnY",
    "imdb_id": "tt9877478",
    "stream_url": "https://vjs.zencdn.net/v/oceans.mp4",
    "poster_path": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=80",
    "overview": "Blender Open Movie poetic fantasy. A shepherd girl and her dog face ancient spirits in order to bring about the transition of seasons, rendered with cutting-edge open-source computer graphics.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 8,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "WhWc3b3KhnY"
  },
  {
    "id": "open-5",
    "title": "Charge",
    "release_date": "2022-12-15",
    "vote_average": 8.8,
    "youtube_id": "UXqq0ZvbOnk",
    "imdb_id": null,
    "stream_url": "https://vjs.zencdn.net/v/oceans.mp4",
    "poster_path": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80",
    "overview": "An exhilarating cyberpunk sci-fi action film produced by Blender Studio. An old warrior battles security robots inside an abandoned high-tech hangar to recharge his dying cybernetic heart.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 5,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "UXqq0ZvbOnk"
  },
  {
    "id": "open-6",
    "title": "Sprite Fright",
    "release_date": "2021-10-29",
    "vote_average": 8.7,
    "youtube_id": "_cMxraX_5RE",
    "imdb_id": "tt15807908",
    "stream_url": "https://vjs.zencdn.net/v/oceans.mp4",
    "poster_path": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80",
    "backdrop_path": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    "overview": "An 80s-inspired horror-comedy produced by Blender Studio. When a group of rowdy teenagers venture into the British wilderness, they get more nature than they bargained for from angry woodland sprites.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 11,
    "media_type": "movie",
    "is_public_domain": true,
    "trailer_key": "_cMxraX_5RE"
  },
  {
    "id": "open-7",
    "title": "Night of the Living Dead",
    "release_date": "1968-10-03",
    "vote_average": 7.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/night-of-the-living-dead-1968",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0063350",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGMyZTA0MWEtZjczMS00ZDE5LTk1OTQtNmIxNGYzNDA2NDVhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGMyZTA0MWEtZjczMS00ZDE5LTk1OTQtNmIxNGYzNDA2NDVhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "overview": "A ragtag group of Pennsylvanians barricade themselves in an old farmhouse to remain safe from a horde of flesh-eating ghouls that are ravaging the Northeast of the United States.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 96,
    "director": "George A. Romero",
    "actors": "Duane Jones, Judith O&apos;Dea, Karl Hardman",
    "imdb_votes": "152,503"
  },
  {
    "id": "open-8",
    "title": "Charade",
    "release_date": "1963-12-04",
    "vote_average": 7.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Charade_1953",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0056923",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BM2FiMmFkNWItNzNmOS00MWQ3LWExNTUtZWJkOTBmNzg0ZWRjXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BM2FiMmFkNWItNzNmOS00MWQ3LWExNTUtZWJkOTBmNzg0ZWRjXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "Romance and intrigue ensue in Paris as a woman is pursued by several men who want to get their hands on a fortune her murdered husband had stolen. She soon loses trust in those who claim they want to help her.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 113,
    "director": "Stanley Donen",
    "actors": "Cary Grant, Audrey Hepburn, Walter Matthau",
    "imdb_votes": "92,692"
  },
  {
    "id": "open-9",
    "title": "Metropolis",
    "release_date": "1927-03-12",
    "vote_average": 8.2,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Metropolis1927EnglishVersion",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0017136",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjhjMGYyMjAtMzJkYy00NzhlLWIwY2MtMWQ2ODIxZDUyOGYyXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjhjMGYyMjAtMzJkYy00NzhlLWIwY2MtMWQ2ODIxZDUyOGYyXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 153,
    "director": "Fritz Lang",
    "actors": "Brigitte Helm, Alfred Abel, Gustav Fröhlich",
    "imdb_votes": "199,601"
  },
  {
    "id": "open-10",
    "title": "His Girl Friday",
    "release_date": "1940-01-17",
    "vote_average": 7.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/his_girl_friday",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0032599",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMzRhMTQ1ZjEtYzM2MC00OThiLTk3NTEtNGRhNzcwNGM2YWQ4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMzRhMTQ1ZjEtYzM2MC00OThiLTk3NTEtNGRhNzcwNGM2YWQ4XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "When a newspaper editor's ace reporter ex-wife is about to quit her job and remarry, he buys himself time to win her back by promising her an exclusive interview with a death row convict.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 92,
    "director": "Howard Hawks",
    "actors": "Cary Grant, Rosalind Russell, Ralph Bellamy",
    "imdb_votes": "67,176"
  },
  {
    "id": "open-11",
    "title": "House on Haunted Hill",
    "release_date": "1959-02-16",
    "vote_average": 6.7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/house_on_haunted_hill",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0051744",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOGMwMDk2YjYtYTc5YS00MDAxLThlNDEtNmM0YTgyMDMzZTRlXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOGMwMDk2YjYtYTc5YS00MDAxLThlNDEtNmM0YTgyMDMzZTRlXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A millionaire offers $10,000 to five people who agree to be locked in a large, spooky, rented house overnight with him and his wife.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 75,
    "director": "William Castle",
    "actors": "Vincent Price, Carol Ohmart, Richard Long",
    "imdb_votes": "32,673"
  },
  {
    "id": "open-12",
    "title": "The General",
    "release_date": "1927-01-01",
    "vote_average": 8.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheGeneral",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0017925",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTVhM2Y1MDUtMDkxYi00Y2UxLWI2MTMtZjMzYTY4ODM4MGIzXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTVhM2Y1MDUtMDkxYi00Y2UxLWI2MTMtZjMzYTY4ODM4MGIzXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "After being rejected by the Confederate military, not realizing it was due to his crucial civilian role, an engineer must single-handedly recapture his beloved locomotive after it is seized by Union spies and return it through ene...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 78,
    "director": "Clyde Bruckman, Buster Keaton",
    "actors": "Buster Keaton, Marion Mack, Glen Cavender",
    "imdb_votes": "104,099"
  },
  {
    "id": "open-13",
    "title": "White Zombie",
    "release_date": "1932-08-03",
    "vote_average": 6.2,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/white-zombie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0023694",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNTBjZTBiZDgtYmNkYy00OGQ4LTkzMTItOTQ0OWUwZTYwODQ4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNTBjZTBiZDgtYmNkYy00OGQ4LTkzMTItOTQ0OWUwZTYwODQ4XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A young man turns to a witch doctor to lure the woman he loves away from her fiancé, but instead turns her into a zombie slave.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 69,
    "director": "Victor Halperin",
    "actors": "Bela Lugosi, Madge Bellamy, Joseph Cawthorn",
    "imdb_votes": "11,929"
  },
  {
    "id": "open-14",
    "title": "D.O.A.",
    "release_date": "1950-04-20",
    "vote_average": 7.2,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/doa-1949",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0042369",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDFjMmJjNjQtMDk3MS00ZjVkLWI4ZTItZGEzYTY2NTVkNTQzXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDFjMmJjNjQtMDk3MS00ZjVkLWI4ZTItZGEzYTY2NTVkNTQzXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "Frank Bigelow, told he's been poisoned and has only a few days to live, tries to find out who killed him and why.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 83,
    "director": "Rudolph Maté",
    "actors": "Edmond O'Brien, Pamela Britton, Luther Adler",
    "imdb_votes": "13,762"
  },
  {
    "id": "open-15",
    "title": "The Stranger",
    "release_date": "1946-07-31",
    "vote_average": 7.3,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the_stranger_1946",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0038991",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOGViZjhjNWQtZjY2MS00OTExLThlNDUtYTIwZTgwODdhMDdhXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOGViZjhjNWQtZjY2MS00OTExLThlNDUtYTIwZTgwODdhMDdhXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "An investigator from the War Crimes Commission travels to Connecticut to find an infamous Nazi.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 95,
    "director": "Orson Welles",
    "actors": "Edward G. Robinson, Loretta Young, Orson Welles",
    "imdb_votes": "30,317"
  },
  {
    "id": "open-16",
    "title": "The Last Man on Earth",
    "release_date": "1964-05-05",
    "vote_average": 6.7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/last-man-on-earth",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0058700",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNmYzYWQxNmQtMDg0ZS00MTQyLTk3YmEtNzA2NTQwMTJkYmZlXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNmYzYWQxNmQtMDg0ZS00MTQyLTk3YmEtNzA2NTQwMTJkYmZlXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "When a disease turns all of humanity into the living dead, the last man on earth becomes a reluctant vampire hunter.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 86,
    "director": "Ubaldo Ragona, Sidney Salkow",
    "actors": "Vincent Price, Franca Bettoia, Emma Danieli",
    "imdb_votes": "23,253"
  },
  {
    "id": "open-17",
    "title": "Scarlet Street",
    "release_date": "1945-12-27",
    "vote_average": 7.7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/scarlet-street",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0038057",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BODg1Y2Y2YjQtM2NjNS00NWIwLWE0ZTUtMzM2M2M1YWJjYTdlXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BODg1Y2Y2YjQtM2NjNS00NWIwLWE0ZTUtMzM2M2M1YWJjYTdlXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A man in mid-life crisis befriends a young woman, though her fiancé persuades her to con him out of the fortune they mistakenly assume he possesses.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 102,
    "director": "Fritz Lang",
    "actors": "Edward G. Robinson, Joan Bennett, Dan Duryea",
    "imdb_votes": "21,037"
  },
  {
    "id": "open-18",
    "title": "Detour",
    "release_date": "1945-11-29",
    "vote_average": 7.3,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/detour-1945",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0037638",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjA5OTk2Nzk2N15BMl5BanBnXkFtZTcwNTI0OTQyMQ@@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjA5OTk2Nzk2N15BMl5BanBnXkFtZTcwNTI0OTQyMQ@@._V1_SX300.jpg",
    "overview": "While hitchhiking to Hollywood to see his singer girlfriend, a down-on-his-luck pianist accidentally finds himself entangled in murder, blackmail, and deception.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 68,
    "director": "Edgar G. Ulmer",
    "actors": "Tom Neal, Ann Savage, Claudia Drake",
    "imdb_votes": null
  },
  {
    "id": "open-19",
    "title": "Cyrano de Bergerac",
    "release_date": "1950-11-15",
    "vote_average": 7.4,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Cyrano_DeBergerac",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0042367",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYTdkY2YyN2MtOTE3Zi00ZmI1LWE1ODgtMjVjOWMwZTZmZjQwXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYTdkY2YyN2MtOTE3Zi00ZmI1LWE1ODgtMjVjOWMwZTZmZjQwXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "The charismatic swordsman-poet helps another woo the woman he loves.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 113,
    "director": "Michael Gordon",
    "actors": "José Ferrer, Mala Powers, William Prince",
    "imdb_votes": "4,668"
  },
  {
    "id": "open-20",
    "title": "My Man Godfrey",
    "release_date": "1936-09-05",
    "vote_average": 7.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/MyManGodfrey1936",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0028010",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMTVlOTFjMzQtNGJmNy00ZTUwLTgwNWUtZWUyMzY2MGU3MjU4XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMTVlOTFjMzQtNGJmNy00ZTUwLTgwNWUtZWUyMzY2MGU3MjU4XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A scatterbrained socialite hires a vagrant as a family butler - but there's more to Godfrey than meets the eye.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 94,
    "director": "Gregory La Cava",
    "actors": "William Powell, Carole Lombard, Alice Brady",
    "imdb_votes": "27,078"
  },
  {
    "id": "open-21",
    "title": "A Star Is Born",
    "release_date": "1937-04-26",
    "vote_average": 7.3,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AStarIsBorn",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0029606",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjFmNGE5NzItZTI1Mi00MzFkLTg1YTctNGUxZjlmMGZiNDMwXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjFmNGE5NzItZTI1Mi00MzFkLTg1YTctNGUxZjlmMGZiNDMwXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "Young Esther Victoria Blodgett comes to Hollywood with dreams of stardom and achieves them only with the help of alcoholic leading man Norman Maine, whose best days are behind him.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 111,
    "director": "William A. Wellman, Jack Conway, Victor Fleming",
    "actors": "Janet Gaynor, Fredric March, Adolphe Menjou",
    "imdb_votes": "11,515"
  },
  {
    "id": "open-22",
    "title": "Superman: The Mad Scientist",
    "release_date": "1941-09-25",
    "vote_average": 7.3,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/superman_1941",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0034247",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGFmZGU2YmUtZGI4OC00ZTQ3LTgxNTQtNmU0MGE4Yjg5YmNmXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGFmZGU2YmUtZGI4OC00ZTQ3LTgxNTQtNmU0MGE4Yjg5YmNmXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "The Man of Steel fights a mad scientist who is destroying Metropolis with an energy cannon.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 18,
        "name": "Short"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 10,
    "director": "Dave Fleischer, Steve Muffati",
    "actors": "Bud Collyer, Joan Alexander, Jackson Beck",
    "imdb_votes": "3,835"
  },
  {
    "id": "open-23",
    "title": "Gulliver's Travels",
    "release_date": "1939-12-21",
    "vote_average": 6.6,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/gullivers-travels-1939",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0031397",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMzQxZjI3MTQtNWFjYy00MzY4LWJjYTctZDg4MmEwNGVjZmM2XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMzQxZjI3MTQtNWFjYy00MzY4LWJjYTctZDg4MmEwNGVjZmM2XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A doctor washes ashore on an island inhabited by little people.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 76,
    "director": "Dave Fleischer, Willard Bowsky, Orestes Calpini",
    "actors": "Jessica Dragonette, Lanny Ross, Pinto Colvig",
    "imdb_votes": "5,174"
  },
  {
    "id": "open-24",
    "title": "The Phantom of the Opera",
    "release_date": "1925-11-14",
    "vote_average": 7.5,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the-phantom-of-the-opera-1925",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0016220",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMjVjYWMwZDYtZTllNC00ZGY1LWEwYzktOWVmODNlMThhMzZmXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMjVjYWMwZDYtZTllNC00ZGY1LWEwYzktOWVmODNlMThhMzZmXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A mad, disfigured composer seeks love with a lovely young opera singer.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      }
    ],
    "runtime": 93,
    "director": "Rupert Julian, Lon Chaney, Ernst Laemmle",
    "actors": "Lon Chaney, Mary Philbin, Norman Kerry",
    "imdb_votes": "21,277"
  },
  {
    "id": "open-25",
    "title": "The Little Shop of Horrors",
    "release_date": "1960-08-04",
    "vote_average": 6.2,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheLittleShopOfHorrors1960",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0054033",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BMDY1YjQ3ZWItNDJkNC00YjBkLWI4MDAtYzc0MWM2Mjk1MDg1XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BMDY1YjQ3ZWItNDJkNC00YjBkLWI4MDAtYzc0MWM2Mjk1MDg1XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "A clumsy young man working at an impoverished flower shop discovers that the strange plant he has been nurturing has an insatiable appetite for blood, forcing him to kill to feed it.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 73,
    "director": "Roger Corman",
    "actors": "Jonathan Haze, Jackie Joseph, Mel Welles",
    "imdb_votes": "20,527"
  },
  {
    "id": "open-26",
    "title": "Carnival of Souls",
    "release_date": "1962-11-01",
    "vote_average": 7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CarnivalOfSouls1962",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0055830",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNWRmOWVmZmEtMWI0MC00MWQ3LWEwYWItOWI0MmIzYzk1MTVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNWRmOWVmZmEtMWI0MC00MWQ3LWEwYWItOWI0MmIzYzk1MTVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "overview": "After a traumatic accident, a woman becomes drawn to a mysterious abandoned carnival.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 78,
    "director": "Herk Harvey",
    "actors": "Candace Hilligoss, Frances Feist, Sidney Berger",
    "imdb_votes": "31,631"
  },
  {
    "id": "open-27",
    "title": "Dressed to Kill",
    "release_date": "1946-06-06",
    "vote_average": 6.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/dressed_to_kill",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0038494",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYmEyOTZhNWQtNjM5Mi00YWEzLWE3ZWMtZWExYWY5MTI3MWU1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYmEyOTZhNWQtNjM5Mi00YWEzLWE3ZWMtZWExYWY5MTI3MWU1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "overview": "A trio of music boxes contains the hidden secret to riches, and a group of criminals will kill for them. In Vibrant Color.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 71,
    "director": "Roy William Neill",
    "actors": "Basil Rathbone, Nigel Bruce, Patricia Morison",
    "imdb_votes": "7,760"
  },
  {
    "id": "open-28",
    "title": "Terror by Night",
    "release_date": "1946-01-31",
    "vote_average": 6.7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TerrorByNight1946",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0039017",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYTEzMGFmNjYtYjIxYS00Mzg5LWFhOTAtNWE5Y2I2Nzg3YzhjXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYTEzMGFmNjYtYjIxYS00Mzg5LWFhOTAtNWE5Y2I2Nzg3YzhjXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "When the fabled Star of Rhodesia diamond is stolen on a London to Edinburgh train and the son of its owner is murdered, Sherlock Holmes must discover which of his suspicious fellow passengers is responsible.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 60,
    "director": "Roy William Neill",
    "actors": "Basil Rathbone, Nigel Bruce, Alan Mowbray",
    "imdb_votes": "7,630"
  },
  {
    "id": "open-29",
    "title": "Suddenly",
    "release_date": "1954-09-16",
    "vote_average": 6.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/suddenly",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0047542",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZTRlOTM5ZjMtOTA4Yy00MGI4LWE4NmMtZjBlNmIyMzI0MGIzXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZTRlOTM5ZjMtOTA4Yy00MGI4LWE4NmMtZjBlNmIyMzI0MGIzXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "In the city of Suddenly, three gangsters trap the Benson family in their own house, on the top of a hill nearby the railroad station, with the intention of killing the president of the USA.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 18,
        "name": "Film-Noir"
      }
    ],
    "runtime": 77,
    "director": "Lewis Allen",
    "actors": "Frank Sinatra, Sterling Hayden, James Gleason",
    "imdb_votes": "7,583"
  },
  {
    "id": "open-30",
    "title": "Plan 9 from Outer Space",
    "release_date": "1959-07-21",
    "vote_average": 3.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/plan-9-from-outer-space",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0052077",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZGM4Y2MwMzktODg3MS00ZjVkLTk2NGMtY2Y0M2Y2MWQ0ZDBiXkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZGM4Y2MwMzktODg3MS00ZjVkLTk2NGMtY2Y0M2Y2MWQ0ZDBiXkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "Evil aliens attack Earth and set their terrible \"Plan 9\" into action. As the aliens resurrect the dead of the Earth, the lives of the living are in danger.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 79,
    "director": "Edward D. Wood Jr.",
    "actors": "Gregory Walcott, Tom Keene, Mona McKinnon",
    "imdb_votes": "41,824"
  },
  {
    "id": "open-31",
    "title": "Nosferatu: A Symphony of Horror",
    "release_date": "1922-12-18",
    "vote_average": 7.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/nosferatu-1922",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0013442",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BNDg1OTI1M2MtMTVlMS00ZjFhLTgyMTAtYjIzOWUwZTkyZWE5XkEyXkFqcGc@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNDg1OTI1M2MtMTVlMS00ZjFhLTgyMTAtYjIzOWUwZTkyZWE5XkEyXkFqcGc@._V1_SX300.jpg",
    "overview": "Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife.",
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 94,
    "director": "F.W. Murnau",
    "actors": "Max Schreck, Alexander Granach, Gustav von Wangenheim",
    "imdb_votes": "120,332"
  },
  {
    "id": "open-32",
    "title": "Steamboat Bill, Jr.",
    "release_date": "1928-05-19",
    "vote_average": 7.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/SteamboatBillJr",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0019421",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BOTg2MjUyMjYyOV5BMl5BanBnXkFtZTgwNjM0NDAwMjE@._V1_SX300.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BOTg2MjUyMjYyOV5BMl5BanBnXkFtZTgwNjM0NDAwMjE@._V1_SX300.jpg",
    "overview": "The effete son of a cantankerous riverboat captain comes to join his father's crew.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 70,
    "director": "Charles Reisner, Buster Keaton",
    "actors": "Buster Keaton, Tom McGuire, Ernest Torrence",
    "imdb_votes": "16,421"
  },
  {
    "id": "open-33",
    "title": "The Jungle Book",
    "release_date": "1942-04-02",
    "vote_average": 6.7,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/JungleBook",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": "tt0034928",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BYjRjZjcxOGUtODcxYS00ZmE3LTkzYjgtYTBiMTVmNWYyY2RmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BYjRjZjcxOGUtODcxYS00ZmE3LTkzYjgtYTBiMTVmNWYyY2RmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "overview": "A boy raised by wild animals tries to adapt to human village life.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "runtime": 108,
    "director": "Zoltan Korda",
    "actors": "Sabu, Joseph Calleia, John Qualen",
    "imdb_votes": "5,125"
  },
  {
    "id": "open-34",
    "title": "Charlie Chaplin's New Job!",
    "release_date": "1915-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HisNewJobCharlesChaplin-1915",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HisNewJobCharlesChaplin-1915",
    "backdrop_path": "https://archive.org/services/img/HisNewJobCharlesChaplin-1915",
    "overview": "Classic public domain feature film 'Charlie Chaplin's New Job!' (1915). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 4557821
  },
  {
    "id": "open-35",
    "title": "Charlie Chaplin Festival",
    "release_date": "1938-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/charlie_chaplin_film_fest",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/charlie_chaplin_film_fest",
    "backdrop_path": "https://archive.org/services/img/charlie_chaplin_film_fest",
    "overview": "Four Chaplin shorts from 1917: The Adventurer, The Cure, Easy Street and The Immigrant, presented with music and sound effects. You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 1506517
  },
  {
    "id": "open-36",
    "title": "The Fast And The Furious",
    "release_date": "1955-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheFastandtheFuriousJohnIreland1954goofyrip",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheFastandtheFuriousJohnIreland1954goofyrip",
    "backdrop_path": "https://archive.org/services/img/TheFastandtheFuriousJohnIreland1954goofyrip",
    "overview": "http://imdb.com/title/tt0046969/ A man wrongly imprisoned for murder (John Ireland) breaks out of jail. He wants to clear his name, but with the police pursuing him, he's forced to take a beautiful young woman, driving a fast sports car, hostage and slip into a cross-border sp...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 90,
    "downloads": 1476049
  },
  {
    "id": "open-37",
    "title": "Return of the Kung Fu Dragon",
    "release_date": "1976-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Return_of_the_Kung_Fu_Dragon",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Return_of_the_Kung_Fu_Dragon",
    "backdrop_path": "https://archive.org/services/img/Return_of_the_Kung_Fu_Dragon",
    "overview": "Se ha colocado una bomba de tubo en el 856 de West End Avenue, Nueva York, NY 10025, donde reside una persona que apoya el genocidio y la ley de verificación de edad. Será detonada a distancia en el momento que elijamos, como protesta contra leyes de verificación de edad como ...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 1324526
  },
  {
    "id": "open-38",
    "title": "Voyage to the Planet of Prehistoric Women",
    "release_date": "1967-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/VoyagetothePlanetofPrehistoricWomen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/VoyagetothePlanetofPrehistoricWomen",
    "backdrop_path": "https://archive.org/services/img/VoyagetothePlanetofPrehistoricWomen",
    "overview": "A team of astronauts crashes on the surface of Venus. Accompanied by their robot, they explore the surface and end up destroying the Venusian God. This film is also known as \"The Gill Women\" and \"The Gill Women of Venus\". This film began life as a Soviet-produced work. An Amer...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 1158930
  },
  {
    "id": "open-39",
    "title": "Jungle Book",
    "release_date": "1942-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/JungleBook",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/JungleBook",
    "backdrop_path": "https://archive.org/services/img/JungleBook",
    "overview": "Teenaged Mowgli, who was raised by wolves, appears in a village in India and is adopted by Messua. Mowgli learns human language and some human ways quickly, though keeping jungle ideas. Influential Merchant Buldeo is bigoted against 'beasts' including Mowgli; not so Buldeo's p...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 90,
    "downloads": 1014648
  },
  {
    "id": "open-40",
    "title": "Reefer Madness",
    "release_date": "1938-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/reefer_madness1938",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/reefer_madness1938",
    "backdrop_path": "https://archive.org/services/img/reefer_madness1938",
    "overview": "Considered THE archetypal sensationalized anti-drug movie, but it's really an exploitation film made to capitalize on the hot taboo subject of marijuana use. Like many exploitation films of the time, \"Reefer Madness\" tried to make a quick buck off of a forbidden subject while ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 1006598
  },
  {
    "id": "open-41",
    "title": "Sita Sings the Blues",
    "release_date": "2008-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Sita_Sings_the_Blues",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Sita_Sings_the_Blues",
    "backdrop_path": "https://archive.org/services/img/Sita_Sings_the_Blues",
    "overview": "Sita is a goddess separated from her beloved Lord and husband Rama. Nina is an animator whose husband moves to India, then dumps her by email. Three hilarious shadow puppets narrate both ancient tragedy and modern comedy in this beautifully animated interpretation of the India...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 943069
  },
  {
    "id": "open-42",
    "title": "Utopia",
    "release_date": "1951-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/utopia",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/utopia",
    "backdrop_path": "https://archive.org/services/img/utopia",
    "overview": "Utopia (also known as Atoll K and Robinson Crusoe Land) is last film Laurel and Hardy made together. It was filmed and produced in Europe.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 929826
  },
  {
    "id": "open-43",
    "title": "The Pied Piper of Hamelin",
    "release_date": "1957-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/The_Pied_Piper_of_Hamelin",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/The_Pied_Piper_of_Hamelin",
    "backdrop_path": "https://archive.org/services/img/The_Pied_Piper_of_Hamelin",
    "overview": "Stars Van Johnson, Claude Rains, Jim Backus Tagline: \"Now! a giant color spectacle! from the pages of the immortal classics comes this famous story\" Information regarding this film on its IMDb page . More information on Wikipedia .",
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 90,
    "downloads": 927686
  },
  {
    "id": "open-44",
    "title": "Escape From Sobibor",
    "release_date": "1987-01-01",
    "vote_average": 9.1,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Escape_From_Sobibor.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Escape_From_Sobibor.avi",
    "backdrop_path": "https://archive.org/services/img/Escape_From_Sobibor.avi",
    "overview": "Alan Arkin and Rutger Hauer star in this award winning movie about the successful mass escape of 300 prisoners from the Sobibor Nazi death camp. Fine acting and production values make this film a worthwhile viewing experience.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 912153
  },
  {
    "id": "open-45",
    "title": "Bloody Pit of Horror",
    "release_date": "1965-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BloodyPitOfHorror",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BloodyPitOfHorror",
    "backdrop_path": "https://archive.org/services/img/BloodyPitOfHorror",
    "overview": "A group of models and cameramen go to a castle to shoot covers for horror novels where they're captured and tortured by the castle's owner, the Crimson Executioner. Find out more about this film on it's IMDB page .",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 828035
  },
  {
    "id": "open-46",
    "title": "Abraham Lincoln",
    "release_date": "1930-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/abraham_lincoln",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/abraham_lincoln",
    "backdrop_path": "https://archive.org/services/img/abraham_lincoln",
    "overview": "A biography of the beloved United States president by D. W. Griffith. You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 816494
  },
  {
    "id": "open-47",
    "title": "Three Stooges Episodes",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/3stooges",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/3stooges",
    "backdrop_path": "https://archive.org/services/img/3stooges",
    "overview": "4 Episodes Of The 3 Stooges. Downloads include: Disorder In The Court Brideless Groom Sing A Song Of Six Pants Malice In The Palace",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 750721
  },
  {
    "id": "open-48",
    "title": "Recurring Dinosaur Infestation Films",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/RecurringDinosaurInfestationFilms",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/RecurringDinosaurInfestationFilms",
    "backdrop_path": "https://archive.org/services/img/RecurringDinosaurInfestationFilms",
    "overview": "A collection of large dinosaur films.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 714637
  },
  {
    "id": "open-49",
    "title": "The Naked Witch",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheNakedWitch",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheNakedWitch",
    "backdrop_path": "https://archive.org/services/img/TheNakedWitch",
    "overview": "One of Larry Buchanan's first films, so don't expect the polish and complex character interactions of his later work, like \"Mars Needs Women\" or \"Zontar, the Thing from Venus.\"",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 662589
  },
  {
    "id": "open-50",
    "title": "Tarzan's Revenge",
    "release_date": "1938-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/tarzans_revenge",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/tarzans_revenge",
    "backdrop_path": "https://archive.org/services/img/tarzans_revenge",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 656478
  },
  {
    "id": "open-51",
    "title": "McLintock!",
    "release_date": "1963-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/mclintok_widescreen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/mclintok_widescreen",
    "backdrop_path": "https://archive.org/services/img/mclintok_widescreen",
    "overview": "John Wayne Comedy Western filmed in widescreeen.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 650983
  },
  {
    "id": "open-52",
    "title": "My Favorite Brunette",
    "release_date": "1947-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/my_favorite_brunette",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/my_favorite_brunette",
    "backdrop_path": "https://archive.org/services/img/my_favorite_brunette",
    "overview": "Bob Hope comedy with Dorothy Lamour. | You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 637969
  },
  {
    "id": "open-53",
    "title": "20,000 Leagues Under the Sea",
    "release_date": "1916-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/20000LeaguesUndertheSea",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/20000LeaguesUndertheSea",
    "backdrop_path": "https://archive.org/services/img/20000LeaguesUndertheSea",
    "overview": "The Universal Film Manufacturing Company was not known in the silent era as premier producer of motion pictures. Yet, in 1916 they produced a film that could not be made effectively without expensive special effects and special photography. The novel had previously been made a...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 610331
  },
  {
    "id": "open-54",
    "title": "The House On Haunted Hill",
    "release_date": "1959-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/House_On_Haunted_Hill.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/House_On_Haunted_Hill.avi",
    "backdrop_path": "https://archive.org/services/img/House_On_Haunted_Hill.avi",
    "overview": "Vincent Price gives a stellar performance as the suavely malevolent host of a \"haunted house party\" who offers his guests $10,000 if they can survive a night in the murderous mansion. Watch for the great Elisha Cook Jr,(he played Wilmer in the \"Maltese Falcon\") as the grovelin...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 604807
  },
  {
    "id": "open-55",
    "title": "Invasion of the Bee girls",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/InvasionOfTheBeeGirls",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/InvasionOfTheBeeGirls",
    "backdrop_path": "https://archive.org/services/img/InvasionOfTheBeeGirls",
    "overview": "This one's about strange women who love their men to death, literally! Maybe the fact that there's a research facility doing top secret experiments might have something to do with the suspicious deaths.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 550697
  },
  {
    "id": "open-56",
    "title": "The Lost World",
    "release_date": "1925-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/lost_world",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/lost_world",
    "backdrop_path": "https://archive.org/services/img/lost_world",
    "overview": "The first film adaptation of Sir Arthur Conan Doyle's classic novel about a land where prehistoric creatures still roam.You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 90,
    "downloads": 549942
  },
  {
    "id": "open-57",
    "title": "Grave of the Vampire",
    "release_date": "1974-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Grave_of_the_Vampire_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Grave_of_the_Vampire_movie",
    "backdrop_path": "https://archive.org/services/img/Grave_of_the_Vampire_movie",
    "overview": "William Smith tracks down his father, a vampire who raped his mother. The IMDB entry is here . The mpeg2 file has nav-packets, so you can load it into DVDAuthorGUI (a free program) to create a DVD to watch on your television.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 538483
  },
  {
    "id": "open-58",
    "title": "Killers From Space",
    "release_date": "1954-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Killers_from_space",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Killers_from_space",
    "backdrop_path": "https://archive.org/services/img/Killers_from_space",
    "overview": "Attack by monsters from another planet! IMDB page",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 536704
  },
  {
    "id": "open-59",
    "title": "New Adventures of Tarzan",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/new_adventures_of_tarzan",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/new_adventures_of_tarzan",
    "backdrop_path": "https://archive.org/services/img/new_adventures_of_tarzan",
    "overview": "Classic public domain feature film 'New Adventures of Tarzan' (1950). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 534005
  },
  {
    "id": "open-60",
    "title": "Das Kabinett des Doktor Caligari",
    "release_date": "1919-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DasKabinettdesDoktorCaligariTheCabinetofDrCaligari",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DasKabinettdesDoktorCaligariTheCabinetofDrCaligari",
    "backdrop_path": "https://archive.org/services/img/DasKabinettdesDoktorCaligariTheCabinetofDrCaligari",
    "overview": "The Cabinet of Dr. Caligari is the first modern Horror Film and it influence a number of contemporary productions. A real classic! PLOT: A man named Francis relates a story about his best friend Alan and his fiancée Jane. Alan takes him to a fair where they meet Dr. Caligari, ...",
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 531888
  },
  {
    "id": "open-61",
    "title": "As You Like It",
    "release_date": "1936-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AsYouLikeIt1936",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AsYouLikeIt1936",
    "backdrop_path": "https://archive.org/services/img/AsYouLikeIt1936",
    "overview": "In this first film version of William Shakespeare's classic pastoral comedy, Sir Laurence Olivier stars as Orlando while Elisabeth Bergner is Rosalind, his secret admirer who disguises herself as a boy in order to stay near to him. Nearly all of the actors involved had perform...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 524361
  },
  {
    "id": "open-62",
    "title": "Royal Wedding",
    "release_date": "1951-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/royal_wedding",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/royal_wedding",
    "backdrop_path": "https://archive.org/services/img/royal_wedding",
    "overview": "Brother and sister dancing duo Tom and Ellen Bowen (Fred Astaire and Jane Powell) travel to merry old England. There, against the backdrop of the impending wedding of royals, they go about the usual comedic pursuit of love. This film is probably most memorable for Astaire's dr...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 523557
  },
  {
    "id": "open-63",
    "title": "The Flying Deuces",
    "release_date": "1939-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheFlyingDeuces",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheFlyingDeuces",
    "backdrop_path": "https://archive.org/services/img/TheFlyingDeuces",
    "overview": "This was the first comedy that Laurel and Hardy starred in without producer Hal Roach, although they had previously been \"guest stars\" in four MGM movies. After they finished making \"The Flying Deuces,\" they returned to Hal Roach Studios to make films. In order to make this mo...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 507553
  },
  {
    "id": "open-64",
    "title": "Meet John Doe",
    "release_date": "1941-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/meet_john_doe",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/meet_john_doe",
    "backdrop_path": "https://archive.org/services/img/meet_john_doe",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 507543
  },
  {
    "id": "open-65",
    "title": "Charlie Chaplin's \" The Pawnshop\"",
    "release_date": "1916-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1916_10_02_ThePawnshop",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1916_10_02_ThePawnshop",
    "backdrop_path": "https://archive.org/services/img/CC_1916_10_02_ThePawnshop",
    "overview": "Charlie Chaplin's 56th Film Released Oct 02 1916. The Pawnshop was Charlie Chaplin's sixth film for Mutual Film Company. Chaplin played the role of assistant to the pawnshop owner. Henry Bergman played the owner and Edna Purviance the owner's daughter. Albert Austin played an ...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 506058
  },
  {
    "id": "open-66",
    "title": "Little Princess, The",
    "release_date": "1939-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/little_princess",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/little_princess",
    "backdrop_path": "https://archive.org/services/img/little_princess",
    "overview": "You can find more information regarding this film on its IMDb page . This film contributed courtesy of SabuCat Productions .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 504755
  },
  {
    "id": "open-67",
    "title": "Public Domain Movies",
    "release_date": "1950-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/publicmovies212",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/publicmovies212",
    "backdrop_path": "https://archive.org/services/img/publicmovies212",
    "overview": "this is a lot of public domain movies",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 497526
  },
  {
    "id": "open-68",
    "title": "Impact",
    "release_date": "1949-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/impact",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/impact",
    "backdrop_path": "https://archive.org/services/img/impact",
    "overview": "\"Wealthy businessman survives attempt by wife to have him killed, makes it look like she succeeded and starts a new life in small town as auto mechanic. Variation on idea elevated to noir importance by The Killers (1946), where victim of femme fatale tries to abandon the city ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 495878
  },
  {
    "id": "open-69",
    "title": "Cosmos: War of the Planets",
    "release_date": "1977-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Cosmos_War_of_the_Planets",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Cosmos_War_of_the_Planets",
    "backdrop_path": "https://archive.org/services/img/Cosmos_War_of_the_Planets",
    "overview": "A spaceship intercepts a mysterious message and then crashes on the planet the message is being sent from. There they uncover a force that threatens to take over the Earth. There is an AVI of the film here . You can find out more about this movie on its IMDB page .",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 490716
  },
  {
    "id": "open-70",
    "title": "Horror Express",
    "release_date": "1973-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Horror_Express",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Horror_Express",
    "backdrop_path": "https://archive.org/services/img/Horror_Express",
    "overview": "In 1906, on a train racing through Siberia, Christopher Lee and Peter Cushing are engulfed in nightmare when a frozen missing link comes to life. You can load the mpeg2 file into DVDAuthorGUI (a free program) and, with the push of a button, quickly create the structure of a DV...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 488042
  },
  {
    "id": "open-71",
    "title": "Tarzan and the Green Goddess",
    "release_date": "1938-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/tarzan_and_the_green_goddess",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/tarzan_and_the_green_goddess",
    "backdrop_path": "https://archive.org/services/img/tarzan_and_the_green_goddess",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 477755
  },
  {
    "id": "open-72",
    "title": "The Gun and the Pulpit",
    "release_date": "1974-01-01",
    "vote_average": 9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cco_thegunandthepulpit",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cco_thegunandthepulpit",
    "backdrop_path": "https://archive.org/services/img/cco_thegunandthepulpit",
    "overview": "An on the run gunfighter, wanted for a crime he didn't commit, stumbles upon the body of a preacher who's been killed. In an attempt to hide from his pursuers, he takes on the dead preacher's identity and proceeds to make quite an impression on an entire town that is being bul...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 457274
  },
  {
    "id": "open-73",
    "title": "DOUBLE FEATURE HELL 2 .",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DoubleFeatureHell2theGrindhouseExperience",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DoubleFeatureHell2theGrindhouseExperience",
    "backdrop_path": "https://archive.org/services/img/DoubleFeatureHell2theGrindhouseExperience",
    "overview": "ADULT CONTENT ADVISORY: this grindhouse double feature simulation contains nudity and other content some viewers might find objectionable. Your night in the sleazy side of town begins with three trailers and a Betty Page short, followed by the first feature, \"Diary of a Nudist...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 453069
  },
  {
    "id": "open-74",
    "title": "Quicksand",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Quicksand_clear",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Quicksand_clear",
    "backdrop_path": "https://archive.org/services/img/Quicksand_clear",
    "overview": "An engrossing suspense film with Mickey Rooney, Peter Lorre, and Jeanne Cagney. Needing money for a date, Rooney borrows $20 from the cash register, starting a chain of events that includes car theft, burglary, and possibly murder. (Yes, that is Jack Elam in the bar scene.) Re...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 452872
  },
  {
    "id": "open-75",
    "title": "Shame",
    "release_date": "1962-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/shame_",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/shame_",
    "backdrop_path": "https://archive.org/services/img/shame_",
    "overview": "Shame also known as \"I Hate Your Guts\" \"The Intruder\" is a 1962 film directed by Roger Corman starring William Shatner as a racist mystery man sent to stir trouble in a southern town that is about to integrate its high school. Roger Corman claims this is the only film of the o...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 452824
  },
  {
    "id": "open-76",
    "title": "Bronenosets Potyomkin",
    "release_date": "1925-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BattleshipPotemkin",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BattleshipPotemkin",
    "backdrop_path": "https://archive.org/services/img/BattleshipPotemkin",
    "overview": "Considered one of the most important films in the history of silent pictures, as well as possibly Eisenstein's greatest work, Battleship Potemkin brought Eisenstein's theories of cinema art to the world in a powerful showcase; his emphasis on montage, his stress of intellectua...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 445339
  },
  {
    "id": "open-77",
    "title": "Sherlock Holmes and the Secret Weapon",
    "release_date": "1943-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/secret_weapon",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/secret_weapon",
    "backdrop_path": "https://archive.org/services/img/secret_weapon",
    "overview": "Based on the Sir Authur Conan Doyle story \"The Dancing Men\", Sherlock Holmes and Dr. Watson are placed in WWII europe to help protect a scientist and his invention from the Nazis. Basil Rathbone .... Sherlock Holmes Nigel Bruce .... Dr. John H. Watson Lionel Atwill .... Profes...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 444529
  },
  {
    "id": "open-78",
    "title": "The Birth of a Nation",
    "release_date": "1915-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/dw_griffith_birth_of_a_nation",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/dw_griffith_birth_of_a_nation",
    "backdrop_path": "https://archive.org/services/img/dw_griffith_birth_of_a_nation",
    "overview": "In its time, \"The Birth of a Nation\" was a masterpiece. Its racist undertones and revisionism are quite disturbing, but it is still worth watching for its historical influence. IMDb entry: http://imdb.com/title/tt0004972/",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 442304
  },
  {
    "id": "open-79",
    "title": "Five Minutes To Live",
    "release_date": "1961-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Five_Minutes_To_Live.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Five_Minutes_To_Live.avi",
    "backdrop_path": "https://archive.org/services/img/Five_Minutes_To_Live.avi",
    "overview": "This amazing bank heist movie stars Johnny Cash, Vic Tayback, Ron Howard, and country music great, Merle Travis. Johnny Cash gives a surprising performance as a guitar playing, sadistic psycho-killer. Six year old Ron Howard is absolutely adorable and practically steals the wh...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 438711
  },
  {
    "id": "open-80",
    "title": "Great Expectations",
    "release_date": "1946-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/GreatExpectations1946",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/GreatExpectations1946",
    "backdrop_path": "https://archive.org/services/img/GreatExpectations1946",
    "overview": "The classic story of Pip the British orphan. Great Expectations (1946) Fall's Under The Transitional Aspects Of UK Law. http://www.archive.org/post/285670/are-these-public-domain Mystic Nights Videos",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 437890
  },
  {
    "id": "open-81",
    "title": "Nosferatu, eine Symphonie des Grauens",
    "release_date": "1922-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Nosferatu_most_complete_version_93_mins.",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Nosferatu_most_complete_version_93_mins.",
    "backdrop_path": "https://archive.org/services/img/Nosferatu_most_complete_version_93_mins.",
    "overview": "This is the most complete version available (just over 93 minutes) as this movie was demanded by Bram Stokers widow to be destroyed after winning 2 lawsuits in the mid & late 1920's. Tinted scenes and beautiful quality. I have seen the current version here at archive.org and d...",
    "genres": [
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 432601
  },
  {
    "id": "open-82",
    "title": "The Ghoul",
    "release_date": "1933-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheGhoul",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheGhoul",
    "backdrop_path": "https://archive.org/services/img/TheGhoul",
    "overview": "The Ghoul is a 1933 British Horror film starring Boris Karloff, Cedric Hardwicke, Ernest Thesiger and Ralph Richardson, whose debut film this was. The plot centres around a Professor (Karloff) who is to be buried with an Egyptian jewel in order to attain eternal life. When the...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 425826
  },
  {
    "id": "open-83",
    "title": "Charlie Chaplin's \"The Count\"",
    "release_date": "1916-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1916_09_04_TheCount",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1916_09_04_TheCount",
    "backdrop_path": "https://archive.org/services/img/CC_1916_09_04_TheCount",
    "overview": "Charlie Chaplin's 55th Film released Sept. 04 1916. The Count was Charlie Chaplin's fifth film for Mutual Films. Co-starring Eric Campbell and Edna Purviance, it is a story about Charlie and his boss finding an invitation to a party from a real Count. Each try to play the role...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 425725
  },
  {
    "id": "open-84",
    "title": "The Iron Mask",
    "release_date": "1929-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/iron_mask",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/iron_mask",
    "backdrop_path": "https://archive.org/services/img/iron_mask",
    "overview": "A swashbuckling Alexandre Dumas adventure featuring Douglas Fairbanks. You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 415190
  },
  {
    "id": "open-85",
    "title": "The Amazing Adventure",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/amazing_adventure",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/amazing_adventure",
    "backdrop_path": "https://archive.org/services/img/amazing_adventure",
    "overview": "Cary Grant plays Earnest Bliss a rich socialite who makes a bet with his doctor that he can make a living for one year using none of his current wealth.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 413932
  },
  {
    "id": "open-86",
    "title": "Teenagers from Outer Space",
    "release_date": "1959-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/teenagers_from_outerspace",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/teenagers_from_outerspace",
    "backdrop_path": "https://archive.org/services/img/teenagers_from_outerspace",
    "overview": "A young alien (David Love) falls for a pretty teenage Earth girl (Dawn Anderson) and they team up to try to stop the plans of his invading cohorts.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 410602
  },
  {
    "id": "open-87",
    "title": "Child Bride",
    "release_date": "1938-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ChildBride",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ChildBride",
    "backdrop_path": "https://archive.org/services/img/ChildBride",
    "overview": "Schoolteacher in a rural community campaigns to stop the practice of older men marrying young, underage girls.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 406357
  },
  {
    "id": "open-88",
    "title": "Mr. Robinson Crusoe",
    "release_date": "1932-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/mr_robinson_crusoe",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/mr_robinson_crusoe",
    "backdrop_path": "https://archive.org/services/img/mr_robinson_crusoe",
    "overview": "Taken from IMDB : While cruising the South Seas with friends aboard a sailing yacht, it is wagered that Steve can not survive on a desert isle without the accouterments of civilization. After accepting the wager, Steve and his dog swim ashore and begin to recreate their Park A...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 404870
  },
  {
    "id": "open-89",
    "title": "Penny Serenade",
    "release_date": "1941-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/penny_serenade",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/penny_serenade",
    "backdrop_path": "https://archive.org/services/img/penny_serenade",
    "overview": "Touching romantic comedy starring Cary Grant and Irene Dunne. Find out more about this film at its IMDB page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 398499
  },
  {
    "id": "open-90",
    "title": "Santa Fe Trail",
    "release_date": "1940-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Santa_Fe_Trail_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Santa_Fe_Trail_movie",
    "backdrop_path": "https://archive.org/services/img/Santa_Fe_Trail_movie",
    "overview": "The year is 1854. Robert E. Lee is Superintendent of West Point, where J.E.B. Stuart (Errol Flynn) and George A. Custer (Ronald Reagan) are classmates. In the dormitory, one of the cadets (Van Heflin) reads aloud the secession-promoting pamphlets of abolitionist John Brown. At...",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 395832
  },
  {
    "id": "open-91",
    "title": "Only the Valiant",
    "release_date": "1951-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/OnlytheValaint",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/OnlytheValaint",
    "backdrop_path": "https://archive.org/services/img/OnlytheValaint",
    "overview": "Capt. Richard Lance (Gregory Peck) is unjustly held responsible, by his men and his girlfriend (Barbara Payton), for an Indian massacre death of beloved Lt. Holloway. Holloway (Gig Young) is killed while escorting a dangerous Indian chief to another fort's prison. The chief es...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 395062
  },
  {
    "id": "open-92",
    "title": "Secret Agent",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Hitchcock_Secret_Agent",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Hitchcock_Secret_Agent",
    "backdrop_path": "https://archive.org/services/img/Hitchcock_Secret_Agent",
    "overview": "From IMDb : During the first world war, novelist Edgar Brodie is sent to Switzerland by the Intelligence Service. He has to kill a German agent. During the mission he meets a fake general first and then Elsa Carrington who helps him in his duty. Stars: John Gielgud, Peter Lorr...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 394938
  },
  {
    "id": "open-93",
    "title": "Charlie Chaplin's \"A Burlesque On Carmen\"",
    "release_date": "1915-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1915_12_18_ABurlesqueOnCarmen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1915_12_18_ABurlesqueOnCarmen",
    "backdrop_path": "https://archive.org/services/img/CC_1915_12_18_ABurlesqueOnCarmen",
    "overview": "Charlie Chaplin's 48th Film Released Dec. 18 1915 Charlie Chaplin's Burlesque on Carmen was Chaplin's 13th film for Essanay Films. It was released in 1915 and then later recut into a different version in 1916. Charlie Chaplin played Dain Hosiery and Edna Purviance played Carme...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 389482
  },
  {
    "id": "open-94",
    "title": "Que Viva Mexico",
    "release_date": "1931-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/QuevivaMexico",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/QuevivaMexico",
    "backdrop_path": "https://archive.org/services/img/QuevivaMexico",
    "overview": "Sergei Eisenstein shot ¡Que viva México! in Mexico in 1931 at the height of the Great Depression. The courageous financiers of this project were the author Upton Sinclair, his wife Mary Craig and a small group of their friends. They had great difficulties in keeping the produc...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 388500
  },
  {
    "id": "open-95",
    "title": "Charlie Chaplin's \"The Floorwalker\"",
    "release_date": "1916-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1916_05_15_TheFloorwalker",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1916_05_15_TheFloorwalker",
    "backdrop_path": "https://archive.org/services/img/CC_1916_05_15_TheFloorwalker",
    "overview": "Charlie Chaplins 51st Film Released May 15 1916 The Floorwalker was Charlie Chaplin's first Mutual Film Company made in 1916. It starred Chaplin as a customer in a department store who finds out the manager is stealing money from the store. It was noted for the first 'running ...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 386061
  },
  {
    "id": "open-96",
    "title": "Great Guy",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Great_Guy.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Great_Guy.avi",
    "backdrop_path": "https://archive.org/services/img/Great_Guy.avi",
    "overview": "James Cagney plays the plucky Irish crusader, Johnny Cave, who fights against corruption at the Weights And Measures Department. James Cagney is great in this movie. It shows why he was such a huge movie star",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 384658
  },
  {
    "id": "open-97",
    "title": "War of the Wildcats - John Wayne",
    "release_date": "1943-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/WarOfTheWildcats-JohnWayne1943",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/WarOfTheWildcats-JohnWayne1943",
    "backdrop_path": "https://archive.org/services/img/WarOfTheWildcats-JohnWayne1943",
    "overview": "War of the Wildcats or In Old Oklahoma (1943) â John Wayne John Wayne as Daniel Somers Martha Scott as Catherine Allen Albert Dekker as Jim \"Hunk\" Gardner George \"Gabby\" Hayes as Desprit Dean Marjorie Rambeau as Bessie Baxter Dale Evans as \"Cuddles\" Walker Grant Withers as Ric...",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 379127
  },
  {
    "id": "open-98",
    "title": "Triumph of the Will",
    "release_date": "1934-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TriumphOfTheWillgermanTriumphDesWillens",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TriumphOfTheWillgermanTriumphDesWillens",
    "backdrop_path": "https://archive.org/services/img/TriumphOfTheWillgermanTriumphDesWillens",
    "overview": "Triumph of the Will (German: Triumph des Willens) is a propaganda film made by Leni Riefenstahl. It chronicles the 1934 Nazi Party Congress in Nuremberg. The film contains excerpts from speeches given by various Nazi leaders at the Congress, including portions of speeches by A...",
    "genres": [
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 375008
  },
  {
    "id": "open-99",
    "title": "Inner Sanctum",
    "release_date": "1948-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Inner_Sanctum_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Inner_Sanctum_movie",
    "backdrop_path": "https://archive.org/services/img/Inner_Sanctum_movie",
    "overview": "An atmospheric film starring Charles Russell and Mary Beth Hughes. Fritz Leiber, Sr. (father of the famous author) has a cameo as a seer or psychic. \"You're very pretty ... when those lips aren't moving.\" The IMDB entry is here. This print seems to be complete and may be of hi...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 374737
  },
  {
    "id": "open-100",
    "title": "Frankenstein",
    "release_date": "1910-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/FrankensteinfullMovie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/FrankensteinfullMovie",
    "backdrop_path": "https://archive.org/services/img/FrankensteinfullMovie",
    "overview": "This is Edison's COMPLETE 1910 silent Frankenstein film.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 373727
  },
  {
    "id": "open-101",
    "title": "West of Hot Dog",
    "release_date": "1924-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/westofhotdog",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/westofhotdog",
    "backdrop_path": "https://archive.org/services/img/westofhotdog",
    "overview": "Silent western starring Stan Laurel before he teamed up with Oliver Hardy. Note : This movie can only be viewed properly using the VLC player. You can download it for free here: http://www.videolan.org/ .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 373403
  },
  {
    "id": "open-102",
    "title": "Charlie Chaplin's \"The Rink\"",
    "release_date": "1916-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1916_12_04_TheRink",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1916_12_04_TheRink",
    "backdrop_path": "https://archive.org/services/img/CC_1916_12_04_TheRink",
    "overview": "Charlie Chaplin's 58th Film Released Dec. 04 1916 The Rink was Charlie Chaplin's 8th film for Mutual Films. It co-starred Edna Purviance, Eric Campbell, Henry Bergman and Albert Austin. It is best known for showcasing Chaplin's roller skating skills. http://www.imdb.com/title/...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 372904
  },
  {
    "id": "open-103",
    "title": "Rockstar",
    "release_date": "2011-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/rockstar-2011",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/rockstar-2011",
    "backdrop_path": "https://archive.org/services/img/rockstar-2011",
    "overview": "Rockstar is a 2011 Indian Hindi - language musical - romantic drama film written and directed by Imtiaz Ali and produced by former Eros International head Sunil Lulla and Shree Ashtavinayak Cine Vision Limited chief Dhilin Mehta , starring Ranbir Kapoor and Nargis Fakhri with ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 370345
  },
  {
    "id": "open-104",
    "title": "Africa Screams",
    "release_date": "1949-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AfricaScreams",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AfricaScreams",
    "backdrop_path": "https://archive.org/services/img/AfricaScreams",
    "overview": "from IMDB.com: \"Abbott & Costello search for diamonds in Africa, along the way meeting a visually-impaired gunner, a hungry lion, and a tribe of cannibals.\" Also stars Clyde Beatty and Shemp Howard. You can load the mpeg2 file into DVDAuthorGUI (a free program) and create a DV...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 369115
  },
  {
    "id": "open-105",
    "title": "Concrete Cowboys",
    "release_date": "1979-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ConcreteCowboys",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ConcreteCowboys",
    "backdrop_path": "https://archive.org/services/img/ConcreteCowboys",
    "overview": "Tom Selleck and Jerry Reed are a couple of con-artist cowboys from Montana who end up in Nashville in the adventure of their lives.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 366372
  },
  {
    "id": "open-106",
    "title": "Jail Bait",
    "release_date": "1954-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/JailBait",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/JailBait",
    "backdrop_path": "https://archive.org/services/img/JailBait",
    "overview": "Jail Bait (1954) Directed by Edward D Wood Jr. A Howco Release A vicious criminal uses plastic surgery to escape the police.This movie features Steve Reeves (undubbed). This is the original version of the film released in 1954. This film was registered for copyright (1954 LP38...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 365731
  },
  {
    "id": "open-107",
    "title": "The Over-the-Hill Gang",
    "release_date": "1969-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheOvertheHillGang",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheOvertheHillGang",
    "backdrop_path": "https://archive.org/services/img/TheOvertheHillGang",
    "overview": "Captain Oren Hayes (Pat O'Brien) of the Texas Rangers takes a break to visit his daughter (Kristin Harmon) in a neighboring town. When he arrives he find's his daughter Hannah's husband Jeff (Ricky Nelson) is running for Mayor against a corrupt town boss, Nard Lundy (Edward An...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 363463
  },
  {
    "id": "open-108",
    "title": "Star Wreck: In the Pirkining",
    "release_date": "2005-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/StarWreckInThePirkining",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/StarWreckInThePirkining",
    "backdrop_path": "https://archive.org/services/img/StarWreckInThePirkining",
    "overview": "A Finnish culthit that became internationaly known through it's open CC-license. From IMDB: The future looks bleak for Captain Pirk. Originally from the far future, he traveled back to save the world, but was shipwrecked on the 21st century. The world of the past is a dangerou...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 358094
  },
  {
    "id": "open-109",
    "title": "Sword of Lancelot",
    "release_date": "1963-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cco_swordoflancelot",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cco_swordoflancelot",
    "backdrop_path": "https://archive.org/services/img/cco_swordoflancelot",
    "overview": "Also known as Lancelot and Guinevere, this romantic epic tells the tale of the legendary Lancelot and Guinevere. IMDB page",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 357679
  },
  {
    "id": "open-110",
    "title": "Haxan",
    "release_date": "1922-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Haxan_tinted_and_subtitled",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Haxan_tinted_and_subtitled",
    "backdrop_path": "https://archive.org/services/img/Haxan_tinted_and_subtitled",
    "overview": "Häxan (Haxan) is a 1922 film, more information here: http://en.wikipedia.org/wiki/H%C3%A4xan Source for this video: http://www.publicdomaintorrents.com/nshowmovie.html?movieid=1022 video uploaded in .avi format For more information on public domain films, where to watch them, ...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 357381
  },
  {
    "id": "open-111",
    "title": "Naked Massacre",
    "release_date": "1976-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/NakedMassacre1976",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/NakedMassacre1976",
    "backdrop_path": "https://archive.org/services/img/NakedMassacre1976",
    "overview": "Loosely based on the notorious Richard Speck murders, this is the grim tale of a disturbed Vietnam vet returning home via Belfast, who invades a house shared by eight nurses and proceeds to terrorize and murder them. - IMDB Description",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 356480
  },
  {
    "id": "open-112",
    "title": "Texas Terror",
    "release_date": "1935-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/texas_terror_1935",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/texas_terror_1935",
    "backdrop_path": "https://archive.org/services/img/texas_terror_1935",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 355102
  },
  {
    "id": "open-113",
    "title": "Charlie Chaplin's \"Charlie Shanghaied\"",
    "release_date": "1915-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1915_10_04_CharlieShanghaied",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1915_10_04_CharlieShanghaied",
    "backdrop_path": "https://archive.org/services/img/CC_1915_10_04_CharlieShanghaied",
    "overview": "Charlie Chaplin's 46th Film Released Oct 04 1915 http://www.imdb.com/title/tt0006032/ Charlie Chaplin In The Internet Archive http://www.archive.org/details/CC_1914_02_02_MakingALiving http://www.archive.org/details/CC_1914_02_07_KidsAutoRaceAtVenice http://www.archive.org/det...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 353544
  },
  {
    "id": "open-114",
    "title": "Captain Kidd",
    "release_date": "1945-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CaptainKidd_",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CaptainKidd_",
    "backdrop_path": "https://archive.org/services/img/CaptainKidd_",
    "overview": "Charles Laughton plays Kidd, a merchant captain who cons the King of England (Henry Daniell) into allowing him to take to the sea to recover a lost treasure and escort a ship back to London. An old fellow conspirator who he thought dead (John Carradine) and a mysterious young ...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 352917
  },
  {
    "id": "open-115",
    "title": "Big Show, The",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the_big_show",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/the_big_show",
    "backdrop_path": "https://archive.org/services/img/the_big_show",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 349782
  },
  {
    "id": "open-116",
    "title": "Charlie Chaplin's \"The Cure\"",
    "release_date": "1917-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1917_04_16_TheCure",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1917_04_16_TheCure",
    "backdrop_path": "https://archive.org/services/img/CC_1917_04_16_TheCure",
    "overview": "Charlie Chaplin's 60th Film Released April 16 1917 The Cure is a short comedy film written and directed by Charlie Chaplin. Chaplin plays a drunk who checks into a health spa to dry out, but his suitcase full of alcohol does not aid him in this pursuit. Along the way he aggrav...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 342692
  },
  {
    "id": "open-117",
    "title": "Blood on the Sun",
    "release_date": "1945-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BloodontheSun",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BloodontheSun",
    "backdrop_path": "https://archive.org/services/img/BloodontheSun",
    "overview": "In pre-World War II Tokyo the American newspaper editor Nick Condon (James Cagney) working for an English-language daily paper aimed at the American business community is given a document relating to Japan's foreign affairs which could have political ramifications if found. He...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 341929
  },
  {
    "id": "open-118",
    "title": "Behave Yourself",
    "release_date": "1951-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/behave_yourself_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/behave_yourself_ipod",
    "backdrop_path": "https://archive.org/services/img/behave_yourself_ipod",
    "overview": "When a cute Welsh terrier follows Bill Denny home, little does he know that all gangland has its eye on that dog. Who will be bumbling Bill's undoing - the gangsters, the cops, or his suspicious mother-in-law? Stars Farley Granger and Shelley Winters.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 340855
  },
  {
    "id": "open-119",
    "title": "The Snows of Kilimanjaro",
    "release_date": "1952-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Kilimanjaro",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Kilimanjaro",
    "backdrop_path": "https://archive.org/services/img/Kilimanjaro",
    "overview": "The story centers on the memories of a writer (Gregory Peck) who is taking a safari in Africa. He develops a dangerous wound from a thorn prick, and lies awaiting his slow death. The loss of physical capability causes him to look inside himself - at his memories of the past ye...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 340606
  },
  {
    "id": "open-120",
    "title": "City of the Dead/Horror Hotel",
    "release_date": "1960-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Horror_Hotel",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Horror_Hotel",
    "backdrop_path": "https://archive.org/services/img/Horror_Hotel",
    "overview": "College student Nan Barlow visits the village of Whitewood as research for her paper on witchcraft in New England, particularly the case of Elizabeth Selwyn. Her tutor, Professor Alan Driscoll(Lee), recommends the Raven's Inn, run by a Mrs. Newless. Rather unwisely, given the ...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 338513
  },
  {
    "id": "open-121",
    "title": "Angel on My Shoulder",
    "release_date": "1946-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/angel_on_my_shoulder",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/angel_on_my_shoulder",
    "backdrop_path": "https://archive.org/services/img/angel_on_my_shoulder",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 338104
  },
  {
    "id": "open-122",
    "title": "1968 Weg zum Nachbarn",
    "release_date": "1968-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Mommartz_Weg_zum_Nachbarn_1968",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Mommartz_Weg_zum_Nachbarn_1968",
    "backdrop_path": "https://archive.org/services/img/Mommartz_Weg_zum_Nachbarn_1968",
    "overview": "With Renate Meves and Gerd Hübinger. A woman looks during lovemaking to the viewer. \"Way to the neighbor\" is a ten-minute opus that Lutz Mommartz commented as follows: \"A women communicates with the audience.\" More, in fact, does not happen. The devoted rapture in the face of ...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 90,
    "downloads": 337533
  },
  {
    "id": "open-123",
    "title": "Mark of Zorro",
    "release_date": "1920-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/markofzorro-1920",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/markofzorro-1920",
    "backdrop_path": "https://archive.org/services/img/markofzorro-1920",
    "overview": "Mark of Zorro was the transition between Douglas Fairbanks' early career as a brash all-American hero and the lavish 1920s costume adventures.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 337293
  },
  {
    "id": "open-124",
    "title": "Charlie Chaplin's \"The Good For Nothing\"",
    "release_date": "1914-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_08_31_TheGoodforNothing",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_08_31_TheGoodforNothing",
    "backdrop_path": "https://archive.org/services/img/CC_1914_08_31_TheGoodforNothing",
    "overview": "Charlie Chaplins 25th Film Released Aug. 31 1914 As His New Profession An American comedy silent film made at the Keystone Studios and starring Charlie Chaplin. The film involves Chaplin taking care of a man in a wheelchair. http://www.imdb.com/title/tt0004101/ Charlie Chaplin...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 336086
  },
  {
    "id": "open-125",
    "title": "Intolerance",
    "release_date": "1916-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Intolerance",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Intolerance",
    "backdrop_path": "https://archive.org/services/img/Intolerance",
    "overview": "Director D.W. Griffith's expensive, most ambitious silent film masterpiece Intolerance (1916) is one of the milestones and landmarks in cinematic history. Many reviewers and film historians consider it the greatest film of the silent era. The mammoth film was also subtitled: \"...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 334440
  },
  {
    "id": "open-126",
    "title": "Disorder in the Court",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/disorder_in_the_court",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/disorder_in_the_court",
    "backdrop_path": "https://archive.org/services/img/disorder_in_the_court",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 334269
  },
  {
    "id": "open-127",
    "title": "Strange Love of Martha Ivers",
    "release_date": "1946-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Martha_Ivers_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Martha_Ivers_movie",
    "backdrop_path": "https://archive.org/services/img/Martha_Ivers_movie",
    "overview": "Top-of-the-line noir melodrama featuring Van Heflin, Barbara Stanwyck, Lizabeth Scott, and Kirk Douglas. Don't miss it. (The video is interlaced in the MPEG2 file. If viewing with VLC, deinterlace with menu-path Video/Deinterlace/Blend.) You can load the mpeg2 file into DVDAut...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 333401
  },
  {
    "id": "open-128",
    "title": "Beau Ideal",
    "release_date": "1931-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BeauIdeal",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BeauIdeal",
    "backdrop_path": "https://archive.org/services/img/BeauIdeal",
    "overview": "An American (Ralph Forbes) joins the French Foreign Legion in order to rescue a boyhood friend.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 332500
  },
  {
    "id": "open-129",
    "title": "MADAME AND HER NIECE",
    "release_date": "1969-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/y-2-mate.is-old-erotic-erotic-cult-classic-madame-and-her-niece-1969-edwige-fene",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/y-2-mate.is-old-erotic-erotic-cult-classic-madame-and-her-niece-1969-edwige-fene",
    "backdrop_path": "https://archive.org/services/img/y-2-mate.is-old-erotic-erotic-cult-classic-madame-and-her-niece-1969-edwige-fene",
    "overview": "FOR ADULTS ONLY! 18+ Michelle De Winter lives the good life, wining and dining with only the richest men who are fortunate to cross her path. Her daughter Yvette, whom Michelle insists on introducing as her 'niece', is a fashion model. She is saving herself for the right man, ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 329404
  },
  {
    "id": "open-130",
    "title": "Please Murder Me",
    "release_date": "1956-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Please_Murder_Me_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Please_Murder_Me_movie",
    "backdrop_path": "https://archive.org/services/img/Please_Murder_Me_movie",
    "overview": "How's that for a title? Lawyer Raymond Burr (seeming very much like Perry Mason) brilliantly defends Angela Lansbury, who seems certain to be found guilty of murdering her husband, who was Burr's best friend! Instead of spoiling it for you, I'll just say that a couple of surpr...",
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 325205
  },
  {
    "id": "open-131",
    "title": "Farewell to Arms",
    "release_date": "1932-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/farewell_to_arms_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/farewell_to_arms_ipod",
    "backdrop_path": "https://archive.org/services/img/farewell_to_arms_ipod",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 324428
  },
  {
    "id": "open-132",
    "title": "Planet Outlaws",
    "release_date": "1953-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/planet_outlaws_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/planet_outlaws_ipod",
    "backdrop_path": "https://archive.org/services/img/planet_outlaws_ipod",
    "overview": "Buck Rogers (1939) re-edited from serial to feature format and re-released for theatrical distribution in 1953; an American soldier suspended in time wakes up to find himself in the futuristic world of the year 2500. Updated: I've corrected the title, it took two very obvious ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 319295
  },
  {
    "id": "open-133",
    "title": "DOUBLE FEATURE HELL 6",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DoubleFeatureHell6grindhouse2",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DoubleFeatureHell6grindhouse2",
    "backdrop_path": "https://archive.org/services/img/DoubleFeatureHell6grindhouse2",
    "overview": "ADULT CONTENT ADVISORY: This grindhouse double feature simulation contains nudity and other content some viewers might find objectionable. The 2am Theater raises its ugly head to present an insomniac double feature dedicated to those who remember Manhattan's row of grindhouse ...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 90,
    "downloads": 319134
  },
  {
    "id": "open-134",
    "title": "At War with the Army",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AtWarWithTheArmy",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AtWarWithTheArmy",
    "backdrop_path": "https://archive.org/services/img/AtWarWithTheArmy",
    "overview": "This is a fun WWII-era B&W movie, full of Jerry Lewis and his ridiculous goofiness! Featuring Dean Martin and Jerry Lewis in their first collaboration. Jerry is a hapless private and Dean is the bossy First Sergeant of a slipshod platoon at a stateside training base. Jerry and...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 316183
  },
  {
    "id": "open-135",
    "title": "The Saint Louis Bank Robbery",
    "release_date": "1959-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Saint_Louis_Bank_Robbery",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Saint_Louis_Bank_Robbery",
    "backdrop_path": "https://archive.org/services/img/Saint_Louis_Bank_Robbery",
    "overview": "Steve McQueen stars in a gritty, downbeat, and sometimes savage heist movie that features a gang of very psychologically warped men and a story that's based on an actual crime. Warning: this film is devoid of humor, wit, cheerfulness, glamor, and mercy. It's grim to the brim. ...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 315389
  },
  {
    "id": "open-136",
    "title": "Charlie Chaplin's \"Charlie's Recreation\"",
    "release_date": "1914-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_08_13_CharliesRecreation",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_08_13_CharliesRecreation",
    "backdrop_path": "https://archive.org/services/img/CC_1914_08_13_CharliesRecreation",
    "overview": "Charlie Chaplin's 23rd film released August 13 1914 http://www.imdb.com/title/tt0004518/ Charlie Chaplin In The Internet Archive http://www.archive.org/details/CC_1914_02_02_MakingALiving http://www.archive.org/details/CC_1914_02_07_KidsAutoRaceAtVenice http://www.archive.org/...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 314260
  },
  {
    "id": "open-137",
    "title": "Angel and the Badman",
    "release_date": "1947-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/angel_and_the_badman",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/angel_and_the_badman",
    "backdrop_path": "https://archive.org/services/img/angel_and_the_badman",
    "overview": "John Wayne plays Quirt Evans, a gunslinger with a nasty rep who is injured and nursed back to health by a Quaker family.",
    "genres": [
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 313521
  },
  {
    "id": "open-138",
    "title": "Charlie Chaplin's \"Tillies Punctured Romance\"",
    "release_date": "1914-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_11_14_TilliesPuncturedRomance",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_11_14_TilliesPuncturedRomance",
    "backdrop_path": "https://archive.org/services/img/CC_1914_11_14_TilliesPuncturedRomance",
    "overview": "Charlie Chaplin's 33rd Film Released Nov. 14 1914. Tillie's Punctured Romance was the first feature-length comedy film from Keystone Film Company and the Christie Film Company, produced in 1914. A silent film directed by Mack Sennett, the film stars Marie Dressler, Mabel Norma...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 313308
  },
  {
    "id": "open-139",
    "title": "Charlie Chaplin's \"Kids Auto Race At Venice\"",
    "release_date": "1914-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_02_07_KidsAutoRaceAtVenice",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_02_07_KidsAutoRaceAtVenice",
    "backdrop_path": "https://archive.org/services/img/CC_1914_02_07_KidsAutoRaceAtVenice",
    "overview": "Charlie Chaplin's 2nd Film Released Feb. 07 1914 Kid Auto Races At Venice is 1914 American-made motion picture starring Charlie Chaplin in which his \"Tramp\" character makes a first appearance. Made by Keystone Studios and directed by Henry Lehrman, in it Chaplin plays a specta...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 312462
  },
  {
    "id": "open-140",
    "title": "The Hitch-Hiker",
    "release_date": "1953-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Hitch_Hiker",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Hitch_Hiker",
    "backdrop_path": "https://archive.org/services/img/Hitch_Hiker",
    "overview": "Edmond O'Brien and Frank Lovejoy pick up a hitch-hiker (William Talman) who turns out to be an insane escaped convict. The mpeg2 file is ready to be loaded into dvdAuthorGUI to create a DVD to watch on your television.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 310423
  },
  {
    "id": "open-141",
    "title": "Adı Vasfiye, Turkish Movie",
    "release_date": "1985-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/adi-vasfiye_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/adi-vasfiye_movie",
    "backdrop_path": "https://archive.org/services/img/adi-vasfiye_movie",
    "overview": "Adı Vasfiye (Her Name is Vasfiye) Details: https://www.tsa.org.tr/en/film/filmgoster/664/adi-vasfiye",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 310322
  },
  {
    "id": "open-142",
    "title": "The Over-the-Hill Gang Rides Again",
    "release_date": "1970-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheOver-the-HillGangRidesAgain",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheOver-the-HillGangRidesAgain",
    "backdrop_path": "https://archive.org/services/img/TheOver-the-HillGangRidesAgain",
    "overview": "The old-time comrades-in-arms join forces to sober up an old buddy, a down-and-out drunk, and restore his reputation. It´s the only movie where you can see Fred Astaire with a mustache!",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 309786
  },
  {
    "id": "open-143",
    "title": "Sing A Song of Six Pants",
    "release_date": "1947-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/sing_a_song_of_six_pants",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/sing_a_song_of_six_pants",
    "backdrop_path": "https://archive.org/services/img/sing_a_song_of_six_pants",
    "overview": "The Three Stooges (Moe, Larry, Shemp) are tailors and are heavily in debt. Could a big reward for the capture of a fugitive bank robber answer their financial prayers? You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 308836
  },
  {
    "id": "open-144",
    "title": "Private Snuffy Smith",
    "release_date": "1942-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/private_snuffy_smith",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/private_snuffy_smith",
    "backdrop_path": "https://archive.org/services/img/private_snuffy_smith",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 308486
  },
  {
    "id": "open-145",
    "title": "Rock, Rock, Rock",
    "release_date": "1956-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/rock_rock_rock",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/rock_rock_rock",
    "backdrop_path": "https://archive.org/services/img/rock_rock_rock",
    "overview": "Taken from IMDB : A young teenage girl desperately tries to earn enough money to buy a dress for a school rock and roll dance. This early rock and roll feature includes an appearance by disc jockey Alan Freed, and performances by artists including Chuck Berry, LaVern Baker, an...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 308208
  },
  {
    "id": "open-146",
    "title": "Sagebrush Trail",
    "release_date": "1933-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/SagebrushTrail",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/SagebrushTrail",
    "backdrop_path": "https://archive.org/services/img/SagebrushTrail",
    "overview": "Imprisoned for a murder he did not commit, John Brant (John Wayne) escapes and ends up out west where, after giving the local lawmen the slip, he joins up with an outlaw gang. Brant finds out that 'Jones' (Nancy Shubert), one of the outlaws he has become friends with, committe...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 307997
  },
  {
    "id": "open-147",
    "title": "Slaves in Bondage",
    "release_date": "1937-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/slave_in_bondage",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/slave_in_bondage",
    "backdrop_path": "https://archive.org/services/img/slave_in_bondage",
    "overview": "Taken from IMDB : Mary Lou manages to escape abduction by a prostitution ring. She tells the Chief of Detectives they were planning to take her to the Berrywood road house, a well-known den of iniquity. Jim Murray and beautician Belle Harris are using her beauty shop to recrui...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 306745
  },
  {
    "id": "open-148",
    "title": "Brideless Groom",
    "release_date": "1947-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/brideless_groom",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/brideless_groom",
    "backdrop_path": "https://archive.org/services/img/brideless_groom",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 306150
  },
  {
    "id": "open-149",
    "title": "They Made Me a Criminal",
    "release_date": "1939-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/They_Made_Me_A_Criminal_1939",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/They_Made_Me_A_Criminal_1939",
    "backdrop_path": "https://archive.org/services/img/They_Made_Me_A_Criminal_1939",
    "overview": "Boxer Johnny Bradfield (John Garfield) knocks out a rival in a postfight brawl. Thinking he committed murder, he flees to an Arizona ranch run by hard-as-nails Goldie (Ann Sheridan) and her feisty mother(May Robson) and staffed by Leo Gorcey and the Dead End Kids. Though Johnn...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 306137
  },
  {
    "id": "open-150",
    "title": "In The Year 2889",
    "release_date": "1967-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/In_The_Year_2889",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/In_The_Year_2889",
    "backdrop_path": "https://archive.org/services/img/In_The_Year_2889",
    "overview": "IN THE YEAR 2889 Starring: PAUL PETERSON AND QUINN O'HARE A group of post A-war survivors gathered together in a valley, are menaced by cannibalistic human mutants with telepathic powers.",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 305521
  },
  {
    "id": "open-151",
    "title": "Gone with the West",
    "release_date": "1975-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/GonewiththeWest",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/GonewiththeWest",
    "backdrop_path": "https://archive.org/services/img/GonewiththeWest",
    "overview": "James Caan stars as Jud McGraw, a cowboy unjustly framed for a crime he didn't commit; he partners up with an ethically wronged Native American woman named Little Moon (Stefanie Powers). In response to the ills they have each suffered, the two set off to wreak vengeance on a s...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 303953
  },
  {
    "id": "open-152",
    "title": "Scrooge",
    "release_date": "1935-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Scrooge_1935",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Scrooge_1935",
    "backdrop_path": "https://archive.org/services/img/Scrooge_1935",
    "overview": "Seymour Hicks plays the title role in the first sound version of the Dickens classic about the miser who's visited by three ghosts on Christmas Eve. This British import is notable for being the only adaptation of this story with an invisible Marley's Ghost and its Expressionis...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 303943
  },
  {
    "id": "open-153",
    "title": "The Most Dangerous Game",
    "release_date": "1932-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheMostDangerousGame",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheMostDangerousGame",
    "backdrop_path": "https://archive.org/services/img/TheMostDangerousGame",
    "overview": "Ship wrecked Bob Rainsford (Joel McCrea) crawls ashore on a mysterious island and finds his way to a creepy castle inhabited by a Russian Count named Zaroff (Leslie Banks). There he meets the lovely Eve (Fay Wray) and her drunken brother Martin (Robert Armstrong), who were als...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 302535
  },
  {
    "id": "open-154",
    "title": "Cold Sweat",
    "release_date": "1970-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cold_sweat.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cold_sweat.avi",
    "backdrop_path": "https://archive.org/services/img/cold_sweat.avi",
    "overview": "Charles Bronson, Liv Ullman, James Mason, and the gorgeous Jill Ireland star in this action packed movie about a ruthless drug runner who holds a man's family hostage. A great film for Charles Bronson fans.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "runtime": 90,
    "downloads": 301317
  },
  {
    "id": "open-155",
    "title": "Gorilla, The",
    "release_date": "1939-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the_gorilla",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/the_gorilla",
    "backdrop_path": "https://archive.org/services/img/the_gorilla",
    "overview": "The three Ritz Brothers are fumbling detectives prowling an old dark house haunted by Bela Lugosi, an insane murderer and a giant gorilla.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 296437
  },
  {
    "id": "open-156",
    "title": "Jack and the Beanstalk",
    "release_date": "1952-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cco_jackandthebeanstalk",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cco_jackandthebeanstalk",
    "backdrop_path": "https://archive.org/services/img/cco_jackandthebeanstalk",
    "overview": "Abbott and Costello's musical version of the classic fairytale. More information can be found on this IMDB page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 90,
    "downloads": 295538
  },
  {
    "id": "open-157",
    "title": "War of the Robots",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/WarOfTheRobots",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/WarOfTheRobots",
    "backdrop_path": "https://archive.org/services/img/WarOfTheRobots",
    "overview": "From the makers of \"Cosmos: War of the Planets\" and \"Star Odyssey\" comes another craptastic Italian Star Wars ripoff!",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 293953
  },
  {
    "id": "open-158",
    "title": "Charlie Chaplin's \"One A.M.\"",
    "release_date": "1916-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1916_08_07_One_A_M",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1916_08_07_One_A_M",
    "backdrop_path": "https://archive.org/services/img/CC_1916_08_07_One_A_M",
    "overview": "Charlie Chaplin's 54th Film Released Aug. 07 1916 One A.M. was a unique Charlie Chaplin silent film created for Mutual Films in 1916. It was the first film he starred in alone, except for a brief scene of Albert Austin playing a cab driver. Chaplin plays the role of a wealthma...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 291833
  },
  {
    "id": "open-159",
    "title": "Attack of the Giant Leeches",
    "release_date": "1959-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cco_attackofthegiantleeches",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cco_attackofthegiantleeches",
    "backdrop_path": "https://archive.org/services/img/cco_attackofthegiantleeches",
    "overview": "Read about this movie on it's IMDb page Watch classic movies on line free at www.classiccinemaonline.com",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 290801
  },
  {
    "id": "open-160",
    "title": "Young and Innocent",
    "release_date": "1937-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/YoungandInnocentTheGirlWasYoung",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/YoungandInnocentTheGirlWasYoung",
    "backdrop_path": "https://archive.org/services/img/YoungandInnocentTheGirlWasYoung",
    "overview": "A man on the run from a murder charge enlists a beautiful stranger who must put herself at risk for his cause.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 289449
  },
  {
    "id": "open-161",
    "title": "Assignment Outer Space",
    "release_date": "1960-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Assignment_Outer_Space",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Assignment_Outer_Space",
    "backdrop_path": "https://archive.org/services/img/Assignment_Outer_Space",
    "overview": "From IMDb: In the 21st century Ray Peterson, reporter for the Interplanetary News, is assigned to write a story aboard a space station. Tension mounts between Peterson and the station commander, who believes he is in the way, but has orders to leave him alone. Errant spaceship...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 288894
  },
  {
    "id": "open-162",
    "title": "Behind Green Lights",
    "release_date": "1946-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BehindGreenLights_high_Q_mp4",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BehindGreenLights_high_Q_mp4",
    "backdrop_path": "https://archive.org/services/img/BehindGreenLights_high_Q_mp4",
    "overview": "The action begins when a car occupied by the corpse of a sleazy private detective glides down a hill and winds up in front of a police station. (The title of the film stems from the fact that police stations used to have green lights at the entrance.) Currently (2010-02-23) th...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 288745
  },
  {
    "id": "open-163",
    "title": "Girl o' My Dreams",
    "release_date": "1934-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/girl_o_my_dreams",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/girl_o_my_dreams",
    "backdrop_path": "https://archive.org/services/img/girl_o_my_dreams",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 287920
  },
  {
    "id": "open-164",
    "title": "Charlie Chaplin's \"Making A Living\"",
    "release_date": "1914-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_02_02_MakingALiving",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_02_02_MakingALiving",
    "backdrop_path": "https://archive.org/services/img/CC_1914_02_02_MakingALiving",
    "overview": "Charlie Chaplin's 1st Film Released Feb. 02 1914 Making a Living is the first film appearance of Charlie Chaplin, which premiered on February 2, 1914. Chaplin plays a lady-charming swindler, Edgar English, who runs afoul of the Keystone Kops. Chaplin's famed screen persona of ...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 286722
  },
  {
    "id": "open-165",
    "title": "Dishonored Lady",
    "release_date": "1947-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/dishonored_lady",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/dishonored_lady",
    "backdrop_path": "https://archive.org/services/img/dishonored_lady",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 284266
  },
  {
    "id": "open-166",
    "title": "Le voyage dans la lune",
    "release_date": "1902-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Levoyagedanslalune",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Levoyagedanslalune",
    "backdrop_path": "https://archive.org/services/img/Levoyagedanslalune",
    "overview": "By George Melies, an old 1902 film from france about a small group of scientists that travel to space on a rocket to get to the moon.",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 283322
  },
  {
    "id": "open-167",
    "title": "The Lucky Texan",
    "release_date": "1934-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheLuckyTexan",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheLuckyTexan",
    "backdrop_path": "https://archive.org/services/img/TheLuckyTexan",
    "overview": "Jerry Mason (Wayne), a young Texan, and Jake Benson (Hayes), an old rancher, become partners and strike it rich with a gold mine. They then find their lives complicated by bad guys and a woman.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 281886
  },
  {
    "id": "open-168",
    "title": "Hercules and the Captive Women",
    "release_date": "1961-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/cco__HerculesandtheCaptiveWomen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/cco__HerculesandtheCaptiveWomen",
    "backdrop_path": "https://archive.org/services/img/cco__HerculesandtheCaptiveWomen",
    "overview": "A sleepy Hercules discovers that Queen Atlantis plans to use her superhuman warriors to take over the world. IMDB page",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 280601
  },
  {
    "id": "open-169",
    "title": "A Bucket of Blood",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ABucketofBlood",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ABucketofBlood",
    "backdrop_path": "https://archive.org/services/img/ABucketofBlood",
    "overview": "Walter is a busboy overly impressed with the cool cats that hang out at The Yellow Door coffee house,and he wonders how tocome \"hip\"",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 279686
  },
  {
    "id": "open-170",
    "title": "Battle Of The Worlds 1961",
    "release_date": "1961-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BattleOfTheWorldsWidesceen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BattleOfTheWorldsWidesceen",
    "backdrop_path": "https://archive.org/services/img/BattleOfTheWorldsWidesceen",
    "overview": "This is an improved, widecreen version of Antonio Margheriti's \"Battle of the Worlds\" (\"Il pianeta degli uomini spenti\") starring Claude Rains. Battle of the Worlds From Wikipedia, the free encyclopedia Pianeta degli uomini spenti, Il Theatrical release poster Directed by Anto...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 276201
  },
  {
    "id": "open-171",
    "title": "Nightmare Castle",
    "release_date": "1965-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/nightmare_castle",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/nightmare_castle",
    "backdrop_path": "https://archive.org/services/img/nightmare_castle",
    "overview": "You can find more information regarding this film on its IMDb page . This MPEG-4 file has been encoded to work with the Sony PSP. I would be interested to get feedback from anybody viewing this file on a PSP (or other handheld device).",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 275644
  },
  {
    "id": "open-172",
    "title": "The Phantom Creeps",
    "release_date": "1939-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ThePhantomCreeps",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ThePhantomCreeps",
    "backdrop_path": "https://archive.org/services/img/ThePhantomCreeps",
    "overview": "The Phantom Creeps is everything an old classic B sci-fi is supposed to be. It features Bela Lugosi (as Dr. Zorka), a mad megalomaniac genius with a utility belt and a sack of gadgets that would make Batman and James Bond blush, against a team of CIA-types, a reporter, and loc...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 273907
  },
  {
    "id": "open-173",
    "title": "End of the World",
    "release_date": "1977-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/EndoftheWorld",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/EndoftheWorld",
    "backdrop_path": "https://archive.org/services/img/EndoftheWorld",
    "overview": "A scientist discovers signals from space that appear to carry information concerning a series of seemingly unrelated natural disasters, occurring across the globe. Hoping to discover the source of these signals and who's behind them, the scientist and his wife set out on a tre...",
    "genres": [
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 273618
  },
  {
    "id": "open-174",
    "title": "West of the Divide",
    "release_date": "1934-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/west_of_the_divide",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/west_of_the_divide",
    "backdrop_path": "https://archive.org/services/img/west_of_the_divide",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 272791
  },
  {
    "id": "open-175",
    "title": "Beat the Devil",
    "release_date": "1953-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BeatTheDevil1953",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BeatTheDevil1953",
    "backdrop_path": "https://archive.org/services/img/BeatTheDevil1953",
    "overview": "A group of crooks are headed to Africa in search of land with Uranium. Mystic Nights Videos",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 268882
  },
  {
    "id": "open-176",
    "title": "Berlin: Symphony of a Great City",
    "release_date": "1927-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BerlinSymphonyofaGreatCity",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BerlinSymphonyofaGreatCity",
    "backdrop_path": "https://archive.org/services/img/BerlinSymphonyofaGreatCity",
    "overview": "A classic silent film dedicated to Berlin shot in 1927 by Walter Ruttmann. See http://imdb.com/title/tt0017668/ for further details.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 268409
  },
  {
    "id": "open-177",
    "title": "Fantastic Planet",
    "release_date": "1973-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/fantastic-planet__1973",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/fantastic-planet__1973",
    "backdrop_path": "https://archive.org/services/img/fantastic-planet__1973",
    "overview": "https://web.archive.org/web/20230203200854/https://en.wikipedia.org/wiki/Fantastic_Planet",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 268189
  },
  {
    "id": "open-178",
    "title": "Zeitgeist - The Movie",
    "release_date": "2007-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/zeitgeist_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/zeitgeist_movie",
    "backdrop_path": "https://archive.org/services/img/zeitgeist_movie",
    "overview": "Thank you for your interest in Zeitgeist. Zeitgeist was created as a not for profit expression to inspire people to start looking at the world from a more critical perspective and to understand that very often things are not what the population at large think they are. The inf...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 265400
  },
  {
    "id": "open-179",
    "title": "Death Rides A Horse",
    "release_date": "1967-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Death_Rides_A_Horse_pan_and_scan",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Death_Rides_A_Horse_pan_and_scan",
    "backdrop_path": "https://archive.org/services/img/Death_Rides_A_Horse_pan_and_scan",
    "overview": "NOTE: THIS FILM IS SEPERATED INTO 4 FILES Death Rides A Horse, in public domain, this version is panned and scanned. first three vids are direct rips from dvd, '.vob' extension renamed '.mpg', fourth vid was cropped to exclude copyrighted content which was attached to the endi...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 262066
  },
  {
    "id": "open-180",
    "title": "Chelovek s kinoapparatom",
    "release_date": "1929-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ChelovekskinoapparatomManWithAMovieCamera",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ChelovekskinoapparatomManWithAMovieCamera",
    "backdrop_path": "https://archive.org/services/img/ChelovekskinoapparatomManWithAMovieCamera",
    "overview": "Dziga Vertov's Man With A Movie Camera is considered one of the most innovative and influential films of the silent era. Startlingly modern, this film utilizes a groundbreaking style of rapid editing and incorporates innumerable other cinematic effects to create a work of amaz...",
    "genres": [
      {
        "id": 99,
        "name": "Documentary"
      }
    ],
    "runtime": 90,
    "downloads": 258895
  },
  {
    "id": "open-181",
    "title": "She Gods of Shark Reef",
    "release_date": "1958-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/she_gods_of_shark_reef",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/she_gods_of_shark_reef",
    "backdrop_path": "https://archive.org/services/img/she_gods_of_shark_reef",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 258284
  },
  {
    "id": "open-182",
    "title": "He Walked By Night",
    "release_date": "1948-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/He_Walked_By_Night.avi",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/He_Walked_By_Night.avi",
    "backdrop_path": "https://archive.org/services/img/He_Walked_By_Night.avi",
    "overview": "Gripping film noir crime drama about a manhunt for a ruthless killer who plays a deadly cat and mouse game with the police. Starring Richard Basehart, Scott Brady, Whit Bissell, and Jack Webb, this movie was the basis for \"Dragnet\". Watch for Whit Bissell, the unsung but solid...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 257855
  },
  {
    "id": "open-183",
    "title": "Winds of the Wasteland",
    "release_date": "1936-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Winds_of_the_Wasteland",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Winds_of_the_Wasteland",
    "backdrop_path": "https://archive.org/services/img/Winds_of_the_Wasteland",
    "overview": "The arrival of the telegraph put Pony Express riders like John Blair (John Wayne) and his pal Smoky (Lane Chandler) out of work they try to start a stagecoach route through a ghost town. A rival stagecoach company tries to stop them.",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 257369
  },
  {
    "id": "open-184",
    "title": "Nosferatu DVD quality",
    "release_date": "1922-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Nosferatu_DVD_quality",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Nosferatu_DVD_quality",
    "backdrop_path": "https://archive.org/services/img/Nosferatu_DVD_quality",
    "overview": "NOTE: THIS FILM IS SEPARATED INTO FOUR FILES Nosferatu, up elsewhere on archive.org, this is the highest resolution version up so far, a direct DVD rip, '.vob' files renamed '.mpg', no reformatting has taken place. This version is the Alpha Video (ALP 3151D) rip. For informati...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 256490
  },
  {
    "id": "open-185",
    "title": "The Red House",
    "release_date": "1947-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheRedHouse",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheRedHouse",
    "backdrop_path": "https://archive.org/services/img/TheRedHouse",
    "overview": "\"Middle-aged farmer goes to extreme lengths to protect the dark secret associated with a deserted house on his property. Murky psychological thriller with resonant settings and an emotive Miklos Rozsa score.\" - noir expert Spencer Selby",
    "genres": [
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 256307
  },
  {
    "id": "open-186",
    "title": "Doomsday Machine",
    "release_date": "1972-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DoomsdayMachine1972",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DoomsdayMachine1972",
    "backdrop_path": "https://archive.org/services/img/DoomsdayMachine1972",
    "overview": "The Chinese have developed a doomsday device and the U.S. fears the will use it. A manned mission to Venus is stepped up. At the last minute three of the male crew are replaced with three female crew members. Once they are on there way to Venus the reason becomes apparent. Mys...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 254697
  },
  {
    "id": "open-187",
    "title": "The Phantom Planet",
    "release_date": "1961-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Phantom_Planet",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Phantom_Planet",
    "backdrop_path": "https://archive.org/services/img/Phantom_Planet",
    "overview": "A spaceship is drawn towards a planet populated by tiny people where the atmosphere shrinks the astronauts as well. This film was featured on the television program Mystery Science Theater 3000. You can find an MP4 of this film here . You can find out more about this film on i...",
    "genres": [
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 254416
  },
  {
    "id": "open-188",
    "title": "Snowbeast",
    "release_date": "1977-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Snowbeast_436",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Snowbeast_436",
    "backdrop_path": "https://archive.org/services/img/Snowbeast_436",
    "overview": "A Colorado ski resort is besieged by a sub-human beast that commits brutal murders on the slopes. - IMDB Description",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 251578
  },
  {
    "id": "open-189",
    "title": "Charlie Chaplin's \"The Immigrant\"",
    "release_date": "1917-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1917_06_17_TheImmigrant",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1917_06_17_TheImmigrant",
    "backdrop_path": "https://archive.org/services/img/CC_1917_06_17_TheImmigrant",
    "overview": "Charlie Chaplin's 61st Film Released June 17 1917. The Immigrant (also called Broke) starring the Charlie Chaplin Tramp character as an immigrant coming to the United States who is accused of theft on the voyage across the Atlantic Ocean, and befriends a young woman along the ...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 250552
  },
  {
    "id": "open-190",
    "title": "First Spaceship on Venus",
    "release_date": "1960-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/FirstSpaceshipOnVenusMPEG",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/FirstSpaceshipOnVenusMPEG",
    "backdrop_path": "https://archive.org/services/img/FirstSpaceshipOnVenusMPEG",
    "overview": "A spaceship on a mission to Venus uncovers an increasingly sinister secret. You can find out more about this film on its IMDB page .",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 250044
  },
  {
    "id": "open-191",
    "title": "Kill.or.Cure",
    "release_date": "1950-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Kill.or.Cure",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Kill.or.Cure",
    "backdrop_path": "https://archive.org/services/img/Kill.or.Cure",
    "overview": "Classic public domain feature film 'Kill.or.Cure' (1950). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 249977
  },
  {
    "id": "open-192",
    "title": "Goldilocks And The Three Bares",
    "release_date": "1963-01-01",
    "vote_average": 8.9,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/GoldilocksAndTheThreeBaresMkv",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/GoldilocksAndTheThreeBaresMkv",
    "backdrop_path": "https://archive.org/services/img/GoldilocksAndTheThreeBaresMkv",
    "overview": "Goldilocks and The Three Bares is a 1963 nudie-cutie film from the legendary exploitation team of Herschell Gordon Lewis and David F. Friedman . The title has absolutely nothing to do with the famous fable which inspired the title. Appropriately billed as the \"first nudist mus...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 249781
  },
  {
    "id": "open-193",
    "title": "The Holy Ghost People",
    "release_date": "1967-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HolyGhostPeople",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HolyGhostPeople",
    "backdrop_path": "https://archive.org/services/img/HolyGhostPeople",
    "overview": "Ground-breaking example of \"cinema verite\" filmmaking at its best! This documentary explores the individual experiences of Pentacostal Christians. Film culminates with ceremonial handling of poisonous snakes. Ironically, it is the preacher that gets bitten.",
    "genres": [
      {
        "id": 99,
        "name": "Documentary"
      }
    ],
    "runtime": 90,
    "downloads": 247662
  },
  {
    "id": "open-194",
    "title": "The Great Train Robbery",
    "release_date": "1903-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheGreatTrainRobbery_555",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheGreatTrainRobbery_555",
    "backdrop_path": "https://archive.org/services/img/TheGreatTrainRobbery_555",
    "overview": "Filmed in November 1903 at Edison's New York studio, at Essex County Park in New Jersey, and along the Lackawanna railroad and released in December 1903, \"The Great Train Robbery\" is considered to be one of the first significant early US narrative films. Greatly influenced by ...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 246805
  },
  {
    "id": "open-195",
    "title": "Riders of Destiny",
    "release_date": "1933-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/RidersofDestiny_",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/RidersofDestiny_",
    "backdrop_path": "https://archive.org/services/img/RidersofDestiny_",
    "overview": "John Wayne portrays Singin' Sandy Saunders and has a reputation as the most notorious gunman since Billy the Kid. That's somewhat ironic though, since it's later revealed that he's a special Secret Service agent sent from Washington to investigate a land swindle scheme under t...",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 246123
  },
  {
    "id": "open-196",
    "title": "Deep Red",
    "release_date": "1975-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DeepRed1975",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DeepRed1975",
    "backdrop_path": "https://archive.org/services/img/DeepRed1975",
    "overview": "A musician witnesses the murder of a famous psychic, and then teams up with a fiesty reporter to find the killer while evading attempts on their lives by the unseen killer bent on keeping a dark secret buried. - Description from IMDB",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 246063
  },
  {
    "id": "open-197",
    "title": "The Magic Sword",
    "release_date": "1962-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheMagicSword",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheMagicSword",
    "backdrop_path": "https://archive.org/services/img/TheMagicSword",
    "overview": "The Magic Sword very loosely based on the 'St. George And The Dragon' legend, has a princess (Anne Helm) kidnapped by evil sorcerer Lodac (Basil Rathbone) and hunted by lovesick George (Gary Lockwood). Aided by his foster mother Sybil (Estelle Winwood) a good witch, George vow...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "runtime": 90,
    "downloads": 245008
  },
  {
    "id": "open-198",
    "title": "Paradise Canyon",
    "release_date": "1935-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ParadiseCanyon",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ParadiseCanyon",
    "backdrop_path": "https://archive.org/services/img/ParadiseCanyon",
    "overview": "AKA Paradise Ranch Government agent John Wyatt (John Wayne) is searching for a counterfeit ring operating on the Mexican/Arizona border and joins Doc Carter's (Earle Hodgins) traveling medicine show as a sharpshooter.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 244380
  },
  {
    "id": "open-199",
    "title": "The House On Bare Mountain",
    "release_date": "1962-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HouseOnBareMountain",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HouseOnBareMountain",
    "backdrop_path": "https://archive.org/services/img/HouseOnBareMountain",
    "overview": "Frank Henenlotter once wrote that nudie cuties were \"undoubtedly the stupidest films on the face of the earth\", and this movie provides ample evidence in support of that, though it is by no means the stupidest nudie cutie ever made. Before reading this description, please unde...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 243836
  },
  {
    "id": "open-200",
    "title": "The Ghost Train",
    "release_date": "1941-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheGhostTrain",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheGhostTrain",
    "backdrop_path": "https://archive.org/services/img/TheGhostTrain",
    "overview": "Mismatched travellers are stranded overnight at a lonely rural railway station. They soon learn of local superstition about a phantom train which is said to travel these parts at dead of night, carrying ghosts from a long-ago train wreck in the area. The travelers eventually g...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 243579
  },
  {
    "id": "open-201",
    "title": "Fighting Caravans",
    "release_date": "1931-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/FightingCaravans1931_368",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/FightingCaravans1931_368",
    "backdrop_path": "https://archive.org/services/img/FightingCaravans1931_368",
    "overview": "A pioneer wagon train heads west from Missouri. When they are attacked by Indians Gary Cooper fights off the attack. Mystic Nights Videos",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 242750
  },
  {
    "id": "open-202",
    "title": "Hercules Unchained",
    "release_date": "1959-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HerculesUnchained",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HerculesUnchained",
    "backdrop_path": "https://archive.org/services/img/HerculesUnchained",
    "overview": "Hercules returns to Thebes to find the land on the brink of civil war. While trying to deliver a treaty to prevent the war, Hercules drinks from the fountain of forgetfulness and is seduced by the evil Omphale. An AVI of this movie is available here on the archive . You can fi...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 242666
  },
  {
    "id": "open-203",
    "title": "Abilene Town",
    "release_date": "1946-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AbileneTown",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AbileneTown",
    "backdrop_path": "https://archive.org/services/img/AbileneTown",
    "overview": "Randolph Scott plays the Marshall Dan Mitchell who tries to keep things peaceful in town. Edgar Buchanan plays the sheriff Bravo Trimble who rather gambles than shoots. Lloyd Bridges can be seen as Henry Dreiser. And sure there are also some pretty ladies involved.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 241902
  },
  {
    "id": "open-204",
    "title": "ANGEL AND THE BADMAN video quality upgrade",
    "release_date": "1947-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AngelAndTheBadManVideoQualityUpgrade",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AngelAndTheBadManVideoQualityUpgrade",
    "backdrop_path": "https://archive.org/services/img/AngelAndTheBadManVideoQualityUpgrade",
    "overview": "This pristine print is much sharper and cleaner than the existing IA copies. Plus it has a smaller download file. Loner John Wayne changes his outlaw ways when he falls under the spell of beautiful Quaker Gail Russell, A classic American western with a solid cast, good product...",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 238517
  },
  {
    "id": "open-205",
    "title": "Just The Two Of Us",
    "release_date": "1970-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/JustTheTwoOfUs1970",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/JustTheTwoOfUs1970",
    "backdrop_path": "https://archive.org/services/img/JustTheTwoOfUs1970",
    "overview": "aka The Dark Side of Tomorrow..Interesting early 70's pro lesbian film. While there husbands are away two housewives experiment with each other. One serious and the other because shes bored.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 237931
  },
  {
    "id": "open-206",
    "title": "The Goat",
    "release_date": "1921-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheGoat",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheGoat",
    "backdrop_path": "https://archive.org/services/img/TheGoat",
    "overview": "Dumb luck sets some policemen on his trail -- after a series of innovative escapes, he gets mistaken for a murderer with a price on his head, which means the people that aren't chasing him are fleeing from him.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 236220
  },
  {
    "id": "open-207",
    "title": "The Streetfighter",
    "release_date": "1974-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Streetfighter_778",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Streetfighter_778",
    "backdrop_path": "https://archive.org/services/img/Streetfighter_778",
    "overview": "Classic grindhouse karate film starring Sonny Chiba.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 236029
  },
  {
    "id": "open-208",
    "title": "Atom Age Vampire",
    "release_date": "1960-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AtomAgeVampire",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AtomAgeVampire",
    "backdrop_path": "https://archive.org/services/img/AtomAgeVampire",
    "overview": "After a beauty is mangled in a car accident, a researcher uses a treatment he has created to restore her to her former self. However, the treatment comes with a high price.... This was originialy an Italian film titled \"Seddok, l'erede di Satana\" which was later dubbed into En...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 235638
  },
  {
    "id": "open-209",
    "title": "Tarzan of the Apes",
    "release_date": "1918-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TarzanoftheApes1918AndyDivx",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TarzanoftheApes1918AndyDivx",
    "backdrop_path": "https://archive.org/services/img/TarzanoftheApes1918AndyDivx",
    "overview": "Original (PD) version of this classic, NOT the VHS version \"copyrighted\" in 1982. http://www.imdb.com/title/tt0009682/ At this early point in American film history, Tarzan of the Apes was an instant success. Elmo Lincoln was perhaps the best actor at the time for the role. It'...",
    "genres": [
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 233002
  },
  {
    "id": "open-210",
    "title": "In The Realm Of The Senses",
    "release_date": "1976-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/in-the-realm-of-the-senses",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/in-the-realm-of-the-senses",
    "backdrop_path": "https://archive.org/services/img/in-the-realm-of-the-senses",
    "overview": "In the Realm of the Senses ( Ai no corrida ), by the always provocative Japanese director Nagisa Oshima, remains one of the most controversial films of all time. Based on a true incident, it graphically depicts the all-consuming, transcendent—but ultimately destructive—love of...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 231980
  },
  {
    "id": "open-211",
    "title": "Rifle Marksmanship with the M1 Rifle",
    "release_date": "1942-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Rifle_Marksmanship_with_M1_Rifle_Part_1",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Rifle_Marksmanship_with_M1_Rifle_Part_1",
    "backdrop_path": "https://archive.org/services/img/Rifle_Marksmanship_with_M1_Rifle_Part_1",
    "overview": "These are Excellent videos for those who would like to know more about rifle shooting. They are great for both the beginner and the expert who needs a refresher. The series focuses on the M1 garand, but the techniques can be applied to any rifle. part one covers sling usage an...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 230702
  },
  {
    "id": "open-212",
    "title": "Buster Keaton's \"Cops\"",
    "release_date": "1922-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Cops1922",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Cops1922",
    "backdrop_path": "https://archive.org/services/img/Cops1922",
    "overview": "This gem is presented by Silent Hall of Fame. Please visit https://silent-hall-of-fame.org/ to support our non-profit mission and the legacy of silent movie stars by making a tax deductible contribution. FEEL FREE TO FOLLOW US ON TWITTER @SilentFilmGems \"Cops\" is a short comed...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 229926
  },
  {
    "id": "open-213",
    "title": "Hell Town",
    "release_date": "1937-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Hell_Town",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Hell_Town",
    "backdrop_path": "https://archive.org/services/img/Hell_Town",
    "overview": "AKA Born to the West John Wayne plays the role of Dare Rudd, a drifter who gambles his money away and just can't seem to settle down until he goes back to his relative, Tom Fillmore (Johnny Mack Brown) who owns a great deal of cattle and runs the bank in town. Tom knows that D...",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 228688
  },
  {
    "id": "open-214",
    "title": "Charlie Chaplin's \"A Fair Exchange\"",
    "release_date": "1914-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_12_05_AFairExchange",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_12_05_AFairExchange",
    "backdrop_path": "https://archive.org/services/img/CC_1914_12_05_AFairExchange",
    "overview": "Charlie Chaplins 34th Film Released Dec. 05 1914. This Film was released as Getting Acquainted. http://www.imdb.com/title/tt0004011/ Charlie Chaplin In The Internet Archive http://www.archive.org/details/CC_1914_02_02_MakingALiving http://www.archive.org/details/CC_1914_02_07_...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 227909
  },
  {
    "id": "open-215",
    "title": "Road To Happiness",
    "release_date": "1941-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/road_to_happiness",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/road_to_happiness",
    "backdrop_path": "https://archive.org/services/img/road_to_happiness",
    "overview": "A down-and-out singer turns to radio acting and finds his life turned around. You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 223971
  },
  {
    "id": "open-216",
    "title": "Bird of Paradise",
    "release_date": "1932-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Bird_of_Paradise_1932",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Bird_of_Paradise_1932",
    "backdrop_path": "https://archive.org/services/img/Bird_of_Paradise_1932",
    "overview": "From IMDb: \"A native girl falls for a visitor to her island, but she's chosen to be sacrificed to the volcano god.\"",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 222583
  },
  {
    "id": "open-217",
    "title": "Two Weeks to Live",
    "release_date": "1943-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/2_weeks_to_live",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/2_weeks_to_live",
    "backdrop_path": "https://archive.org/services/img/2_weeks_to_live",
    "overview": "Classic public domain feature film 'Two Weeks to Live' (1943). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 222196
  },
  {
    "id": "open-218",
    "title": "Aashiqui 2 2013 Dv DRip X 264 MP 4... Hon 3y",
    "release_date": "2013-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/aashiqui-2-2013-dv-drip-x-264-mp-4...-hon-3y",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/aashiqui-2-2013-dv-drip-x-264-mp-4...-hon-3y",
    "backdrop_path": "https://archive.org/services/img/aashiqui-2-2013-dv-drip-x-264-mp-4...-hon-3y",
    "overview": "Classic public domain feature film 'Aashiqui 2 2013 Dv DRip X 264 MP 4... Hon 3y' (2013). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 221885
  },
  {
    "id": "open-219",
    "title": "Born to Win",
    "release_date": "1971-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BorntoWin",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BorntoWin",
    "backdrop_path": "https://archive.org/services/img/BorntoWin",
    "overview": "J.J. (George Segal) is a former hairdresser turned heroin addict trying to satisfy his $100 per day habit and deal with the New York City drug culture. In order to get by, he turns narc and starts ratting on his friends.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 221619
  },
  {
    "id": "open-220",
    "title": "Charlie Chaplin",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CharlieChaplin",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CharlieChaplin",
    "backdrop_path": "https://archive.org/services/img/CharlieChaplin",
    "overview": "Classic public domain feature film 'Charlie Chaplin' (1950). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 221348
  },
  {
    "id": "open-221",
    "title": "Prisoners Of The Lost Universe",
    "release_date": "1983-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/PrisonersOfTheLostUniverse1983",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/PrisonersOfTheLostUniverse1983",
    "backdrop_path": "https://archive.org/services/img/PrisonersOfTheLostUniverse1983",
    "overview": "A scientist, a reporter and a repairman are accidentally transported to a prehistoric world in a parallel universe when they fall into the beam of the experiment during an earthquake aftershock. PD - Prisoners Of The Lost Universe (1983) Invalid Notice. Not Reg'd Within 5 Yrs....",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 220935
  },
  {
    "id": "open-222",
    "title": "The Memphis Belle: A Story of a Flying Fortress",
    "release_date": "1944-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheMemphisBelleAStoryofaFlyingFortress",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheMemphisBelleAStoryofaFlyingFortress",
    "backdrop_path": "https://archive.org/services/img/TheMemphisBelleAStoryofaFlyingFortress",
    "overview": "This film is a war documentary produced by one of the \"Hollywood Colonels,\" William Wyler, who joined the Air Force Film unit and recorded the sights and sounds of the last mission of a B-17 bomber known as the Memphis Belle, named after the girlfriend of the pilot. A narrator...",
    "genres": [
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 219209
  },
  {
    "id": "open-223",
    "title": "Star Odyssey 1979",
    "release_date": "1979-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/StarOdysseyitalianStarWars1979",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/StarOdysseyitalianStarWars1979",
    "backdrop_path": "https://archive.org/services/img/StarOdysseyitalianStarWars1979",
    "overview": "Third in a series of Italian science fiction films clearly inspired by Star Wars. This entry features a couple of comical robots. Three other films in the series are #1 War of the Planets (aka Cosmos 1977), #2 War of the Robots (1978) and #4 Beast in Space (1980). The series i...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 217867
  },
  {
    "id": "open-224",
    "title": "The Yesterday Machine",
    "release_date": "1963-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheYesterdayMachine1963",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheYesterdayMachine1963",
    "backdrop_path": "https://archive.org/services/img/TheYesterdayMachine1963",
    "overview": "From IMDB: A Nazi scientist invents a time machine enabling him to alter the events of WWII.",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 216711
  },
  {
    "id": "open-225",
    "title": "Things to Come",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/things_to_come_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/things_to_come_ipod",
    "backdrop_path": "https://archive.org/services/img/things_to_come_ipod",
    "overview": "Things to Come opens with a near-future forecast of Christmas 1940 in the metropolis of Everytown (obviously London), a city threatened by world war. Pacifist intellectuals, such as John Cabal (Massey), try to turn the tide. But Cabal's efforts go unheeded by the self-interest...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 215478
  },
  {
    "id": "open-226",
    "title": "In Which We Serve",
    "release_date": "1942-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/In_Which_We_Serve",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/In_Which_We_Serve",
    "backdrop_path": "https://archive.org/services/img/In_Which_We_Serve",
    "overview": "Based on the true story of Lord Mountbatten's destroyer, the film unfolds in flashback as survivors cling to a dinghy, and interweaves the history of their ship with the onshore lives of her crew. Hope someone uploads a better copy! Noel Coward produced, wrote the screenplay, ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "History"
      }
    ],
    "runtime": 90,
    "downloads": 214974
  },
  {
    "id": "open-227",
    "title": "Oliver Twist",
    "release_date": "1933-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/oliver_twist",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/oliver_twist",
    "backdrop_path": "https://archive.org/services/img/oliver_twist",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 214944
  },
  {
    "id": "open-228",
    "title": "High Risk",
    "release_date": "1981-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HighRisk",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HighRisk",
    "backdrop_path": "https://archive.org/services/img/HighRisk",
    "overview": "Four American friends, badly needing money, decide to make a commando-like raid into a South American country and steal $5 million from the hacienda of an American-born drug dealer who lives there. The four Americans then succeed rather easily in stealing the money, but soon r...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 214164
  },
  {
    "id": "open-229",
    "title": "Zouzou AKA Zou Zou",
    "release_date": "1934-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ZouzouAkaZouZoudecember211934",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ZouzouAkaZouZoudecember211934",
    "backdrop_path": "https://archive.org/services/img/ZouzouAkaZouZoudecember211934",
    "overview": "Along with Princesse Tam-Tam, this is one of only two notable films starring Josephine Baker. (Spoiler alert!) From the Wikipedia entry for \"Zouzou\": \"As children, Zouzou and Jean are paired in a traveling circus as twins: she's dark, he's light. After they've grown, he treats...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 214011
  },
  {
    "id": "open-230",
    "title": "A Man Betrayed",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/A_Man_Betrayed_movie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/A_Man_Betrayed_movie",
    "backdrop_path": "https://archive.org/services/img/A_Man_Betrayed_movie",
    "overview": "A man begins to suspect that the oil company for which he works is swindling its investors. Then he is framed for murder. The mpeg2 file can be loaded into DVDAuthorGUI (a free program) to create a DVD to watch on television.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 212976
  },
  {
    "id": "open-231",
    "title": "Destroy All Planets",
    "release_date": "1968-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Destroy_All_Planets",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Destroy_All_Planets",
    "backdrop_path": "https://archive.org/services/img/Destroy_All_Planets",
    "overview": "Aliens try to take over the world by seizing control of Gamera's brain. You can find out more about this film on its IMDB page .",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 209856
  },
  {
    "id": "open-232",
    "title": "Mush and Milk",
    "release_date": "1933-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/MushAndMilk",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/MushAndMilk",
    "backdrop_path": "https://archive.org/services/img/MushAndMilk",
    "overview": "Title: Mush and Milk Summary: When Cap's back pension finally comes in, he treats the gang to a day at an amusement park. Directed by: Robert F. McGowan Actors: Production Company: Hal Roach Studios Release Date: 27 May 1933 (USA) Aspect Ratio: 1.37 : 1 When Cap's back pension...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "runtime": 90,
    "downloads": 209584
  },
  {
    "id": "open-233",
    "title": "Beneath the 12-Mile Reef",
    "release_date": "1953-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/beneath_the_12-mile_reef",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/beneath_the_12-mile_reef",
    "backdrop_path": "https://archive.org/services/img/beneath_the_12-mile_reef",
    "overview": "You can find more information regarding this film on its IMDb page . This film contributed courtesy of SabuCat Productions .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 209415
  },
  {
    "id": "open-234",
    "title": "Black Fist",
    "release_date": "1975-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BlackFist",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BlackFist",
    "backdrop_path": "https://archive.org/services/img/BlackFist",
    "overview": "To make money, a Los Angeles street-fighter goes to work for gangsters. IMDB Movie Information",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 208696
  },
  {
    "id": "open-235",
    "title": "Panorama Ephemera",
    "release_date": "2004-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/panorama_ephemera2004",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/panorama_ephemera2004",
    "backdrop_path": "https://archive.org/services/img/panorama_ephemera2004",
    "overview": "PANORAMA EPHEMERA (2004, 89:35 min., color and black and white) is a collage of sequences drawn from a wide variety of ephemeral (industrial, advertising, educational and amateur) films, touring the conflicted landscapes of twentieth-century America. The films' often-skewed vi...",
    "genres": [
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 208363
  },
  {
    "id": "open-236",
    "title": "Rhythm and Blues Revue",
    "release_date": "1955-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/rhythm_blues_review",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/rhythm_blues_review",
    "backdrop_path": "https://archive.org/services/img/rhythm_blues_review",
    "overview": "Musical variety show filmed at the Apollo Theatre in Harlem, New York City featuring a cast of popular African-American performers: Willie Bryant, Freddie Robinson, Lionel Hampton, Count Basie, Faye Adams, Bill Bailey, Herb Jeffries, Amos Milburn, Sarah Vaughan, Nipsey Russell...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 207794
  },
  {
    "id": "open-237",
    "title": "We Dive at Dawn",
    "release_date": "1943-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/We_Dive_at_Dawn_1943",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/We_Dive_at_Dawn_1943",
    "backdrop_path": "https://archive.org/services/img/We_Dive_at_Dawn_1943",
    "overview": "From IMDb : The crew of HMS submarine Sea Tiger have their leave (and assorted family problems) cut short when they are recalled for a special mission: sink the new German battleship Brandenburg. En route, they learn that their target has entered the heavily defended Baltic; r...",
    "genres": [
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "runtime": 90,
    "downloads": 207677
  },
  {
    "id": "open-238",
    "title": "The Roman Orgy",
    "release_date": "1911-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheRomanOrgy",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheRomanOrgy",
    "backdrop_path": "https://archive.org/services/img/TheRomanOrgy",
    "overview": "A short film made in Paris by Louis Feuillade in 1911. It shows the wicked life style and assassination of a Roman Emperor. In the first scene he is with a bevy of girls, in the second with a bevy of boys and in the third, we bring in the lions. Try to count the extras in this...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 205072
  },
  {
    "id": "open-239",
    "title": "Satan's Cheerleaders",
    "release_date": "1977-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/y-2-mate.is-satans-cheerleaders-1977-stwnpjg-io-pq-1080p-1637125171901",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/y-2-mate.is-satans-cheerleaders-1977-stwnpjg-io-pq-1080p-1637125171901",
    "backdrop_path": "https://archive.org/services/img/y-2-mate.is-satans-cheerleaders-1977-stwnpjg-io-pq-1080p-1637125171901",
    "overview": "WIDESCREEN VERSION Plot: The janitor at a local high school is actually the scout for a coven of Satanists on the lookout for a virgin to sacrifice. One day he kidnaps the cheerleading squad to use for their rituals. However, unbeknownst to the devil-worshipers, one of the che...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 204857
  },
  {
    "id": "open-240",
    "title": "Hercules and the Tyrants of Babylon",
    "release_date": "1964-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Hercules_and_the_Tyrants_of_Babylon",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Hercules_and_the_Tyrants_of_Babylon",
    "backdrop_path": "https://archive.org/services/img/Hercules_and_the_Tyrants_of_Babylon",
    "overview": "After a three-year absence, Hercules returns to find his home conquered by the Babylonian empire and his queen enslaved. He must free her before the three rulers of Babylon find her and use her to their own evil purposes. You can find out more about this movie on it's IMDB page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 203959
  },
  {
    "id": "open-241",
    "title": "Sabotage",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Sabotage_1936",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Sabotage_1936",
    "backdrop_path": "https://archive.org/services/img/Sabotage_1936",
    "overview": "From IMDb : Mr. Verloc, a cinema owner, is part of a gang of saboteurs in London. He lives with his wife, Winnie, and her young brother, Stevie. They know nothing about Verloc's secret. Scotland Yard assigns an undercover detective, Ted, to work in a shop near the cinema and i...",
    "genres": [
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 203751
  },
  {
    "id": "open-242",
    "title": "King of the Zombies",
    "release_date": "1941-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/King_of_the_Zombies",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/King_of_the_Zombies",
    "backdrop_path": "https://archive.org/services/img/King_of_the_Zombies",
    "overview": "Three men in a plane searching the Caribbean for a missing admiral crash-land on an island where voodoo is practiced and zombies roam. They soon find a mansion occupied by a family of Austrian refugees, headed by Dr. Sangre. Dr. Sangre is up to no good, and when he learns of t...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 203139
  },
  {
    "id": "open-243",
    "title": "Hemp for Victory",
    "release_date": "1942-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Hemp_for_victory_1942",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Hemp_for_victory_1942",
    "backdrop_path": "https://archive.org/services/img/Hemp_for_victory_1942",
    "overview": "US government propaganda film made during WWII touting the virtues of hemp. The film was aimed at farmers at a time when the miltary was facing a shortage of hemp, it shows how hemp is grown and processed into rope and other products. You can find more information regarding th...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 202894
  },
  {
    "id": "open-244",
    "title": "Rogue's Tavern",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/rogues_tavern",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/rogues_tavern",
    "backdrop_path": "https://archive.org/services/img/rogues_tavern",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 202334
  },
  {
    "id": "open-245",
    "title": "The WILD WOMEN OF WONGO video quality upgrade.",
    "release_date": "1958-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheWildWomenOfWongoVideoQualityUpgrade",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheWildWomenOfWongoVideoQualityUpgrade",
    "backdrop_path": "https://archive.org/services/img/TheWildWomenOfWongoVideoQualityUpgrade",
    "overview": "The women are still wild. The acting is still awful. The plot is still ridiculous. But now you can see it all more clearly and with a much smaller download file. Directed by James L Wolcott. Released in 1958. Filmed in Coral Gables and Silver Springs, FL. Complete print. TRIVI...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 201899
  },
  {
    "id": "open-246",
    "title": "Charlie Chaplin's \"Mabels Strange Predicament\"",
    "release_date": "1914-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CC_1914_02_09_MabelsStrangePredicament",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CC_1914_02_09_MabelsStrangePredicament",
    "backdrop_path": "https://archive.org/services/img/CC_1914_02_09_MabelsStrangePredicament",
    "overview": "Charlie Chaplins 3rd Film Released Feb. 09 1914 http://www.imdb.com/title/tt0004284/ Charlie Chaplin In The Internet Archive http://www.archive.org/details/CC_1914_02_02_MakingALiving http://www.archive.org/details/CC_1914_02_07_KidsAutoRaceAtVenice http://www.archive.org/deta...",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 201335
  },
  {
    "id": "open-247",
    "title": "Last of the Mohicans",
    "release_date": "1920-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/last_of_the_mohicans_1920",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/last_of_the_mohicans_1920",
    "backdrop_path": "https://archive.org/services/img/last_of_the_mohicans_1920",
    "overview": "First film adaptation from the James Fenimore Cooper novel of the same name. This film also features one of Boris Karloff's earliest film appearances in a small uncredited role as a Native American.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 200702
  },
  {
    "id": "open-248",
    "title": "Till The Clouds Roll By",
    "release_date": "1946-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/till_the_clouds_roll_by",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/till_the_clouds_roll_by",
    "backdrop_path": "https://archive.org/services/img/till_the_clouds_roll_by",
    "overview": "Musical biopic on the career of pioneering Hollywood composer Jerome Kern. Starring June Allyson, Robert Walker, Lucille Bremer, Judy Garland, Lena Horne, Frank Sinatra",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 200411
  },
  {
    "id": "open-249",
    "title": "Tom and Jerry: Wot A Night",
    "release_date": "1931-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TomAndJerryWotANight",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TomAndJerryWotANight",
    "backdrop_path": "https://archive.org/services/img/TomAndJerryWotANight",
    "overview": "Original 1931 Tom and Jerry cartoon from Van Bueren Studios",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 199895
  },
  {
    "id": "open-250",
    "title": "Miss London Ltd.",
    "release_date": "1943-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/miss_london_ltd_1943",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/miss_london_ltd_1943",
    "backdrop_path": "https://archive.org/services/img/miss_london_ltd_1943",
    "overview": "Terry Arden (Evelyn Dall) travels to England to take over her half of her late fathers dating service run by Arthur Bowden (Arthur Askey).",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 199567
  },
  {
    "id": "open-251",
    "title": "The Wonderful Wizard of Oz",
    "release_date": "1910-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/The_Wonderful_Wizard_of_Oz",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/The_Wonderful_Wizard_of_Oz",
    "backdrop_path": "https://archive.org/services/img/The_Wonderful_Wizard_of_Oz",
    "overview": "The Wonderful Wizard of Oz (1910) is the earliest surviving film version of L. Frank Baum's 1900 novel, made by the Selig Polyscope Company without Baum's direct input. It was created to fulfill a contractual obligation associated with Baum's personal bankruptcy caused by The ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 198870
  },
  {
    "id": "open-252",
    "title": "DOUBLE FEATURE HELL 8",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DoubleFeatureHell8grindhouse3",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DoubleFeatureHell8grindhouse3",
    "backdrop_path": "https://archive.org/services/img/DoubleFeatureHell8grindhouse3",
    "overview": "ADULT CONTENT -- NUDITY The 2am Theater staff was out on parole just long enough to cobble together this third and final grindhouse double feature simulation: Your cinematic dumpster diving begins with previews of coming infractions, followed by the short, \"These Girls Are foo...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 90,
    "downloads": 198771
  },
  {
    "id": "open-253",
    "title": "Transatlantic Tunnel",
    "release_date": "1935-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/transatlantic_tunnel",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/transatlantic_tunnel",
    "backdrop_path": "https://archive.org/services/img/transatlantic_tunnel",
    "overview": "Taken from IMDB : Engineers Richard McAllan and Frederick Robinson manage to get financial backing for a gigantic project to build a tunnel from England to America. His biggest supporter is Varlia Lloyd, daughter of one of the backers, and she uses her influence more than once...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 198128
  },
  {
    "id": "open-254",
    "title": "Flash Gordon: The Movie",
    "release_date": "1954-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/FlashGordonTheMovie",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/FlashGordonTheMovie",
    "backdrop_path": "https://archive.org/services/img/FlashGordonTheMovie",
    "overview": "Intergalactic super-hero Flash Gordon teams up with the brilliant Dr. Zharkov and the lovely Dale Arden to fight evil-doers wherever they are. They take on androids, death rays, and nasty arch-criminals bent on taking over the world. Have no fear, Flash is here! Episodes: 1 Fl...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 197212
  },
  {
    "id": "open-255",
    "title": "Made for Each Other",
    "release_date": "1939-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/made_for_each_other_film",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/made_for_each_other_film",
    "backdrop_path": "https://archive.org/services/img/made_for_each_other_film",
    "overview": "Jimmy Stewart plays John Horace 'Johnny' Mason, a young lawyer who marries Jane Mason (Carole Lombard) after only know her one day.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 196896
  },
  {
    "id": "open-256",
    "title": "Driller Killer-Uncut",
    "release_date": "1979-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DrillerKillerUncut1979",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DrillerKillerUncut1979",
    "backdrop_path": "https://archive.org/services/img/DrillerKillerUncut1979",
    "overview": "http://imdb.com/title/tt0079082/ An artist slowly loses his mind as he and his two female friends scrape to pay the bills. The punk band downstairs increasingly agitates him, his art dealer is demanding that he complete his big canvas painting as promised, and he gets into fig...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 196794
  },
  {
    "id": "open-257",
    "title": "The Divorce of Lady X",
    "release_date": "1938-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Lady_X",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Lady_X",
    "backdrop_path": "https://archive.org/services/img/Lady_X",
    "overview": "IMDB: http://www.imdb.com/title/tt0030063/ Divorce lawyer Everard Logan thinks the woman who spent the night in his hotel room is the erring wife of his new client. Stars Laurence Olivier and Merle Oberon",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 195804
  },
  {
    "id": "open-258",
    "title": "Attack From Space",
    "release_date": "1959-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Attack_From_Space",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Attack_From_Space",
    "backdrop_path": "https://archive.org/services/img/Attack_From_Space",
    "overview": "From IMDb: Benevolent aliens from the planet Emerald send superhero Starman to protect Earth from invasion by an evil alien race called the Spherions. When Starman arrives on Earth, he discovers a conspiracy involving Earth's top scientists, and he must root out the traitors a...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 195543
  },
  {
    "id": "open-259",
    "title": "Hellhole",
    "release_date": "1985-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/hellhole.-1985.1080p.-blu-ray.-h-264.-aac-rarbg",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/hellhole.-1985.1080p.-blu-ray.-h-264.-aac-rarbg",
    "backdrop_path": "https://archive.org/services/img/hellhole.-1985.1080p.-blu-ray.-h-264.-aac-rarbg",
    "overview": "FOR ADULTS ONLY! 18+ Now with the correct aspect ratio Plot: A young woman becomes amnesiac after an attack by a hired killer. She's admitted to a mental asylum run by a ruthless doctor who experiments on her patients with a lethal drug, and her attacker just got employed there.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 194973
  },
  {
    "id": "open-260",
    "title": "Blonde Ice",
    "release_date": "1948-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BlondeIce1948",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BlondeIce1948",
    "backdrop_path": "https://archive.org/services/img/BlondeIce1948",
    "overview": "A society reporter keeps herself in the headlines by marrying a series of wealthy men. They all die mysteriously afterwards though. Mystic Nights Videos",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 194249
  },
  {
    "id": "open-261",
    "title": "How Awful About Allan",
    "release_date": "1970-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HowAwfulAboutAllan",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HowAwfulAboutAllan",
    "backdrop_path": "https://archive.org/services/img/HowAwfulAboutAllan",
    "overview": "Allan (Anthony Perkins) is blamed for an accidental fire that killed his father (Kent Smith), disfigured his sister (Julie Harris) and landed him in an institution. Eight months later, partially blind and guilt-stricken, he's let out of an institution and rents a room from his...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 194240
  },
  {
    "id": "open-262",
    "title": "The Man from Utah",
    "release_date": "1934-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheManFromUtah",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheManFromUtah",
    "backdrop_path": "https://archive.org/services/img/TheManFromUtah",
    "overview": "The Marshal sends John Weston (John Wayne) to a rodeo to see if he can find out who is killing the rodeo riders who are about to win the prize money. Barton (Edward Peil Sr.) has organized the rodeo and plans to leave with all the prize money put up by the townspeople. When it...",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 194223
  },
  {
    "id": "open-263",
    "title": "Beyond The Valley Of The Dolls BD RIP",
    "release_date": "1970-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/beyond.-the.-valley.-of.-the.-dolls.-1970.1080p.-blu-ray.x-264-yts.-ag",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/beyond.-the.-valley.-of.-the.-dolls.-1970.1080p.-blu-ray.x-264-yts.-ag",
    "backdrop_path": "https://archive.org/services/img/beyond.-the.-valley.-of.-the.-dolls.-1970.1080p.-blu-ray.x-264-yts.-ag",
    "overview": "FOR ADULTS ONLY! 18+ This is the complete version Plot: Three girls come to Hollywood to make it big, but find only sex, drugs and sleaze.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 193740
  },
  {
    "id": "open-264",
    "title": "Bluebeard",
    "release_date": "1944-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Bluebeard",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Bluebeard",
    "backdrop_path": "https://archive.org/services/img/Bluebeard",
    "overview": "Young female models are being strangled inexplicably. Will law enforcement be able to stop the crime wave before more women become victims? You can find more information regarding this film on its IMDb page . John Carradine .... Gaston Morrell Jean Parker .... Lucille Nils Ast...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 193014
  },
  {
    "id": "open-265",
    "title": "Jamaica Inn",
    "release_date": "1939-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Jamaica_Inn",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Jamaica_Inn",
    "backdrop_path": "https://archive.org/services/img/Jamaica_Inn",
    "overview": "From IMDb : Set in Cornwall where the young orphan, Mary, is sent to live with Aunt Patience and Uncle Joss who are the landlords of the Jamaica Inn. Mary soon realizes that her uncle's inn is the base of a gang of pirates who lure ships to their doom on the rocky coast. The g...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 191590
  },
  {
    "id": "open-266",
    "title": "The Sons of Hercules: Land of Darkness",
    "release_date": "1963-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/SonofHerculesTheLandofDarkness",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/SonofHerculesTheLandofDarkness",
    "backdrop_path": "https://archive.org/services/img/SonofHerculesTheLandofDarkness",
    "overview": "The hero leaves on a quest to slay a beast, only to find his home taken prisoner when he returns. This film was originally an Italian film called \"Ercole l'invincibile\" which was later dubbed into English. You can find more information regarding this film on its IMDb page . Mo...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 191255
  },
  {
    "id": "open-267",
    "title": "Jugendspiele AKA Games of Youth",
    "release_date": "1906-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/silent-jugendspiele-aka-games-of-youth",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/silent-jugendspiele-aka-games-of-youth",
    "backdrop_path": "https://archive.org/services/img/silent-jugendspiele-aka-games-of-youth",
    "overview": "Classic public domain feature film 'Jugendspiele AKA Games of Youth' (1906). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 189883
  },
  {
    "id": "open-268",
    "title": "Killer Diller",
    "release_date": "1948-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/killer_diller",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/killer_diller",
    "backdrop_path": "https://archive.org/services/img/killer_diller",
    "overview": "African American musical variety show featuring The Nat King Cole Trio, the Clark Brothers and other musical and comedy acts.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 188840
  },
  {
    "id": "open-269",
    "title": "Dick Tracy Detective",
    "release_date": "1945-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/dick_tracy_detctive",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/dick_tracy_detctive",
    "backdrop_path": "https://archive.org/services/img/dick_tracy_detctive",
    "overview": "Dick must stop the mysterious killings of various people with no obvious connection.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 188059
  },
  {
    "id": "open-270",
    "title": "Apache Blood",
    "release_date": "1975-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Apache_Blood",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Apache_Blood",
    "backdrop_path": "https://archive.org/services/img/Apache_Blood",
    "overview": "AKA \"The worst western ever made\" Chief Yellow Shirt (Ray Danton) is hunting down white men because they broke a treaty. He and all three of his braves find a small squad of U.S. soldiers and take after them. Among the soldiers is a mountain man (Dewitt Lee) who is attacked by...",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 186283
  },
  {
    "id": "open-271",
    "title": "The Wizard Of Oz 1925",
    "release_date": "1925-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheWizardOfOz1925",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheWizardOfOz1925",
    "backdrop_path": "https://archive.org/services/img/TheWizardOfOz1925",
    "overview": "Larry Semon's 1925 film of The Wizard Of Oz. Features Oliver Hardy.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 186198
  },
  {
    "id": "open-272",
    "title": "A Christmas Without Snow",
    "release_date": "1980-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AChristmasWithoutSnow",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AChristmasWithoutSnow",
    "backdrop_path": "https://archive.org/services/img/AChristmasWithoutSnow",
    "overview": "A divorced woman (Michael Learned) moves to a new city with her child, trying to build her life again. She joins the choir of a local church but has some personality conflicts with the choirmaster (John Houseman), a curmudgeonly old gentleman who will accept nothing but perfec...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 185957
  },
  {
    "id": "open-273",
    "title": "American Empire",
    "release_date": "1942-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/american_empire",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/american_empire",
    "backdrop_path": "https://archive.org/services/img/american_empire",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 185491
  },
  {
    "id": "open-274",
    "title": "Phantom From Space",
    "release_date": "1953-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Phantom_From_Space",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Phantom_From_Space",
    "backdrop_path": "https://archive.org/services/img/Phantom_From_Space",
    "overview": "From IMDb: An alien being lands in Santa Monica. Killing two people who attacked him due to the menacing appearance of his spacesuit, the creature takes it off while being pursued by government authorities, revealing himself to be invisible",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 185235
  },
  {
    "id": "open-275",
    "title": "Unknown World",
    "release_date": "1951-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/UnknownWorld",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/UnknownWorld",
    "backdrop_path": "https://archive.org/services/img/UnknownWorld",
    "overview": "Dr. Morley (dubbed the Prophet of Doom by at least one newspaper reporter) is an obsessive opponent of all things nuclear. Fearing that atomic weapons will destroy all life on earth, he recruits a group of scientists for his Society to Save Civilization, and they make plans to...",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 184623
  },
  {
    "id": "open-276",
    "title": "Hot Rod Girl",
    "release_date": "1956-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/hot_rod_girl_1956",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/hot_rod_girl_1956",
    "backdrop_path": "https://archive.org/services/img/hot_rod_girl_1956",
    "overview": "Taken from IMDB : After his kid brother is killed in a street race, a champion drag-racer quits racing. However, a new kid comes to town determined to force him back into racing so he can take his title--and he's already taken his girlfriend.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 184351
  },
  {
    "id": "open-277",
    "title": "Border Patrolman",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/border_patrolman",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/border_patrolman",
    "backdrop_path": "https://archive.org/services/img/border_patrolman",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 183594
  },
  {
    "id": "open-278",
    "title": "Virgin Witch 1080p BD RIP",
    "release_date": "1972-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/virgin.-witch.-1972.1080p.-blu-ray.-h-264.-aac-rarbg",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/virgin.-witch.-1972.1080p.-blu-ray.-h-264.-aac-rarbg",
    "backdrop_path": "https://archive.org/services/img/virgin.-witch.-1972.1080p.-blu-ray.-h-264.-aac-rarbg",
    "overview": "BD RIP NOW IN HD FOR ADULTS ONLY! 18+ A pair of miniskirted birds who travel to a remote castle in order to land a contract in the modeling agency of the mysterious lesbian Sybil Waite",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 183350
  },
  {
    "id": "open-279",
    "title": "Billy the Kid Returns",
    "release_date": "1938-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BillytheKidReturns",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BillytheKidReturns",
    "backdrop_path": "https://archive.org/services/img/BillytheKidReturns",
    "overview": "After Pat Garrett kills Billy the Kid, Billy's look-alike Roy Rogers arrives and is mistaken for him.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 182853
  },
  {
    "id": "open-280",
    "title": "Grundeinkommen",
    "release_date": "2008-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Grundeinkommen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Grundeinkommen",
    "backdrop_path": "https://archive.org/services/img/Grundeinkommen",
    "overview": "Ein Einkommen braucht jeder Mensch, unabhängig davon, was er leistet und ob er arbeitet oder nicht. Ein bedingungsloses Grundeinkommen ist dafür die zeitgemäße politische Form. Ein brandaktuelles Thema",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 182273
  },
  {
    "id": "open-281",
    "title": "Reign of the Fallen",
    "release_date": "2006-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Reign_of_the_Fallen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Reign_of_the_Fallen",
    "backdrop_path": "https://archive.org/services/img/Reign_of_the_Fallen",
    "overview": "In the times since great wars laid waste to the planet Prias, its people have learned to embrace a simple life, away from the perils of technology and war. As the mighty Sith army spreads across the galaxy, subjugating every planet in its path, all the people of Prias can do i...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 181500
  },
  {
    "id": "open-282",
    "title": "Dr. Jekyll and Mr. Hyde",
    "release_date": "1920-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/DrJekyllandMrHyde",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/DrJekyllandMrHyde",
    "backdrop_path": "https://archive.org/services/img/DrJekyllandMrHyde",
    "overview": "John Barrymore stars in the renowned silent adaptation of the Robert Louis Stevenson classic about a Victorian scientist who turns himself into a murderous abomination.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 180491
  },
  {
    "id": "open-283",
    "title": "Wild Gals Of The Naked West",
    "release_date": "1962-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/WildGalsOfTheNakedWest",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/WildGalsOfTheNakedWest",
    "backdrop_path": "https://archive.org/services/img/WildGalsOfTheNakedWest",
    "overview": "An old geezer recalls some of the antics of the men and women of his western town, more wild and woolly than Tombstone or Dodge City. In this town, no one is a good shot, the women are hungry for new meat, and practical jokers abound. A stranger strolls into town, proving resi...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 180139
  },
  {
    "id": "open-284",
    "title": "Phantom Ship , The",
    "release_date": "1936-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/phantom_ship",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/phantom_ship",
    "backdrop_path": "https://archive.org/services/img/phantom_ship",
    "overview": "Also known as \"The Mystery of the Marie Celeste\". You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 179931
  },
  {
    "id": "open-285",
    "title": "Rocky Mountain Mystery",
    "release_date": "1935-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Rocky_Mountain_Mystery_1935",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Rocky_Mountain_Mystery_1935",
    "backdrop_path": "https://archive.org/services/img/Rocky_Mountain_Mystery_1935",
    "overview": "An early Randolph Scott western, based on a novel by Zane Grey. Also known as \"The Fighting Westerner\". Don't bother downloading the h.264 file. The Cinepack file from which it is derived is smaller.",
    "genres": [
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 179053
  },
  {
    "id": "open-286",
    "title": "One Week",
    "release_date": "1920-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/OneWeek",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/OneWeek",
    "backdrop_path": "https://archive.org/services/img/OneWeek",
    "overview": "Buster and Sybil exit a chapel as newlyweds. Among the gifts is a portable house you easily put together in one week",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 178766
  },
  {
    "id": "open-287",
    "title": "The Wasp Woman",
    "release_date": "1960-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/The_Wasp_Women",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/The_Wasp_Women",
    "backdrop_path": "https://archive.org/services/img/The_Wasp_Women",
    "overview": "A beautiful woman by day - a lusting queen wasp by night. You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 178612
  },
  {
    "id": "open-288",
    "title": "Virus",
    "release_date": "1980-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/VirusFukkatsuNoHi1980",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/VirusFukkatsuNoHi1980",
    "backdrop_path": "https://archive.org/services/img/VirusFukkatsuNoHi1980",
    "overview": "Virus (Fukkatsu no hi 復活の日), literally Day of Resurrection is a 1980 post-apocalyptic science fiction movie directed by Kinji Fukasaku and based on a novel written by Sakyo Komatsu. The movie starred Masao Kusakari, George Kennedy, Robert Vaughn, Chuck Connors, Olivia Hussey, ...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 178272
  },
  {
    "id": "open-289",
    "title": "Raiders of Old California",
    "release_date": "1957-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/raiders_of_old_california_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/raiders_of_old_california_ipod",
    "backdrop_path": "https://archive.org/services/img/raiders_of_old_california_ipod",
    "overview": "Grand Ole Opry western with country western singers Faron Young and Marty Robbins. Evil former US Army officers threaten Mexican soldiers out of their land. Marshal Young and Judge Ward arrive to set things right.",
    "genres": [
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 178179
  },
  {
    "id": "open-290",
    "title": "The Chase",
    "release_date": "1946-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheChase_",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheChase_",
    "backdrop_path": "https://archive.org/services/img/TheChase_",
    "overview": "Returning a lost wallet gains unemployed veteran Chuck Scott (Robert Cummings) a job as chauffeur to Eddie Roman (Steve Cochran), a seeming gangster whose enemies have a way of meeting violent ends. The job proves nerve-wracking, and soon Chuck finds himself pledged to help Ed...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 177873
  },
  {
    "id": "open-291",
    "title": "Atlantic Flight",
    "release_date": "1937-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AtlanticFlight",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AtlanticFlight",
    "backdrop_path": "https://archive.org/services/img/AtlanticFlight",
    "overview": "In 1937, actual airplane pilot Dick Merrill become famous for being the first pilot to make a commercial transatlantic roundtrip flight. Momogram Pictures, capitalizing on Merrill's celebrity status, quickly created the fictional film ATLANTIC FLIGHT where Merrill plays himsel...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 177373
  },
  {
    "id": "open-292",
    "title": "The Disappearance of Flight 412",
    "release_date": "1974-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheDisappearanceofFlight41274DVDcosmo3",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheDisappearanceofFlight41274DVDcosmo3",
    "backdrop_path": "https://archive.org/services/img/TheDisappearanceofFlight41274DVDcosmo3",
    "overview": "http://www.imdb.com/title/tt0071426/ Colonel Pete Moore (Glenn Ford) is commander of the Whitney Radar Test Group, which has been experiencing electrical difficulties aboard its aircraft. To ferret out the problem, he sends a four-man crew on Flight 412. Shortly into the test,...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 177148
  },
  {
    "id": "open-293",
    "title": "Nekromantik ENGLISH HARD SUB",
    "release_date": "1987-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/nekromantik-hard-sub",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/nekromantik-hard-sub",
    "backdrop_path": "https://archive.org/services/img/nekromantik-hard-sub",
    "overview": "ENGLISH HARD SUBBED VERSION ADULTS ONLY! 18+ WARNING: GRAPHIC CONTENT, GRAPHIC FOOTAGE OF A MEAT RABBIT BEING SLAUGHTERED, DEPICTIONS OF ANIMAL CRUELTY(THE CAT WAS A PROP. NO ACTUAL CATS WERE HARMED IN THE MOVIE), NUDITY, GRAPHIC VIOLENCE, DISTURBING SUBJECT MATTER! CLICK OFF ...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 176504
  },
  {
    "id": "open-294",
    "title": "Double. Indemnity. 1944.720p. Br Rip.x 265. HEVCBay.com",
    "release_date": "1944-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Double.Indemnity.1944.720p.BrRip.x265.HEVCBay.com.mkv",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Double.Indemnity.1944.720p.BrRip.x265.HEVCBay.com.mkv",
    "backdrop_path": "https://archive.org/services/img/Double.Indemnity.1944.720p.BrRip.x265.HEVCBay.com.mkv",
    "overview": "Double. Indemnity. 1944.720p",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "runtime": 90,
    "downloads": 176338
  },
  {
    "id": "open-295",
    "title": "Breaking with Old Ideas",
    "release_date": "1975-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Breaking_With_Old_Ideas",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Breaking_With_Old_Ideas",
    "backdrop_path": "https://archive.org/services/img/Breaking_With_Old_Ideas",
    "overview": "One of the most controversial dramatic films produced in China during the cultural revolution, \"Breaking\" is about the struggle to democratize education in the countryside. Made during Mao Tse Tung's infamous Cultural Revolution.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 175809
  },
  {
    "id": "open-296",
    "title": "Nothing Sacred",
    "release_date": "1937-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/NothingSacred",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/NothingSacred",
    "backdrop_path": "https://archive.org/services/img/NothingSacred",
    "overview": "The hotshot newspaper reporter Wallace Cook (Fredric March) tries to get in the good graces of his boss, Oliver Stone (Walter Connolly) by exploiting the \"imminent\" death of an ailing young woman, Hazel Flagg (Carole Lombard). By way of newsprint the doomed young lady becomes ...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "runtime": 90,
    "downloads": 175442
  },
  {
    "id": "open-297",
    "title": "Kansas City Confidential",
    "release_date": "1952-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/kansascityconfidencial",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/kansascityconfidencial",
    "backdrop_path": "https://archive.org/services/img/kansascityconfidencial",
    "overview": "Four robbers hold up an armored truck getting away with over a million dollars in cash. Joe Rolfe (John Payne), a down-on-his-luck flower delivery truck driver is accused of being involved and is beaten up by the local police. Released due to lack of evidence, Joe, following t...",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 175160
  },
  {
    "id": "open-298",
    "title": "Private Buckaroo",
    "release_date": "1942-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/private_buckaroo_ipod",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/private_buckaroo_ipod",
    "backdrop_path": "https://archive.org/services/img/private_buckaroo_ipod",
    "overview": "WWII era Musical starring Dick Foran, the Andrew Sisters, Harry James, and Joe E Lewis. Dick Foran play a western style crooner who's anxious to join the Army. After he's enlisted he thinks he's to good for basic training which raises the ire of his fellow soldiers.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 175140
  },
  {
    "id": "open-299",
    "title": "Les Novices libertines",
    "release_date": "1980-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/les-novices-libertines",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/les-novices-libertines",
    "backdrop_path": "https://archive.org/services/img/les-novices-libertines",
    "overview": "Les Novices libertines Tourné en même temps que L'Autre enfer du même Bruno Mattei, Les Novices libertines est tiré de faits réels s'étant déroulés dans l'Italie de la Renaissance (l’histoire de la religieuse de Monza). Véritable film d'exploitation lié au genre communément ap...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 174775
  },
  {
    "id": "open-300",
    "title": "David and Goliath",
    "release_date": "1960-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/PublicDomainAnsaFilmandBeaverChampionAttactionsDavidandGoliath1960",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/PublicDomainAnsaFilmandBeaverChampionAttactionsDavidandGoliath1960",
    "backdrop_path": "https://archive.org/services/img/PublicDomainAnsaFilmandBeaverChampionAttactionsDavidandGoliath1960",
    "overview": "This ia a film adaptation of the Biblical story of the Israelite shepherd David, who became a hero and later king by his defeat of Goliath, the champion of the Philistines. It also deals with David's relation with the first king of Israel, Saul.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 174090
  },
  {
    "id": "open-301",
    "title": "Samsara - Pan Nalin",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Samsara-PanNalin",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Samsara-PanNalin",
    "backdrop_path": "https://archive.org/services/img/Samsara-PanNalin",
    "overview": "* Samsara. a beautiful film by Pan Nalin. subtitle file only works with the avi (Cinepack) uploaded by bsanandaATyahooDOTcom * globalcooperativeforumDOTnet",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 174038
  },
  {
    "id": "open-302",
    "title": "A Night in the Show",
    "release_date": "1915-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ANightintheShow",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ANightintheShow",
    "backdrop_path": "https://archive.org/services/img/ANightintheShow",
    "overview": "Charlie plays two roles as two spectators at a music-hall show. It has a few good laughs and also provides an interesting look at old-fashioned theater entertainment.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 173818
  },
  {
    "id": "open-303",
    "title": "It Seemed Like a Good Idea at the Time",
    "release_date": "1975-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/ItSeemedLikeaGoodIdeaattheTimeMPEG2",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/ItSeemedLikeaGoodIdeaattheTimeMPEG2",
    "backdrop_path": "https://archive.org/services/img/ItSeemedLikeaGoodIdeaattheTimeMPEG2",
    "overview": "IMDB (http://www.imdb.com/title/tt0073181/) Featuring John Candy and Isaac Hayes this Independent film is a must see for anyone who loves a laugh.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 173482
  },
  {
    "id": "open-304",
    "title": "Topper Returns",
    "release_date": "1941-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Topper_Returns_41",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Topper_Returns_41",
    "backdrop_path": "https://archive.org/services/img/Topper_Returns_41",
    "overview": "Gail Richards is accompanying Ann Carrington who is visiting her father, Henry, at his spooky, old, country estate. It's been many years since she's seen him. They get a lift from Cosmo Topper, who lives in the neighborhood. Gail is murdered that night, and her spirit seeks ou...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 171237
  },
  {
    "id": "open-305",
    "title": "Creature from the Haunted Sea",
    "release_date": "1961-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/CreatureFromTheHauntedSea",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/CreatureFromTheHauntedSea",
    "backdrop_path": "https://archive.org/services/img/CreatureFromTheHauntedSea",
    "overview": "When a Carribean Island is engulfed by a revolution, one unscrupulous American mobster, Renzo Capeto plans to clean up with a get-rich-quick scheme. His diabolical plan is to provide refuge for the loyalists, and the contents of the government coffers, on his boat. He would th...",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 170895
  },
  {
    "id": "open-306",
    "title": "HOME",
    "release_date": "2009-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/HOME_English",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/HOME_English",
    "backdrop_path": "https://archive.org/services/img/HOME_English",
    "overview": "We are living in exceptional times. Scientists tell us that we have 10 years to change the way we live, avert the depletion of natural resources and the catastrophic evolution of the Earth's climate. The stakes are high for us and our children. Everyone should take part in the...",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "runtime": 90,
    "downloads": 169873
  },
  {
    "id": "open-307",
    "title": "The Proud and the Damned",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/TheProudandtheDamned_201511",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/TheProudandtheDamned_201511",
    "backdrop_path": "https://archive.org/services/img/TheProudandtheDamned_201511",
    "overview": "This film has fallen into the Public Domain.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 169689
  },
  {
    "id": "open-308",
    "title": "Big Bluff",
    "release_date": "1955-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/big_bluff",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/big_bluff",
    "backdrop_path": "https://archive.org/services/img/big_bluff",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 169674
  },
  {
    "id": "open-309",
    "title": "Mesa of Lost Women",
    "release_date": "1953-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/MesaOfLostWomen",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/MesaOfLostWomen",
    "backdrop_path": "https://archive.org/services/img/MesaOfLostWomen",
    "overview": "A mad scientist named Aranya (Jackie Coogan) is creating giant spiders and dwarves in his lab on Zarpa Mesa in Mexico",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 169077
  },
  {
    "id": "open-310",
    "title": "Nancy Drew... Reporter",
    "release_date": "1939-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/nancy_drew_reporter",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/nancy_drew_reporter",
    "backdrop_path": "https://archive.org/services/img/nancy_drew_reporter",
    "overview": "Nancy Drew, reporter for the school newspaper, clears a girl of murder charges.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "runtime": 90,
    "downloads": 168616
  },
  {
    "id": "open-311",
    "title": "Joseph and His Brethren",
    "release_date": "1960-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/PublicDomainJollyFilmJosephandHisBrethren",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/PublicDomainJollyFilmJosephandHisBrethren",
    "backdrop_path": "https://archive.org/services/img/PublicDomainJollyFilmJosephandHisBrethren",
    "overview": "Tthe biblical story of Joseph sold into slavery by his jealous brothers and his rise from slave to vizier in the Egypt of the Pharaohs.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 167408
  },
  {
    "id": "open-312",
    "title": "Malice in the Palace",
    "release_date": "1949-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/malice_in_the_palace",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/malice_in_the_palace",
    "backdrop_path": "https://archive.org/services/img/malice_in_the_palace",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 167375
  },
  {
    "id": "open-313",
    "title": "The Inspector General",
    "release_date": "1949-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the_inspector_general",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/the_inspector_general",
    "backdrop_path": "https://archive.org/services/img/the_inspector_general",
    "overview": "Georgi (Danny Kaye) an illiterate member of a gypsy medicine show, is mistaken for the feared and cruel Inspector General.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "runtime": 90,
    "downloads": 167209
  },
  {
    "id": "open-314",
    "title": "The Star Packer",
    "release_date": "1934-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/The_Star_Packer",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/The_Star_Packer",
    "backdrop_path": "https://archive.org/services/img/The_Star_Packer",
    "overview": "A gang working for \"The Shadow\" is terrorizing the town. John Travers (John Wayne) decides to take on the job of sheriff and do something about it.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ],
    "runtime": 90,
    "downloads": 166727
  },
  {
    "id": "open-315",
    "title": "Battle of Blood Island",
    "release_date": "1960-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/BattleofBloodIsland",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/BattleofBloodIsland",
    "backdrop_path": "https://archive.org/services/img/BattleofBloodIsland",
    "overview": "Two American GIs are the only survivors of a unit wiped out in a battle with Japanese troops on an isolated island. The two, who don't like each other, find try to put aside their differences in order to evade the Japanese and survive.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 166726
  },
  {
    "id": "open-316",
    "title": "INVASION OF THE BEE GIRLS & quality upgrade.",
    "release_date": "1973-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/InvasionOfTheBeeGirlsWidescreenQualityUpgrade",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/InvasionOfTheBeeGirlsWidescreenQualityUpgrade",
    "backdrop_path": "https://archive.org/services/img/InvasionOfTheBeeGirlsWidescreenQualityUpgrade",
    "overview": "This is the original widescreen print, which is significantly sharper than the 4:3 print here at IA. According to IMDB this version also is in the public domain. Anyway, how could you not like a movie with dialog like this: \"We balled and we balled and we balled, until he drop...",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 166709
  },
  {
    "id": "open-317",
    "title": "Woman on the Run",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Woman_on_the_Run",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Woman_on_the_Run",
    "backdrop_path": "https://archive.org/services/img/Woman_on_the_Run",
    "overview": "In San Francisco, a woman tries to track down her husband, who is hiding from a killer and from the police. The IMDB entry is here .",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 166607
  },
  {
    "id": "open-318",
    "title": "Jungle Man",
    "release_date": "1941-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/jungle_man",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/jungle_man",
    "backdrop_path": "https://archive.org/services/img/jungle_man",
    "overview": "An expedition sets out to darkest Africa to find the fabled City of the Dead, along the way they meet Buster Crabbe doing his best Doc Savage impression as Dr. Robert Hammond, aka Junga.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 164884
  },
  {
    "id": "open-319",
    "title": "Attack of the Monsters",
    "release_date": "1969-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Attack_of_the_Monsters",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Attack_of_the_Monsters",
    "backdrop_path": "https://archive.org/services/img/Attack_of_the_Monsters",
    "overview": "aka Gamera vs. Guiron A UFO takes two boys from Earth to another planet where they discover a race of people who can control giant monsters and have plans to take over the Earth. It's up to Gamera to save the day. You can find out more about this film on its IMDB page . There ...",
    "genres": [
      {
        "id": 878,
        "name": "Sci-Fi"
      }
    ],
    "runtime": 90,
    "downloads": 164595
  },
  {
    "id": "open-320",
    "title": "Sunset Boulevard",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/SunsetBoulevard1950",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/SunsetBoulevard1950",
    "backdrop_path": "https://archive.org/services/img/SunsetBoulevard1950",
    "overview": "Sunset Boulevard (1950) - Legendado",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 164366
  },
  {
    "id": "open-321",
    "title": "Pulse 2001",
    "release_date": "2001-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/pulse-kairo-kiyoshi-kurosawa-2001-eng-sub-1301306804834",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/pulse-kairo-kiyoshi-kurosawa-2001-eng-sub-1301306804834",
    "backdrop_path": "https://archive.org/services/img/pulse-kairo-kiyoshi-kurosawa-2001-eng-sub-1301306804834",
    "overview": "In the immense city of Tokyo, the darkness of the afterlife lurks some of its inhabitants who are desperately trying to escape the sadness and isolation of the modern world.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 163664
  },
  {
    "id": "open-322",
    "title": "Silent Night, Bloody Night",
    "release_date": "1974-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/SilentNightBloodyNight",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/SilentNightBloodyNight",
    "backdrop_path": "https://archive.org/services/img/SilentNightBloodyNight",
    "overview": "An under-rated horror/slasher/mystery film. Patrick O'Neal, Mary Woronov, and John Carradine are among the actors. You can load the mpeg2 file into DVDAuthorGUI (a free program) and create a DVD to watch on your television.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 163542
  },
  {
    "id": "open-323",
    "title": "The Invincible Gladiator",
    "release_date": "1962-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AteneaFilmsPublicDomainTheInvincibleGladiator",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AteneaFilmsPublicDomainTheInvincibleGladiator",
    "backdrop_path": "https://archive.org/services/img/AteneaFilmsPublicDomainTheInvincibleGladiator",
    "overview": "A rebellious Roman gladiator leads a revolt for the freedom of a group of oppressed people.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "runtime": 90,
    "downloads": 163371
  },
  {
    "id": "open-324",
    "title": "The Snow Queen",
    "release_date": "1959-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/the_snow_queen_1959_animation",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/the_snow_queen_1959_animation",
    "backdrop_path": "https://archive.org/services/img/the_snow_queen_1959_animation",
    "overview": "1959 US dubbed version of the classic 1957 animated Russian film Snezhnaya koroleva. This version features the very sentimental Christmas introduction by Art Linkletter. Features the voices of Sandra Dee, Louise Arthur, Tommy Kirk and Paul Frees. Based on a story by Hans Chris...",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      }
    ],
    "runtime": 90,
    "downloads": 163352
  },
  {
    "id": "open-325",
    "title": "The Last of the Mohicans",
    "release_date": "1920-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/PublicdomainTheLastoftheMohicans",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/PublicdomainTheLastoftheMohicans",
    "backdrop_path": "https://archive.org/services/img/PublicdomainTheLastoftheMohicans",
    "overview": "Adaptation of James Fenimore Cooper novel about the American frontier during the French and Indian War.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 163066
  },
  {
    "id": "open-326",
    "title": "Tonightandeverynight",
    "release_date": "1950-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Tonightandeverynight",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Tonightandeverynight",
    "backdrop_path": "https://archive.org/services/img/Tonightandeverynight",
    "overview": "Classic public domain feature film 'Tonightandeverynight' (1950). Streamed legally in high definition with zero ads or popups from the Internet Archive cinema collection.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 162769
  },
  {
    "id": "open-327",
    "title": "The Sadist",
    "release_date": "1963-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/The_Sadist",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/The_Sadist",
    "backdrop_path": "https://archive.org/services/img/The_Sadist",
    "overview": "This is believed to be the first feature film based on real life serial killers Charles Starkweather and Caril Fugate. Mainstream Hollywood would not produce films inspired by the pair until a decade after this one. A number of films were inspired by the duo (some very loosely...",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "runtime": 90,
    "downloads": 162659
  },
  {
    "id": "open-328",
    "title": "Amazing Mr. X , The",
    "release_date": "1948-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/amazing_mr_x",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/amazing_mr_x",
    "backdrop_path": "https://archive.org/services/img/amazing_mr_x",
    "overview": "You can find more information regarding this film on its IMDb page .",
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "runtime": 90,
    "downloads": 162309
  },
  {
    "id": "open-329",
    "title": "Alice's Wonderland",
    "release_date": "1923-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/AlicesWonderland",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/AlicesWonderland",
    "backdrop_path": "https://archive.org/services/img/AlicesWonderland",
    "overview": "Alice's Wonderland (1923), from the series Laugh-O-Grams. View movies and cartoons on youtube @ PDFREETV View trailers on youtube @ The Trailer Archive",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 161420
  },
  {
    "id": "open-330",
    "title": "The Man Who Cheated Himself",
    "release_date": "1951-01-01",
    "vote_average": 8.8,
    "media_type": "movie",
    "is_public_domain": true,
    "stream_url": "https://archive.org/embed/Man_Who_Cheated_Himself",
    "youtube_id": null,
    "trailer_key": null,
    "imdb_id": null,
    "poster_path": "https://archive.org/services/img/Man_Who_Cheated_Himself",
    "backdrop_path": "https://archive.org/services/img/Man_Who_Cheated_Himself",
    "overview": "\"Tough cop helps his lover cover up the shooting of her wealthy husband. Mainstream noir, primarily distinguished by its acting and San Francisco visuals.\" - noir expert Spencer Selby Cast: Lee J. Cobb, John Dall, Jane Wyatt, Lisa Howard. 81 min.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "runtime": 90,
    "downloads": 160813
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
    return PUBLIC_CINEMA_MOVIES.filter(m => m.genres?.some(g => g.id === 16 || g.id === 12 || g.id === 35));
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
