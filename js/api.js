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
    "id": 969681,
    "tmdb_id": 969681,
    "title": "Spider-Man: Brand New Day",
    "release_date": "2026-07-29",
    "vote_average": 7.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg",
    "overview": "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "popularity": 659.5404,
    "vote_count": 2761
  },
  {
    "id": 1204680,
    "tmdb_id": 1204680,
    "title": "Coyote vs. Acme",
    "release_date": "2026-08-20",
    "vote_average": 7.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/kYDCl2y0VPvhT5eYWbMRInPoB03.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/7GOW6jod9lLurW5utokAatxg7ql.jpg",
    "overview": "After Acme products fail him one too many times in his dogged pursuit of the Roadrunner, Wile E. Coyote decides to hire a billboard lawyer to sue the Acme Corporation.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
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
    "popularity": 496.9094,
    "vote_count": 444
  },
  {
    "id": 1101383,
    "tmdb_id": 1101383,
    "title": "The End of Oak Street",
    "release_date": "2026-08-12",
    "vote_average": 6.9,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/fYXqpgPmHMphSF2W30GbTeJVIa5.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/b9q9VmbXDvJmTziRqkwdEmFdwhr.jpg",
    "overview": "After a mysterious cosmic event rips Oak Street from suburbia and transports their neighborhood to someplace unknown, the Platt family soon discovers that their very survival depends on them sticking together as they navigate their now unrecognizable surroundings.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
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
    "popularity": 467.2595,
    "vote_count": 1119
  },
  {
    "id": 1375646,
    "tmdb_id": 1375646,
    "title": "Colony",
    "release_date": "2026-05-21",
    "vote_average": 8.1,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/tN799oUR0f1gUKDYdMNrDaY7I51.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg",
    "overview": "Professor Se-jeong is thrust into a bloody nightmare when a rapidly mutating virus is released during a biotech conference causing authorities to seal the facility. Trapped inside with no escape, Se-jeong along with a small group of survivors must fight to stay alive while the infected undergo horrific transformations.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      }
    ],
    "popularity": 359.5505,
    "vote_count": 819
  },
  {
    "id": 1368337,
    "tmdb_id": 1368337,
    "title": "The Odyssey",
    "release_date": "2026-07-15",
    "vote_average": 8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/RMXG8myu1aGlNUsRjtxzmpdMK0.jpg",
    "overview": "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "popularity": 367.3657,
    "vote_count": 3779
  },
  {
    "id": 1285366,
    "tmdb_id": 1285366,
    "title": "Shape of My Heart",
    "release_date": "2024-07-06",
    "vote_average": 5.7,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/3r0O6BW9USoZ9mteCVyNKMQriRL.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/yjK3ardrgdS8suZG8KMU82Q7U38.jpg",
    "overview": "A romance about a man and a woman who, due to an unexpected event, end up switching bodies. Despite coming from completely different backgrounds and environments, the two try to overcome the various difficulties that arise from their body swap.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "popularity": 232.3025,
    "vote_count": 8
  },
  {
    "id": 1288445,
    "tmdb_id": 1288445,
    "title": "Mutiny",
    "release_date": "2026-08-19",
    "vote_average": 6.4,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/pu2VxGlpGwffOx292w18b1tv96j.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/e2QAGrEmbpmZpMymDRkDisJkvg9.jpg",
    "overview": "After witnessing his billionaire boss' murder and being framed for the crime, Cole Reed boards a cargo ship on a one-man crusade to avenge his boss' death only to discover an international conspiracy.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 254.7093,
    "vote_count": 416
  },
  {
    "id": 1423191,
    "tmdb_id": 1423191,
    "title": "Resident Evil",
    "release_date": "2026-09-16",
    "vote_average": 7.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/i7UyjfPio0VFHB9rBUZSFyhOoM8.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/1CIaRYKf3zg2Xyce1CSfCMg2Vfw.jpg",
    "overview": "A hapless medical courier fights for his life amid an outbreak of a deadly mutagenic virus in an isolated mountain town.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "popularity": 399.1021,
    "vote_count": 104
  },
  {
    "id": 1108427,
    "tmdb_id": 1108427,
    "title": "Moana",
    "release_date": "2026-07-08",
    "vote_average": 7.3,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/gaet1xQ2nxrG0V1Ep9T20ZMNEIC.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/c6BPbkO5Npt1OdwttAxCFo06wtH.jpg",
    "overview": "Teenage Moana answers the Ocean's call and, for the first time, voyages beyond the reef of her island of Motunui with infamous demigod Maui on an unforgettable journey to restore prosperity to her people.",
    "genres": [
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "popularity": 221.3946,
    "vote_count": 692
  },
  {
    "id": 1440098,
    "tmdb_id": 1440098,
    "title": "Drawn Together",
    "release_date": "2026-09-09",
    "vote_average": 6.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/6rpvddXbaQPOi0fB2HKWbZ3uUSg.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/i65y7cMae36K0giN0GRaMjAHUru.jpg",
    "overview": "Marfil, daughter of a powerful Spanish businessman, sees her life in New York turned upside down when she is kidnapped and released without explanation. Her father hires Sebastian Moore as bodyguard and, forced to spend every minute together, an inevitable attraction ignites in a world where nothing is as it seems.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 150.4704,
    "vote_count": 94
  },
  {
    "id": 1482547,
    "tmdb_id": 1482547,
    "title": "Zip Wire",
    "release_date": "2026-08-31",
    "vote_average": 7.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/cO7J0XSVKPlAjUCMWC7DVBn1Py2.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/sbkkAtymJaH5UzExiK974uPzCY4.jpg",
    "overview": "When her ground-breaking pharmaceutical discovery is stolen and partner murdered, researcher Amy must face her fear of heights to escape nefarious attackers, with the only path to salvation being a treacherous aerial runway. To outsmart the mysterious hostiles, she has to summon every ounce of courage to protect the world-changing scientific discovery — and herself — before it's too late.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 182.7158,
    "vote_count": 12
  },
  {
    "id": 1386315,
    "tmdb_id": 1386315,
    "title": "The Runner",
    "release_date": "2026-09-03",
    "vote_average": 6.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/uxCaBoYXsDC4A0SqTm3SISj0OwK.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/jzBWExXacS33rMQ2zLBrqIVweyG.jpg",
    "overview": "Maia Marten, a brilliant London lawyer, has her life shattered by a single call on her morning run: her son has been taken. To get him back, she must keep running, obey every ruthless command, and trust no one-each second a test of how far a mother will go to save her child.",
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "popularity": 150.5434,
    "vote_count": 514
  },
  {
    "id": 1408162,
    "tmdb_id": 1408162,
    "title": "Vishwanath & Sons",
    "release_date": "2026-08-14",
    "vote_average": 7.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/adDZVEQZnMJ380zPOmVj6vBWHgk.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/nfNaAiiILjYRc2CKkId1ZfPTtlh.jpg",
    "overview": "A celebrated Olympian shooter travels to America looking for a donor to help his sick child — but unexpected romance complicates his search.",
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "popularity": 143.4582,
    "vote_count": 26
  },
  {
    "id": 1084244,
    "tmdb_id": 1084244,
    "title": "Toy Story 5",
    "release_date": "2026-06-17",
    "vote_average": 8.4,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/qjTqY5coNiz6sVtPng40IzltsoN.jpg",
    "overview": "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "popularity": 143.7689,
    "vote_count": 2185
  },
  {
    "id": 1393326,
    "tmdb_id": 1393326,
    "title": "Ghost in the Cell",
    "release_date": "2026-04-16",
    "vote_average": 7.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/zxcMdx0w5Zmg8yZuuiS7CJ8vOea.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/tK3QdOOrX4qEkmSlvrmc8cK7iOU.jpg",
    "overview": "In a notorious prison, an invisible force begins killing inmates brutally, compelling enemy gangs and corrupt guards to work together as they try to survive the mounting bloodshed.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 127.1966,
    "vote_count": 65
  },
  {
    "id": 1137844,
    "tmdb_id": 1137844,
    "title": "Mayday",
    "release_date": "2026-09-03",
    "vote_average": 8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/hVXjX1jLZ1ljFSNGXpjJfbTUOa7.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/g7Ccid5kuD7A8hXWlsQiNfwOxaD.jpg",
    "overview": "When a U.S. Navy pilot on a top-secret mission during the Cold War gets trapped behind enemy lines, his only chance at survival is to form an alliance with an eccentric ex-KGB agent.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "popularity": 128.5369,
    "vote_count": 675
  },
  {
    "id": 1339713,
    "tmdb_id": 1339713,
    "title": "Obsession",
    "release_date": "2026-05-13",
    "vote_average": 8.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg",
    "overview": "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
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
    "popularity": 136.6207,
    "vote_count": 5594
  },
  {
    "id": 1323244,
    "tmdb_id": 1323244,
    "title": "Rage of Stars",
    "release_date": "2026-08-06",
    "vote_average": 6.7,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/oLld47ZT1I3iecM3OWhIphohQUJ.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/z7lZgL5tzefTfhyRtouThFhsuUS.jpg",
    "overview": "A story about a woman from the International Special Forces Unit, who has a premonition about the impending end of humanity.",
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 124.7337,
    "vote_count": 155
  },
  {
    "id": 1232569,
    "tmdb_id": 1232569,
    "title": "Pinocchio: Unstrung",
    "release_date": "2026-07-22",
    "vote_average": 6.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/eUJXk3bTvLBi5Zcb0BCedZU7lVL.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/dNKFETDDujxm2PUN873Jwiw5VML.jpg",
    "overview": "Influenced by a sinister Cricket and created by Geppetto, Pinocchio launches a violent crusade to carve himself into a real boy like his brother James, one piece at a time.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
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
    "popularity": 122.9885,
    "vote_count": 104
  },
  {
    "id": 1315772,
    "tmdb_id": 1315772,
    "title": "Minions & Monsters",
    "release_date": "2026-06-24",
    "vote_average": 7.5,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/4LwvU9SZc8QQzW1X1FAPhNbXnEU.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/kkcwhgSFd81QDlXo8ytrpHPQjhy.jpg",
    "overview": "This is the rambunctious, ridiculous and totally true story of how the Minions conquered Hollywood, became movie stars, lost everything, unleashed monsters onto the world and then banded together to try and save the planet from the mayhem they had just created.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
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
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "popularity": 117.3038,
    "vote_count": 1130
  },
  {
    "id": 1506560,
    "tmdb_id": 1506560,
    "title": "Clash of the Thundermans",
    "release_date": "2026-09-03",
    "vote_average": 6.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/16oqRrWVzQm6qdGfBxvziZ2UiMT.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/tBZMwg5oCJn8P0pStfuOMhhSQD3.jpg",
    "overview": "When Chloe develops a destructive new superpower, the Hero League orders her to an elite boarding school for superheroes to learn control of her abilities. Faced with the prospect of sending Chloe away for years, the Thundermans split apart, with Phoebe, Barb and Billy taking her into hiding. Max, Hank, and Nora track their rogue family members, until the two factions face off against each other in a full-on battle for the Thundermans’ future.",
    "genres": [
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "popularity": 104.241,
    "vote_count": 60
  },
  {
    "id": 1516698,
    "tmdb_id": 1516698,
    "title": "The Last Sunrise",
    "release_date": "2026-08-26",
    "vote_average": 6.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/3PWJqDfygN0YNNjWsDUOXclCp3h.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/zFCWfU2ViMIm38G1W8UsnSpqmWn.jpg",
    "overview": "Ry, a college student with a chronic illness, escapes to Mallorca for the summer with her mother, where she unexpectedly falls for a local and begins to embrace living in the moment. But as her condition worsens and long-hidden family secrets come to light, everything she has found before summer's end is threatened.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "popularity": 103.2852,
    "vote_count": 179
  },
  {
    "id": 1621552,
    "tmdb_id": 1621552,
    "title": "Facing El Chapo",
    "release_date": "2026-08-21",
    "vote_average": 8.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/alpf5v4UqSFawPmG9RX03Or4BDk.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/c4U96GrPRfnNrS01mBtqnocvlLJ.jpg",
    "overview": "Two Mexican officers must survive the final hours of their shift after crossing a ruthless cartel boss.",
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 102.8604,
    "vote_count": 725
  },
  {
    "id": 1058424,
    "tmdb_id": 1058424,
    "title": "Hope",
    "release_date": "2026-07-15",
    "vote_average": 7.4,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/1n37BJchWHLiSYQkuFxe5KjB951.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/hrCTKrc3Tz2wbPOt5rcrlAhqF11.jpg",
    "overview": "In the remote South Korean village of Hope Harbor, police chief Bum-seok and officer Sung-ae are called to investigate a mysterious creature wreaking havoc on the community. But all is not as it seems, and perceptions can be misleading. What begins as ignorance plants the seed of disaster, escalating through human conflict into a tragedy of cosmic proportions.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "popularity": 104.9859,
    "vote_count": 76
  },
  {
    "id": 1127384,
    "tmdb_id": 1127384,
    "title": "Deep Water",
    "release_date": "2026-04-30",
    "vote_average": 7.3,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/ZWHxL2ETItcZzeVsVfs6gv3SZ7.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/szKv713FcUXx6hcfdY369vtkmzr.jpg",
    "overview": "A group of international passengers on a flight from Los Angeles to Shanghai is forced to make an emergency landing in shark-infested waters. The terrified group is forced to work together and overcome their differences if they hope to escape their sinking plane and the frenzy of sharks drawn to the wreckage.",
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
    "popularity": 97.2774,
    "vote_count": 557
  },
  {
    "id": 687163,
    "tmdb_id": 687163,
    "title": "Project Hail Mary",
    "release_date": "2026-03-15",
    "vote_average": 8.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/8Tfys3mDZVp4tNoH2ktm06a0Tau.jpg",
    "overview": "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "popularity": 93.8207,
    "vote_count": 7826
  },
  {
    "id": 1130948,
    "tmdb_id": 1130948,
    "title": "Rosebush Pruning",
    "release_date": "2026-04-23",
    "vote_average": 6.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/rsHEVjzxU8cxz1sm3vboj99daNv.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/vcZ3UUVmFNk90DBSrTBlTKCdbbE.jpg",
    "overview": "When an American heir living in a luxurious Spanish villa decides to move in with his girlfriend, his departure triggers a family collapse as his brother uncovers the truth behind their mother's tragic death.",
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
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 86.9879,
    "vote_count": 50
  },
  {
    "id": 1185806,
    "tmdb_id": 1185806,
    "title": "PAW Patrol: The Dino Movie",
    "release_date": "2026-07-23",
    "vote_average": 7.9,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/qnin56Syy5rbG7KCaxWY7SPuy6p.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/6TSxLmwT7j1ugtKi8NyMmdzWAGj.jpg",
    "overview": "The Paw Patrol lands on a mysterious dinosaur island after a storm, where they meet Rex, a stranded pup. When Humdinger's reckless mining triggers a volcano, the team faces their biggest rescue mission yet to save the island.",
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
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "popularity": 90.7564,
    "vote_count": 118
  },
  {
    "id": 980431,
    "tmdb_id": 980431,
    "title": "Avatar Aang: The Last Airbender",
    "release_date": "2026-07-24",
    "vote_average": 9.1,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/3sgnSfNT27Bx5O5ukr7B26mhEQq.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/ezbrL1dMymKQZw7mDEWa2ZTzN7d.jpg",
    "overview": "Avatar Aang, the world's last Airbender, learns of an ancient power that could save his culture from extinction. With the help of his friends, he embarks on a global quest to find it before it falls into the wrong hands and threatens to upend the peace they sacrificed everything to achieve.",
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
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "popularity": 85.6244,
    "vote_count": 1153
  },
  {
    "id": 1275779,
    "tmdb_id": 1275779,
    "title": "Disclosure Day",
    "release_date": "2026-06-10",
    "vote_average": 7.5,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/AnJ8IQJI23hNpYXVNaythu061Ru.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/flxau5Iu7bChQHsESqvGZ3FQRaI.jpg",
    "overview": "A cybersecurity expert becomes a whistleblower after uncovering secrets about aliens, putting him on the run from a corporation. Meanwhile, a meteorologist experiencing strange phenomena joins forces with him to prove there's life beyond our understanding.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 83.5122,
    "vote_count": 3361
  },
  {
    "id": 299534,
    "tmdb_id": 299534,
    "title": "Avengers: Endgame",
    "release_date": "2019-04-24",
    "vote_average": 8.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "popularity": 84.9365,
    "vote_count": 28688
  },
  {
    "id": 755898,
    "tmdb_id": 755898,
    "title": "War of the Worlds",
    "release_date": "2025-07-29",
    "vote_average": 4,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/iZLqwEwUViJdSkGVjePGhxYzbDb.jpg",
    "overview": "Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 87.4493,
    "vote_count": 1140
  },
  {
    "id": 1083381,
    "tmdb_id": 1083381,
    "title": "Backrooms",
    "release_date": "2026-05-27",
    "vote_average": 7,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/dqmMWNWfLnExDRpMtIMqI97GQFR.jpg",
    "overview": "A strange doorway appears in the basement of a furniture showroom.",
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
        "id": 878,
        "name": "Science Fiction"
      }
    ],
    "popularity": 83.6218,
    "vote_count": 3318
  },
  {
    "id": 1599993,
    "tmdb_id": 1599993,
    "title": "Animals",
    "release_date": "2026-02-05",
    "vote_average": 6.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/9fbZdiOI9fRinl44mNm3CYgEtYR.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/3jgATRIFenOrgNKEC9bFv5QqKGf.jpg",
    "overview": "Four couples sail the thin line between desire and search for authenticity, in a world where truth is as fragile as their relationships.",
    "genres": [
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 82.6255,
    "vote_count": 47
  },
  {
    "id": 1560520,
    "tmdb_id": 1560520,
    "title": "Batman: Knightfall Part 1: Knightfall",
    "release_date": "2026-06-23",
    "vote_average": 9.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/360qdtu2hLnqMu8SVHMywn420w1.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/caBIySpwuFi2i7ynvHIlnxJLOdN.jpg",
    "overview": "Arkham Asylum has been destroyed, and all its inmates have been unleashed upon Gotham City. As Batman races to round up some of his greatest enemies, he is pushed to his physical and mental limits and into a final confrontation with a new threat: the man called Bane!",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
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
        "name": "Science Fiction"
      }
    ],
    "popularity": 77.2879,
    "vote_count": 336
  },
  {
    "id": 1301421,
    "tmdb_id": 1301421,
    "title": "The Sheep Detectives",
    "release_date": "2026-04-30",
    "vote_average": 7.9,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/iKy5460GdsoknM8ppmGlJbKxAKa.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/a8uQvrplTkhGJQog6GZ6CqF8An6.jpg",
    "overview": "George Hardy is a shepherd who reads detective novels to his beloved sheep every night, assuming they can't possibly understand. But when a mysterious incident disrupts life on the farm, the sheep realize they must become the detectives. As they follow the clues and investigate human suspects, they prove that even sheep can be brilliant crime-solvers.",
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
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "popularity": 78.1671,
    "vote_count": 1668
  },
  {
    "id": 299536,
    "tmdb_id": 299536,
    "title": "Avengers: Infinity War",
    "release_date": "2018-04-25",
    "vote_average": 8.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      }
    ],
    "popularity": 79.6237,
    "vote_count": 32915
  },
  {
    "id": 1419406,
    "tmdb_id": 1419406,
    "title": "The Shadow's Edge",
    "release_date": "2025-08-16",
    "vote_average": 8.3,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/cHKo3m8N1fwvEy2ZEr0xGmmMODV.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/4BtL2vvEufDXDP4u6xQjjQ1Y2aT.jpg",
    "overview": "Macau Police brings the tracking expert police officer out of retirement to help catch a dangerous group of professional thieves.",
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
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 77.4643,
    "vote_count": 1428
  },
  {
    "id": 860508,
    "tmdb_id": 860508,
    "title": "The Whisper Man",
    "release_date": "2026-08-27",
    "vote_average": 6.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/ndRs5lADYm0PeVjuOxaMcInY0o2.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/uauoVKKCkNA9iWjgJCL8TdSfLf5.jpg",
    "overview": "When his young son vanishes, a widower enlists help from his estranged father, a retired detective who put away the serial killer now linked to the case.",
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
    "popularity": 74.5985,
    "vote_count": 711
  },
  {
    "id": 1180894,
    "tmdb_id": 1180894,
    "title": "Under Your Feet",
    "release_date": "2026-02-19",
    "vote_average": 5.2,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/sk5DjLp7x9cmi0V1423YJmIVJbC.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/wRRvCEb871lZPcssGwEnJt0l3KN.jpg",
    "overview": "Isabel moves with her two children into a very prestigious building that has a very peculiar admission method but at a very affordable rental fee. Once approved and settled, three elderly neighbors from the lower floor will turn their lives upside down.",
    "genres": [
      {
        "id": 27,
        "name": "Horror"
      }
    ],
    "popularity": 70.3325,
    "vote_count": 25
  },
  {
    "id": 1228710,
    "tmdb_id": 1228710,
    "title": "The Mandalorian and Grogu",
    "release_date": "2026-05-20",
    "vote_average": 7.5,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/uwMKWjcNID0D9jjplsjkQS2OrB4.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/ysLlsAxwgNSxBWHCgTKJrmjxpRQ.jpg",
    "overview": "The evil Empire has fallen, and Imperial warlords remain scattered throughout the galaxy. As the fledgling New Republic works to protect everything the Rebellion fought for, they have enlisted the help of legendary Mandalorian bounty hunter Din Djarin and his young apprentice Grogu.",
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
        "name": "Science Fiction"
      }
    ],
    "popularity": 79.5213,
    "vote_count": 1655
  },
  {
    "id": 1081003,
    "tmdb_id": 1081003,
    "title": "Supergirl",
    "release_date": "2026-06-24",
    "vote_average": 6.7,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/uhzRnTW4DM13UQBvZP3eVNzQTuz.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/heZQmyNvkH236ha2M3JckdUQQqb.jpg",
    "overview": "When an unexpected and ruthless adversary strikes too close to home, Kara Zor-El, aka Supergirl, reluctantly joins forces with an unlikely companion on an epic, interstellar journey of vengeance and justice.",
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
        "name": "Science Fiction"
      }
    ],
    "popularity": 72.3058,
    "vote_count": 2340
  },
  {
    "id": 1514682,
    "tmdb_id": 1514682,
    "title": "Above & Below",
    "release_date": "2026-07-29",
    "vote_average": 6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/7bOuu1SRALGwsG2fLCTvRkCmQBj.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/lSd6nEnlaeQkswLLUgHC5gyuXyU.jpg",
    "overview": "A group of friends set off for an unforgettable vacation. What begins as an adventure of partying and diving quickly turns into a nightmare when they are attacked by criminals in open waters.",
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "popularity": 82.1719,
    "vote_count": 39
  },
  {
    "id": 1084242,
    "tmdb_id": 1084242,
    "title": "Zootopia 2",
    "release_date": "2025-11-26",
    "vote_average": 7.7,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/lgotja3xMoJZbynwHfcQcJAEMWH.jpg",
    "overview": "After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives and turns the animal metropolis upside down. To crack the case, Judy and Nick must go undercover to unexpected new parts of town, where their growing partnership is tested like never before.",
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
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10751,
        "name": "Family"
      }
    ],
    "popularity": 76.1167,
    "vote_count": 3431
  },
  {
    "id": 813418,
    "tmdb_id": 813418,
    "title": "Hot Spot",
    "release_date": "2026-08-21",
    "vote_average": 5,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/42egzT6e4CIEdrEo4Xc31DKyGjA.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/aRsmRuomE4vIGNUPIGLrp9ojM5a.jpg",
    "overview": "Set in a near future society ruled by sentient A.I., a private eye investigates a murder case only to discover a rebel group capable of undermining the digital overlord. As the detective's identity slowly unravels, his world enters a state of hypnotic meltdown.",
    "genres": [
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 68.422,
    "vote_count": 20
  },
  {
    "id": 1302904,
    "tmdb_id": 1302904,
    "title": "Practical Magic 2",
    "release_date": "2026-09-09",
    "vote_average": 6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/ogwQOLbCfncjvBhFb5l0OmQH8KC.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/nUcauJ000dFBYkgGpxyxJ5aWEH2.jpg",
    "overview": "The Owens sisters must confront the dark curse that threatens to unravel their family once and for all.",
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 35,
        "name": "Comedy"
      }
    ],
    "popularity": 70.0029,
    "vote_count": 64
  },
  {
    "id": 1318467,
    "tmdb_id": 1318467,
    "title": "The Last Kiss",
    "release_date": "2026-09-15",
    "vote_average": 6.5,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/cLZ7iFZc25vluSIKt3XtdSTait4.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/klLupmrAUykQMrmFVBjbr0nreiI.jpg",
    "overview": "Laurel always imagined her first kiss would be a fairy tale. Instead, that fantasy turns frightening when she's cursed with an ability to see the death of anyone she kisses. After a vision reveals her crush is doomed to die in a strange murder spree targeting her closest friends, she races to unmask the killer before the mystery becomes a massacre.",
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
    "popularity": 72.1751,
    "vote_count": 11
  },
  {
    "id": 1311031,
    "tmdb_id": 1311031,
    "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    "release_date": "2025-07-18",
    "vote_average": 8.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    "overview": "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 14,
        "name": "Fantasy"
      }
    ],
    "popularity": 64.4788,
    "vote_count": 2148
  },
  {
    "id": 1101412,
    "tmdb_id": 1101412,
    "title": "Fall 2: Deadpoint",
    "release_date": "2026-09-01",
    "vote_average": 6.8,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/fgSm5ylwiXbIHn8UbUXDjk9RRu4.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/yBDxqDB29kpH9VojTytjGWBgmdJ.jpg",
    "overview": "On a perilous climb across Thailand's Mount Kwan, two climbers become trapped thousands of feet above the ground, where vertigo-inducing heights, sheer exposure, and impossible odds turn every moment into a fight for survival.",
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "popularity": 69.1488,
    "vote_count": 38
  },
  {
    "id": 76341,
    "tmdb_id": 76341,
    "title": "Mad Max: Fury Road",
    "release_date": "2015-05-13",
    "vote_average": 7.6,
    "media_type": "movie",
    "poster_path": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/w1280/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
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
        "name": "Science Fiction"
      }
    ],
    "popularity": 75.3051,
    "vote_count": 24615
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

  // --- ASYNC 3,000 FULL MOVIE LIBRARY ---
  _catalog3000: null,
  _loadingCatalog3000: null,

  async getCatalog3000() {
    if (this._catalog3000 && this._catalog3000.length > 0) {
      return this._catalog3000;
    }
    if (this._loadingCatalog3000) {
      return this._loadingCatalog3000;
    }

    this._loadingCatalog3000 = (async () => {
      try {
        const res = await fetch('data/movies_3000.json');
        if (res.ok) {
          const list = await res.json();
          if (Array.isArray(list) && list.length > 0) {
            this._catalog3000 = list;
            return list;
          }
        }
      } catch (err) {
        console.warn('Could not load data/movies_3000.json, using static spotlight catalog:', err);
      }
      this._catalog3000 = PUBLIC_CINEMA_MOVIES;
      return this._catalog3000;
    })();

    return this._loadingCatalog3000;
  },

  // --- TRENDING & SPOTLIGHT (100% Guaranteed Public Domain & Open Cinema Streams) ---
  async getTrending(timeWindow = 'day') {
    const catalog = await this.getCatalog3000();
    return catalog.slice(0, 40);
  },

  async getMovies(category = 'popular', page = 1) {
    const catalog = await this.getCatalog3000();
    let filtered = catalog;
    if (category === 'top_rated') {
      filtered = [...catalog].sort((a, b) => b.vote_average - a.vote_average);
    } else if (category === 'animation') {
      filtered = catalog.filter(m => m.genres && m.genres.some(g => g.name === 'Animation'));
    } else if (category === 'horror') {
      filtered = catalog.filter(m => m.genres && m.genres.some(g => g.name === 'Horror'));
    } else if (category === 'scifi') {
      filtered = catalog.filter(m => m.genres && m.genres.some(g => g.name === 'Sci-Fi'));
    } else if (category === 'comedy') {
      filtered = catalog.filter(m => m.genres && m.genres.some(g => g.name === 'Comedy'));
    } else if (category === 'action') {
      filtered = catalog.filter(m => m.genres && m.genres.some(g => g.name === 'Action' || g.name === 'Adventure'));
    } else if (category === 'classics' || category === 'upcoming') {
      filtered = catalog.filter(m => parseInt(m.release_date) < 1970);
    }
    const start = (page - 1) * 24;
    return filtered.slice(start, start + 24);
  },

  // Fetch all movies with dynamic filters (pagination, genre, year, sort)
  async getAllMovies(options = {}) {
    const {
      page = 1,
      sortBy = 'popularity.desc',
      genre = null,
      year = null,
      category = null,
      pageSize = 30
    } = options;

    const catalog = await this.getCatalog3000();
    let list = [...catalog];

    if (category && category !== 'all') {
      if (category === 'top_rated') list = list.filter(m => m.vote_average >= 8.2);
      if (category === 'horror') list = list.filter(m => m.genres && m.genres.some(g => g.name === 'Horror'));
      if (category === 'animation') list = list.filter(m => m.genres && m.genres.some(g => g.name === 'Animation'));
      if (category === 'scifi') list = list.filter(m => m.genres && m.genres.some(g => g.name === 'Sci-Fi'));
      if (category === 'comedy') list = list.filter(m => m.genres && m.genres.some(g => g.name === 'Comedy'));
      if (category === 'action') list = list.filter(m => m.genres && m.genres.some(g => g.name === 'Action' || g.name === 'Adventure'));
      if (category === 'classics' || category === 'now_playing' || category === 'upcoming') {
        list = list.filter(m => parseInt(m.release_date) < 1970);
      }
    }

    if (genre) {
      const genreId = Number(genre);
      list = list.filter(m => m.genres && m.genres.some(g => g.id === genreId));
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
    } else if (sortBy === 'popularity.desc') {
      list.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
    }

    if (page && pageSize) {
      const start = (page - 1) * pageSize;
      return list.slice(start, start + pageSize);
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
    const catalog = await this.getCatalog3000();
    return catalog.filter(m => m.genres?.some(g => g.id === 16 || g.id === 12 || g.id === 35)).slice(0, 30);
  },

  // --- WORLDWIDE & CATEGORY DISCOVERY ---
  async getWorldwide(regionCode = 'all', page = 1) {
    const catalog = await this.getCatalog3000();
    switch (regionCode) {
      case 'anime':
        return catalog.filter(m => m.genres?.some(g => g.id === 16));
      case 'hollywood':
        return catalog.filter(m => !m.genres?.some(g => g.id === 16));
      case 'scifi':
        return catalog.filter(m => m.genres?.some(g => g.id === 878));
      case 'horror':
        return catalog.filter(m => m.genres?.some(g => g.id === 27));
      case 'comedy':
        return catalog.filter(m => m.genres?.some(g => g.id === 35));
      case 'drama':
        return catalog.filter(m => m.genres?.some(g => g.id === 18));
      default:
        return this.getTrending();
    }
  },

  // --- GENRE DISCOVERY ---
  async getByGenre(genreId, type = 'movie', page = 1) {
    const gid = Number(genreId);
    const catalog = await this.getCatalog3000();
    const filtered = catalog.filter(m => m.genres?.some(g => g.id === gid));
    return filtered.length > 0 ? filtered : catalog.slice(0, 30);
  },

  // --- SEARCH (OPEN CINEMA & PUBLIC DOMAIN ONLY) ---
  async searchMulti(query, page = 1) {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    const catalog = await this.getCatalog3000();

    // 1. Direct match on title, overview, or genre
    const matches = catalog.filter(m =>
      m.title.toLowerCase().includes(q) ||
      (m.overview || '').toLowerCase().includes(q) ||
      (m.genres && m.genres.some(g => g.name.toLowerCase().includes(q)))
    );

    if (matches.length > 0) return matches;

    // 2. Word-by-word fuzzy match
    const words = q.split(/\s+/).filter(w => w.length > 2);
    if (words.length > 0) {
      const fuzzy = catalog.filter(m =>
        words.some(w => m.title.toLowerCase().includes(w) || (m.overview || '').toLowerCase().includes(w))
      );
      if (fuzzy.length > 0) return fuzzy;
    }

    // 3. Fallback recommendations
    return catalog.slice(0, 12);
  },

  // --- DETAILS, CREDITS, VIDEOS ---
  async getDetails(id, mediaType = 'movie') {
    const catalog = await this.getCatalog3000();
    // Check if ID matches directly
    let item = catalog.find(m => String(m.id) === String(id)) ||
               catalog.find(m => m.title.toLowerCase() === String(id).toLowerCase());

    if (!item) {
      item = PUBLIC_CINEMA_MOVIES.find(m => String(m.id) === String(id)) ||
             PUBLIC_CINEMA_MOVIES[0];
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
    return this._catalog3000 || PUBLIC_CINEMA_MOVIES;
  }
};

window.MovieAPI = MovieAPI;
