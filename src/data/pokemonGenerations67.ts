import { PokemonSpecies } from '../types/game';

/**
 * National Pokedex generations 6 and 7 (#650-809).
 * Base stats, types, Korean species names and evolution relationships are based on PokeAPI CSV data.
 * HP is scaled x10 to match this game's stat convention. Move pools use the game's supported type-matched moves.
 */
export const POKEMON_GENERATIONS_6_7: Record<string, PokemonSpecies> = {
  'quilladin': {
    "id": "quilladin",
    "pokedexNumber": 651,
    "generation": 6,
    "name": "도치보구",
    "nameEn": "Quilladin",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 610,
      "attack": 78,
      "defense": 95,
      "spAttack": 56,
      "spDefense": 58,
      "speed": 57
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "chesnaught",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/651.gif"
  },
  'chesnaught': {
    "id": "chesnaught",
    "pokedexNumber": 652,
    "generation": 6,
    "name": "브리가론",
    "nameEn": "Chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 880,
      "attack": 107,
      "defense": 122,
      "spAttack": 74,
      "spDefense": 75,
      "speed": 64
    },
    "baseExp": 239,
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
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/652.gif"
  },
  'braixen': {
    "id": "braixen",
    "pokedexNumber": 654,
    "generation": 6,
    "name": "테르나",
    "nameEn": "Braixen",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 590,
      "attack": 59,
      "defense": 58,
      "spAttack": 90,
      "spDefense": 70,
      "speed": 73
    },
    "baseExp": 143,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "delphox",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/654.gif"
  },
  'delphox': {
    "id": "delphox",
    "pokedexNumber": 655,
    "generation": 6,
    "name": "마폭시",
    "nameEn": "Delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 69,
      "defense": 72,
      "spAttack": 114,
      "spDefense": 100,
      "speed": 104
    },
    "baseExp": 240,
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
        "moveId": "psybeam",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/655.gif"
  },
  'froakie': {
    "id": "froakie",
    "pokedexNumber": 656,
    "generation": 6,
    "name": "개구마르",
    "nameEn": "Froakie",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 410,
      "attack": 56,
      "defense": 40,
      "spAttack": 62,
      "spDefense": 44,
      "speed": 71
    },
    "baseExp": 63,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "frogadier",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/656.gif"
  },
  'frogadier': {
    "id": "frogadier",
    "pokedexNumber": 657,
    "generation": 6,
    "name": "개굴반장",
    "nameEn": "Frogadier",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 540,
      "attack": 63,
      "defense": 52,
      "spAttack": 83,
      "spDefense": 56,
      "speed": 97
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "greninja",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/657.gif"
  },
  'bunnelby': {
    "id": "bunnelby",
    "pokedexNumber": 659,
    "generation": 6,
    "name": "파르빗",
    "nameEn": "Bunnelby",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 380,
      "attack": 36,
      "defense": 38,
      "spAttack": 32,
      "spDefense": 36,
      "speed": 57
    },
    "baseExp": 47,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "diggersby",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/659.gif"
  },
  'diggersby': {
    "id": "diggersby",
    "pokedexNumber": 660,
    "generation": 6,
    "name": "파르토",
    "nameEn": "Diggersby",
    "types": [
      "normal",
      "ground"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 56,
      "defense": 77,
      "spAttack": 50,
      "spDefense": 77,
      "speed": 78
    },
    "baseExp": 148,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/660.gif"
  },
  'fletchling': {
    "id": "fletchling",
    "pokedexNumber": 661,
    "generation": 6,
    "name": "화살꼬빈",
    "nameEn": "Fletchling",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 50,
      "defense": 43,
      "spAttack": 40,
      "spDefense": 38,
      "speed": 62
    },
    "baseExp": 56,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "fletchinder",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/661.gif"
  },
  'fletchinder': {
    "id": "fletchinder",
    "pokedexNumber": 662,
    "generation": 6,
    "name": "불화살빈",
    "nameEn": "Fletchinder",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 73,
      "defense": 55,
      "spAttack": 56,
      "spDefense": 52,
      "speed": 84
    },
    "baseExp": 134,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "talonflame",
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
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/662.gif"
  },
  'talonflame': {
    "id": "talonflame",
    "pokedexNumber": 663,
    "generation": 6,
    "name": "파이어로",
    "nameEn": "Talonflame",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 81,
      "defense": 71,
      "spAttack": 74,
      "spDefense": 69,
      "speed": 126
    },
    "baseExp": 175,
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
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/663.gif"
  },
  'scatterbug': {
    "id": "scatterbug",
    "pokedexNumber": 664,
    "generation": 6,
    "name": "분이벌레",
    "nameEn": "Scatterbug",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 380,
      "attack": 35,
      "defense": 40,
      "spAttack": 27,
      "spDefense": 25,
      "speed": 35
    },
    "baseExp": 40,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "spewpa",
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
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/664.gif"
  },
  'spewpa': {
    "id": "spewpa",
    "pokedexNumber": 665,
    "generation": 6,
    "name": "분떠도리",
    "nameEn": "Spewpa",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 22,
      "defense": 60,
      "spAttack": 27,
      "spDefense": 30,
      "speed": 29
    },
    "baseExp": 75,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "vivillon",
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
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/665.gif"
  },
  'vivillon': {
    "id": "vivillon",
    "pokedexNumber": 666,
    "generation": 6,
    "name": "비비용",
    "nameEn": "Vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 52,
      "defense": 50,
      "spAttack": 90,
      "spDefense": 50,
      "speed": 89
    },
    "baseExp": 185,
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
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/666.gif"
  },
  'litleo': {
    "id": "litleo",
    "pokedexNumber": 667,
    "generation": 6,
    "name": "레오꼬",
    "nameEn": "Litleo",
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 50,
      "defense": 58,
      "spAttack": 73,
      "spDefense": 54,
      "speed": 72
    },
    "baseExp": 74,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "pyroar",
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
        "moveId": "tackle",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/667.gif"
  },
  'pyroar-male': {
    "id": "pyroar-male",
    "pokedexNumber": 668,
    "generation": 6,
    "name": "화염레오",
    "nameEn": "Pyroar-Male",
    "types": [
      "fire",
      "normal"
    ],
    "baseStats": {
      "hp": 860,
      "attack": 68,
      "defense": 72,
      "spAttack": 109,
      "spDefense": 66,
      "speed": 106
    },
    "baseExp": 177,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
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
        "moveId": "tackle",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/668.gif"
  },
  'flabebe': {
    "id": "flabebe",
    "pokedexNumber": 669,
    "generation": 6,
    "name": "플라베베",
    "nameEn": "Flabebe",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 440,
      "attack": 38,
      "defense": 39,
      "spAttack": 61,
      "spDefense": 79,
      "speed": 42
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "floette",
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/669.gif"
  },
  'floette': {
    "id": "floette",
    "pokedexNumber": 670,
    "generation": 6,
    "name": "플라엣테",
    "nameEn": "Floette",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 540,
      "attack": 45,
      "defense": 47,
      "spAttack": 75,
      "spDefense": 98,
      "speed": 52
    },
    "baseExp": 130,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "florges",
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/670.gif"
  },
  'florges': {
    "id": "florges",
    "pokedexNumber": 671,
    "generation": 6,
    "name": "플라제스",
    "nameEn": "Florges",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 65,
      "defense": 68,
      "spAttack": 112,
      "spDefense": 154,
      "speed": 75
    },
    "baseExp": 248,
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
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/671.gif"
  },
  'skiddo': {
    "id": "skiddo",
    "pokedexNumber": 672,
    "generation": 6,
    "name": "메이클",
    "nameEn": "Skiddo",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 660,
      "attack": 65,
      "defense": 48,
      "spAttack": 62,
      "spDefense": 57,
      "speed": 52
    },
    "baseExp": 70,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "gogoat",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/672.gif"
  },
  'gogoat': {
    "id": "gogoat",
    "pokedexNumber": 673,
    "generation": 6,
    "name": "고고트",
    "nameEn": "Gogoat",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 1230,
      "attack": 100,
      "defense": 62,
      "spAttack": 97,
      "spDefense": 81,
      "speed": 68
    },
    "baseExp": 186,
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/673.gif"
  },
  'pancham': {
    "id": "pancham",
    "pokedexNumber": 674,
    "generation": 6,
    "name": "판짱",
    "nameEn": "Pancham",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 82,
      "defense": 62,
      "spAttack": 46,
      "spDefense": 48,
      "speed": 43
    },
    "baseExp": 70,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "pangoro",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/674.gif"
  },
  'pangoro': {
    "id": "pangoro",
    "pokedexNumber": 675,
    "generation": 6,
    "name": "부란다",
    "nameEn": "Pangoro",
    "types": [
      "fighting",
      "dark"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 124,
      "defense": 78,
      "spAttack": 69,
      "spDefense": 71,
      "speed": 58
    },
    "baseExp": 173,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/675.gif"
  },
  'furfrou': {
    "id": "furfrou",
    "pokedexNumber": 676,
    "generation": 6,
    "name": "트리미앙",
    "nameEn": "Furfrou",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 80,
      "defense": 60,
      "spAttack": 65,
      "spDefense": 90,
      "speed": 102
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/676.gif"
  },
  'espurr': {
    "id": "espurr",
    "pokedexNumber": 677,
    "generation": 6,
    "name": "냐스퍼",
    "nameEn": "Espurr",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 48,
      "defense": 54,
      "spAttack": 63,
      "spDefense": 60,
      "speed": 68
    },
    "baseExp": 71,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "meowstic",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/677.gif"
  },
  'meowstic-male': {
    "id": "meowstic-male",
    "pokedexNumber": 678,
    "generation": 6,
    "name": "냐오닉스",
    "nameEn": "Meowstic-Male",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 740,
      "attack": 48,
      "defense": 76,
      "spAttack": 83,
      "spDefense": 81,
      "speed": 104
    },
    "baseExp": 163,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/678.gif"
  },
  'honedge': {
    "id": "honedge",
    "pokedexNumber": 679,
    "generation": 6,
    "name": "단칼빙",
    "nameEn": "Honedge",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 80,
      "defense": 100,
      "spAttack": 35,
      "spDefense": 37,
      "speed": 28
    },
    "baseExp": 65,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "doublade",
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
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/679.gif"
  },
  'doublade': {
    "id": "doublade",
    "pokedexNumber": 680,
    "generation": 6,
    "name": "쌍검킬",
    "nameEn": "Doublade",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 590,
      "attack": 110,
      "defense": 150,
      "spAttack": 45,
      "spDefense": 49,
      "speed": 35
    },
    "baseExp": 157,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "aegislash",
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
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/680.gif"
  },
  'aegislash-shield': {
    "id": "aegislash-shield",
    "pokedexNumber": 681,
    "generation": 6,
    "name": "킬가르도",
    "nameEn": "Aegislash-Shield",
    "types": [
      "steel",
      "ghost"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 50,
      "defense": 140,
      "spAttack": 50,
      "spDefense": 140,
      "speed": 60
    },
    "baseExp": 234,
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
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/681.gif"
  },
  'spritzee': {
    "id": "spritzee",
    "pokedexNumber": 682,
    "generation": 6,
    "name": "슈쁘",
    "nameEn": "Spritzee",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 52,
      "defense": 60,
      "spAttack": 63,
      "spDefense": 65,
      "speed": 23
    },
    "baseExp": 68,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "aromatisse",
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/682.gif"
  },
  'aromatisse': {
    "id": "aromatisse",
    "pokedexNumber": 683,
    "generation": 6,
    "name": "프레프티르",
    "nameEn": "Aromatisse",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 1010,
      "attack": 72,
      "defense": 72,
      "spAttack": 99,
      "spDefense": 89,
      "speed": 29
    },
    "baseExp": 162,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/683.gif"
  },
  'swirlix': {
    "id": "swirlix",
    "pokedexNumber": 684,
    "generation": 6,
    "name": "나룸퍼프",
    "nameEn": "Swirlix",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 48,
      "defense": 66,
      "spAttack": 59,
      "spDefense": 57,
      "speed": 49
    },
    "baseExp": 68,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "slurpuff",
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/684.gif"
  },
  'slurpuff': {
    "id": "slurpuff",
    "pokedexNumber": 685,
    "generation": 6,
    "name": "나루림",
    "nameEn": "Slurpuff",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 820,
      "attack": 80,
      "defense": 86,
      "spAttack": 85,
      "spDefense": 75,
      "speed": 72
    },
    "baseExp": 168,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/685.gif"
  },
  'inkay': {
    "id": "inkay",
    "pokedexNumber": 686,
    "generation": 6,
    "name": "오케이징",
    "nameEn": "Inkay",
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 530,
      "attack": 54,
      "defense": 53,
      "spAttack": 37,
      "spDefense": 46,
      "speed": 45
    },
    "baseExp": 58,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "malamar",
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "psybeam",
        "learnLevel": 8
      },
      {
        "moveId": "psychic",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/686.gif"
  },
  'malamar': {
    "id": "malamar",
    "pokedexNumber": 687,
    "generation": 6,
    "name": "칼라마네로",
    "nameEn": "Malamar",
    "types": [
      "dark",
      "psychic"
    ],
    "baseStats": {
      "hp": 860,
      "attack": 92,
      "defense": 88,
      "spAttack": 68,
      "spDefense": 75,
      "speed": 73
    },
    "baseExp": 169,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dark_pulse",
        "learnLevel": 1
      },
      {
        "moveId": "psybeam",
        "learnLevel": 8
      },
      {
        "moveId": "psychic",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/687.gif"
  },
  'binacle': {
    "id": "binacle",
    "pokedexNumber": 688,
    "generation": 6,
    "name": "거북손손",
    "nameEn": "Binacle",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 420,
      "attack": 52,
      "defense": 67,
      "spAttack": 39,
      "spDefense": 56,
      "speed": 50
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "barbaracle",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "water_gun",
        "learnLevel": 8
      },
      {
        "moveId": "surf",
        "learnLevel": 15
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/688.gif"
  },
  'barbaracle': {
    "id": "barbaracle",
    "pokedexNumber": 689,
    "generation": 6,
    "name": "거북손데스",
    "nameEn": "Barbaracle",
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 720,
      "attack": 105,
      "defense": 115,
      "spAttack": 54,
      "spDefense": 86,
      "speed": 68
    },
    "baseExp": 175,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "water_gun",
        "learnLevel": 8
      },
      {
        "moveId": "surf",
        "learnLevel": 15
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/689.gif"
  },
  'skrelp': {
    "id": "skrelp",
    "pokedexNumber": 690,
    "generation": 6,
    "name": "수레기",
    "nameEn": "Skrelp",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 60,
      "defense": 60,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 30
    },
    "baseExp": 64,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "dragalge",
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
        "moveId": "water_gun",
        "learnLevel": 15
      },
      {
        "moveId": "surf",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/690.gif"
  },
  'dragalge': {
    "id": "dragalge",
    "pokedexNumber": 691,
    "generation": 6,
    "name": "드래캄",
    "nameEn": "Dragalge",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 75,
      "defense": 90,
      "spAttack": 97,
      "spDefense": 123,
      "speed": 44
    },
    "baseExp": 173,
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
        "moveId": "dragon_claw",
        "learnLevel": 15
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/691.gif"
  },
  'clauncher': {
    "id": "clauncher",
    "pokedexNumber": 692,
    "generation": 6,
    "name": "완철포",
    "nameEn": "Clauncher",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 53,
      "defense": 62,
      "spAttack": 58,
      "spDefense": 63,
      "speed": 44
    },
    "baseExp": 66,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "clawitzer",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/692.gif"
  },
  'clawitzer': {
    "id": "clawitzer",
    "pokedexNumber": 693,
    "generation": 6,
    "name": "블로스터",
    "nameEn": "Clawitzer",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 710,
      "attack": 73,
      "defense": 88,
      "spAttack": 120,
      "spDefense": 89,
      "speed": 59
    },
    "baseExp": 100,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/693.gif"
  },
  'helioptile': {
    "id": "helioptile",
    "pokedexNumber": 694,
    "generation": 6,
    "name": "목도리키텔",
    "nameEn": "Helioptile",
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 440,
      "attack": 38,
      "defense": 33,
      "spAttack": 61,
      "spDefense": 43,
      "speed": 70
    },
    "baseExp": 58,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "heliolisk",
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
        "moveId": "tackle",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/694.gif"
  },
  'heliolisk': {
    "id": "heliolisk",
    "pokedexNumber": 695,
    "generation": 6,
    "name": "일레도리자드",
    "nameEn": "Heliolisk",
    "types": [
      "electric",
      "normal"
    ],
    "baseStats": {
      "hp": 620,
      "attack": 55,
      "defense": 52,
      "spAttack": 109,
      "spDefense": 94,
      "speed": 109
    },
    "baseExp": 168,
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
      },
      {
        "moveId": "tackle",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/695.gif"
  },
  'tyrunt': {
    "id": "tyrunt",
    "pokedexNumber": 696,
    "generation": 6,
    "name": "티고라스",
    "nameEn": "Tyrunt",
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 580,
      "attack": 89,
      "defense": 77,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 48
    },
    "baseExp": 72,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "tyrantrum",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/696.gif"
  },
  'tyrantrum': {
    "id": "tyrantrum",
    "pokedexNumber": 697,
    "generation": 6,
    "name": "견고라스",
    "nameEn": "Tyrantrum",
    "types": [
      "rock",
      "dragon"
    ],
    "baseStats": {
      "hp": 820,
      "attack": 121,
      "defense": 119,
      "spAttack": 69,
      "spDefense": 59,
      "speed": 71
    },
    "baseExp": 182,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/697.gif"
  },
  'amaura': {
    "id": "amaura",
    "pokedexNumber": 698,
    "generation": 6,
    "name": "아마루스",
    "nameEn": "Amaura",
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 770,
      "attack": 59,
      "defense": 50,
      "spAttack": 67,
      "spDefense": 63,
      "speed": 46
    },
    "baseExp": 72,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "aurorus",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/698.gif"
  },
  'aurorus': {
    "id": "aurorus",
    "pokedexNumber": 699,
    "generation": 6,
    "name": "아마루르가",
    "nameEn": "Aurorus",
    "types": [
      "rock",
      "ice"
    ],
    "baseStats": {
      "hp": 1230,
      "attack": 77,
      "defense": 72,
      "spAttack": 99,
      "spDefense": 92,
      "speed": 58
    },
    "baseExp": 104,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/699.gif"
  },
  'hawlucha': {
    "id": "hawlucha",
    "pokedexNumber": 701,
    "generation": 6,
    "name": "루차불",
    "nameEn": "Hawlucha",
    "types": [
      "fighting",
      "flying"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 92,
      "defense": 75,
      "spAttack": 74,
      "spDefense": 63,
      "speed": 118
    },
    "baseExp": 175,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/701.gif"
  },
  'dedenne': {
    "id": "dedenne",
    "pokedexNumber": 702,
    "generation": 6,
    "name": "데덴네",
    "nameEn": "Dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 58,
      "defense": 57,
      "spAttack": 81,
      "spDefense": 67,
      "speed": 101
    },
    "baseExp": 151,
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
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/702.gif"
  },
  'carbink': {
    "id": "carbink",
    "pokedexNumber": 703,
    "generation": 6,
    "name": "멜리시",
    "nameEn": "Carbink",
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 50,
      "defense": 150,
      "spAttack": 50,
      "spDefense": 150,
      "speed": 50
    },
    "baseExp": 100,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "moonblast",
        "learnLevel": 8
      },
      {
        "moveId": "play_rough",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/703.gif"
  },
  'goomy': {
    "id": "goomy",
    "pokedexNumber": 704,
    "generation": 6,
    "name": "미끄메라",
    "nameEn": "Goomy",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 50,
      "defense": 35,
      "spAttack": 55,
      "spDefense": 75,
      "speed": 40
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "sliggoo",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/704.gif"
  },
  'sliggoo': {
    "id": "sliggoo",
    "pokedexNumber": 705,
    "generation": 6,
    "name": "미끄네일",
    "nameEn": "Sliggoo",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 75,
      "defense": 53,
      "spAttack": 83,
      "spDefense": 113,
      "speed": 60
    },
    "baseExp": 158,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "goodra",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/705.gif"
  },
  'goodra': {
    "id": "goodra",
    "pokedexNumber": 706,
    "generation": 6,
    "name": "미끄래곤",
    "nameEn": "Goodra",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 100,
      "defense": 70,
      "spAttack": 110,
      "spDefense": 150,
      "speed": 80
    },
    "baseExp": 270,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/706.gif"
  },
  'klefki': {
    "id": "klefki",
    "pokedexNumber": 707,
    "generation": 6,
    "name": "클레피",
    "nameEn": "Klefki",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 570,
      "attack": 80,
      "defense": 91,
      "spAttack": 80,
      "spDefense": 87,
      "speed": 75
    },
    "baseExp": 165,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
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
        "moveId": "moonblast",
        "learnLevel": 15
      },
      {
        "moveId": "play_rough",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/707.gif"
  },
  'phantump': {
    "id": "phantump",
    "pokedexNumber": 708,
    "generation": 6,
    "name": "나목령",
    "nameEn": "Phantump",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 430,
      "attack": 70,
      "defense": 48,
      "spAttack": 50,
      "spDefense": 60,
      "speed": 38
    },
    "baseExp": 62,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "trevenant",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 8
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 15
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/708.gif"
  },
  'trevenant': {
    "id": "trevenant",
    "pokedexNumber": 709,
    "generation": 6,
    "name": "대로트",
    "nameEn": "Trevenant",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 110,
      "defense": 76,
      "spAttack": 65,
      "spDefense": 82,
      "speed": 56
    },
    "baseExp": 166,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 8
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 15
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/709.gif"
  },
  'pumpkaboo-average': {
    "id": "pumpkaboo-average",
    "pokedexNumber": 710,
    "generation": 6,
    "name": "호바귀",
    "nameEn": "Pumpkaboo-Average",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 490,
      "attack": 66,
      "defense": 70,
      "spAttack": 44,
      "spDefense": 55,
      "speed": 51
    },
    "baseExp": 67,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "gourgeist",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 8
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 15
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/710.gif"
  },
  'gourgeist-average': {
    "id": "gourgeist-average",
    "pokedexNumber": 711,
    "generation": 6,
    "name": "펌킨인",
    "nameEn": "Gourgeist-Average",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 90,
      "defense": 122,
      "spAttack": 58,
      "spDefense": 75,
      "speed": 84
    },
    "baseExp": 173,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 8
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 15
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/711.gif"
  },
  'bergmite': {
    "id": "bergmite",
    "pokedexNumber": 712,
    "generation": 6,
    "name": "꽁어름",
    "nameEn": "Bergmite",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 69,
      "defense": 85,
      "spAttack": 32,
      "spDefense": 35,
      "speed": 28
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "avalugg",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/712.gif"
  },
  'avalugg': {
    "id": "avalugg",
    "pokedexNumber": 713,
    "generation": 6,
    "name": "크레베이스",
    "nameEn": "Avalugg",
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 117,
      "defense": 184,
      "spAttack": 44,
      "spDefense": 46,
      "speed": 28
    },
    "baseExp": 180,
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/713.gif"
  },
  'noibat': {
    "id": "noibat",
    "pokedexNumber": 714,
    "generation": 6,
    "name": "음뱃",
    "nameEn": "Noibat",
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 30,
      "defense": 35,
      "spAttack": 45,
      "spDefense": 40,
      "speed": 55
    },
    "baseExp": 49,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "noivern",
    "possibleMoves": [
      {
        "moveId": "air_slash",
        "learnLevel": 1
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 8
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 15
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/714.gif"
  },
  'noivern': {
    "id": "noivern",
    "pokedexNumber": 715,
    "generation": 6,
    "name": "음번",
    "nameEn": "Noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 70,
      "defense": 80,
      "spAttack": 97,
      "spDefense": 80,
      "speed": 123
    },
    "baseExp": 187,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "air_slash",
        "learnLevel": 1
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 8
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 15
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/715.gif"
  },
  'diancie': {
    "id": "diancie",
    "pokedexNumber": 719,
    "generation": 6,
    "name": "디안시",
    "nameEn": "Diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 100,
      "defense": 150,
      "spAttack": 100,
      "spDefense": 150,
      "speed": 50
    },
    "baseExp": 270,
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
        "moveId": "moonblast",
        "learnLevel": 8
      },
      {
        "moveId": "play_rough",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/719.gif"
  },
  'hoopa': {
    "id": "hoopa",
    "pokedexNumber": 720,
    "generation": 6,
    "name": "후파",
    "nameEn": "Hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 110,
      "defense": 60,
      "spAttack": 150,
      "spDefense": 130,
      "speed": 70
    },
    "baseExp": 270,
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
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/720.gif"
  },
  'volcanion': {
    "id": "volcanion",
    "pokedexNumber": 721,
    "generation": 6,
    "name": "볼케니온",
    "nameEn": "Volcanion",
    "types": [
      "fire",
      "water"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 110,
      "defense": 120,
      "spAttack": 130,
      "spDefense": 90,
      "speed": 70
    },
    "baseExp": 270,
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
        "moveId": "water_gun",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/721.gif"
  },
  'dartrix': {
    "id": "dartrix",
    "pokedexNumber": 723,
    "generation": 7,
    "name": "빼미스로우",
    "nameEn": "Dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 75,
      "defense": 75,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 52
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "decidueye",
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
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/723.gif"
  },
  'decidueye': {
    "id": "decidueye",
    "pokedexNumber": 724,
    "generation": 7,
    "name": "모크나이퍼",
    "nameEn": "Decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 107,
      "defense": 75,
      "spAttack": 100,
      "spDefense": 100,
      "speed": 70
    },
    "baseExp": 239,
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
        "moveId": "shadow_ball",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/724.gif"
  },
  'torracat': {
    "id": "torracat",
    "pokedexNumber": 726,
    "generation": 7,
    "name": "냐오히트",
    "nameEn": "Torracat",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 85,
      "defense": 50,
      "spAttack": 80,
      "spDefense": 50,
      "speed": 90
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "incineroar",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/726.gif"
  },
  'incineroar': {
    "id": "incineroar",
    "pokedexNumber": 727,
    "generation": 7,
    "name": "어흥염",
    "nameEn": "Incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 115,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 60
    },
    "baseExp": 239,
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
        "moveId": "dark_pulse",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/727.gif"
  },
  'brionne': {
    "id": "brionne",
    "pokedexNumber": 729,
    "generation": 7,
    "name": "키요공",
    "nameEn": "Brionne",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 69,
      "defense": 69,
      "spAttack": 91,
      "spDefense": 81,
      "speed": 50
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "primarina",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/729.gif"
  },
  'primarina': {
    "id": "primarina",
    "pokedexNumber": 730,
    "generation": 7,
    "name": "누리레느",
    "nameEn": "Primarina",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 74,
      "defense": 74,
      "spAttack": 126,
      "spDefense": 116,
      "speed": 60
    },
    "baseExp": 239,
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
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/730.gif"
  },
  'pikipek': {
    "id": "pikipek",
    "pokedexNumber": 731,
    "generation": 7,
    "name": "콕코구리",
    "nameEn": "Pikipek",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 350,
      "attack": 75,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 65
    },
    "baseExp": 53,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "trumbeak",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/731.gif"
  },
  'trumbeak': {
    "id": "trumbeak",
    "pokedexNumber": 732,
    "generation": 7,
    "name": "크라파",
    "nameEn": "Trumbeak",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 85,
      "defense": 50,
      "spAttack": 40,
      "spDefense": 50,
      "speed": 75
    },
    "baseExp": 124,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "toucannon",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/732.gif"
  },
  'toucannon': {
    "id": "toucannon",
    "pokedexNumber": 733,
    "generation": 7,
    "name": "왕큰부리",
    "nameEn": "Toucannon",
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 120,
      "defense": 75,
      "spAttack": 75,
      "spDefense": 75,
      "speed": 60
    },
    "baseExp": 218,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/733.gif"
  },
  'yungoos': {
    "id": "yungoos",
    "pokedexNumber": 734,
    "generation": 7,
    "name": "영구스",
    "nameEn": "Yungoos",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 480,
      "attack": 70,
      "defense": 30,
      "spAttack": 30,
      "spDefense": 30,
      "speed": 45
    },
    "baseExp": 51,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "gumshoos",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/734.gif"
  },
  'gumshoos': {
    "id": "gumshoos",
    "pokedexNumber": 735,
    "generation": 7,
    "name": "형사구스",
    "nameEn": "Gumshoos",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 880,
      "attack": 110,
      "defense": 60,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 45
    },
    "baseExp": 146,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/735.gif"
  },
  'grubbin': {
    "id": "grubbin",
    "pokedexNumber": 736,
    "generation": 7,
    "name": "턱지충이",
    "nameEn": "Grubbin",
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 470,
      "attack": 62,
      "defense": 45,
      "spAttack": 55,
      "spDefense": 45,
      "speed": 46
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "charjabug",
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
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/736.gif"
  },
  'charjabug': {
    "id": "charjabug",
    "pokedexNumber": 737,
    "generation": 7,
    "name": "전지충이",
    "nameEn": "Charjabug",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 570,
      "attack": 82,
      "defense": 95,
      "spAttack": 55,
      "spDefense": 75,
      "speed": 36
    },
    "baseExp": 140,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "vikavolt",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/737.gif"
  },
  'vikavolt': {
    "id": "vikavolt",
    "pokedexNumber": 738,
    "generation": 7,
    "name": "투구뿌논",
    "nameEn": "Vikavolt",
    "types": [
      "bug",
      "electric"
    ],
    "baseStats": {
      "hp": 770,
      "attack": 70,
      "defense": 90,
      "spAttack": 145,
      "spDefense": 75,
      "speed": 43
    },
    "baseExp": 225,
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
        "moveId": "thundershock",
        "learnLevel": 15
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/738.gif"
  },
  'crabrawler': {
    "id": "crabrawler",
    "pokedexNumber": 739,
    "generation": 7,
    "name": "오기지게",
    "nameEn": "Crabrawler",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 470,
      "attack": 82,
      "defense": 57,
      "spAttack": 42,
      "spDefense": 47,
      "speed": 63
    },
    "baseExp": 68,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "crabominable",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/739.gif"
  },
  'crabominable': {
    "id": "crabominable",
    "pokedexNumber": 740,
    "generation": 7,
    "name": "모단단게",
    "nameEn": "Crabominable",
    "types": [
      "fighting",
      "ice"
    ],
    "baseStats": {
      "hp": 970,
      "attack": 132,
      "defense": 77,
      "spAttack": 62,
      "spDefense": 67,
      "speed": 43
    },
    "baseExp": 167,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      },
      {
        "moveId": "ice_beam",
        "learnLevel": 15
      },
      {
        "moveId": "blizzard",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/740.gif"
  },
  'oricorio-baile': {
    "id": "oricorio-baile",
    "pokedexNumber": 741,
    "generation": 7,
    "name": "춤추새",
    "nameEn": "Oricorio-Baile",
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 70,
      "defense": 70,
      "spAttack": 98,
      "spDefense": 70,
      "speed": 93
    },
    "baseExp": 167,
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
      },
      {
        "moveId": "air_slash",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/741.gif"
  },
  'cutiefly': {
    "id": "cutiefly",
    "pokedexNumber": 742,
    "generation": 7,
    "name": "에블리",
    "nameEn": "Cutiefly",
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 45,
      "defense": 40,
      "spAttack": 55,
      "spDefense": 40,
      "speed": 84
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "ribombee",
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
        "moveId": "moonblast",
        "learnLevel": 15
      },
      {
        "moveId": "play_rough",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/742.gif"
  },
  'ribombee': {
    "id": "ribombee",
    "pokedexNumber": 743,
    "generation": 7,
    "name": "에리본",
    "nameEn": "Ribombee",
    "types": [
      "bug",
      "fairy"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 55,
      "defense": 60,
      "spAttack": 95,
      "spDefense": 70,
      "speed": 124
    },
    "baseExp": 162,
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
        "moveId": "moonblast",
        "learnLevel": 15
      },
      {
        "moveId": "play_rough",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/743.gif"
  },
  'rockruff': {
    "id": "rockruff",
    "pokedexNumber": 744,
    "generation": 7,
    "name": "암멍이",
    "nameEn": "Rockruff",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 65,
      "defense": 40,
      "spAttack": 30,
      "spDefense": 40,
      "speed": 60
    },
    "baseExp": 56,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lycanroc",
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/744.gif"
  },
  'lycanroc-midday': {
    "id": "lycanroc-midday",
    "pokedexNumber": 745,
    "generation": 7,
    "name": "루가루암",
    "nameEn": "Lycanroc-Midday",
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 115,
      "defense": 65,
      "spAttack": 55,
      "spDefense": 65,
      "speed": 112
    },
    "baseExp": 170,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/745.gif"
  },
  'wishiwashi-solo': {
    "id": "wishiwashi-solo",
    "pokedexNumber": 746,
    "generation": 7,
    "name": "약어리",
    "nameEn": "Wishiwashi-Solo",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 20,
      "defense": 20,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 40
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 2,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/746.gif"
  },
  'mareanie': {
    "id": "mareanie",
    "pokedexNumber": 747,
    "generation": 7,
    "name": "시마사리",
    "nameEn": "Mareanie",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 53,
      "defense": 62,
      "spAttack": 43,
      "spDefense": 52,
      "speed": 45
    },
    "baseExp": 61,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "toxapex",
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
        "moveId": "water_gun",
        "learnLevel": 15
      },
      {
        "moveId": "surf",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/747.gif"
  },
  'toxapex': {
    "id": "toxapex",
    "pokedexNumber": 748,
    "generation": 7,
    "name": "더시마사리",
    "nameEn": "Toxapex",
    "types": [
      "poison",
      "water"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 63,
      "defense": 152,
      "spAttack": 53,
      "spDefense": 142,
      "speed": 35
    },
    "baseExp": 173,
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
        "moveId": "water_gun",
        "learnLevel": 15
      },
      {
        "moveId": "surf",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/748.gif"
  },
  'mudbray': {
    "id": "mudbray",
    "pokedexNumber": 749,
    "generation": 7,
    "name": "머드나기",
    "nameEn": "Mudbray",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 100,
      "defense": 70,
      "spAttack": 45,
      "spDefense": 55,
      "speed": 45
    },
    "baseExp": 77,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "mudsdale",
    "possibleMoves": [
      {
        "moveId": "bonemerang",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/749.gif"
  },
  'mudsdale': {
    "id": "mudsdale",
    "pokedexNumber": 750,
    "generation": 7,
    "name": "만마드",
    "nameEn": "Mudsdale",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 125,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 85,
      "speed": 35
    },
    "baseExp": 175,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "bonemerang",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/750.gif"
  },
  'dewpider': {
    "id": "dewpider",
    "pokedexNumber": 751,
    "generation": 7,
    "name": "물거미",
    "nameEn": "Dewpider",
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 380,
      "attack": 40,
      "defense": 52,
      "spAttack": 40,
      "spDefense": 72,
      "speed": 27
    },
    "baseExp": 54,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "araquanid",
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
        "moveId": "x_scissor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/751.gif"
  },
  'araquanid': {
    "id": "araquanid",
    "pokedexNumber": 752,
    "generation": 7,
    "name": "깨비물거미",
    "nameEn": "Araquanid",
    "types": [
      "water",
      "bug"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 70,
      "defense": 92,
      "spAttack": 50,
      "spDefense": 132,
      "speed": 42
    },
    "baseExp": 159,
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
        "moveId": "x_scissor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/752.gif"
  },
  'fomantis': {
    "id": "fomantis",
    "pokedexNumber": 753,
    "generation": 7,
    "name": "짜랑랑",
    "nameEn": "Fomantis",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 55,
      "defense": 35,
      "spAttack": 50,
      "spDefense": 35,
      "speed": 35
    },
    "baseExp": 50,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "lurantis",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/753.gif"
  },
  'lurantis': {
    "id": "lurantis",
    "pokedexNumber": 754,
    "generation": 7,
    "name": "라란티스",
    "nameEn": "Lurantis",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 105,
      "defense": 90,
      "spAttack": 80,
      "spDefense": 90,
      "speed": 45
    },
    "baseExp": 168,
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/754.gif"
  },
  'morelull': {
    "id": "morelull",
    "pokedexNumber": 755,
    "generation": 7,
    "name": "자마슈",
    "nameEn": "Morelull",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 35,
      "defense": 55,
      "spAttack": 65,
      "spDefense": 75,
      "speed": 15
    },
    "baseExp": 57,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "shiinotic",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/755.gif"
  },
  'shiinotic': {
    "id": "shiinotic",
    "pokedexNumber": 756,
    "generation": 7,
    "name": "마셰이드",
    "nameEn": "Shiinotic",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 45,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 100,
      "speed": 30
    },
    "baseExp": 142,
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/756.gif"
  },
  'salandit': {
    "id": "salandit",
    "pokedexNumber": 757,
    "generation": 7,
    "name": "야도뇽",
    "nameEn": "Salandit",
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 480,
      "attack": 44,
      "defense": 40,
      "spAttack": 71,
      "spDefense": 40,
      "speed": 77
    },
    "baseExp": 64,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "salazzle",
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
        "moveId": "ember",
        "learnLevel": 15
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/757.gif"
  },
  'salazzle': {
    "id": "salazzle",
    "pokedexNumber": 758,
    "generation": 7,
    "name": "염뉴트",
    "nameEn": "Salazzle",
    "types": [
      "poison",
      "fire"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 64,
      "defense": 60,
      "spAttack": 111,
      "spDefense": 60,
      "speed": 117
    },
    "baseExp": 168,
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
        "moveId": "ember",
        "learnLevel": 15
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/758.gif"
  },
  'stufful': {
    "id": "stufful",
    "pokedexNumber": 759,
    "generation": 7,
    "name": "포곰곰",
    "nameEn": "Stufful",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 75,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 50
    },
    "baseExp": 68,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "bewear",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/759.gif"
  },
  'bewear': {
    "id": "bewear",
    "pokedexNumber": 760,
    "generation": 7,
    "name": "이븐곰",
    "nameEn": "Bewear",
    "types": [
      "normal",
      "fighting"
    ],
    "baseStats": {
      "hp": 1200,
      "attack": 125,
      "defense": 80,
      "spAttack": 55,
      "spDefense": 60,
      "speed": 60
    },
    "baseExp": 175,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/760.gif"
  },
  'bounsweet': {
    "id": "bounsweet",
    "pokedexNumber": 761,
    "generation": 7,
    "name": "달콤아",
    "nameEn": "Bounsweet",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 420,
      "attack": 30,
      "defense": 38,
      "spAttack": 30,
      "spDefense": 38,
      "speed": 32
    },
    "baseExp": 42,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "steenee",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/761.gif"
  },
  'steenee': {
    "id": "steenee",
    "pokedexNumber": 762,
    "generation": 7,
    "name": "달무리나",
    "nameEn": "Steenee",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 520,
      "attack": 40,
      "defense": 48,
      "spAttack": 40,
      "spDefense": 48,
      "speed": 62
    },
    "baseExp": 102,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "tsareena",
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/762.gif"
  },
  'tsareena': {
    "id": "tsareena",
    "pokedexNumber": 763,
    "generation": 7,
    "name": "달코퀸",
    "nameEn": "Tsareena",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 720,
      "attack": 120,
      "defense": 98,
      "spAttack": 50,
      "spDefense": 98,
      "speed": 72
    },
    "baseExp": 230,
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
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/763.gif"
  },
  'comfey': {
    "id": "comfey",
    "pokedexNumber": 764,
    "generation": 7,
    "name": "큐아링",
    "nameEn": "Comfey",
    "types": [
      "fairy"
    ],
    "baseStats": {
      "hp": 510,
      "attack": 52,
      "defense": 90,
      "spAttack": 82,
      "spDefense": 110,
      "speed": 100
    },
    "baseExp": 170,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "moonblast",
        "learnLevel": 1
      },
      {
        "moveId": "play_rough",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/764.gif"
  },
  'oranguru': {
    "id": "oranguru",
    "pokedexNumber": 765,
    "generation": 7,
    "name": "하랑우탄",
    "nameEn": "Oranguru",
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 60,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 110,
      "speed": 60
    },
    "baseExp": 172,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "psybeam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/765.gif"
  },
  'passimian': {
    "id": "passimian",
    "pokedexNumber": 766,
    "generation": 7,
    "name": "내던숭이",
    "nameEn": "Passimian",
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 120,
      "defense": 90,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 80
    },
    "baseExp": 172,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/766.gif"
  },
  'wimpod': {
    "id": "wimpod",
    "pokedexNumber": 767,
    "generation": 7,
    "name": "꼬시레",
    "nameEn": "Wimpod",
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 250,
      "attack": 35,
      "defense": 40,
      "spAttack": 20,
      "spDefense": 30,
      "speed": 80
    },
    "baseExp": 46,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "golisopod",
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
        "moveId": "water_gun",
        "learnLevel": 15
      },
      {
        "moveId": "surf",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/767.gif"
  },
  'golisopod': {
    "id": "golisopod",
    "pokedexNumber": 768,
    "generation": 7,
    "name": "갑주무사",
    "nameEn": "Golisopod",
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 125,
      "defense": 140,
      "spAttack": 60,
      "spDefense": 90,
      "speed": 40
    },
    "baseExp": 186,
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
        "moveId": "water_gun",
        "learnLevel": 15
      },
      {
        "moveId": "surf",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/768.gif"
  },
  'sandygast': {
    "id": "sandygast",
    "pokedexNumber": 769,
    "generation": 7,
    "name": "모래꿍",
    "nameEn": "Sandygast",
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 55,
      "defense": 80,
      "spAttack": 70,
      "spDefense": 45,
      "speed": 15
    },
    "baseExp": 64,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "palossand",
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/769.gif"
  },
  'palossand': {
    "id": "palossand",
    "pokedexNumber": 770,
    "generation": 7,
    "name": "모래성이당",
    "nameEn": "Palossand",
    "types": [
      "ghost",
      "ground"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 75,
      "defense": 110,
      "spAttack": 100,
      "spDefense": 75,
      "speed": 35
    },
    "baseExp": 168,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/770.gif"
  },
  'pyukumuku': {
    "id": "pyukumuku",
    "pokedexNumber": 771,
    "generation": 7,
    "name": "해무기",
    "nameEn": "Pyukumuku",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 60,
      "defense": 130,
      "spAttack": 30,
      "spDefense": 130,
      "speed": 5
    },
    "baseExp": 144,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 2,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/771.gif"
  },
  'type-null': {
    "id": "type-null",
    "pokedexNumber": 772,
    "generation": 7,
    "name": "타입:널",
    "nameEn": "Type-Null",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 95,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 95,
      "speed": 59
    },
    "baseExp": 107,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 10,
    "isLegendary": true,
    "evolvesTo": "silvally",
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/772.gif"
  },
  'silvally': {
    "id": "silvally",
    "pokedexNumber": 773,
    "generation": 7,
    "name": "실버디",
    "nameEn": "Silvally",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 95,
      "defense": 95,
      "spAttack": 95,
      "spDefense": 95,
      "speed": 95
    },
    "baseExp": 257,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/773.gif"
  },
  'minior-red-meteor': {
    "id": "minior-red-meteor",
    "pokedexNumber": 774,
    "generation": 7,
    "name": "메테노",
    "nameEn": "Minior-Red-Meteor",
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 60,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 100,
      "speed": 60
    },
    "baseExp": 154,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/774.gif"
  },
  'komala': {
    "id": "komala",
    "pokedexNumber": 775,
    "generation": 7,
    "name": "자말라",
    "nameEn": "Komala",
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 115,
      "defense": 65,
      "spAttack": 75,
      "spDefense": 95,
      "speed": 65
    },
    "baseExp": 168,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/775.gif"
  },
  'turtonator': {
    "id": "turtonator",
    "pokedexNumber": 776,
    "generation": 7,
    "name": "폭거북스",
    "nameEn": "Turtonator",
    "types": [
      "fire",
      "dragon"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 78,
      "defense": 135,
      "spAttack": 91,
      "spDefense": 85,
      "speed": 36
    },
    "baseExp": 170,
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
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/776.gif"
  },
  'togedemaru': {
    "id": "togedemaru",
    "pokedexNumber": 777,
    "generation": 7,
    "name": "토게데마루",
    "nameEn": "Togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 98,
      "defense": 63,
      "spAttack": 40,
      "spDefense": 73,
      "speed": 96
    },
    "baseExp": 152,
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
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/777.gif"
  },
  'bruxish': {
    "id": "bruxish",
    "pokedexNumber": 779,
    "generation": 7,
    "name": "치갈기",
    "nameEn": "Bruxish",
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 680,
      "attack": 105,
      "defense": 70,
      "spAttack": 70,
      "spDefense": 70,
      "speed": 92
    },
    "baseExp": 166,
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
      },
      {
        "moveId": "psybeam",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/779.gif"
  },
  'drampa': {
    "id": "drampa",
    "pokedexNumber": 780,
    "generation": 7,
    "name": "할비롱",
    "nameEn": "Drampa",
    "types": [
      "normal",
      "dragon"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 60,
      "defense": 85,
      "spAttack": 135,
      "spDefense": 91,
      "speed": 36
    },
    "baseExp": 170,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "swords_dance",
        "learnLevel": 8
      },
      {
        "moveId": "hyper_beam",
        "learnLevel": 15
      },
      {
        "moveId": "dragon_claw",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/780.gif"
  },
  'dhelmise': {
    "id": "dhelmise",
    "pokedexNumber": 781,
    "generation": 7,
    "name": "타타륜",
    "nameEn": "Dhelmise",
    "types": [
      "ghost",
      "grass"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 131,
      "defense": 100,
      "spAttack": 86,
      "spDefense": 90,
      "speed": 40
    },
    "baseExp": 181,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "shadow_ball",
        "learnLevel": 1
      },
      {
        "moveId": "vine_whip",
        "learnLevel": 8
      },
      {
        "moveId": "energy_ball",
        "learnLevel": 15
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/781.gif"
  },
  'jangmo-o': {
    "id": "jangmo-o",
    "pokedexNumber": 782,
    "generation": 7,
    "name": "짜랑꼬",
    "nameEn": "Jangmo-O",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 55,
      "defense": 65,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 45
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "evolvesTo": "hakamo-o",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/782.gif"
  },
  'hakamo-o': {
    "id": "hakamo-o",
    "pokedexNumber": 783,
    "generation": 7,
    "name": "짜랑고우",
    "nameEn": "Hakamo-O",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 75,
      "defense": 90,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 65
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "evolvesTo": "kommo-o",
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
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/783.gif"
  },
  'kommo-o': {
    "id": "kommo-o",
    "pokedexNumber": 784,
    "generation": 7,
    "name": "짜랑고우거",
    "nameEn": "Kommo-O",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 110,
      "defense": 125,
      "spAttack": 100,
      "spDefense": 105,
      "speed": 85
    },
    "baseExp": 270,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/784.gif"
  },
  'tapu-koko': {
    "id": "tapu-koko",
    "pokedexNumber": 785,
    "generation": 7,
    "name": "카푸꼬꼬꼭",
    "nameEn": "Tapu-Koko",
    "types": [
      "electric",
      "fairy"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 115,
      "defense": 85,
      "spAttack": 95,
      "spDefense": 75,
      "speed": 130
    },
    "baseExp": 257,
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
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/785.gif"
  },
  'tapu-lele': {
    "id": "tapu-lele",
    "pokedexNumber": 786,
    "generation": 7,
    "name": "카푸나비나",
    "nameEn": "Tapu-Lele",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 85,
      "defense": 75,
      "spAttack": 130,
      "spDefense": 115,
      "speed": 95
    },
    "baseExp": 257,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/786.gif"
  },
  'tapu-bulu': {
    "id": "tapu-bulu",
    "pokedexNumber": 787,
    "generation": 7,
    "name": "카푸브루루",
    "nameEn": "Tapu-Bulu",
    "types": [
      "grass",
      "fairy"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 130,
      "defense": 115,
      "spAttack": 85,
      "spDefense": 95,
      "speed": 75
    },
    "baseExp": 257,
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
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/787.gif"
  },
  'tapu-fini': {
    "id": "tapu-fini",
    "pokedexNumber": 788,
    "generation": 7,
    "name": "카푸느지느",
    "nameEn": "Tapu-Fini",
    "types": [
      "water",
      "fairy"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 75,
      "defense": 115,
      "spAttack": 95,
      "spDefense": 130,
      "speed": 85
    },
    "baseExp": 257,
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
        "moveId": "moonblast",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/788.gif"
  },
  'cosmog': {
    "id": "cosmog",
    "pokedexNumber": 789,
    "generation": 7,
    "name": "코스모그",
    "nameEn": "Cosmog",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 430,
      "attack": 29,
      "defense": 31,
      "spAttack": 29,
      "spDefense": 31,
      "speed": 37
    },
    "baseExp": 40,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 10,
    "isLegendary": true,
    "evolvesTo": "cosmoem",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/789.gif"
  },
  'cosmoem': {
    "id": "cosmoem",
    "pokedexNumber": 790,
    "generation": 7,
    "name": "코스모움",
    "nameEn": "Cosmoem",
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 430,
      "attack": 29,
      "defense": 131,
      "spAttack": 29,
      "spDefense": 131,
      "speed": 37
    },
    "baseExp": 140,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/790.gif"
  },
  'nihilego': {
    "id": "nihilego",
    "pokedexNumber": 793,
    "generation": 7,
    "name": "텅비드",
    "nameEn": "Nihilego",
    "types": [
      "rock",
      "poison"
    ],
    "baseStats": {
      "hp": 1090,
      "attack": 53,
      "defense": 47,
      "spAttack": 127,
      "spDefense": 131,
      "speed": 103
    },
    "baseExp": 257,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "sludge_bomb",
        "learnLevel": 8
      },
      {
        "moveId": "toxic",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/793.gif"
  },
  'buzzwole': {
    "id": "buzzwole",
    "pokedexNumber": 794,
    "generation": 7,
    "name": "매시붕",
    "nameEn": "Buzzwole",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 1070,
      "attack": 139,
      "defense": 139,
      "spAttack": 53,
      "spDefense": 53,
      "speed": 79
    },
    "baseExp": 257,
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
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/794.gif"
  },
  'pheromosa': {
    "id": "pheromosa",
    "pokedexNumber": 795,
    "generation": 7,
    "name": "페로코체",
    "nameEn": "Pheromosa",
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 710,
      "attack": 137,
      "defense": 37,
      "spAttack": 137,
      "spDefense": 37,
      "speed": 151
    },
    "baseExp": 257,
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
        "moveId": "mach_punch",
        "learnLevel": 15
      },
      {
        "moveId": "close_combat",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/795.gif"
  },
  'xurkitree': {
    "id": "xurkitree",
    "pokedexNumber": 796,
    "generation": 7,
    "name": "전수목",
    "nameEn": "Xurkitree",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 830,
      "attack": 89,
      "defense": 71,
      "spAttack": 173,
      "spDefense": 71,
      "speed": 83
    },
    "baseExp": 257,
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
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/796.gif"
  },
  'celesteela': {
    "id": "celesteela",
    "pokedexNumber": 797,
    "generation": 7,
    "name": "철화구야",
    "nameEn": "Celesteela",
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 970,
      "attack": 101,
      "defense": 103,
      "spAttack": 107,
      "spDefense": 101,
      "speed": 61
    },
    "baseExp": 257,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
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
        "moveId": "air_slash",
        "learnLevel": 15
      },
      {
        "moveId": "brave_bird",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/797.gif"
  },
  'kartana': {
    "id": "kartana",
    "pokedexNumber": 798,
    "generation": 7,
    "name": "종이신도",
    "nameEn": "Kartana",
    "types": [
      "grass",
      "steel"
    ],
    "baseStats": {
      "hp": 590,
      "attack": 181,
      "defense": 131,
      "spAttack": 59,
      "spDefense": 31,
      "speed": 109
    },
    "baseExp": 257,
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
      },
      {
        "moveId": "iron_head",
        "learnLevel": 25
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/798.gif"
  },
  'guzzlord': {
    "id": "guzzlord",
    "pokedexNumber": 799,
    "generation": 7,
    "name": "악식킹",
    "nameEn": "Guzzlord",
    "types": [
      "dark",
      "dragon"
    ],
    "baseStats": {
      "hp": 2230,
      "attack": 101,
      "defense": 53,
      "spAttack": 97,
      "spDefense": 53,
      "speed": 43
    },
    "baseExp": 257,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 3,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/799.gif"
  },
  'magearna': {
    "id": "magearna",
    "pokedexNumber": 801,
    "generation": 7,
    "name": "마기아나",
    "nameEn": "Magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 95,
      "defense": 115,
      "spAttack": 130,
      "spDefense": 115,
      "speed": 65
    },
    "baseExp": 270,
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
        "moveId": "moonblast",
        "learnLevel": 15
      },
      {
        "moveId": "play_rough",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/801.gif"
  },
  'marshadow': {
    "id": "marshadow",
    "pokedexNumber": 802,
    "generation": 7,
    "name": "마샤도",
    "nameEn": "Marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 125,
      "defense": 80,
      "spAttack": 90,
      "spDefense": 90,
      "speed": 125
    },
    "baseExp": 270,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
    "cost": 10,
    "isLegendary": true,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "close_combat",
        "learnLevel": 8
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/802.gif"
  },
  'poipole': {
    "id": "poipole",
    "pokedexNumber": 803,
    "generation": 7,
    "name": "베베놈",
    "nameEn": "Poipole",
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 670,
      "attack": 73,
      "defense": 67,
      "spAttack": 73,
      "spDefense": 67,
      "speed": 73
    },
    "baseExp": 189,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "evolvesTo": "naganadel",
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/803.gif"
  },
  'naganadel': {
    "id": "naganadel",
    "pokedexNumber": 804,
    "generation": 7,
    "name": "아고용",
    "nameEn": "Naganadel",
    "types": [
      "poison",
      "dragon"
    ],
    "baseStats": {
      "hp": 730,
      "attack": 73,
      "defense": 73,
      "spAttack": 127,
      "spDefense": 73,
      "speed": 121
    },
    "baseExp": 243,
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
        "moveId": "dragon_claw",
        "learnLevel": 15
      },
      {
        "moveId": "draco_meteor",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/804.gif"
  },
  'stakataka': {
    "id": "stakataka",
    "pokedexNumber": 805,
    "generation": 7,
    "name": "차곡차곡",
    "nameEn": "Stakataka",
    "types": [
      "rock",
      "steel"
    ],
    "baseStats": {
      "hp": 610,
      "attack": 131,
      "defense": 211,
      "spAttack": 53,
      "spDefense": 101,
      "speed": 13
    },
    "baseExp": 257,
    "evolutionStage": 1,
    "evolutionStagesTotal": 1,
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
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/805.gif"
  },
  'blacephalon': {
    "id": "blacephalon",
    "pokedexNumber": 806,
    "generation": 7,
    "name": "두파팡",
    "nameEn": "Blacephalon",
    "types": [
      "fire",
      "ghost"
    ],
    "baseStats": {
      "hp": 530,
      "attack": 127,
      "defense": 53,
      "spAttack": 151,
      "spDefense": 79,
      "speed": 107
    },
    "baseExp": 257,
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
      },
      {
        "moveId": "shadow_ball",
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/806.gif"
  },
  'zeraora': {
    "id": "zeraora",
    "pokedexNumber": 807,
    "generation": 7,
    "name": "제라오라",
    "nameEn": "Zeraora",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 880,
      "attack": 112,
      "defense": 75,
      "spAttack": 102,
      "spDefense": 80,
      "speed": 143
    },
    "baseExp": 270,
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
      }
    ],
    "range": 4,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/807.gif"
  },
  'meltan': {
    "id": "meltan",
    "pokedexNumber": 808,
    "generation": 7,
    "name": "멜탄",
    "nameEn": "Meltan",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 460,
      "attack": 65,
      "defense": 65,
      "spAttack": 55,
      "spDefense": 35,
      "speed": 34
    },
    "baseExp": 135,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 10,
    "isLegendary": true,
    "evolvesTo": "melmetal",
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
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/808.gif"
  },
  'melmetal': {
    "id": "melmetal",
    "pokedexNumber": 809,
    "generation": 7,
    "name": "멜메탈",
    "nameEn": "Melmetal",
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 1350,
      "attack": 143,
      "defense": 143,
      "spAttack": 80,
      "spDefense": 65,
      "speed": 34
    },
    "baseExp": 270,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
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
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/809.gif"
  },
};
