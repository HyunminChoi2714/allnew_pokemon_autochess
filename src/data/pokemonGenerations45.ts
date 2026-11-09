import { PokemonSpecies } from '../types/game';

/**
 * National Pokedex generations 4 and 5.
 * Base stats, types, species names and evolution links are based on PokeAPI's
 * canonical CSV dataset. HP is scaled x10 to match this game's stat convention.
 */
export const POKEMON_GENERATIONS_4_5: Record<string, PokemonSpecies> = {
  'grotle': {
    "id": "grotle",
    "pokedexNumber": 388,
    "generation": 4,
    "name": "수풀부기",
    "nameEn": "Grotle",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 89,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 36
    },
    "baseExp": 355,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "torterra",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/388.gif"
  },
  'torterra': {
    "id": "torterra",
    "pokedexNumber": 389,
    "generation": 4,
    "name": "토대부기",
    "nameEn": "Torterra",
    "types": [
      "grass",
      "ground"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 109,
      "defense": 105,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 56
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "earthquake",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/389.gif"
  },
  'monferno': {
    "id": "monferno",
    "pokedexNumber": 391,
    "generation": 4,
    "name": "파이숭이",
    "nameEn": "Monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 640,
      "attack": 78,
      "defense": 52,
      "spAttack": 78,
      "spDefense": 52,
      "speed": 81
    },
    "baseExp": 355,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "infernape",
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/391.gif"
  },
  'infernape': {
    "id": "infernape",
    "pokedexNumber": 392,
    "generation": 4,
    "name": "초염몽",
    "nameEn": "Infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 760,
      "attack": 104,
      "defense": 71,
      "spAttack": 104,
      "spDefense": 71,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/392.gif"
  },
  'prinplup': {
    "id": "prinplup",
    "pokedexNumber": 394,
    "generation": 4,
    "name": "팽태자",
    "nameEn": "Prinplup",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 640,
      "attack": 66,
      "defense": 68,
      "spAttack": 81,
      "spDefense": 76,
      "speed": 50
    },
    "baseExp": 355,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "empoleon",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/394.gif"
  },
  'empoleon': {
    "id": "empoleon",
    "pokedexNumber": 395,
    "generation": 4,
    "name": "엠페르트",
    "nameEn": "Empoleon",
    "types": [
      "water",
      "steel"
    ],
    "baseStats": {
      "hp": 840,
      "attack": 86,
      "defense": 88,
      "spAttack": 111,
      "spDefense": 101,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/395.gif"
  },
  'starly': {
    "id": "starly",
    "pokedexNumber": 396,
    "generation": 4,
    "name": "찌르꼬",
    "nameEn": "Starly",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 55,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 60
    },
    "baseExp": 123,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "staravia",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/396.gif"
  },
  'staravia': {
    "id": "staravia",
    "pokedexNumber": 397,
    "generation": 4,
    "name": "찌르버드",
    "nameEn": "Staravia",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 75,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 80
    },
    "baseExp": 298,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "staraptor",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/397.gif"
  },
  'staraptor': {
    "id": "staraptor",
    "pokedexNumber": 398,
    "generation": 4,
    "name": "찌르호크",
    "nameEn": "Staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 120,
      "defense": 70,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 100
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/398.gif"
  },
  'bidoof': {
    "id": "bidoof",
    "pokedexNumber": 399,
    "generation": 4,
    "name": "비버니",
    "nameEn": "Bidoof",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 590,
      "attack": 45,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 40,
      "speed": 31
    },
    "baseExp": 125,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "bibarel",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/399.gif"
  },
  'bibarel': {
    "id": "bibarel",
    "pokedexNumber": 400,
    "generation": 4,
    "name": "비버통",
    "nameEn": "Bibarel",
    "types": [
      "normal",
      "water"
    ],
    "baseStats": {
      "hp": 790,
      "attack": 85,
      "defense": 60,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 71
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "water_gun",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/400.gif"
  },
  'kricketot': {
    "id": "kricketot",
    "pokedexNumber": 401,
    "generation": 4,
    "name": "귀뚤뚜기",
    "nameEn": "Kricketot",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 370,
      "attack": 25,
      "defense": 41,
      "spAttack": 25,
      "spDefense": 41,
      "speed": 25
    },
    "baseExp": 98,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "kricketune",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/401.gif"
  },
  'kricketune': {
    "id": "kricketune",
    "pokedexNumber": 402,
    "generation": 4,
    "name": "귀뚤톡크",
    "nameEn": "Kricketune",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 770,
      "attack": 85,
      "defense": 51,
      "spAttack": 55,
      "spDefense": 51,
      "speed": 65
    },
    "baseExp": 335,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/402.gif"
  },
  'shinx': {
    "id": "shinx",
    "pokedexNumber": 403,
    "generation": 4,
    "name": "꼬링크",
    "nameEn": "Shinx",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 65,
      "defense": 34,
      "spAttack": 40,
      "spDefense": 34,
      "speed": 45
    },
    "baseExp": 133,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "luxio",
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/403.gif"
  },
  'luxio': {
    "id": "luxio",
    "pokedexNumber": 404,
    "generation": 4,
    "name": "럭시오",
    "nameEn": "Luxio",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 85,
      "defense": 49,
      "spAttack": 60,
      "spDefense": 49,
      "speed": 60
    },
    "baseExp": 318,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "luxray",
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/404.gif"
  },
  'luxray': {
    "id": "luxray",
    "pokedexNumber": 405,
    "generation": 4,
    "name": "렌트라",
    "nameEn": "Luxray",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 120,
      "defense": 79,
      "spAttack": 95,
      "spDefense": 79,
      "speed": 70
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/405.gif"
  },
  'budew': {
    "id": "budew",
    "pokedexNumber": 406,
    "generation": 4,
    "name": "꼬몽울",
    "nameEn": "Budew",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 30,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 70,
      "speed": 55
    },
    "baseExp": 140,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "roselia",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/406.gif"
  },
  'roserade': {
    "id": "roserade",
    "pokedexNumber": 407,
    "generation": 4,
    "name": "로즈레이드",
    "nameEn": "Roserade",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 70,
      "defense": 65,
      "spAttack": 125,
      "spDefense": 105,
      "speed": 90
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/407.gif"
  },
  'cranidos': {
    "id": "cranidos",
    "pokedexNumber": 408,
    "generation": 4,
    "name": "두개도스",
    "nameEn": "Cranidos",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 125,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 58
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "rampardos",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/408.gif"
  },
  'rampardos': {
    "id": "rampardos",
    "pokedexNumber": 409,
    "generation": 4,
    "name": "램펄드",
    "nameEn": "Rampardos",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 970,
      "attack": 165,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 50,
      "speed": 58
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/409.gif"
  },
  'shieldon': {
    "id": "shieldon",
    "pokedexNumber": 410,
    "generation": 4,
    "name": "방패톱스",
    "nameEn": "Shieldon",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 300,
      "attack": 42,
      "defense": 118,
      "spAttack": 42,
      "spDefense": 88,
      "speed": 30
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "bastiodon",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/410.gif"
  },
  'bastiodon': {
    "id": "bastiodon",
    "pokedexNumber": 411,
    "generation": 4,
    "name": "바리톱스",
    "nameEn": "Bastiodon",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 52,
      "defense": 168,
      "spAttack": 47,
      "spDefense": 138,
      "speed": 30
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/411.gif"
  },
  'burmy': {
    "id": "burmy",
    "pokedexNumber": 412,
    "generation": 4,
    "name": "도롱충이",
    "nameEn": "Burmy",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 29,
      "defense": 45,
      "spAttack": 29,
      "spDefense": 45,
      "speed": 36
    },
    "baseExp": 113,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/412.gif"
  },
  'wormadam': {
    "id": "wormadam",
    "pokedexNumber": 413,
    "generation": 4,
    "name": "도롱마담",
    "nameEn": "Wormadam",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 59,
      "defense": 85,
      "spAttack": 79,
      "spDefense": 105,
      "speed": 36
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 15
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/413.gif"
  },
  'mothim': {
    "id": "mothim",
    "pokedexNumber": 414,
    "generation": 4,
    "name": "나메일",
    "nameEn": "Mothim",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 94,
      "defense": 50,
      "spAttack": 94,
      "spDefense": 50,
      "speed": 66
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/414.gif"
  },
  'combee': {
    "id": "combee",
    "pokedexNumber": 415,
    "generation": 4,
    "name": "세꿀버리",
    "nameEn": "Combee",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 300,
      "attack": 30,
      "defense": 42,
      "spAttack": 30,
      "spDefense": 42,
      "speed": 70
    },
    "baseExp": 123,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "vespiquen",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/415.gif"
  },
  'vespiquen': {
    "id": "vespiquen",
    "pokedexNumber": 416,
    "generation": 4,
    "name": "비퀸",
    "nameEn": "Vespiquen",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 80,
      "defense": 102,
      "spAttack": 80,
      "spDefense": 102,
      "speed": 40
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/416.gif"
  },
  'pachirisu': {
    "id": "pachirisu",
    "pokedexNumber": 417,
    "generation": 4,
    "name": "파치리스",
    "nameEn": "Pachirisu",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 45,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 95
    },
    "baseExp": 355,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/417.gif"
  },
  'buizel': {
    "id": "buizel",
    "pokedexNumber": 418,
    "generation": 4,
    "name": "브이젤",
    "nameEn": "Buizel",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 65,
      "defense": 35,
      "spAttack": 60,
      "spDefense": 30,
      "speed": 85
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "floatzel",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/418.gif"
  },
  'floatzel': {
    "id": "floatzel",
    "pokedexNumber": 419,
    "generation": 4,
    "name": "플로젤",
    "nameEn": "Floatzel",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 105,
      "defense": 55,
      "spAttack": 85,
      "spDefense": 50,
      "speed": 115
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/419.gif"
  },
  'cherubi': {
    "id": "cherubi",
    "pokedexNumber": 420,
    "generation": 4,
    "name": "체리버",
    "nameEn": "Cherubi",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 35,
      "defense": 45,
      "spAttack": 62,
      "spDefense": 53,
      "speed": 35
    },
    "baseExp": 138,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "cherrim",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/420.gif"
  },
  'cherrim': {
    "id": "cherrim",
    "pokedexNumber": 421,
    "generation": 4,
    "name": "체리꼬",
    "nameEn": "Cherrim",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 60,
      "defense": 70,
      "spAttack": 87,
      "spDefense": 78,
      "speed": 85
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/421.gif"
  },
  'shellos': {
    "id": "shellos",
    "pokedexNumber": 422,
    "generation": 4,
    "name": "깝질무",
    "nameEn": "Shellos",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 760,
      "attack": 48,
      "defense": 48,
      "spAttack": 57,
      "spDefense": 62,
      "speed": 34
    },
    "baseExp": 163,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "gastrodon",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/422.gif"
  },
  'gastrodon': {
    "id": "gastrodon",
    "pokedexNumber": 423,
    "generation": 4,
    "name": "트리토돈",
    "nameEn": "Gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 1110,
      "attack": 83,
      "defense": 68,
      "spAttack": 92,
      "spDefense": 82,
      "speed": 39
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "earthquake",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/423.gif"
  },
  'ambipom': {
    "id": "ambipom",
    "pokedexNumber": 424,
    "generation": 4,
    "name": "겟핸보숭",
    "nameEn": "Ambipom",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 100,
      "defense": 66,
      "spAttack": 60,
      "spDefense": 66,
      "speed": 115
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/424.gif"
  },
  'drifloon': {
    "id": "drifloon",
    "pokedexNumber": 425,
    "generation": 4,
    "name": "흔들풍손",
    "nameEn": "Drifloon",
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 50,
      "defense": 34,
      "spAttack": 60,
      "spDefense": 44,
      "speed": 70
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "drifblim",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/425.gif"
  },
  'drifblim': {
    "id": "drifblim",
    "pokedexNumber": 426,
    "generation": 4,
    "name": "둥실라이드",
    "nameEn": "Drifblim",
    "types": [
      "ghost",
      "flying"
    ],
    "baseStats": {
      "hp": 1500,
      "attack": 80,
      "defense": 44,
      "spAttack": 90,
      "spDefense": 54,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/426.gif"
  },
  'buneary': {
    "id": "buneary",
    "pokedexNumber": 427,
    "generation": 4,
    "name": "이어롤",
    "nameEn": "Buneary",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 66,
      "defense": 44,
      "spAttack": 44,
      "spDefense": 56,
      "speed": 85
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lopunny",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/427.gif"
  },
  'lopunny': {
    "id": "lopunny",
    "pokedexNumber": 428,
    "generation": 4,
    "name": "이어롭",
    "nameEn": "Lopunny",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 76,
      "defense": 84,
      "spAttack": 54,
      "spDefense": 96,
      "speed": 105
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/428.gif"
  },
  'mismagius': {
    "id": "mismagius",
    "pokedexNumber": 429,
    "generation": 4,
    "name": "무우마직",
    "nameEn": "Mismagius",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 60,
      "defense": 60,
      "spAttack": 105,
      "spDefense": 105,
      "speed": 105
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/429.gif"
  },
  'honchkrow': {
    "id": "honchkrow",
    "pokedexNumber": 430,
    "generation": 4,
    "name": "돈크로우",
    "nameEn": "Honchkrow",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 125,
      "defense": 52,
      "spAttack": 105,
      "spDefense": 52,
      "speed": 71
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/430.gif"
  },
  'glameow': {
    "id": "glameow",
    "pokedexNumber": 431,
    "generation": 4,
    "name": "나옹마",
    "nameEn": "Glameow",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 490,
      "attack": 55,
      "defense": 42,
      "spAttack": 42,
      "spDefense": 37,
      "speed": 85
    },
    "baseExp": 155,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "purugly",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/431.gif"
  },
  'purugly': {
    "id": "purugly",
    "pokedexNumber": 432,
    "generation": 4,
    "name": "몬냥이",
    "nameEn": "Purugly",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 710,
      "attack": 82,
      "defense": 64,
      "spAttack": 64,
      "spDefense": 59,
      "speed": 112
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/432.gif"
  },
  'chingling': {
    "id": "chingling",
    "pokedexNumber": 433,
    "generation": 4,
    "name": "랑딸랑",
    "nameEn": "Chingling",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 30,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 50,
      "speed": 45
    },
    "baseExp": 143,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "chimecho",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/433.gif"
  },
  'stunky': {
    "id": "stunky",
    "pokedexNumber": 434,
    "generation": 4,
    "name": "스컹뿡",
    "nameEn": "Stunky",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 630,
      "attack": 63,
      "defense": 47,
      "spAttack": 41,
      "spDefense": 41,
      "speed": 74
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "skuntank",
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/434.gif"
  },
  'skuntank': {
    "id": "skuntank",
    "pokedexNumber": 435,
    "generation": 4,
    "name": "스컹탱크",
    "nameEn": "Skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 1030,
      "attack": 93,
      "defense": 67,
      "spAttack": 71,
      "spDefense": 61,
      "speed": 84
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/435.gif"
  },
  'bronzor': {
    "id": "bronzor",
    "pokedexNumber": 436,
    "generation": 4,
    "name": "동미러",
    "nameEn": "Bronzor",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 570,
      "attack": 24,
      "defense": 86,
      "spAttack": 24,
      "spDefense": 86,
      "speed": 23
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "bronzong",
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      },
      {
        "moveId": "psybeam",
        "learnLevel": 15
      },
      {
        "moveId": "psychic",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/436.gif"
  },
  'bronzong': {
    "id": "bronzong",
    "pokedexNumber": 437,
    "generation": 4,
    "name": "동탁군",
    "nameEn": "Bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 89,
      "defense": 116,
      "spAttack": 79,
      "spDefense": 116,
      "speed": 33
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      },
      {
        "moveId": "psybeam",
        "learnLevel": 15
      },
      {
        "moveId": "psychic",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/437.gif"
  },
  'bonsly': {
    "id": "bonsly",
    "pokedexNumber": 438,
    "generation": 4,
    "name": "꼬지지",
    "nameEn": "Bonsly",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 80,
      "defense": 95,
      "spAttack": 10,
      "spDefense": 45,
      "speed": 10
    },
    "baseExp": 145,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "sudowoodo",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/438.gif"
  },
  'mime_jr': {
    "id": "mime_jr",
    "pokedexNumber": 439,
    "generation": 4,
    "name": "흉내내",
    "nameEn": "Mime Jr",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 200,
      "attack": 25,
      "defense": 45,
      "spAttack": 70,
      "spDefense": 90,
      "speed": 60
    },
    "baseExp": 155,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "mr_mime",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      },
      {
        "moveId": "moonblast",
        "learnLevel": 15
      },
      {
        "moveId": "play_rough",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/439.gif"
  },
  'happiny': {
    "id": "happiny",
    "pokedexNumber": 440,
    "generation": 4,
    "name": "핑복",
    "nameEn": "Happiny",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 5,
      "defense": 5,
      "spAttack": 15,
      "spDefense": 65,
      "speed": 30
    },
    "baseExp": 275,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "chansey",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/440.gif"
  },
  'chatot': {
    "id": "chatot",
    "pokedexNumber": 441,
    "generation": 4,
    "name": "페라페",
    "nameEn": "Chatot",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 760,
      "attack": 65,
      "defense": 45,
      "spAttack": 92,
      "spDefense": 42,
      "speed": 91
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/441.gif"
  },
  'spiritomb': {
    "id": "spiritomb",
    "pokedexNumber": 442,
    "generation": 4,
    "name": "화강돌",
    "nameEn": "Spiritomb",
    "types": [
      "ghost",
      "dark"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 92,
      "defense": 108,
      "spAttack": 92,
      "spDefense": 108,
      "speed": 35
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/442.gif"
  },
  'gible': {
    "id": "gible",
    "pokedexNumber": 443,
    "generation": 4,
    "name": "딥상어동",
    "nameEn": "Gible",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 580,
      "attack": 70,
      "defense": 45,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 42
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "gabite",
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/443.gif"
  },
  'gabite': {
    "id": "gabite",
    "pokedexNumber": 444,
    "generation": 4,
    "name": "한바이트",
    "nameEn": "Gabite",
    "types": [
      "dragon",
      "ground"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 90,
      "defense": 65,
      "spAttack": 50,
      "spDefense": 55,
      "speed": 82
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "garchomp",
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/444.gif"
  },
  'munchlax': {
    "id": "munchlax",
    "pokedexNumber": 446,
    "generation": 4,
    "name": "먹고자",
    "nameEn": "Munchlax",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 1350,
      "attack": 85,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 85,
      "speed": 5
    },
    "baseExp": 195,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 2,
    "evolvesTo": "snorlax",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/446.gif"
  },
  'riolu': {
    "id": "riolu",
    "pokedexNumber": 447,
    "generation": 4,
    "name": "리오르",
    "nameEn": "Riolu",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 70,
      "defense": 40,
      "spAttack": 35,
      "spDefense": 40,
      "speed": 60
    },
    "baseExp": 143,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lucario",
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/447.gif"
  },
  'hippopotas': {
    "id": "hippopotas",
    "pokedexNumber": 449,
    "generation": 4,
    "name": "히포포타스",
    "nameEn": "Hippopotas",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 72,
      "defense": 78,
      "spAttack": 38,
      "spDefense": 42,
      "speed": 32
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "hippowdon",
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/449.gif"
  },
  'hippowdon': {
    "id": "hippowdon",
    "pokedexNumber": 450,
    "generation": 4,
    "name": "하마돈",
    "nameEn": "Hippowdon",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 1080,
      "attack": 112,
      "defense": 118,
      "spAttack": 68,
      "spDefense": 72,
      "speed": 47
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/450.gif"
  },
  'skorupi': {
    "id": "skorupi",
    "pokedexNumber": 451,
    "generation": 4,
    "name": "스콜피",
    "nameEn": "Skorupi",
    "types": [
      "poison",
      "bug"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 50,
      "defense": 90,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 65
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "drapion",
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "x_scissor",
        "learnLevel": 15
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/451.gif"
  },
  'drapion': {
    "id": "drapion",
    "pokedexNumber": 452,
    "generation": 4,
    "name": "드래피온",
    "nameEn": "Drapion",
    "types": [
      "poison",
      "dark"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 90,
      "defense": 110,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/452.gif"
  },
  'croagunk': {
    "id": "croagunk",
    "pokedexNumber": 453,
    "generation": 4,
    "name": "삐딱구리",
    "nameEn": "Croagunk",
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 480,
      "attack": 61,
      "defense": 40,
      "spAttack": 61,
      "spDefense": 40,
      "speed": 50
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "toxicroak",
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/453.gif"
  },
  'toxicroak': {
    "id": "toxicroak",
    "pokedexNumber": 454,
    "generation": 4,
    "name": "독개굴",
    "nameEn": "Toxicroak",
    "types": [
      "poison",
      "fighting"
    ],
    "baseStats": {
      "hp": 830,
      "attack": 106,
      "defense": 65,
      "spAttack": 86,
      "spDefense": 65,
      "speed": 85
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/454.gif"
  },
  'carnivine': {
    "id": "carnivine",
    "pokedexNumber": 455,
    "generation": 4,
    "name": "무스틈니",
    "nameEn": "Carnivine",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 740,
      "attack": 100,
      "defense": 72,
      "spAttack": 90,
      "spDefense": 72,
      "speed": 46
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/455.gif"
  },
  'finneon': {
    "id": "finneon",
    "pokedexNumber": 456,
    "generation": 4,
    "name": "형광어",
    "nameEn": "Finneon",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 490,
      "attack": 49,
      "defense": 56,
      "spAttack": 49,
      "spDefense": 61,
      "speed": 66
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lumineon",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/456.gif"
  },
  'lumineon': {
    "id": "lumineon",
    "pokedexNumber": 457,
    "generation": 4,
    "name": "네오라이트",
    "nameEn": "Lumineon",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 690,
      "attack": 69,
      "defense": 76,
      "spAttack": 69,
      "spDefense": 86,
      "speed": 91
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/457.gif"
  },
  'mantyke': {
    "id": "mantyke",
    "pokedexNumber": 458,
    "generation": 4,
    "name": "타만타",
    "nameEn": "Mantyke",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 20,
      "defense": 50,
      "spAttack": 60,
      "spDefense": 120,
      "speed": 50
    },
    "baseExp": 173,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "mantine",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/458.gif"
  },
  'snover': {
    "id": "snover",
    "pokedexNumber": 459,
    "generation": 4,
    "name": "눈쓰개",
    "nameEn": "Snover",
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 62,
      "defense": 50,
      "spAttack": 62,
      "spDefense": 60,
      "speed": 40
    },
    "baseExp": 168,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "abomasnow",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "ice_beam",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/459.gif"
  },
  'abomasnow': {
    "id": "abomasnow",
    "pokedexNumber": 460,
    "generation": 4,
    "name": "눈설왕",
    "nameEn": "Abomasnow",
    "types": [
      "grass",
      "ice"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 92,
      "defense": 75,
      "spAttack": 92,
      "spDefense": 85,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "ice_beam",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/460.gif"
  },
  'weavile': {
    "id": "weavile",
    "pokedexNumber": 461,
    "generation": 4,
    "name": "포푸니라",
    "nameEn": "Weavile",
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 120,
      "defense": 65,
      "spAttack": 45,
      "spDefense": 85,
      "speed": 125
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "ice_beam",
        "learnLevel": 8
      },
      {
        "moveId": "blizzard",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/461.gif"
  },
  'magnezone': {
    "id": "magnezone",
    "pokedexNumber": 462,
    "generation": 4,
    "name": "자포코일",
    "nameEn": "Magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 70,
      "defense": 115,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/462.gif"
  },
  'lickilicky': {
    "id": "lickilicky",
    "pokedexNumber": 463,
    "generation": 4,
    "name": "내룸벨트",
    "nameEn": "Lickilicky",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 85,
      "defense": 95,
      "spAttack": 80,
      "spDefense": 95,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/463.gif"
  },
  'rhyperior': {
    "id": "rhyperior",
    "pokedexNumber": 464,
    "generation": 4,
    "name": "거대코뿌리",
    "nameEn": "Rhyperior",
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 1150,
      "attack": 140,
      "defense": 130,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 40
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/464.gif"
  },
  'tangrowth': {
    "id": "tangrowth",
    "pokedexNumber": 465,
    "generation": 4,
    "name": "덩쿠림보",
    "nameEn": "Tangrowth",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 100,
      "defense": 125,
      "spAttack": 110,
      "spDefense": 50,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/465.gif"
  },
  'electivire': {
    "id": "electivire",
    "pokedexNumber": 466,
    "generation": 4,
    "name": "에레키블",
    "nameEn": "Electivire",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 123,
      "defense": 67,
      "spAttack": 95,
      "spDefense": 85,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/466.gif"
  },
  'magmortar': {
    "id": "magmortar",
    "pokedexNumber": 467,
    "generation": 4,
    "name": "마그마번",
    "nameEn": "Magmortar",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 95,
      "defense": 67,
      "spAttack": 125,
      "spDefense": 95,
      "speed": 83
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/467.gif"
  },
  'togekiss': {
    "id": "togekiss",
    "pokedexNumber": 468,
    "generation": 4,
    "name": "토게키스",
    "nameEn": "Togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 50,
      "defense": 95,
      "spAttack": 120,
      "spDefense": 115,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/468.gif"
  },
  'yanmega': {
    "id": "yanmega",
    "pokedexNumber": 469,
    "generation": 4,
    "name": "메가자리",
    "nameEn": "Yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 860,
      "attack": 76,
      "defense": 86,
      "spAttack": 116,
      "spDefense": 56,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/469.gif"
  },
  'leafeon': {
    "id": "leafeon",
    "pokedexNumber": 470,
    "generation": 4,
    "name": "리피아",
    "nameEn": "Leafeon",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 110,
      "defense": 130,
      "spAttack": 60,
      "spDefense": 65,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/470.gif"
  },
  'glaceon': {
    "id": "glaceon",
    "pokedexNumber": 471,
    "generation": 4,
    "name": "글레이시아",
    "nameEn": "Glaceon",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 60,
      "defense": 110,
      "spAttack": 130,
      "spDefense": 95,
      "speed": 65
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/471.gif"
  },
  'gliscor': {
    "id": "gliscor",
    "pokedexNumber": 472,
    "generation": 4,
    "name": "글라이온",
    "nameEn": "Gliscor",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 95,
      "defense": 125,
      "spAttack": 45,
      "spDefense": 75,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/472.gif"
  },
  'mamoswine': {
    "id": "mamoswine",
    "pokedexNumber": 473,
    "generation": 4,
    "name": "맘모꾸리",
    "nameEn": "Mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 130,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 60,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/473.gif"
  },
  'porygon_z': {
    "id": "porygon_z",
    "pokedexNumber": 474,
    "generation": 4,
    "name": "폴리곤Z",
    "nameEn": "Porygon Z",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 80,
      "defense": 70,
      "spAttack": 135,
      "spDefense": 75,
      "speed": 90
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/474.gif"
  },
  'gallade': {
    "id": "gallade",
    "pokedexNumber": 475,
    "generation": 4,
    "name": "엘레이드",
    "nameEn": "Gallade",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 125,
      "defense": 65,
      "spAttack": 65,
      "spDefense": 115,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/475.gif"
  },
  'probopass': {
    "id": "probopass",
    "pokedexNumber": 476,
    "generation": 4,
    "name": "대코파스",
    "nameEn": "Probopass",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 55,
      "defense": 145,
      "spAttack": 75,
      "spDefense": 150,
      "speed": 40
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/476.gif"
  },
  'dusknoir': {
    "id": "dusknoir",
    "pokedexNumber": 477,
    "generation": 4,
    "name": "야느와르몽",
    "nameEn": "Dusknoir",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 100,
      "defense": 135,
      "spAttack": 65,
      "spDefense": 135,
      "speed": 45
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/477.gif"
  },
  'froslass': {
    "id": "froslass",
    "pokedexNumber": 478,
    "generation": 4,
    "name": "눈여아",
    "nameEn": "Froslass",
    "types": [
      "ice",
      "ghost"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 80,
      "defense": 70,
      "spAttack": 80,
      "spDefense": 70,
      "speed": 110
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/478.gif"
  },
  'rotom': {
    "id": "rotom",
    "pokedexNumber": 479,
    "generation": 4,
    "name": "로토무",
    "nameEn": "Rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 50,
      "defense": 77,
      "spAttack": 95,
      "spDefense": 77,
      "speed": 91
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/479.gif"
  },
  'uxie': {
    "id": "uxie",
    "pokedexNumber": 480,
    "generation": 4,
    "name": "유크시",
    "nameEn": "Uxie",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 75,
      "defense": 130,
      "spAttack": 75,
      "spDefense": 130,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/480.gif"
  },
  'mesprit': {
    "id": "mesprit",
    "pokedexNumber": 481,
    "generation": 4,
    "name": "엠라이트",
    "nameEn": "Mesprit",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 105,
      "defense": 105,
      "spAttack": 105,
      "spDefense": 105,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/481.gif"
  },
  'azelf': {
    "id": "azelf",
    "pokedexNumber": 482,
    "generation": 4,
    "name": "아그놈",
    "nameEn": "Azelf",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 125,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 70,
      "speed": 115
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/482.gif"
  },
  'heatran': {
    "id": "heatran",
    "pokedexNumber": 485,
    "generation": 4,
    "name": "히드런",
    "nameEn": "Heatran",
    "types": [
      "fire",
      "steel"
    ],
    "baseStats": {
      "hp": 910,
      "attack": 90,
      "defense": 106,
      "spAttack": 130,
      "spDefense": 106,
      "speed": 77
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/485.gif"
  },
  'regigigas': {
    "id": "regigigas",
    "pokedexNumber": 486,
    "generation": 4,
    "name": "레지기가스",
    "nameEn": "Regigigas",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 160,
      "defense": 110,
      "spAttack": 80,
      "spDefense": 110,
      "speed": 100
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/486.gif"
  },
  'cresselia': {
    "id": "cresselia",
    "pokedexNumber": 488,
    "generation": 4,
    "name": "크레세리아",
    "nameEn": "Cresselia",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 1200,
      "attack": 70,
      "defense": 110,
      "spAttack": 75,
      "spDefense": 120,
      "speed": 85
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/488.gif"
  },
  'phione': {
    "id": "phione",
    "pokedexNumber": 489,
    "generation": 4,
    "name": "피오네",
    "nameEn": "Phione",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 80,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/489.gif"
  },
  'manaphy': {
    "id": "manaphy",
    "pokedexNumber": 490,
    "generation": 4,
    "name": "마나피",
    "nameEn": "Manaphy",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/490.gif"
  },
  'darkrai': {
    "id": "darkrai",
    "pokedexNumber": 491,
    "generation": 4,
    "name": "다크라이",
    "nameEn": "Darkrai",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 90,
      "defense": 90,
      "spAttack": 135,
      "spDefense": 90,
      "speed": 125
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/491.gif"
  },
  'shaymin': {
    "id": "shaymin",
    "pokedexNumber": 492,
    "generation": 4,
    "name": "쉐이미",
    "nameEn": "Shaymin",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 100,
      "defense": 100,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 100
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/492.gif"
  },
  'servine': {
    "id": "servine",
    "pokedexNumber": 496,
    "generation": 5,
    "name": "샤비",
    "nameEn": "Servine",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 60,
      "defense": 75,
      "spAttack": 60,
      "spDefense": 75,
      "speed": 83
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "serperior",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/496.gif"
  },
  'serperior': {
    "id": "serperior",
    "pokedexNumber": 497,
    "generation": 5,
    "name": "샤로다",
    "nameEn": "Serperior",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 75,
      "defense": 95,
      "spAttack": 75,
      "spDefense": 95,
      "speed": 113
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/497.gif"
  },
  'pignite': {
    "id": "pignite",
    "pokedexNumber": 499,
    "generation": 5,
    "name": "차오꿀",
    "nameEn": "Pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 93,
      "defense": 55,
      "spAttack": 70,
      "spDefense": 55,
      "speed": 55
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "emboar",
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/499.gif"
  },
  'emboar': {
    "id": "emboar",
    "pokedexNumber": 500,
    "generation": 5,
    "name": "염무왕",
    "nameEn": "Emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 123,
      "defense": 65,
      "spAttack": 100,
      "spDefense": 65,
      "speed": 65
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/500.gif"
  },
  'dewott': {
    "id": "dewott",
    "pokedexNumber": 502,
    "generation": 5,
    "name": "쌍검자비",
    "nameEn": "Dewott",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 75,
      "defense": 60,
      "spAttack": 83,
      "spDefense": 60,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "samurott",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/502.gif"
  },
  'samurott': {
    "id": "samurott",
    "pokedexNumber": 503,
    "generation": 5,
    "name": "대검귀",
    "nameEn": "Samurott",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 100,
      "defense": 85,
      "spAttack": 108,
      "spDefense": 70,
      "speed": 70
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/503.gif"
  },
  'patrat': {
    "id": "patrat",
    "pokedexNumber": 504,
    "generation": 5,
    "name": "보르쥐",
    "nameEn": "Patrat",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 55,
      "defense": 39,
      "spAttack": 35,
      "spDefense": 39,
      "speed": 42
    },
    "baseExp": 128,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "watchog",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/504.gif"
  },
  'watchog': {
    "id": "watchog",
    "pokedexNumber": 505,
    "generation": 5,
    "name": "보르그",
    "nameEn": "Watchog",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 85,
      "defense": 69,
      "spAttack": 60,
      "spDefense": 69,
      "speed": 77
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/505.gif"
  },
  'lillipup': {
    "id": "lillipup",
    "pokedexNumber": 506,
    "generation": 5,
    "name": "요테리",
    "nameEn": "Lillipup",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 60,
      "defense": 45,
      "spAttack": 25,
      "spDefense": 45,
      "speed": 55
    },
    "baseExp": 138,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "herdier",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/506.gif"
  },
  'herdier': {
    "id": "herdier",
    "pokedexNumber": 507,
    "generation": 5,
    "name": "하데리어",
    "nameEn": "Herdier",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 80,
      "defense": 65,
      "spAttack": 35,
      "spDefense": 65,
      "speed": 60
    },
    "baseExp": 325,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "stoutland",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/507.gif"
  },
  'stoutland': {
    "id": "stoutland",
    "pokedexNumber": 508,
    "generation": 5,
    "name": "바랜드",
    "nameEn": "Stoutland",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 110,
      "defense": 90,
      "spAttack": 45,
      "spDefense": 90,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/508.gif"
  },
  'purrloin': {
    "id": "purrloin",
    "pokedexNumber": 509,
    "generation": 5,
    "name": "쌔비냥",
    "nameEn": "Purrloin",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 410,
      "attack": 50,
      "defense": 37,
      "spAttack": 50,
      "spDefense": 37,
      "speed": 66
    },
    "baseExp": 140,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "liepard",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/509.gif"
  },
  'liepard': {
    "id": "liepard",
    "pokedexNumber": 510,
    "generation": 5,
    "name": "레파르다스",
    "nameEn": "Liepard",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 640,
      "attack": 88,
      "defense": 50,
      "spAttack": 88,
      "spDefense": 50,
      "speed": 106
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/510.gif"
  },
  'pansage': {
    "id": "pansage",
    "pokedexNumber": 511,
    "generation": 5,
    "name": "야나프",
    "nameEn": "Pansage",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    },
    "baseExp": 158,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "simisage",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/511.gif"
  },
  'simisage': {
    "id": "simisage",
    "pokedexNumber": 512,
    "generation": 5,
    "name": "야나키",
    "nameEn": "Simisage",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/512.gif"
  },
  'pansear': {
    "id": "pansear",
    "pokedexNumber": 513,
    "generation": 5,
    "name": "바오프",
    "nameEn": "Pansear",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    },
    "baseExp": 158,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "simisear",
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/513.gif"
  },
  'simisear': {
    "id": "simisear",
    "pokedexNumber": 514,
    "generation": 5,
    "name": "바오키",
    "nameEn": "Simisear",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/514.gif"
  },
  'panpour': {
    "id": "panpour",
    "pokedexNumber": 515,
    "generation": 5,
    "name": "앗차프",
    "nameEn": "Panpour",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 53,
      "defense": 48,
      "spAttack": 53,
      "spDefense": 48,
      "speed": 64
    },
    "baseExp": 158,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "simipour",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/515.gif"
  },
  'simipour': {
    "id": "simipour",
    "pokedexNumber": 516,
    "generation": 5,
    "name": "앗차키",
    "nameEn": "Simipour",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 98,
      "defense": 63,
      "spAttack": 98,
      "spDefense": 63,
      "speed": 101
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/516.gif"
  },
  'munna': {
    "id": "munna",
    "pokedexNumber": 517,
    "generation": 5,
    "name": "몽나",
    "nameEn": "Munna",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 760,
      "attack": 25,
      "defense": 45,
      "spAttack": 67,
      "spDefense": 55,
      "speed": 24
    },
    "baseExp": 145,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "musharna",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/517.gif"
  },
  'musharna': {
    "id": "musharna",
    "pokedexNumber": 518,
    "generation": 5,
    "name": "몽얌나",
    "nameEn": "Musharna",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 1160,
      "attack": 55,
      "defense": 85,
      "spAttack": 107,
      "spDefense": 95,
      "speed": 29
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/518.gif"
  },
  'pidove': {
    "id": "pidove",
    "pokedexNumber": 519,
    "generation": 5,
    "name": "콩둘기",
    "nameEn": "Pidove",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 55,
      "defense": 50,
      "spAttack": 36,
      "spDefense": 30,
      "speed": 43
    },
    "baseExp": 133,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "tranquill",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/519.gif"
  },
  'tranquill': {
    "id": "tranquill",
    "pokedexNumber": 520,
    "generation": 5,
    "name": "유토브",
    "nameEn": "Tranquill",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 77,
      "defense": 62,
      "spAttack": 50,
      "spDefense": 42,
      "speed": 65
    },
    "baseExp": 313,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "unfezant",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/520.gif"
  },
  'unfezant': {
    "id": "unfezant",
    "pokedexNumber": 521,
    "generation": 5,
    "name": "켄호로우",
    "nameEn": "Unfezant",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 115,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 93
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/521.gif"
  },
  'blitzle': {
    "id": "blitzle",
    "pokedexNumber": 522,
    "generation": 5,
    "name": "줄뮤마",
    "nameEn": "Blitzle",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 60,
      "defense": 32,
      "spAttack": 50,
      "spDefense": 32,
      "speed": 76
    },
    "baseExp": 148,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "zebstrika",
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/522.gif"
  },
  'zebstrika': {
    "id": "zebstrika",
    "pokedexNumber": 523,
    "generation": 5,
    "name": "제브라이카",
    "nameEn": "Zebstrika",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 100,
      "defense": 63,
      "spAttack": 80,
      "spDefense": 63,
      "speed": 116
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/523.gif"
  },
  'roggenrola': {
    "id": "roggenrola",
    "pokedexNumber": 524,
    "generation": 5,
    "name": "단굴",
    "nameEn": "Roggenrola",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 75,
      "defense": 85,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    },
    "baseExp": 140,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "boldore",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/524.gif"
  },
  'boldore': {
    "id": "boldore",
    "pokedexNumber": 525,
    "generation": 5,
    "name": "암트르",
    "nameEn": "Boldore",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 105,
      "defense": 105,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 20
    },
    "baseExp": 343,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "gigalith",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/525.gif"
  },
  'gigalith': {
    "id": "gigalith",
    "pokedexNumber": 526,
    "generation": 5,
    "name": "기가이어스",
    "nameEn": "Gigalith",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 135,
      "defense": 130,
      "spAttack": 60,
      "spDefense": 80,
      "speed": 25
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/526.gif"
  },
  'woobat': {
    "id": "woobat",
    "pokedexNumber": 527,
    "generation": 5,
    "name": "또르박쥐",
    "nameEn": "Woobat",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 45,
      "defense": 43,
      "spAttack": 55,
      "spDefense": 43,
      "speed": 72
    },
    "baseExp": 163,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "swoobat",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/527.gif"
  },
  'swoobat': {
    "id": "swoobat",
    "pokedexNumber": 528,
    "generation": 5,
    "name": "맘박쥐",
    "nameEn": "Swoobat",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 57,
      "defense": 55,
      "spAttack": 77,
      "spDefense": 55,
      "speed": 114
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/528.gif"
  },
  'drilbur': {
    "id": "drilbur",
    "pokedexNumber": 529,
    "generation": 5,
    "name": "두더류",
    "nameEn": "Drilbur",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 85,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 45,
      "speed": 68
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "excadrill",
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/529.gif"
  },
  'excadrill': {
    "id": "excadrill",
    "pokedexNumber": 530,
    "generation": 5,
    "name": "몰드류",
    "nameEn": "Excadrill",
    "types": [
      "ground",
      "steel"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 135,
      "defense": 60,
      "spAttack": 50,
      "spDefense": 65,
      "speed": 88
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "iron_head",
        "learnLevel": 15
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 25
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/530.gif"
  },
  'audino': {
    "id": "audino",
    "pokedexNumber": 531,
    "generation": 5,
    "name": "다부니",
    "nameEn": "Audino",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 1030,
      "attack": 60,
      "defense": 86,
      "spAttack": 60,
      "spDefense": 86,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/531.gif"
  },
  'timburr': {
    "id": "timburr",
    "pokedexNumber": 532,
    "generation": 5,
    "name": "으랏차",
    "nameEn": "Timburr",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 80,
      "defense": 55,
      "spAttack": 25,
      "spDefense": 35,
      "speed": 35
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "gurdurr",
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/532.gif"
  },
  'gurdurr': {
    "id": "gurdurr",
    "pokedexNumber": 533,
    "generation": 5,
    "name": "토쇠골",
    "nameEn": "Gurdurr",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 105,
      "defense": 85,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 40
    },
    "baseExp": 355,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "conkeldurr",
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/533.gif"
  },
  'conkeldurr': {
    "id": "conkeldurr",
    "pokedexNumber": 534,
    "generation": 5,
    "name": "노보청",
    "nameEn": "Conkeldurr",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 1050,
      "attack": 140,
      "defense": 95,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 45
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/534.gif"
  },
  'tympole': {
    "id": "tympole",
    "pokedexNumber": 535,
    "generation": 5,
    "name": "동챙이",
    "nameEn": "Tympole",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 50,
      "defense": 40,
      "spAttack": 50,
      "spDefense": 40,
      "speed": 64
    },
    "baseExp": 148,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "palpitoad",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/535.gif"
  },
  'palpitoad': {
    "id": "palpitoad",
    "pokedexNumber": 536,
    "generation": 5,
    "name": "두까비",
    "nameEn": "Palpitoad",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 65,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 69
    },
    "baseExp": 335,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "seismitoad",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "earthquake",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/536.gif"
  },
  'seismitoad': {
    "id": "seismitoad",
    "pokedexNumber": 537,
    "generation": 5,
    "name": "두빅굴",
    "nameEn": "Seismitoad",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 1050,
      "attack": 95,
      "defense": 75,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 74
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "earthquake",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/537.gif"
  },
  'throh': {
    "id": "throh",
    "pokedexNumber": 538,
    "generation": 5,
    "name": "던지미",
    "nameEn": "Throh",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 1200,
      "attack": 100,
      "defense": 85,
      "spAttack": 30,
      "spDefense": 85,
      "speed": 45
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/538.gif"
  },
  'sawk': {
    "id": "sawk",
    "pokedexNumber": 539,
    "generation": 5,
    "name": "타격귀",
    "nameEn": "Sawk",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 125,
      "defense": 75,
      "spAttack": 30,
      "spDefense": 75,
      "speed": 85
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/539.gif"
  },
  'sewaddle': {
    "id": "sewaddle",
    "pokedexNumber": 540,
    "generation": 5,
    "name": "두르보",
    "nameEn": "Sewaddle",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 53,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 42
    },
    "baseExp": 155,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "swadloon",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 15
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/540.gif"
  },
  'swadloon': {
    "id": "swadloon",
    "pokedexNumber": 541,
    "generation": 5,
    "name": "두르쿤",
    "nameEn": "Swadloon",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 63,
      "defense": 90,
      "spAttack": 50,
      "spDefense": 80,
      "speed": 42
    },
    "baseExp": 333,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "leavanny",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 15
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/541.gif"
  },
  'leavanny': {
    "id": "leavanny",
    "pokedexNumber": 542,
    "generation": 5,
    "name": "모아머",
    "nameEn": "Leavanny",
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 103,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 92
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 15
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/542.gif"
  },
  'venipede': {
    "id": "venipede",
    "pokedexNumber": 543,
    "generation": 5,
    "name": "마디네",
    "nameEn": "Venipede",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 300,
      "attack": 45,
      "defense": 59,
      "spAttack": 30,
      "spDefense": 39,
      "speed": 57
    },
    "baseExp": 130,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "whirlipede",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 15
      },
      {
        "moveId": "toxic",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/543.gif"
  },
  'whirlipede': {
    "id": "whirlipede",
    "pokedexNumber": 544,
    "generation": 5,
    "name": "휠구",
    "nameEn": "Whirlipede",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 55,
      "defense": 99,
      "spAttack": 40,
      "spDefense": 79,
      "speed": 47
    },
    "baseExp": 315,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "scolipede",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 15
      },
      {
        "moveId": "toxic",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/544.gif"
  },
  'scolipede': {
    "id": "scolipede",
    "pokedexNumber": 545,
    "generation": 5,
    "name": "펜드라",
    "nameEn": "Scolipede",
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 100,
      "defense": 89,
      "spAttack": 55,
      "spDefense": 69,
      "speed": 112
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 15
      },
      {
        "moveId": "toxic",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/545.gif"
  },
  'cottonee': {
    "id": "cottonee",
    "pokedexNumber": 546,
    "generation": 5,
    "name": "소미안",
    "nameEn": "Cottonee",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 27,
      "defense": 60,
      "spAttack": 37,
      "spDefense": 50,
      "speed": 66
    },
    "baseExp": 140,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "whimsicott",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/546.gif"
  },
  'whimsicott': {
    "id": "whimsicott",
    "pokedexNumber": 547,
    "generation": 5,
    "name": "엘풍",
    "nameEn": "Whimsicott",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 67,
      "defense": 85,
      "spAttack": 77,
      "spDefense": 75,
      "speed": 116
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/547.gif"
  },
  'petilil': {
    "id": "petilil",
    "pokedexNumber": 548,
    "generation": 5,
    "name": "치릴리",
    "nameEn": "Petilil",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 35,
      "defense": 50,
      "spAttack": 70,
      "spDefense": 50,
      "speed": 30
    },
    "baseExp": 140,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lilligant",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/548.gif"
  },
  'lilligant': {
    "id": "lilligant",
    "pokedexNumber": 549,
    "generation": 5,
    "name": "드레디어",
    "nameEn": "Lilligant",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 60,
      "defense": 75,
      "spAttack": 110,
      "spDefense": 75,
      "speed": 90
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/549.gif"
  },
  'basculin': {
    "id": "basculin",
    "pokedexNumber": 550,
    "generation": 5,
    "name": "배쓰나이",
    "nameEn": "Basculin",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 92,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 55,
      "speed": 98
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/550.gif"
  },
  'sandile': {
    "id": "sandile",
    "pokedexNumber": 551,
    "generation": 5,
    "name": "깜눈크",
    "nameEn": "Sandile",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 72,
      "defense": 35,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 65
    },
    "baseExp": 145,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "krokorok",
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/551.gif"
  },
  'krokorok': {
    "id": "krokorok",
    "pokedexNumber": 552,
    "generation": 5,
    "name": "악비르",
    "nameEn": "Krokorok",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 82,
      "defense": 45,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 74
    },
    "baseExp": 308,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "krookodile",
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/552.gif"
  },
  'krookodile': {
    "id": "krookodile",
    "pokedexNumber": 553,
    "generation": 5,
    "name": "악비아르",
    "nameEn": "Krookodile",
    "types": [
      "ground",
      "dark"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 117,
      "defense": 80,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 92
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif"
  },
  'darumaka': {
    "id": "darumaka",
    "pokedexNumber": 554,
    "generation": 5,
    "name": "달막화",
    "nameEn": "Darumaka",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 90,
      "defense": 45,
      "spAttack": 15,
      "spDefense": 45,
      "speed": 50
    },
    "baseExp": 158,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "darmanitan",
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/554.gif"
  },
  'darmanitan': {
    "id": "darmanitan",
    "pokedexNumber": 555,
    "generation": 5,
    "name": "불비달마",
    "nameEn": "Darmanitan",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 1050,
      "attack": 140,
      "defense": 55,
      "spAttack": 30,
      "spDefense": 55,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/555.gif"
  },
  'maractus': {
    "id": "maractus",
    "pokedexNumber": 556,
    "generation": 5,
    "name": "마라카치",
    "nameEn": "Maractus",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 86,
      "defense": 67,
      "spAttack": 106,
      "spDefense": 67,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/556.gif"
  },
  'dwebble': {
    "id": "dwebble",
    "pokedexNumber": 557,
    "generation": 5,
    "name": "돌살이",
    "nameEn": "Dwebble",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 65,
      "defense": 85,
      "spAttack": 35,
      "spDefense": 35,
      "speed": 55
    },
    "baseExp": 163,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "crustle",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/557.gif"
  },
  'crustle': {
    "id": "crustle",
    "pokedexNumber": 558,
    "generation": 5,
    "name": "암팰리스",
    "nameEn": "Crustle",
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 105,
      "defense": 125,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 45
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/558.gif"
  },
  'scraggy': {
    "id": "scraggy",
    "pokedexNumber": 559,
    "generation": 5,
    "name": "곤율랭",
    "nameEn": "Scraggy",
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 75,
      "defense": 70,
      "spAttack": 35,
      "spDefense": 70,
      "speed": 48
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "scrafty",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 8
      },
      {
        "moveId": "close_combat",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/559.gif"
  },
  'scrafty': {
    "id": "scrafty",
    "pokedexNumber": 560,
    "generation": 5,
    "name": "곤율거니",
    "nameEn": "Scrafty",
    "types": [
      "dark",
      "fighting"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 90,
      "defense": 115,
      "spAttack": 45,
      "spDefense": 115,
      "speed": 58
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 8
      },
      {
        "moveId": "close_combat",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/560.gif"
  },
  'sigilyph': {
    "id": "sigilyph",
    "pokedexNumber": 561,
    "generation": 5,
    "name": "심보러",
    "nameEn": "Sigilyph",
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 720,
      "attack": 58,
      "defense": 80,
      "spAttack": 103,
      "spDefense": 80,
      "speed": 97
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/561.gif"
  },
  'yamask': {
    "id": "yamask",
    "pokedexNumber": 562,
    "generation": 5,
    "name": "데스마스",
    "nameEn": "Yamask",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 380,
      "attack": 30,
      "defense": 85,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 30
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "cofagrigus",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/562.gif"
  },
  'cofagrigus': {
    "id": "cofagrigus",
    "pokedexNumber": 563,
    "generation": 5,
    "name": "데스니칸",
    "nameEn": "Cofagrigus",
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 580,
      "attack": 50,
      "defense": 145,
      "spAttack": 95,
      "spDefense": 105,
      "speed": 30
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/563.gif"
  },
  'tirtouga': {
    "id": "tirtouga",
    "pokedexNumber": 564,
    "generation": 5,
    "name": "프로토가",
    "nameEn": "Tirtouga",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 540,
      "attack": 78,
      "defense": 103,
      "spAttack": 53,
      "spDefense": 45,
      "speed": 22
    },
    "baseExp": 178,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "carracosta",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/564.gif"
  },
  'carracosta': {
    "id": "carracosta",
    "pokedexNumber": 565,
    "generation": 5,
    "name": "늑골라",
    "nameEn": "Carracosta",
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 740,
      "attack": 108,
      "defense": 133,
      "spAttack": 83,
      "spDefense": 65,
      "speed": 32
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/565.gif"
  },
  'archen': {
    "id": "archen",
    "pokedexNumber": 566,
    "generation": 5,
    "name": "아켄",
    "nameEn": "Archen",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 112,
      "defense": 45,
      "spAttack": 74,
      "spDefense": 45,
      "speed": 70
    },
    "baseExp": 178,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 2,
    "evolvesTo": "archeops",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/566.gif"
  },
  'archeops': {
    "id": "archeops",
    "pokedexNumber": 567,
    "generation": 5,
    "name": "아케오스",
    "nameEn": "Archeops",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 140,
      "defense": 65,
      "spAttack": 112,
      "spDefense": 65,
      "speed": 110
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/567.gif"
  },
  'trubbish': {
    "id": "trubbish",
    "pokedexNumber": 568,
    "generation": 5,
    "name": "깨봉이",
    "nameEn": "Trubbish",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 50,
      "defense": 62,
      "spAttack": 40,
      "spDefense": 62,
      "speed": 65
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "garbodor",
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/568.gif"
  },
  'garbodor': {
    "id": "garbodor",
    "pokedexNumber": 569,
    "generation": 5,
    "name": "더스트나",
    "nameEn": "Garbodor",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 95,
      "defense": 82,
      "spAttack": 60,
      "spDefense": 82,
      "speed": 75
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "sludge_bomb",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/569.gif"
  },
  'zorua': {
    "id": "zorua",
    "pokedexNumber": 570,
    "generation": 5,
    "name": "조로아",
    "nameEn": "Zorua",
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 65,
      "defense": 40,
      "spAttack": 80,
      "spDefense": 40,
      "speed": 65
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "zoroark",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/570.gif"
  },
  'minccino': {
    "id": "minccino",
    "pokedexNumber": 572,
    "generation": 5,
    "name": "치라미",
    "nameEn": "Minccino",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 50,
      "defense": 40,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 75
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "cinccino",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/572.gif"
  },
  'cinccino': {
    "id": "cinccino",
    "pokedexNumber": 573,
    "generation": 5,
    "name": "치라치노",
    "nameEn": "Cinccino",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 95,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 60,
      "speed": 115
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/573.gif"
  },
  'gothita': {
    "id": "gothita",
    "pokedexNumber": 574,
    "generation": 5,
    "name": "고디탱",
    "nameEn": "Gothita",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 30,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 45
    },
    "baseExp": 145,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "gothorita",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/574.gif"
  },
  'gothorita': {
    "id": "gothorita",
    "pokedexNumber": 575,
    "generation": 5,
    "name": "고디보미",
    "nameEn": "Gothorita",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 45,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 85,
      "speed": 55
    },
    "baseExp": 343,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "gothitelle",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/575.gif"
  },
  'gothitelle': {
    "id": "gothitelle",
    "pokedexNumber": 576,
    "generation": 5,
    "name": "고디모아젤",
    "nameEn": "Gothitelle",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 55,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 110,
      "speed": 65
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/576.gif"
  },
  'solosis': {
    "id": "solosis",
    "pokedexNumber": 577,
    "generation": 5,
    "name": "유니란",
    "nameEn": "Solosis",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 30,
      "defense": 40,
      "spAttack": 105,
      "spDefense": 50,
      "speed": 20
    },
    "baseExp": 145,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "duosion",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/577.gif"
  },
  'duosion': {
    "id": "duosion",
    "pokedexNumber": 578,
    "generation": 5,
    "name": "듀란",
    "nameEn": "Duosion",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 40,
      "defense": 50,
      "spAttack": 125,
      "spDefense": 60,
      "speed": 30
    },
    "baseExp": 325,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "reuniclus",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/578.gif"
  },
  'reuniclus': {
    "id": "reuniclus",
    "pokedexNumber": 579,
    "generation": 5,
    "name": "란쿨루스",
    "nameEn": "Reuniclus",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 65,
      "defense": 75,
      "spAttack": 125,
      "spDefense": 85,
      "speed": 30
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/579.gif"
  },
  'ducklett': {
    "id": "ducklett",
    "pokedexNumber": 580,
    "generation": 5,
    "name": "꼬지보리",
    "nameEn": "Ducklett",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 44,
      "defense": 50,
      "spAttack": 44,
      "spDefense": 50,
      "speed": 55
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "swanna",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/580.gif"
  },
  'swanna': {
    "id": "swanna",
    "pokedexNumber": 581,
    "generation": 5,
    "name": "스완나",
    "nameEn": "Swanna",
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 87,
      "defense": 63,
      "spAttack": 87,
      "spDefense": 63,
      "speed": 98
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/581.gif"
  },
  'vanillite': {
    "id": "vanillite",
    "pokedexNumber": 582,
    "generation": 5,
    "name": "바닐프티",
    "nameEn": "Vanillite",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 360,
      "attack": 50,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 60,
      "speed": 44
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "vanillish",
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/582.gif"
  },
  'vanillish': {
    "id": "vanillish",
    "pokedexNumber": 583,
    "generation": 5,
    "name": "바닐리치",
    "nameEn": "Vanillish",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 510,
      "attack": 65,
      "defense": 65,
      "spAttack": 80,
      "spDefense": 75,
      "speed": 59
    },
    "baseExp": 345,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "vanilluxe",
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/583.gif"
  },
  'vanilluxe': {
    "id": "vanilluxe",
    "pokedexNumber": 584,
    "generation": 5,
    "name": "배바닐라",
    "nameEn": "Vanilluxe",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 710,
      "attack": 95,
      "defense": 85,
      "spAttack": 110,
      "spDefense": 95,
      "speed": 79
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/584.gif"
  },
  'deerling': {
    "id": "deerling",
    "pokedexNumber": 585,
    "generation": 5,
    "name": "사철록",
    "nameEn": "Deerling",
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 60,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 75
    },
    "baseExp": 168,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "sawsbuck",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/585.gif"
  },
  'sawsbuck': {
    "id": "sawsbuck",
    "pokedexNumber": 586,
    "generation": 5,
    "name": "바라철록",
    "nameEn": "Sawsbuck",
    "types": [
      "normal",
      "grass"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 100,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 95
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/586.gif"
  },
  'emolga': {
    "id": "emolga",
    "pokedexNumber": 587,
    "generation": 5,
    "name": "에몽가",
    "nameEn": "Emolga",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 75,
      "defense": 60,
      "spAttack": 75,
      "spDefense": 60,
      "speed": 103
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/587.gif"
  },
  'karrablast': {
    "id": "karrablast",
    "pokedexNumber": 588,
    "generation": 5,
    "name": "딱정곤",
    "nameEn": "Karrablast",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 75,
      "defense": 45,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 60
    },
    "baseExp": 158,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "escavalier",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/588.gif"
  },
  'escavalier': {
    "id": "escavalier",
    "pokedexNumber": 589,
    "generation": 5,
    "name": "슈바르고",
    "nameEn": "Escavalier",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 135,
      "defense": 105,
      "spAttack": 60,
      "spDefense": 105,
      "speed": 20
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "iron_head",
        "learnLevel": 15
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 25
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/589.gif"
  },
  'foongus': {
    "id": "foongus",
    "pokedexNumber": 590,
    "generation": 5,
    "name": "깜놀버슬",
    "nameEn": "Foongus",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 690,
      "attack": 55,
      "defense": 45,
      "spAttack": 55,
      "spDefense": 55,
      "speed": 15
    },
    "baseExp": 148,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "amoonguss",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/590.gif"
  },
  'amoonguss': {
    "id": "amoonguss",
    "pokedexNumber": 591,
    "generation": 5,
    "name": "뽀록나",
    "nameEn": "Amoonguss",
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 1140,
      "attack": 85,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 80,
      "speed": 30
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/591.gif"
  },
  'frillish': {
    "id": "frillish",
    "pokedexNumber": 592,
    "generation": 5,
    "name": "탱그릴",
    "nameEn": "Frillish",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 40,
      "defense": 50,
      "spAttack": 65,
      "spDefense": 85,
      "speed": 40
    },
    "baseExp": 168,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "jellicent",
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/592.gif"
  },
  'jellicent': {
    "id": "jellicent",
    "pokedexNumber": 593,
    "generation": 5,
    "name": "탱탱겔",
    "nameEn": "Jellicent",
    "types": [
      "water",
      "ghost"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 60,
      "defense": 70,
      "spAttack": 85,
      "spDefense": 105,
      "speed": 60
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/593.gif"
  },
  'alomomola': {
    "id": "alomomola",
    "pokedexNumber": 594,
    "generation": 5,
    "name": "맘복치",
    "nameEn": "Alomomola",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 1650,
      "attack": 75,
      "defense": 80,
      "spAttack": 40,
      "spDefense": 45,
      "speed": 65
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/594.gif"
  },
  'joltik': {
    "id": "joltik",
    "pokedexNumber": 595,
    "generation": 5,
    "name": "파쪼옥",
    "nameEn": "Joltik",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 47,
      "defense": 50,
      "spAttack": 57,
      "spDefense": 50,
      "speed": 65
    },
    "baseExp": 160,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "galvantula",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "thundershock",
        "learnLevel": 15
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/595.gif"
  },
  'galvantula': {
    "id": "galvantula",
    "pokedexNumber": 596,
    "generation": 5,
    "name": "전툴라",
    "nameEn": "Galvantula",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 77,
      "defense": 60,
      "spAttack": 97,
      "spDefense": 60,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "thundershock",
        "learnLevel": 15
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/596.gif"
  },
  'ferroseed': {
    "id": "ferroseed",
    "pokedexNumber": 597,
    "generation": 5,
    "name": "철시드",
    "nameEn": "Ferroseed",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 440,
      "attack": 50,
      "defense": 91,
      "spAttack": 24,
      "spDefense": 86,
      "speed": 10
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "ferrothorn",
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/597.gif"
  },
  'ferrothorn': {
    "id": "ferrothorn",
    "pokedexNumber": 598,
    "generation": 5,
    "name": "너트령",
    "nameEn": "Ferrothorn",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 740,
      "attack": 94,
      "defense": 131,
      "spAttack": 54,
      "spDefense": 116,
      "speed": 20
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/598.gif"
  },
  'klink': {
    "id": "klink",
    "pokedexNumber": 599,
    "generation": 5,
    "name": "기어르",
    "nameEn": "Klink",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 55,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 60,
      "speed": 30
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "klang",
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/599.gif"
  },
  'klang': {
    "id": "klang",
    "pokedexNumber": 600,
    "generation": 5,
    "name": "기기어르",
    "nameEn": "Klang",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 80,
      "defense": 95,
      "spAttack": 70,
      "spDefense": 85,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "klinklang",
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/600.gif"
  },
  'klinklang': {
    "id": "klinklang",
    "pokedexNumber": 601,
    "generation": 5,
    "name": "기기기어르",
    "nameEn": "Klinklang",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 100,
      "defense": 115,
      "spAttack": 70,
      "spDefense": 85,
      "speed": 90
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/601.gif"
  },
  'tynamo': {
    "id": "tynamo",
    "pokedexNumber": 602,
    "generation": 5,
    "name": "저리어",
    "nameEn": "Tynamo",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 350,
      "attack": 55,
      "defense": 40,
      "spAttack": 45,
      "spDefense": 40,
      "speed": 60
    },
    "baseExp": 138,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "eelektrik",
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/602.gif"
  },
  'eelektrik': {
    "id": "eelektrik",
    "pokedexNumber": 603,
    "generation": 5,
    "name": "저리릴",
    "nameEn": "Eelektrik",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 85,
      "defense": 70,
      "spAttack": 75,
      "spDefense": 70,
      "speed": 40
    },
    "baseExp": 355,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "eelektross",
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/603.gif"
  },
  'eelektross': {
    "id": "eelektross",
    "pokedexNumber": 604,
    "generation": 5,
    "name": "저리더프",
    "nameEn": "Eelektross",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 115,
      "defense": 80,
      "spAttack": 105,
      "spDefense": 80,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/604.gif"
  },
  'elgyem': {
    "id": "elgyem",
    "pokedexNumber": 605,
    "generation": 5,
    "name": "리그레",
    "nameEn": "Elgyem",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 55,
      "defense": 55,
      "spAttack": 85,
      "spDefense": 55,
      "speed": 30
    },
    "baseExp": 168,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "beheeyem",
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/605.gif"
  },
  'beheeyem': {
    "id": "beheeyem",
    "pokedexNumber": 606,
    "generation": 5,
    "name": "벰크",
    "nameEn": "Beheeyem",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 75,
      "defense": 75,
      "spAttack": 125,
      "spDefense": 95,
      "speed": 40
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "psybeam",
        "learnLevel": 1
      },
      {
        "moveId": "psychic",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/606.gif"
  },
  'litwick': {
    "id": "litwick",
    "pokedexNumber": 607,
    "generation": 5,
    "name": "불켜미",
    "nameEn": "Litwick",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 30,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 20
    },
    "baseExp": 138,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "lampent",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "ember",
        "learnLevel": 8
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 15
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/607.gif"
  },
  'lampent': {
    "id": "lampent",
    "pokedexNumber": 608,
    "generation": 5,
    "name": "램프라",
    "nameEn": "Lampent",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 40,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 60,
      "speed": 55
    },
    "baseExp": 325,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "chandelure",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "ember",
        "learnLevel": 8
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 15
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/608.gif"
  },
  'chandelure': {
    "id": "chandelure",
    "pokedexNumber": 609,
    "generation": 5,
    "name": "샹델라",
    "nameEn": "Chandelure",
    "types": [
      "ghost",
      "fire"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 55,
      "defense": 90,
      "spAttack": 145,
      "spDefense": 90,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "ember",
        "learnLevel": 8
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 15
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/609.gif"
  },
  'axew': {
    "id": "axew",
    "pokedexNumber": 610,
    "generation": 5,
    "name": "터검니",
    "nameEn": "Axew",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 460,
      "attack": 87,
      "defense": 60,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 57
    },
    "baseExp": 160,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "fraxure",
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/610.gif"
  },
  'fraxure': {
    "id": "fraxure",
    "pokedexNumber": 611,
    "generation": 5,
    "name": "액슨도",
    "nameEn": "Fraxure",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 660,
      "attack": 117,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 67
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "haxorus",
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/611.gif"
  },
  'haxorus': {
    "id": "haxorus",
    "pokedexNumber": 612,
    "generation": 5,
    "name": "액스라이즈",
    "nameEn": "Haxorus",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 760,
      "attack": 147,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 97
    },
    "baseExp": 360,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/612.gif"
  },
  'cubchoo': {
    "id": "cubchoo",
    "pokedexNumber": 613,
    "generation": 5,
    "name": "코고미",
    "nameEn": "Cubchoo",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 70,
      "defense": 40,
      "spAttack": 60,
      "spDefense": 40,
      "speed": 40
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "beartic",
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/613.gif"
  },
  'beartic': {
    "id": "beartic",
    "pokedexNumber": 614,
    "generation": 5,
    "name": "툰베어",
    "nameEn": "Beartic",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 130,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 80,
      "speed": 50
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/614.gif"
  },
  'cryogonal': {
    "id": "cryogonal",
    "pokedexNumber": 615,
    "generation": 5,
    "name": "프리지오",
    "nameEn": "Cryogonal",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 50,
      "defense": 50,
      "spAttack": 95,
      "spDefense": 135,
      "speed": 105
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ice_beam",
        "learnLevel": 1
      },
      {
        "moveId": "blizzard",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/615.gif"
  },
  'shelmet': {
    "id": "shelmet",
    "pokedexNumber": 616,
    "generation": 5,
    "name": "쪼마리",
    "nameEn": "Shelmet",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 40,
      "defense": 85,
      "spAttack": 40,
      "spDefense": 65,
      "speed": 25
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "accelgor",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/616.gif"
  },
  'accelgor': {
    "id": "accelgor",
    "pokedexNumber": 617,
    "generation": 5,
    "name": "어지리더",
    "nameEn": "Accelgor",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 70,
      "defense": 40,
      "spAttack": 100,
      "spDefense": 60,
      "speed": 145
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/617.gif"
  },
  'stunfisk': {
    "id": "stunfisk",
    "pokedexNumber": 618,
    "generation": 5,
    "name": "메더",
    "nameEn": "Stunfisk",
    "types": [
      "ground",
      "electric"
    ],
    "baseStats": {
      "hp": 1090,
      "attack": 66,
      "defense": 84,
      "spAttack": 81,
      "spDefense": 99,
      "speed": 32
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "thundershock",
        "learnLevel": 15
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/618.gif"
  },
  'mienfoo': {
    "id": "mienfoo",
    "pokedexNumber": 619,
    "generation": 5,
    "name": "비조푸",
    "nameEn": "Mienfoo",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 85,
      "defense": 50,
      "spAttack": 55,
      "spDefense": 50,
      "speed": 65
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "mienshao",
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/619.gif"
  },
  'mienshao': {
    "id": "mienshao",
    "pokedexNumber": 620,
    "generation": 5,
    "name": "비조도",
    "nameEn": "Mienshao",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 125,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 60,
      "speed": 105
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/620.gif"
  },
  'druddigon': {
    "id": "druddigon",
    "pokedexNumber": 621,
    "generation": 5,
    "name": "크리만",
    "nameEn": "Druddigon",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 770,
      "attack": 120,
      "defense": 90,
      "spAttack": 60,
      "spDefense": 90,
      "speed": 48
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/621.gif"
  },
  'golett': {
    "id": "golett",
    "pokedexNumber": 622,
    "generation": 5,
    "name": "골비람",
    "nameEn": "Golett",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 590,
      "attack": 74,
      "defense": 50,
      "spAttack": 35,
      "spDefense": 50,
      "speed": 35
    },
    "baseExp": 153,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "golurk",
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/622.gif"
  },
  'golurk': {
    "id": "golurk",
    "pokedexNumber": 623,
    "generation": 5,
    "name": "골루그",
    "nameEn": "Golurk",
    "types": [
      "ground",
      "ghost"
    ],
    "baseStats": {
      "hp": 890,
      "attack": 124,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 55
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/623.gif"
  },
  'pawniard': {
    "id": "pawniard",
    "pokedexNumber": 624,
    "generation": 5,
    "name": "자망칼",
    "nameEn": "Pawniard",
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 85,
      "defense": 70,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 60
    },
    "baseExp": 170,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "bisharp",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/624.gif"
  },
  'bisharp': {
    "id": "bisharp",
    "pokedexNumber": 625,
    "generation": 5,
    "name": "절각참",
    "nameEn": "Bisharp",
    "types": [
      "dark",
      "steel"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 125,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 70
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/625.gif"
  },
  'bouffalant': {
    "id": "bouffalant",
    "pokedexNumber": 626,
    "generation": 5,
    "name": "버프론",
    "nameEn": "Bouffalant",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 110,
      "defense": 95,
      "spAttack": 40,
      "spDefense": 95,
      "speed": 55
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/626.gif"
  },
  'rufflet': {
    "id": "rufflet",
    "pokedexNumber": 627,
    "generation": 5,
    "name": "수리둥보",
    "nameEn": "Rufflet",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 83,
      "defense": 50,
      "spAttack": 37,
      "spDefense": 50,
      "speed": 60
    },
    "baseExp": 175,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "braviary",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/627.gif"
  },
  'braviary': {
    "id": "braviary",
    "pokedexNumber": 628,
    "generation": 5,
    "name": "워글",
    "nameEn": "Braviary",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 123,
      "defense": 75,
      "spAttack": 57,
      "spDefense": 75,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/628.gif"
  },
  'vullaby': {
    "id": "vullaby",
    "pokedexNumber": 629,
    "generation": 5,
    "name": "벌차이",
    "nameEn": "Vullaby",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 55,
      "defense": 75,
      "spAttack": 45,
      "spDefense": 65,
      "speed": 60
    },
    "baseExp": 185,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 2,
    "evolvesTo": "mandibuzz",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/629.gif"
  },
  'mandibuzz': {
    "id": "mandibuzz",
    "pokedexNumber": 630,
    "generation": 5,
    "name": "버랜지나",
    "nameEn": "Mandibuzz",
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 1100,
      "attack": 65,
      "defense": 105,
      "spAttack": 55,
      "spDefense": 95,
      "speed": 80
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "air_slash",
        "learnLevel": 8
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/630.gif"
  },
  'heatmor': {
    "id": "heatmor",
    "pokedexNumber": 631,
    "generation": 5,
    "name": "앤티골",
    "nameEn": "Heatmor",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 97,
      "defense": 66,
      "spAttack": 105,
      "spDefense": 66,
      "speed": 65
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/631.gif"
  },
  'durant': {
    "id": "durant",
    "pokedexNumber": 632,
    "generation": 5,
    "name": "아이앤트",
    "nameEn": "Durant",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 580,
      "attack": 109,
      "defense": 112,
      "spAttack": 48,
      "spDefense": 48,
      "speed": 109
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "iron_head",
        "learnLevel": 15
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 25
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/632.gif"
  },
  'deino': {
    "id": "deino",
    "pokedexNumber": 633,
    "generation": 5,
    "name": "모노두",
    "nameEn": "Deino",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 520,
      "attack": 65,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 38
    },
    "baseExp": 150,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "zweilous",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 8
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/633.gif"
  },
  'zweilous': {
    "id": "zweilous",
    "pokedexNumber": 634,
    "generation": 5,
    "name": "디헤드",
    "nameEn": "Zweilous",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 720,
      "attack": 85,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 58
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "hydreigon",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 8
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/634.gif"
  },
  'larvesta': {
    "id": "larvesta",
    "pokedexNumber": 636,
    "generation": 5,
    "name": "활화르바",
    "nameEn": "Larvesta",
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 85,
      "defense": 55,
      "spAttack": 50,
      "spDefense": 55,
      "speed": 60
    },
    "baseExp": 180,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 2,
    "evolvesTo": "volcarona",
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "ember",
        "learnLevel": 15
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/636.gif"
  },
  'volcarona': {
    "id": "volcarona",
    "pokedexNumber": 637,
    "generation": 5,
    "name": "불카모스",
    "nameEn": "Volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 60,
      "defense": 65,
      "spAttack": 135,
      "spDefense": 105,
      "speed": 100
    },
    "baseExp": 360,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "ember",
        "learnLevel": 15
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/637.gif"
  },
  'cobalion': {
    "id": "cobalion",
    "pokedexNumber": 638,
    "generation": 5,
    "name": "코바르온",
    "nameEn": "Cobalion",
    "types": [
      "steel",
      "fighting"
    ],
    "baseStats": {
      "hp": 910,
      "attack": 90,
      "defense": 129,
      "spAttack": 90,
      "spDefense": 72,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 8
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/638.gif"
  },
  'terrakion': {
    "id": "terrakion",
    "pokedexNumber": 639,
    "generation": 5,
    "name": "테라키온",
    "nameEn": "Terrakion",
    "types": [
      "rock",
      "fighting"
    ],
    "baseStats": {
      "hp": 910,
      "attack": 129,
      "defense": 90,
      "spAttack": 72,
      "spDefense": 90,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 8
      },
      {
        "moveId": "close_combat",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/639.gif"
  },
  'virizion': {
    "id": "virizion",
    "pokedexNumber": 640,
    "generation": 5,
    "name": "비리디온",
    "nameEn": "Virizion",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 910,
      "attack": 90,
      "defense": 72,
      "spAttack": 90,
      "spDefense": 129,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/640.gif"
  },
  'tornadus': {
    "id": "tornadus",
    "pokedexNumber": 641,
    "generation": 5,
    "name": "토네로스",
    "nameEn": "Tornadus",
    "types": [
      "flying"
    ],
    "baseStats": {
      "hp": 790,
      "attack": 115,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 80,
      "speed": 111
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "air_slash",
        "learnLevel": 1
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/641.gif"
  },
  'thundurus': {
    "id": "thundurus",
    "pokedexNumber": 642,
    "generation": 5,
    "name": "볼트로스",
    "nameEn": "Thundurus",
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 790,
      "attack": 115,
      "defense": 70,
      "spAttack": 125,
      "spDefense": 80,
      "speed": 111
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      },
      {
        "moveId": "thunder",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/642.gif"
  },
  'landorus': {
    "id": "landorus",
    "pokedexNumber": 645,
    "generation": 5,
    "name": "랜드로스",
    "nameEn": "Landorus",
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 890,
      "attack": 125,
      "defense": 90,
      "spAttack": 115,
      "spDefense": 80,
      "speed": 101
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/645.gif"
  },
  'keldeo': {
    "id": "keldeo",
    "pokedexNumber": 647,
    "generation": 5,
    "name": "케르디오",
    "nameEn": "Keldeo",
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 910,
      "attack": 72,
      "defense": 90,
      "spAttack": 129,
      "spDefense": 90,
      "speed": 108
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "surf",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/647.gif"
  },
  'meloetta': {
    "id": "meloetta",
    "pokedexNumber": 648,
    "generation": 5,
    "name": "메로엣타",
    "nameEn": "Meloetta",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 77,
      "defense": 77,
      "spAttack": 128,
      "spDefense": 128,
      "speed": 90
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 8
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 15
      },
      {
        "moveId": "psybeam",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/648.gif"
  },
  'genesect': {
    "id": "genesect",
    "pokedexNumber": 649,
    "generation": 5,
    "name": "게노세크트",
    "nameEn": "Genesect",
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 710,
      "attack": 120,
      "defense": 95,
      "spAttack": 120,
      "spDefense": 95,
      "speed": 99
    },
    "baseExp": 360,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "x_scissor",
        "learnLevel": 1
      },
      {
        "moveId": "bug_buzz",
        "learnLevel": 8
      },
      {
        "moveId": "iron_head",
        "learnLevel": 15
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 25
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/649.gif"
  },
};
