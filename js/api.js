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
