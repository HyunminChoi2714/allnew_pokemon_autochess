import { PokemonSpecies } from '../types/game';

export const POKEMON_SPECIES: Record<string, PokemonSpecies> = {
  'bulbasaur': {
      "id": "bulbasaur",
      "pokedexNumber": 1,
      "name": "이상해씨",
      "nameEn": "Bulbasaur",
      "types": [
          "grass",
          "poison"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 49,
          "defense": 49,
          "spAttack": 65,
          "spDefense": 65,
          "speed": 45
      },
      "baseExp": 159,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "moveId": "sludge_bomb",
              "learnLevel": 15
          },
          {
              "moveId": "solar_beam",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
      "evolvesTo": "ivysaur"
  },
  'ivysaur': {
      "id": "ivysaur",
      "pokedexNumber": 2,
      "name": "이상해풀",
      "nameEn": "Ivysaur",
      "types": [
          "grass",
          "poison"
      ],
      "baseStats": {
          "hp": 600,
          "attack": 62,
          "defense": 63,
          "spAttack": 80,
          "spDefense": 80,
          "speed": 60
      },
      "baseExp": 202,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
              "moveId": "sludge_bomb",
              "learnLevel": 15
          },
          {
              "moveId": "solar_beam",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
      "evolvesTo": "venusaur"
  },
  'venusaur': {
      "id": "venusaur",
      "pokedexNumber": 3,
      "name": "이상해꽃",
      "nameEn": "Venusaur",
      "types": [
          "grass",
          "poison"
      ],
      "baseStats": {
          "hp": 800,
          "attack": 82,
          "defense": 83,
          "spAttack": 100,
          "spDefense": 100,
          "speed": 80
      },
      "baseExp": 262,
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
              "moveId": "sludge_bomb",
              "learnLevel": 15
          },
          {
              "moveId": "solar_beam",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif"
  },
  'charmander': {
      "id": "charmander",
      "pokedexNumber": 4,
      "name": "파이리",
      "nameEn": "Charmander",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 390,
          "attack": 52,
          "defense": 43,
          "spAttack": 60,
          "spDefense": 50,
          "speed": 65
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
      "evolvesTo": "charmeleon"
  },
  'charmeleon': {
      "id": "charmeleon",
      "pokedexNumber": 5,
      "name": "리자드",
      "nameEn": "Charmeleon",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 580,
          "attack": 64,
          "defense": 58,
          "spAttack": 80,
          "spDefense": 65,
          "speed": 80
      },
      "baseExp": 202,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/5.gif",
      "evolvesTo": "charizard"
  },
  'charizard': {
      "id": "charizard",
      "pokedexNumber": 6,
      "name": "리자몽",
      "nameEn": "Charizard",
      "types": [
          "fire",
          "flying"
      ],
      "baseStats": {
          "hp": 780,
          "attack": 84,
          "defense": 78,
          "spAttack": 109,
          "spDefense": 85,
          "speed": 100
      },
      "baseExp": 267,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "fire_blast",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif"
  },
  'squirtle': {
      "id": "squirtle",
      "pokedexNumber": 7,
      "name": "꼬부기",
      "nameEn": "Squirtle",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 440,
          "attack": 48,
          "defense": 65,
          "spAttack": 50,
          "spDefense": 64,
          "speed": 43
      },
      "baseExp": 157,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
      "evolvesTo": "wartortle"
  },
  'wartortle': {
      "id": "wartortle",
      "pokedexNumber": 8,
      "name": "어니부기",
      "nameEn": "Wartortle",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 590,
          "attack": 63,
          "defense": 80,
          "spAttack": 65,
          "spDefense": 80,
          "speed": 58
      },
      "baseExp": 202,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/8.gif",
      "evolvesTo": "blastoise"
  },
  'blastoise': {
      "id": "blastoise",
      "pokedexNumber": 9,
      "name": "거북왕",
      "nameEn": "Blastoise",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 790,
          "attack": 83,
          "defense": 100,
          "spAttack": 85,
          "spDefense": 105,
          "speed": 78
      },
      "baseExp": 265,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/9.gif"
  },
  'caterpie': {
      "id": "caterpie",
      "pokedexNumber": 10,
      "name": "캐터피",
      "nameEn": "Caterpie",
      "types": [
          "bug"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 30,
          "defense": 35,
          "spAttack": 20,
          "spDefense": 20,
          "speed": 45
      },
      "baseExp": 97,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10.gif",
      "evolvesTo": "metapod"
  },
  'metapod': {
      "id": "metapod",
      "pokedexNumber": 11,
      "name": "단데기",
      "nameEn": "Metapod",
      "types": [
          "bug"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 20,
          "defense": 55,
          "spAttack": 25,
          "spDefense": 25,
          "speed": 30
      },
      "baseExp": 102,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/11.gif",
      "evolvesTo": "butterfree"
  },
  'butterfree': {
      "id": "butterfree",
      "pokedexNumber": 12,
      "name": "버터플",
      "nameEn": "Butterfree",
      "types": [
          "bug",
          "flying"
      ],
      "baseStats": {
          "hp": 600,
          "attack": 45,
          "defense": 50,
          "spAttack": 90,
          "spDefense": 80,
          "speed": 70
      },
      "baseExp": 197,
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
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif"
  },
  'weedle': {
      "id": "weedle",
      "pokedexNumber": 13,
      "name": "뿔충이",
      "nameEn": "Weedle",
      "types": [
          "bug",
          "poison"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 35,
          "defense": 30,
          "spAttack": 20,
          "spDefense": 20,
          "speed": 50
      },
      "baseExp": 97,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/13.gif",
      "evolvesTo": "kakuna"
  },
  'kakuna': {
      "id": "kakuna",
      "pokedexNumber": 14,
      "name": "딱충이",
      "nameEn": "Kakuna",
      "types": [
          "bug",
          "poison"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 25,
          "defense": 50,
          "spAttack": 25,
          "spDefense": 25,
          "speed": 35
      },
      "baseExp": 102,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
              "moveId": "sludge_bomb",
              "learnLevel": 15
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/14.gif",
      "evolvesTo": "beedrill"
  },
  'beedrill': {
      "id": "beedrill",
      "pokedexNumber": 15,
      "name": "독침붕",
      "nameEn": "Beedrill",
      "types": [
          "bug",
          "poison"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 90,
          "defense": 40,
          "spAttack": 45,
          "spDefense": 80,
          "speed": 75
      },
      "baseExp": 197,
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
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/15.gif"
  },
  'pidgey': {
      "id": "pidgey",
      "pokedexNumber": 16,
      "name": "구구",
      "nameEn": "Pidgey",
      "types": [
          "normal",
          "flying"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 45,
          "defense": 40,
          "spAttack": 35,
          "spDefense": 35,
          "speed": 56
      },
      "baseExp": 125,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "swords_dance",
              "learnLevel": 25
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/16.gif",
      "evolvesTo": "pidgeotto"
  },
  'pidgeotto': {
      "id": "pidgeotto",
      "pokedexNumber": 17,
      "name": "피전트",
      "nameEn": "Pidgeotto",
      "types": [
          "normal",
          "flying"
      ],
      "baseStats": {
          "hp": 630,
          "attack": 60,
          "defense": 55,
          "spAttack": 50,
          "spDefense": 50,
          "speed": 71
      },
      "baseExp": 174,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "swords_dance",
              "learnLevel": 25
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/17.gif",
      "evolvesTo": "pidgeot"
  },
  'pidgeot': {
      "id": "pidgeot",
      "pokedexNumber": 18,
      "name": "피전투스",
      "nameEn": "Pidgeot",
      "types": [
          "normal",
          "flying"
      ],
      "baseStats": {
          "hp": 830,
          "attack": 80,
          "defense": 75,
          "spAttack": 70,
          "spDefense": 70,
          "speed": 101
      },
      "baseExp": 239,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "swords_dance",
              "learnLevel": 25
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif"
  },
  'rattata': {
      "id": "rattata",
      "pokedexNumber": 19,
      "name": "꼬렛",
      "nameEn": "Rattata",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 300,
          "attack": 56,
          "defense": 35,
          "spAttack": 25,
          "spDefense": 35,
          "speed": 72
      },
      "baseExp": 126,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/19.gif",
      "evolvesTo": "raticate"
  },
  'raticate': {
      "id": "raticate",
      "pokedexNumber": 20,
      "name": "레트라",
      "nameEn": "Raticate",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 81,
          "defense": 60,
          "spAttack": 50,
          "spDefense": 70,
          "speed": 97
      },
      "baseExp": 206,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/20.gif"
  },
  'pikachu': {
      "id": "pikachu",
      "pokedexNumber": 25,
      "name": "피카츄",
      "nameEn": "Pikachu",
      "types": [
          "electric"
      ],
      "baseStats": {
          "hp": 350,
          "attack": 55,
          "defense": 40,
          "spAttack": 50,
          "spDefense": 50,
          "speed": 90
      },
      "baseExp": 160,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
      "evolvesTo": "raichu"
  },
  'raichu': {
      "id": "raichu",
      "pokedexNumber": 26,
      "name": "라이츄",
      "nameEn": "Raichu",
      "types": [
          "electric"
      ],
      "baseStats": {
          "hp": 600,
          "attack": 90,
          "defense": 55,
          "spAttack": 90,
          "spDefense": 80,
          "speed": 110
      },
      "baseExp": 242,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/26.gif"
  },
  'jigglypuff': {
      "id": "jigglypuff",
      "pokedexNumber": 39,
      "name": "푸린",
      "nameEn": "Jigglypuff",
      "types": [
          "normal",
          "fairy"
      ],
      "baseStats": {
          "hp": 1150,
          "attack": 45,
          "defense": 20,
          "spAttack": 45,
          "spDefense": 25,
          "speed": 20
      },
      "baseExp": 135,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "moveId": "moonblast",
              "learnLevel": 15
          },
          {
              "moveId": "swords_dance",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/39.gif",
      "evolvesTo": "wigglytuff"
  },
  'wigglytuff': {
      "id": "wigglytuff",
      "pokedexNumber": 40,
      "name": "푸크린",
      "nameEn": "Wigglytuff",
      "types": [
          "normal",
          "fairy"
      ],
      "baseStats": {
          "hp": 1400,
          "attack": 70,
          "defense": 45,
          "spAttack": 85,
          "spDefense": 50,
          "speed": 45
      },
      "baseExp": 217,
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
              "moveId": "moonblast",
              "learnLevel": 15
          },
          {
              "moveId": "swords_dance",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/40.gif"
  },
  'meowth': {
      "id": "meowth",
      "pokedexNumber": 52,
      "name": "나옹",
      "nameEn": "Meowth",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 45,
          "defense": 35,
          "spAttack": 40,
          "spDefense": 40,
          "speed": 90
      },
      "baseExp": 145,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/52.gif",
      "evolvesTo": "persian"
  },
  'persian': {
      "id": "persian",
      "pokedexNumber": 53,
      "name": "페르시온",
      "nameEn": "Persian",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 70,
          "defense": 60,
          "spAttack": 65,
          "spDefense": 65,
          "speed": 115
      },
      "baseExp": 220,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/53.gif"
  },
  'psyduck': {
      "id": "psyduck",
      "pokedexNumber": 54,
      "name": "고라파덕",
      "nameEn": "Psyduck",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 52,
          "defense": 48,
          "spAttack": 65,
          "spDefense": 50,
          "speed": 55
      },
      "baseExp": 160,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/54.gif",
      "evolvesTo": "golduck"
  },
  'golduck': {
      "id": "golduck",
      "pokedexNumber": 55,
      "name": "골덕",
      "nameEn": "Golduck",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 800,
          "attack": 82,
          "defense": 78,
          "spAttack": 95,
          "spDefense": 80,
          "speed": 85
      },
      "baseExp": 250,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/55.gif"
  },
  'growlithe': {
      "id": "growlithe",
      "pokedexNumber": 58,
      "name": "가디",
      "nameEn": "Growlithe",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 70,
          "defense": 45,
          "spAttack": 70,
          "spDefense": 50,
          "speed": 60
      },
      "baseExp": 175,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
      "cost": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/58.gif",
      "evolvesTo": "arcanine"
  },
  'arcanine': {
      "id": "arcanine",
      "pokedexNumber": 59,
      "name": "윈디",
      "nameEn": "Arcanine",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 110,
          "defense": 80,
          "spAttack": 100,
          "spDefense": 80,
          "speed": 95
      },
      "baseExp": 277,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/59.gif"
  },
  'abra': {
      "id": "abra",
      "pokedexNumber": 63,
      "name": "캐이시",
      "nameEn": "Abra",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 250,
          "attack": 20,
          "defense": 15,
          "spAttack": 105,
          "spDefense": 55,
          "speed": 90
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/63.gif",
      "evolvesTo": "kadabra"
  },
  'kadabra': {
      "id": "kadabra",
      "pokedexNumber": 64,
      "name": "윤겔라",
      "nameEn": "Kadabra",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 35,
          "defense": 30,
          "spAttack": 120,
          "spDefense": 70,
          "speed": 105
      },
      "baseExp": 200,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/64.gif",
      "evolvesTo": "alakazam",
      "requiresTradeItem": true
  },
  'alakazam': {
      "id": "alakazam",
      "pokedexNumber": 65,
      "name": "후딘",
      "nameEn": "Alakazam",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 50,
          "defense": 45,
          "spAttack": 135,
          "spDefense": 95,
          "speed": 120
      },
      "baseExp": 250,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/65.gif"
  },
  'machop': {
      "id": "machop",
      "pokedexNumber": 66,
      "name": "알통몬",
      "nameEn": "Machop",
      "types": [
          "fighting"
      ],
      "baseStats": {
          "hp": 700,
          "attack": 80,
          "defense": 50,
          "spAttack": 35,
          "spDefense": 35,
          "speed": 35
      },
      "baseExp": 152,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/66.gif",
      "evolvesTo": "machoke"
  },
  'machoke': {
      "id": "machoke",
      "pokedexNumber": 67,
      "name": "근육몬",
      "nameEn": "Machoke",
      "types": [
          "fighting"
      ],
      "baseStats": {
          "hp": 800,
          "attack": 100,
          "defense": 70,
          "spAttack": 50,
          "spDefense": 60,
          "speed": 45
      },
      "baseExp": 202,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/67.gif",
      "evolvesTo": "machamp",
      "requiresTradeItem": true
  },
  'machamp': {
      "id": "machamp",
      "pokedexNumber": 68,
      "name": "괴력몬",
      "nameEn": "Machamp",
      "types": [
          "fighting"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 130,
          "defense": 80,
          "spAttack": 65,
          "spDefense": 85,
          "speed": 55
      },
      "baseExp": 252,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/68.gif"
  },
  'gastly': {
      "id": "gastly",
      "pokedexNumber": 92,
      "name": "고스",
      "nameEn": "Gastly",
      "types": [
          "ghost",
          "poison"
      ],
      "baseStats": {
          "hp": 300,
          "attack": 35,
          "defense": 30,
          "spAttack": 100,
          "spDefense": 35,
          "speed": 80
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
      "possibleMoves": [
          {
              "moveId": "shadow_ball",
              "learnLevel": 1
          },
          {
              "moveId": "sludge_bomb",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/92.gif",
      "evolvesTo": "haunter"
  },
  'haunter': {
      "id": "haunter",
      "pokedexNumber": 93,
      "name": "고우스트",
      "nameEn": "Haunter",
      "types": [
          "ghost",
          "poison"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 50,
          "defense": 45,
          "spAttack": 115,
          "spDefense": 55,
          "speed": 95
      },
      "baseExp": 202,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
      "cost": 3,
      "possibleMoves": [
          {
              "moveId": "shadow_ball",
              "learnLevel": 1
          },
          {
              "moveId": "sludge_bomb",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/93.gif",
      "evolvesTo": "gengar",
      "requiresTradeItem": true
  },
  'gengar': {
      "id": "gengar",
      "pokedexNumber": 94,
      "name": "팬텀",
      "nameEn": "Gengar",
      "types": [
          "ghost",
          "poison"
      ],
      "baseStats": {
          "hp": 600,
          "attack": 65,
          "defense": 60,
          "spAttack": 130,
          "spDefense": 75,
          "speed": 110
      },
      "baseExp": 250,
      "evolutionStage": 3,
      "evolutionStagesTotal": 3,
      "cost": 9,
      "possibleMoves": [
          {
              "moveId": "shadow_ball",
              "learnLevel": 1
          },
          {
              "moveId": "sludge_bomb",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif"
  },
  'onix': {
      "id": "onix",
      "pokedexNumber": 95,
      "name": "롱스톤",
      "nameEn": "Onix",
      "types": [
          "rock",
          "ground"
      ],
      "baseStats": {
          "hp": 350,
          "attack": 45,
          "defense": 160,
          "spAttack": 30,
          "spDefense": 45,
          "speed": 70
      },
      "baseExp": 192,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 3,
      "possibleMoves": [
          {
              "moveId": "stone_edge",
              "learnLevel": 1
          },
          {
              "moveId": "earthquake",
              "learnLevel": 15
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/95.gif"
  },
  'magikarp': {
      "id": "magikarp",
      "pokedexNumber": 129,
      "name": "잉어킹",
      "nameEn": "Magikarp",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 200,
          "attack": 10,
          "defense": 55,
          "spAttack": 15,
          "spDefense": 20,
          "speed": 80
      },
      "baseExp": 100,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/129.gif",
      "evolvesTo": "gyarados"
  },
  'gyarados': {
      "id": "gyarados",
      "pokedexNumber": 130,
      "name": "갸라도스",
      "nameEn": "Gyarados",
      "types": [
          "water",
          "flying"
      ],
      "baseStats": {
          "hp": 950,
          "attack": 125,
          "defense": 79,
          "spAttack": 60,
          "spDefense": 100,
          "speed": 81
      },
      "baseExp": 270,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "hydro_pump",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif"
  },
  'lapras': {
      "id": "lapras",
      "pokedexNumber": 131,
      "name": "라프라스",
      "nameEn": "Lapras",
      "types": [
          "water",
          "ice"
      ],
      "baseStats": {
          "hp": 1300,
          "attack": 85,
          "defense": 80,
          "spAttack": 85,
          "spDefense": 95,
          "speed": 60
      },
      "baseExp": 267,
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
              "moveId": "ice_beam",
              "learnLevel": 15
          },
          {
              "moveId": "hydro_pump",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif"
  },
  'ditto': {
      "id": "ditto",
      "pokedexNumber": 132,
      "name": "메타몽",
      "nameEn": "Ditto",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 480,
          "attack": 48,
          "defense": 48,
          "spAttack": 48,
          "spDefense": 48,
          "speed": 48
      },
      "baseExp": 144,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/132.gif"
  },
  'eevee': {
      "id": "eevee",
      "pokedexNumber": 133,
      "name": "이브이",
      "nameEn": "Eevee",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 55,
          "defense": 50,
          "spAttack": 45,
          "spDefense": 65,
          "speed": 55
      },
      "baseExp": 162,
      "evolutionStage": 1,
      "evolutionStagesTotal": 2,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif",
      "evolvesTo": "vaporeon"
  },
  'vaporeon': {
      "id": "vaporeon",
      "pokedexNumber": 134,
      "name": "샤미드",
      "nameEn": "Vaporeon",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 1300,
          "attack": 65,
          "defense": 60,
          "spAttack": 110,
          "spDefense": 95,
          "speed": 65
      },
      "baseExp": 262,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/134.gif"
  },
  'jolteon': {
      "id": "jolteon",
      "pokedexNumber": 135,
      "name": "쥬피썬더",
      "nameEn": "Jolteon",
      "types": [
          "electric"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 65,
          "defense": 60,
          "spAttack": 110,
          "spDefense": 95,
          "speed": 130
      },
      "baseExp": 262,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/135.gif"
  },
  'flareon': {
      "id": "flareon",
      "pokedexNumber": 136,
      "name": "부스터",
      "nameEn": "Flareon",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 130,
          "defense": 60,
          "spAttack": 95,
          "spDefense": 110,
          "speed": 65
      },
      "baseExp": 262,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/136.gif"
  },
  'snorlax': {
      "id": "snorlax",
      "pokedexNumber": 143,
      "name": "잠만보",
      "nameEn": "Snorlax",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 1600,
          "attack": 110,
          "defense": 65,
          "spAttack": 65,
          "spDefense": 110,
          "speed": 30
      },
      "baseExp": 270,
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
              "learnLevel": 25
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif"
  },
  'articuno': {
      "id": "articuno",
      "pokedexNumber": 144,
      "name": "프리저",
      "nameEn": "Articuno",
      "types": [
          "ice",
          "flying"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 85,
          "defense": 100,
          "spAttack": 95,
          "spDefense": 125,
          "speed": 85
      },
      "baseExp": 290,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "air_slash",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/144.gif",
      "isLegendary": true
  },
  'zapdos': {
      "id": "zapdos",
      "pokedexNumber": 145,
      "name": "썬더",
      "nameEn": "Zapdos",
      "types": [
          "electric",
          "flying"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 90,
          "defense": 85,
          "spAttack": 125,
          "spDefense": 90,
          "speed": 100
      },
      "baseExp": 290,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "thunder",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/145.gif",
      "isLegendary": true
  },
  'moltres': {
      "id": "moltres",
      "pokedexNumber": 146,
      "name": "파이어",
      "nameEn": "Moltres",
      "types": [
          "fire",
          "flying"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 100,
          "defense": 90,
          "spAttack": 125,
          "spDefense": 85,
          "speed": 90
      },
      "baseExp": 290,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "fire_blast",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/146.gif",
      "isLegendary": true
  },
  'dratini': {
      "id": "dratini",
      "pokedexNumber": 147,
      "name": "미뇽",
      "nameEn": "Dratini",
      "types": [
          "dragon"
      ],
      "baseStats": {
          "hp": 410,
          "attack": 64,
          "defense": 45,
          "spAttack": 50,
          "spDefense": 50,
          "speed": 50
      },
      "baseExp": 150,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/147.gif",
      "evolvesTo": "dragonair"
  },
  'dragonair': {
      "id": "dragonair",
      "pokedexNumber": 148,
      "name": "신뇽",
      "nameEn": "Dragonair",
      "types": [
          "dragon"
      ],
      "baseStats": {
          "hp": 610,
          "attack": 84,
          "defense": 65,
          "spAttack": 70,
          "spDefense": 70,
          "speed": 70
      },
      "baseExp": 210,
      "evolutionStage": 2,
      "evolutionStagesTotal": 3,
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
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/148.gif",
      "evolvesTo": "dragonite"
  },
  'dragonite': {
      "id": "dragonite",
      "pokedexNumber": 149,
      "name": "망나뇽",
      "nameEn": "Dragonite",
      "types": [
          "dragon",
          "flying"
      ],
      "baseStats": {
          "hp": 910,
          "attack": 134,
          "defense": 95,
          "spAttack": 100,
          "spDefense": 100,
          "speed": 80
      },
      "baseExp": 300,
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
              "moveId": "air_slash",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif"
  },
  'mewtwo': {
      "id": "mewtwo",
      "pokedexNumber": 150,
      "name": "뮤츠",
      "nameEn": "Mewtwo",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 1060,
          "attack": 110,
          "defense": 90,
          "spAttack": 154,
          "spDefense": 90,
          "speed": 130
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif",
      "isLegendary": true
  },
  'mew': {
      "id": "mew",
      "pokedexNumber": 151,
      "name": "뮤",
      "nameEn": "Mew",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 100,
          "defense": 100,
          "spAttack": 100,
          "spDefense": 100,
          "speed": 100
      },
      "baseExp": 300,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/151.gif",
      "isLegendary": true
  },
  'chikorita': {
      "id": "chikorita",
      "pokedexNumber": 152,
      "name": "치코리타",
      "nameEn": "Chikorita",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 49,
          "defense": 65,
          "spAttack": 49,
          "spDefense": 65,
          "speed": 45
      },
      "baseExp": 159,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/152.gif",
      "evolvesTo": "bayleef"
  },
  'cyndaquil': {
      "id": "cyndaquil",
      "pokedexNumber": 155,
      "name": "브케인",
      "nameEn": "Cyndaquil",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 390,
          "attack": 52,
          "defense": 43,
          "spAttack": 60,
          "spDefense": 50,
          "speed": 65
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif",
      "evolvesTo": "quilava"
  },
  'totodile': {
      "id": "totodile",
      "pokedexNumber": 158,
      "name": "리아코",
      "nameEn": "Totodile",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 65,
          "defense": 64,
          "spAttack": 44,
          "spDefense": 48,
          "speed": 43
      },
      "baseExp": 157,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/158.gif",
      "evolvesTo": "croconaw"
  },
  'espeon': {
      "id": "espeon",
      "pokedexNumber": 196,
      "name": "에스피",
      "nameEn": "Espeon",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 65,
          "defense": 60,
          "spAttack": 130,
          "spDefense": 95,
          "speed": 110
      },
      "baseExp": 262,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/196.gif"
  },
  'umbreon': {
      "id": "umbreon",
      "pokedexNumber": 197,
      "name": "블래키",
      "nameEn": "Umbreon",
      "types": [
          "dark"
      ],
      "baseStats": {
          "hp": 950,
          "attack": 65,
          "defense": 110,
          "spAttack": 60,
          "spDefense": 130,
          "speed": 65
      },
      "baseExp": 262,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
      "possibleMoves": [
          {
              "moveId": "dark_pulse",
              "learnLevel": 1
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/197.gif"
  },
  'scizor': {
      "id": "scizor",
      "pokedexNumber": 212,
      "name": "핫삼",
      "nameEn": "Scizor",
      "types": [
          "bug",
          "steel"
      ],
      "baseStats": {
          "hp": 700,
          "attack": 130,
          "defense": 100,
          "spAttack": 55,
          "spDefense": 80,
          "speed": 65
      },
      "baseExp": 250,
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
              "moveId": "iron_head",
              "learnLevel": 15
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/212.gif"
  },
  'heracross': {
      "id": "heracross",
      "pokedexNumber": 214,
      "name": "헤라크로스",
      "nameEn": "Heracross",
      "types": [
          "bug",
          "fighting"
      ],
      "baseStats": {
          "hp": 800,
          "attack": 125,
          "defense": 75,
          "spAttack": 40,
          "spDefense": 95,
          "speed": 85
      },
      "baseExp": 250,
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
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/214.gif"
  },
  'tyranitar': {
      "id": "tyranitar",
      "pokedexNumber": 248,
      "name": "마기라스",
      "nameEn": "Tyranitar",
      "types": [
          "rock",
          "dark"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 134,
          "defense": 110,
          "spAttack": 95,
          "spDefense": 100,
          "speed": 61
      },
      "baseExp": 300,
      "evolutionStage": 3,
      "evolutionStagesTotal": 3,
      "cost": 9,
      "possibleMoves": [
          {
              "moveId": "stone_edge",
              "learnLevel": 1
          },
          {
              "moveId": "dark_pulse",
              "learnLevel": 15
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/248.gif"
  },
  'lugia': {
      "id": "lugia",
      "pokedexNumber": 249,
      "name": "루기아",
      "nameEn": "Lugia",
      "types": [
          "psychic",
          "flying"
      ],
      "baseStats": {
          "hp": 1060,
          "attack": 90,
          "defense": 130,
          "spAttack": 90,
          "spDefense": 154,
          "speed": 110
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "aeroblast",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/249.gif",
      "isLegendary": true
  },
  'ho_oh': {
      "id": "ho_oh",
      "pokedexNumber": 250,
      "name": "칠색조",
      "nameEn": "Ho-Oh",
      "types": [
          "fire",
          "flying"
      ],
      "baseStats": {
          "hp": 1060,
          "attack": 130,
          "defense": 90,
          "spAttack": 110,
          "spDefense": 154,
          "speed": 90
      },
      "baseExp": 340,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "fire_blast",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/250.gif"
  },
  'celebi': {
      "id": "celebi",
      "pokedexNumber": 251,
      "name": "세레비",
      "nameEn": "Celebi",
      "types": [
          "psychic",
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
      "baseExp": 300,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "vine_whip",
              "learnLevel": 15
          },
          {
              "moveId": "seed_flare",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/251.gif",
      "isLegendary": true
  },
  'treecko': {
      "id": "treecko",
      "pokedexNumber": 252,
      "name": "나무지기",
      "nameEn": "Treecko",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 45,
          "defense": 35,
          "spAttack": 65,
          "spDefense": 55,
          "speed": 70
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/252.gif",
      "evolvesTo": "grovyle"
  },
  'torchic': {
      "id": "torchic",
      "pokedexNumber": 255,
      "name": "아차모",
      "nameEn": "Torchic",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 60,
          "defense": 40,
          "spAttack": 70,
          "spDefense": 50,
          "speed": 45
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/255.gif",
      "evolvesTo": "combusken"
  },
  'mudkip': {
      "id": "mudkip",
      "pokedexNumber": 258,
      "name": "물짱이",
      "nameEn": "Mudkip",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 70,
          "defense": 50,
          "spAttack": 50,
          "spDefense": 50,
          "speed": 40
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/258.gif",
      "evolvesTo": "marshtomp"
  },
  'gardevoir': {
      "id": "gardevoir",
      "pokedexNumber": 282,
      "name": "가디안",
      "nameEn": "Gardevoir",
      "types": [
          "psychic",
          "fairy"
      ],
      "baseStats": {
          "hp": 680,
          "attack": 65,
          "defense": 65,
          "spAttack": 125,
          "spDefense": 115,
          "speed": 80
      },
      "baseExp": 259,
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
              "moveId": "moonblast",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/282.gif"
  },
  'salamence': {
      "id": "salamence",
      "pokedexNumber": 373,
      "name": "보만다",
      "nameEn": "Salamence",
      "types": [
          "dragon",
          "flying"
      ],
      "baseStats": {
          "hp": 950,
          "attack": 135,
          "defense": 80,
          "spAttack": 110,
          "spDefense": 80,
          "speed": 100
      },
      "baseExp": 300,
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
              "moveId": "air_slash",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/373.gif"
  },
  'metagross': {
      "id": "metagross",
      "pokedexNumber": 376,
      "name": "메타그로스",
      "nameEn": "Metagross",
      "types": [
          "steel",
          "psychic"
      ],
      "baseStats": {
          "hp": 800,
          "attack": 135,
          "defense": 130,
          "spAttack": 95,
          "spDefense": 90,
          "speed": 70
      },
      "baseExp": 300,
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
              "moveId": "psybeam",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/376.gif"
  },
  'kyogre': {
      "id": "kyogre",
      "pokedexNumber": 382,
      "name": "가이오가",
      "nameEn": "Kyogre",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 100,
          "defense": 90,
          "spAttack": 150,
          "spDefense": 140,
          "speed": 90
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "origin_pulse",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/382.gif",
      "isLegendary": true
  },
  'groudon': {
      "id": "groudon",
      "pokedexNumber": 383,
      "name": "그란돈",
      "nameEn": "Groudon",
      "types": [
          "ground"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 150,
          "defense": 140,
          "spAttack": 100,
          "spDefense": 90,
          "speed": 90
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "precipice_blades",
              "learnLevel": 1
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/383.gif",
      "isLegendary": true
  },
  'rayquaza': {
      "id": "rayquaza",
      "pokedexNumber": 384,
      "name": "레쿠쟈",
      "nameEn": "Rayquaza",
      "types": [
          "dragon",
          "flying"
      ],
      "baseStats": {
          "hp": 1050,
          "attack": 150,
          "defense": 90,
          "spAttack": 150,
          "spDefense": 90,
          "speed": 95
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "air_slash",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/384.gif",
      "isLegendary": true
  },
  'turtwig': {
      "id": "turtwig",
      "pokedexNumber": 387,
      "name": "모부기",
      "nameEn": "Turtwig",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 68,
          "defense": 64,
          "spAttack": 45,
          "spDefense": 55,
          "speed": 31
      },
      "baseExp": 159,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/387.gif"
  },
  'chimchar': {
      "id": "chimchar",
      "pokedexNumber": 390,
      "name": "불꽃숭이",
      "nameEn": "Chimchar",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 440,
          "attack": 58,
          "defense": 44,
          "spAttack": 58,
          "spDefense": 44,
          "speed": 61
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/390.gif"
  },
  'piplup': {
      "id": "piplup",
      "pokedexNumber": 393,
      "name": "팽도리",
      "nameEn": "Piplup",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 530,
          "attack": 51,
          "defense": 53,
          "spAttack": 61,
          "spDefense": 56,
          "speed": 40
      },
      "baseExp": 157,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/393.gif"
  },
  'garchomp': {
      "id": "garchomp",
      "pokedexNumber": 445,
      "name": "한카리아스",
      "nameEn": "Garchomp",
      "types": [
          "dragon",
          "ground"
      ],
      "baseStats": {
          "hp": 1080,
          "attack": 130,
          "defense": 95,
          "spAttack": 80,
          "spDefense": 85,
          "speed": 102
      },
      "baseExp": 300,
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
              "moveId": "earthquake",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/445.gif"
  },
  'lucario': {
      "id": "lucario",
      "pokedexNumber": 448,
      "name": "루카리오",
      "nameEn": "Lucario",
      "types": [
          "fighting",
          "steel"
      ],
      "baseStats": {
          "hp": 700,
          "attack": 110,
          "defense": 70,
          "spAttack": 115,
          "spDefense": 70,
          "speed": 90
      },
      "baseExp": 262,
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
          },
          {
              "moveId": "iron_head",
              "learnLevel": 15
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/448.gif"
  },
  'dialga': {
      "id": "dialga",
      "pokedexNumber": 483,
      "name": "디아루가",
      "nameEn": "Dialga",
      "types": [
          "steel",
          "dragon"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 120,
          "defense": 120,
          "spAttack": 150,
          "spDefense": 100,
          "speed": 90
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "dragon_claw",
              "learnLevel": 15
          },
          {
              "moveId": "roaroftime",
              "learnLevel": 1
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/483.gif",
      "isLegendary": true
  },
  'palkia': {
      "id": "palkia",
      "pokedexNumber": 484,
      "name": "펄기아",
      "nameEn": "Palkia",
      "types": [
          "water",
          "dragon"
      ],
      "baseStats": {
          "hp": 900,
          "attack": 120,
          "defense": 100,
          "spAttack": 150,
          "spDefense": 120,
          "speed": 100
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "dragon_claw",
              "learnLevel": 15
          },
          {
              "moveId": "spacialrend",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/484.gif",
      "isLegendary": true
  },
  'giratina': {
      "id": "giratina",
      "pokedexNumber": 487,
      "name": "기라티나",
      "nameEn": "Giratina",
      "types": [
          "ghost",
          "dragon"
      ],
      "baseStats": {
          "hp": 1500,
          "attack": 100,
          "defense": 120,
          "spAttack": 100,
          "spDefense": 120,
          "speed": 90
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
      "possibleMoves": [
          {
              "moveId": "shadow_ball",
              "learnLevel": 1
          },
          {
              "moveId": "dragon_claw",
              "learnLevel": 15
          },
          {
              "moveId": "shadowforce",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/487.gif",
      "isLegendary": true
  },
  'arceus': {
      "id": "arceus",
      "pokedexNumber": 493,
      "name": "아르세우스",
      "nameEn": "Arceus",
      "types": [
          "normal"
      ],
      "baseStats": {
          "hp": 1200,
          "attack": 120,
          "defense": 120,
          "spAttack": 120,
          "spDefense": 120,
          "speed": 120
      },
      "baseExp": 360,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "judgment",
              "learnLevel": 1
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/493.gif",
      "isLegendary": true
  },
  'victini': {
      "id": "victini",
      "pokedexNumber": 494,
      "name": "비크티니",
      "nameEn": "Victini",
      "types": [
          "psychic",
          "fire"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 100,
          "defense": 100,
          "spAttack": 100,
          "spDefense": 100,
          "speed": 100
      },
      "baseExp": 300,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "ember",
              "learnLevel": 15
          },
          {
              "moveId": "v_create",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/494.gif",
      "isLegendary": true
  },
  'snivy': {
      "id": "snivy",
      "pokedexNumber": 495,
      "name": "주리비얀",
      "nameEn": "Snivy",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 45,
          "defense": 55,
          "spAttack": 45,
          "spDefense": 55,
          "speed": 63
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/495.gif"
  },
  'tepig': {
      "id": "tepig",
      "pokedexNumber": 498,
      "name": "뚜꾸리",
      "nameEn": "Tepig",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 650,
          "attack": 63,
          "defense": 45,
          "spAttack": 45,
          "spDefense": 45,
          "speed": 45
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/498.gif"
  },
  'oshawott': {
      "id": "oshawott",
      "pokedexNumber": 501,
      "name": "수둥이",
      "nameEn": "Oshawott",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 55,
          "defense": 45,
          "spAttack": 63,
          "spDefense": 45,
          "speed": 45
      },
      "baseExp": 154,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/501.gif"
  },
  'zoroark': {
      "id": "zoroark",
      "pokedexNumber": 571,
      "name": "조로아크",
      "nameEn": "Zoroark",
      "types": [
          "dark"
      ],
      "baseStats": {
          "hp": 600,
          "attack": 105,
          "defense": 60,
          "spAttack": 120,
          "spDefense": 60,
          "speed": 105
      },
      "baseExp": 255,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
      "possibleMoves": [
          {
              "moveId": "dark_pulse",
              "learnLevel": 1
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/571.gif"
  },
  'hydreigon': {
      "id": "hydreigon",
      "pokedexNumber": 635,
      "name": "삼삼드라",
      "nameEn": "Hydreigon",
      "types": [
          "dark",
          "dragon"
      ],
      "baseStats": {
          "hp": 920,
          "attack": 105,
          "defense": 90,
          "spAttack": 125,
          "spDefense": 90,
          "speed": 98
      },
      "baseExp": 300,
      "evolutionStage": 3,
      "evolutionStagesTotal": 3,
      "cost": 9,
      "possibleMoves": [
          {
              "moveId": "dark_pulse",
              "learnLevel": 1
          },
          {
              "moveId": "dragon_claw",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/635.gif"
  },
  'reshiram': {
      "id": "reshiram",
      "pokedexNumber": 643,
      "name": "레시라무",
      "nameEn": "Reshiram",
      "types": [
          "dragon",
          "fire"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 120,
          "defense": 100,
          "spAttack": 150,
          "spDefense": 120,
          "speed": 90
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "ember",
              "learnLevel": 15
          },
          {
              "moveId": "blue_flare",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/643.gif",
      "isLegendary": true
  },
  'zekrom': {
      "id": "zekrom",
      "pokedexNumber": 644,
      "name": "제크로무",
      "nameEn": "Zekrom",
      "types": [
          "dragon",
          "electric"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 150,
          "defense": 120,
          "spAttack": 120,
          "spDefense": 100,
          "speed": 90
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "thundershock",
              "learnLevel": 15
          },
          {
              "moveId": "bolt_strike",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/644.gif",
      "isLegendary": true
  },
  'kyurem': {
      "id": "kyurem",
      "pokedexNumber": 646,
      "name": "큐레무",
      "nameEn": "Kyurem",
      "types": [
          "dragon",
          "ice"
      ],
      "baseStats": {
          "hp": 1250,
          "attack": 130,
          "defense": 90,
          "spAttack": 130,
          "spDefense": 90,
          "speed": 95
      },
      "baseExp": 330,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "ice_beam",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/646.gif",
      "isLegendary": true
  },
  'chespin': {
      "id": "chespin",
      "pokedexNumber": 650,
      "name": "도치마론",
      "nameEn": "Chespin",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 560,
          "attack": 61,
          "defense": 65,
          "spAttack": 48,
          "spDefense": 45,
          "speed": 38
      },
      "baseExp": 156,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/650.gif"
  },
  'fennekin': {
      "id": "fennekin",
      "pokedexNumber": 653,
      "name": "푸호꼬",
      "nameEn": "Fennekin",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 45,
          "defense": 40,
          "spAttack": 62,
          "spDefense": 60,
          "speed": 60
      },
      "baseExp": 153,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/653.gif"
  },
  'greninja': {
      "id": "greninja",
      "pokedexNumber": 658,
      "name": "개굴닌자",
      "nameEn": "Greninja",
      "types": [
          "water",
          "dark"
      ],
      "baseStats": {
          "hp": 720,
          "attack": 95,
          "defense": 67,
          "spAttack": 103,
          "spDefense": 71,
          "speed": 122
      },
      "baseExp": 265,
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
              "moveId": "dark_pulse",
              "learnLevel": 15
          },
          {
              "moveId": "water_shuriken",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/658.gif"
  },
  'sylveon': {
      "id": "sylveon",
      "pokedexNumber": 700,
      "name": "님피아",
      "nameEn": "Sylveon",
      "types": [
          "fairy"
      ],
      "baseStats": {
          "hp": 950,
          "attack": 65,
          "defense": 65,
          "spAttack": 110,
          "spDefense": 130,
          "speed": 60
      },
      "baseExp": 262,
      "evolutionStage": 2,
      "evolutionStagesTotal": 2,
      "cost": 6,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/700.gif"
  },
  'xerneas': {
      "id": "xerneas",
      "pokedexNumber": 716,
      "name": "제르네아스",
      "nameEn": "Xerneas",
      "types": [
          "fairy"
      ],
      "baseStats": {
          "hp": 1260,
          "attack": 131,
          "defense": 95,
          "spAttack": 131,
          "spDefense": 98,
          "speed": 99
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "geomancy",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/716.gif",
      "isLegendary": true
  },
  'yveltal': {
      "id": "yveltal",
      "pokedexNumber": 717,
      "name": "이벨타르",
      "nameEn": "Yveltal",
      "types": [
          "dark",
          "flying"
      ],
      "baseStats": {
          "hp": 1260,
          "attack": 131,
          "defense": 95,
          "spAttack": 131,
          "spDefense": 98,
          "speed": 99
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
      "possibleMoves": [
          {
              "moveId": "dark_pulse",
              "learnLevel": 1
          },
          {
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "oblivion_wing",
              "learnLevel": 1
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/717.gif",
      "isLegendary": true
  },
  'zygarde': {
      "id": "zygarde",
      "pokedexNumber": 718,
      "name": "지가르데",
      "nameEn": "Zygarde",
      "types": [
          "dragon",
          "ground"
      ],
      "baseStats": {
          "hp": 1080,
          "attack": 100,
          "defense": 121,
          "spAttack": 81,
          "spDefense": 95,
          "speed": 95
      },
      "baseExp": 300,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/718.gif",
      "isLegendary": true
  },
  'rowlet': {
      "id": "rowlet",
      "pokedexNumber": 722,
      "name": "나몰빼미",
      "nameEn": "Rowlet",
      "types": [
          "grass",
          "flying"
      ],
      "baseStats": {
          "hp": 680,
          "attack": 55,
          "defense": 55,
          "spAttack": 50,
          "spDefense": 50,
          "speed": 42
      },
      "baseExp": 160,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "moveId": "air_slash",
              "learnLevel": 15
          },
          {
              "moveId": "solar_beam",
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/722.gif"
  },
  'litten': {
      "id": "litten",
      "pokedexNumber": 725,
      "name": "냐오불",
      "nameEn": "Litten",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 450,
          "attack": 65,
          "defense": 40,
          "spAttack": 60,
          "spDefense": 40,
          "speed": 70
      },
      "baseExp": 160,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/725.gif"
  },
  'popplio': {
      "id": "popplio",
      "pokedexNumber": 728,
      "name": "누리공",
      "nameEn": "Popplio",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 54,
          "defense": 54,
          "spAttack": 66,
          "spDefense": 56,
          "speed": 40
      },
      "baseExp": 160,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/728.gif"
  },
  'mimikyu': {
      "id": "mimikyu",
      "pokedexNumber": 778,
      "name": "따라큐",
      "nameEn": "Mimikyu",
      "types": [
          "ghost",
          "fairy"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 90,
          "defense": 80,
          "spAttack": 50,
          "spDefense": 105,
          "speed": 96
      },
      "baseExp": 238,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 3,
      "possibleMoves": [
          {
              "moveId": "shadow_ball",
              "learnLevel": 1
          },
          {
              "moveId": "moonblast",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/778.gif"
  },
  'solgaleo': {
      "id": "solgaleo",
      "pokedexNumber": 791,
      "name": "솔가레오",
      "nameEn": "Solgaleo",
      "types": [
          "psychic",
          "steel"
      ],
      "baseStats": {
          "hp": 1370,
          "attack": 137,
          "defense": 107,
          "spAttack": 113,
          "spDefense": 89,
          "speed": 97
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "iron_head",
              "learnLevel": 15
          },
          {
              "moveId": "sunsteel_strike",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/791.gif",
      "isLegendary": true
  },
  'lunala': {
      "id": "lunala",
      "pokedexNumber": 792,
      "name": "루나아라",
      "nameEn": "Lunala",
      "types": [
          "psychic",
          "ghost"
      ],
      "baseStats": {
          "hp": 1370,
          "attack": 113,
          "defense": 89,
          "spAttack": 137,
          "spDefense": 107,
          "speed": 97
      },
      "baseExp": 340,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
          },
          {
              "moveId": "moongeist_beam",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/792.gif",
      "isLegendary": true
  },
  'necrozma': {
      "id": "necrozma",
      "pokedexNumber": 800,
      "name": "네크로즈마",
      "nameEn": "Necrozma",
      "types": [
          "psychic"
      ],
      "baseStats": {
          "hp": 970,
          "attack": 107,
          "defense": 109,
          "spAttack": 127,
          "spDefense": 89,
          "speed": 79
      },
      "baseExp": 304,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/800.gif",
      "isLegendary": true
  },
  'grookey': {
      "id": "grookey",
      "pokedexNumber": 810,
      "name": "흥나숭",
      "nameEn": "Grookey",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 65,
          "defense": 50,
          "spAttack": 40,
          "spDefense": 40,
          "speed": 65
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/810.gif"
  },
  'scorbunny': {
      "id": "scorbunny",
      "pokedexNumber": 813,
      "name": "염버니",
      "nameEn": "Scorbunny",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 71,
          "defense": 40,
          "spAttack": 40,
          "spDefense": 40,
          "speed": 69
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/813.gif"
  },
  'sobble': {
      "id": "sobble",
      "pokedexNumber": 816,
      "name": "울머기",
      "nameEn": "Sobble",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 500,
          "attack": 40,
          "defense": 40,
          "spAttack": 70,
          "spDefense": 40,
          "speed": 70
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/816.gif"
  },
  'corviknight': {
      "id": "corviknight",
      "pokedexNumber": 823,
      "name": "아머까오",
      "nameEn": "Corviknight",
      "types": [
          "flying",
          "steel"
      ],
      "baseStats": {
          "hp": 980,
          "attack": 87,
          "defense": 105,
          "spAttack": 53,
          "spDefense": 85,
          "speed": 67
      },
      "baseExp": 247,
      "evolutionStage": 3,
      "evolutionStagesTotal": 3,
      "cost": 9,
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
              "moveId": "iron_head",
              "learnLevel": 15
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/823.gif"
  },
  'zacian': {
      "id": "zacian",
      "pokedexNumber": 888,
      "name": "자시안",
      "nameEn": "Zacian",
      "types": [
          "fairy",
          "steel"
      ],
      "baseStats": {
          "hp": 920,
          "attack": 130,
          "defense": 115,
          "spAttack": 80,
          "spDefense": 115,
          "speed": 138
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "iron_head",
              "learnLevel": 15
          },
          {
              "moveId": "behemoth_blade",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/888.gif",
      "isLegendary": true
  },
  'zamazenta': {
      "id": "zamazenta",
      "pokedexNumber": 889,
      "name": "자마젠타",
      "nameEn": "Zamazenta",
      "types": [
          "fighting",
          "steel"
      ],
      "baseStats": {
          "hp": 920,
          "attack": 130,
          "defense": 115,
          "spAttack": 80,
          "spDefense": 115,
          "speed": 138
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "iron_head",
              "learnLevel": 15
          },
          {
              "moveId": "dauntless_shield",
              "learnLevel": 1
          }
      ],
      "range": 1,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/889.gif",
      "isLegendary": true
  },
  'eternatus': {
      "id": "eternatus",
      "pokedexNumber": 890,
      "name": "무한다이노",
      "nameEn": "Eternatus",
      "types": [
          "poison",
          "dragon"
      ],
      "baseStats": {
          "hp": 1400,
          "attack": 85,
          "defense": 95,
          "spAttack": 145,
          "spDefense": 95,
          "speed": 130
      },
      "baseExp": 345,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "dynamax_cannon",
              "learnLevel": 1
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/890.gif",
      "isLegendary": true
  },
  'sprigatito': {
      "id": "sprigatito",
      "pokedexNumber": 906,
      "name": "나오하",
      "nameEn": "Sprigatito",
      "types": [
          "grass"
      ],
      "baseStats": {
          "hp": 400,
          "attack": 61,
          "defense": 54,
          "spAttack": 45,
          "spDefense": 45,
          "speed": 65
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/906.gif"
  },
  'fuecoco': {
      "id": "fuecoco",
      "pokedexNumber": 909,
      "name": "뜨아거",
      "nameEn": "Fuecoco",
      "types": [
          "fire"
      ],
      "baseStats": {
          "hp": 670,
          "attack": 45,
          "defense": 59,
          "spAttack": 63,
          "spDefense": 40,
          "speed": 36
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/909.gif"
  },
  'quaxly': {
      "id": "quaxly",
      "pokedexNumber": 912,
      "name": "꾸꾸아",
      "nameEn": "Quaxly",
      "types": [
          "water"
      ],
      "baseStats": {
          "hp": 550,
          "attack": 65,
          "defense": 45,
          "spAttack": 50,
          "spDefense": 45,
          "speed": 50
      },
      "baseExp": 155,
      "evolutionStage": 1,
      "evolutionStagesTotal": 3,
      "cost": 1,
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
              "learnLevel": 25
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/912.gif"
  },
  'tinkaton': {
      "id": "tinkaton",
      "pokedexNumber": 959,
      "name": "두드짱마귀",
      "nameEn": "Tinkaton",
      "types": [
          "fairy",
          "steel"
      ],
      "baseStats": {
          "hp": 850,
          "attack": 75,
          "defense": 77,
          "spAttack": 70,
          "spDefense": 105,
          "speed": 94
      },
      "baseExp": 253,
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
              "moveId": "iron_head",
              "learnLevel": 15
          },
          {
              "moveId": "gigaton_hammer",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/959.gif"
  },
  'koraidon': {
      "id": "koraidon",
      "pokedexNumber": 1007,
      "name": "코라이돈",
      "nameEn": "Koraidon",
      "types": [
          "fighting",
          "dragon"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 135,
          "defense": 115,
          "spAttack": 85,
          "spDefense": 100,
          "speed": 135
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "dragon_claw",
              "learnLevel": 15
          },
          {
              "moveId": "collision_course",
              "learnLevel": 1
          }
      ],
      "range": 2,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1007.gif",
      "isLegendary": true
  },
  'miraidon': {
      "id": "miraidon",
      "pokedexNumber": 1008,
      "name": "미라이돈",
      "nameEn": "Miraidon",
      "types": [
          "electric",
          "dragon"
      ],
      "baseStats": {
          "hp": 1000,
          "attack": 85,
          "defense": 100,
          "spAttack": 135,
          "spDefense": 115,
          "speed": 135
      },
      "baseExp": 335,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "dragon_claw",
              "learnLevel": 15
          },
          {
              "moveId": "electro_drift",
              "learnLevel": 1
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1008.gif",
      "isLegendary": true
  },
  'pecharunt': {
      "id": "pecharunt",
      "pokedexNumber": 1025,
      "name": "복숭악동",
      "nameEn": "Pecharunt",
      "types": [
          "poison",
          "ghost"
      ],
      "baseStats": {
          "hp": 880,
          "attack": 88,
          "defense": 160,
          "spAttack": 88,
          "spDefense": 88,
          "speed": 88
      },
      "baseExp": 300,
      "evolutionStage": 1,
      "evolutionStagesTotal": 1,
      "cost": 10,
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
              "moveId": "shadow_ball",
              "learnLevel": 15
          }
      ],
      "range": 3,
      "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1025.gif",
      "isLegendary": true
  },
  'bayleef': {
    "id": "bayleef",
    "pokedexNumber": 153,
    "name": "베이리프",
    "nameEn": "Bayleef",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 62,
      "defense": 80,
      "spAttack": 63,
      "spDefense": 80,
      "speed": 60
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/153.gif",
    "evolvesTo": "meganium"
  },
  'meganium': {
    "id": "meganium",
    "pokedexNumber": 154,
    "name": "메가니움",
    "nameEn": "Meganium",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 82,
      "defense": 100,
      "spAttack": 83,
      "spDefense": 100,
      "speed": 80
    },
    "baseExp": 236,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "energy_ball",
        "learnLevel": 1
      },
      {
        "moveId": "giga_drain",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/154.gif"
  },
  'quilava': {
    "id": "quilava",
    "pokedexNumber": 156,
    "name": "마그케인",
    "nameEn": "Quilava",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 580,
      "attack": 64,
      "defense": 58,
      "spAttack": 80,
      "spDefense": 65,
      "speed": 80
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "learnLevel": 25
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/156.gif",
    "evolvesTo": "typhlosion"
  },
  'typhlosion': {
    "id": "typhlosion",
    "pokedexNumber": 157,
    "name": "블레이범",
    "nameEn": "Typhlosion",
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 780,
      "attack": 84,
      "defense": 78,
      "spAttack": 109,
      "spDefense": 85,
      "speed": 100
    },
    "baseExp": 240,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "flamethrower",
        "learnLevel": 1
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 8
      },
      {
        "moveId": "flare_blitz",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/157.gif"
  },
  'croconaw': {
    "id": "croconaw",
    "pokedexNumber": 159,
    "name": "엘리게이",
    "nameEn": "Croconaw",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 80,
      "defense": 80,
      "spAttack": 59,
      "spDefense": 63,
      "speed": 58
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "moveId": "waterfall",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/159.gif",
    "evolvesTo": "feraligatr"
  },
  'feraligatr': {
    "id": "feraligatr",
    "pokedexNumber": 160,
    "name": "장크로다일",
    "nameEn": "Feraligatr",
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 850,
      "attack": 105,
      "defense": 100,
      "spAttack": 79,
      "spDefense": 83,
      "speed": 78
    },
    "baseExp": 239,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "waterfall",
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
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/160.gif"
  },
  'mareep': {
    "id": "mareep",
    "pokedexNumber": 179,
    "name": "메리프",
    "nameEn": "Mareep",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 40,
      "defense": 40,
      "spAttack": 65,
      "spDefense": 45,
      "speed": 35
    },
    "baseExp": 56,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "thundershock",
        "learnLevel": 1
      },
      {
        "moveId": "thunderbolt",
        "learnLevel": 8
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/179.gif",
    "evolvesTo": "flaaffy"
  },
  'flaaffy': {
    "id": "flaaffy",
    "pokedexNumber": 180,
    "name": "보송송",
    "nameEn": "Flaaffy",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 55,
      "defense": 55,
      "spAttack": 80,
      "spDefense": 60,
      "speed": 45
    },
    "baseExp": 128,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/180.gif",
    "evolvesTo": "ampharos"
  },
  'ampharos': {
    "id": "ampharos",
    "pokedexNumber": 181,
    "name": "전룡",
    "nameEn": "Ampharos",
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 75,
      "defense": 85,
      "spAttack": 115,
      "spDefense": 90,
      "speed": 55
    },
    "baseExp": 230,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "thunderbolt",
        "learnLevel": 1
      },
      {
        "moveId": "thunder",
        "learnLevel": 8
      },
      {
        "moveId": "flash_cannon",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/181.gif"
  },
  'wooper': {
    "id": "wooper",
    "pokedexNumber": 194,
    "name": "우파",
    "nameEn": "Wooper",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 550,
      "attack": 45,
      "defense": 45,
      "spAttack": 25,
      "spDefense": 25,
      "speed": 15
    },
    "baseExp": 42,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "water_gun",
        "learnLevel": 1
      },
      {
        "moveId": "toxic",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/194.gif",
    "evolvesTo": "quagsire"
  },
  'quagsire': {
    "id": "quagsire",
    "pokedexNumber": 195,
    "name": "누오",
    "nameEn": "Quagsire",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 950,
      "attack": 85,
      "defense": 85,
      "spAttack": 65,
      "spDefense": 65,
      "speed": 35
    },
    "baseExp": 151,
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
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/195.gif"
  },
  'houndour': {
    "id": "houndour",
    "pokedexNumber": 228,
    "name": "델빌",
    "nameEn": "Houndour",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 60,
      "defense": 30,
      "spAttack": 80,
      "spDefense": 50,
      "speed": 65
    },
    "baseExp": 66,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 8
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/228.gif",
    "evolvesTo": "houndoom"
  },
  'houndoom': {
    "id": "houndoom",
    "pokedexNumber": 229,
    "name": "헬가",
    "nameEn": "Houndoom",
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 750,
      "attack": 90,
      "defense": 50,
      "spAttack": 110,
      "spDefense": 80,
      "speed": 95
    },
    "baseExp": 175,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "flamethrower",
        "learnLevel": 1
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/229.gif"
  },
  'phanpy': {
    "id": "phanpy",
    "pokedexNumber": 231,
    "name": "코코리",
    "nameEn": "Phanpy",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 60,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 40
    },
    "baseExp": 66,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "tackle",
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
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/231.gif",
    "evolvesTo": "donphan"
  },
  'donphan': {
    "id": "donphan",
    "pokedexNumber": 232,
    "name": "코리갑",
    "nameEn": "Donphan",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 900,
      "attack": 120,
      "defense": 120,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 50
    },
    "baseExp": 175,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "earthquake",
        "learnLevel": 1
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 8
      },
      {
        "moveId": "bonemerang",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/232.gif"
  },
  'larvitar': {
    "id": "larvitar",
    "pokedexNumber": 246,
    "name": "애버라스",
    "nameEn": "Larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 64,
      "defense": 50,
      "spAttack": 45,
      "spDefense": 50,
      "speed": 41
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/246.gif",
    "evolvesTo": "pupitar"
  },
  'pupitar': {
    "id": "pupitar",
    "pokedexNumber": 247,
    "name": "데기라스",
    "nameEn": "Pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 84,
      "defense": 70,
      "spAttack": 65,
      "spDefense": 70,
      "speed": 51
    },
    "baseExp": 144,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "stone_edge",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      },
      {
        "moveId": "dark_pulse",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/247.gif",
    "evolvesTo": "tyranitar"
  },
  'grovyle': {
    "id": "grovyle",
    "pokedexNumber": 253,
    "name": "나무돌이",
    "nameEn": "Grovyle",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 65,
      "defense": 45,
      "spAttack": 85,
      "spDefense": 65,
      "speed": 95
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/253.gif",
    "evolvesTo": "sceptile"
  },
  'sceptile': {
    "id": "sceptile",
    "pokedexNumber": 254,
    "name": "나무킹",
    "nameEn": "Sceptile",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 85,
      "defense": 65,
      "spAttack": 105,
      "spDefense": 85,
      "speed": 120
    },
    "baseExp": 239,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "energy_ball",
        "learnLevel": 1
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 8
      },
      {
        "moveId": "giga_drain",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif"
  },
  'combusken': {
    "id": "combusken",
    "pokedexNumber": 256,
    "name": "영치코",
    "nameEn": "Combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 85,
      "defense": 60,
      "spAttack": 85,
      "spDefense": 60,
      "speed": 55
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "ember",
        "learnLevel": 1
      },
      {
        "moveId": "mach_punch",
        "learnLevel": 8
      },
      {
        "moveId": "flamethrower",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/256.gif",
    "evolvesTo": "blaziken"
  },
  'blaziken': {
    "id": "blaziken",
    "pokedexNumber": 257,
    "name": "번치코",
    "nameEn": "Blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 120,
      "defense": 70,
      "spAttack": 110,
      "spDefense": 70,
      "speed": 80
    },
    "baseExp": 239,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "close_combat",
        "learnLevel": 1
      },
      {
        "moveId": "flare_blitz",
        "learnLevel": 8
      },
      {
        "moveId": "fire_blast",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/257.gif"
  },
  'marshtomp': {
    "id": "marshtomp",
    "pokedexNumber": 259,
    "name": "늪짱이",
    "nameEn": "Marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 85,
      "defense": 70,
      "spAttack": 60,
      "spDefense": 70,
      "speed": 50
    },
    "baseExp": 142,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/259.gif",
    "evolvesTo": "swampert"
  },
  'swampert': {
    "id": "swampert",
    "pokedexNumber": 260,
    "name": "대짱이",
    "nameEn": "Swampert",
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 1000,
      "attack": 110,
      "defense": 90,
      "spAttack": 85,
      "spDefense": 90,
      "speed": 60
    },
    "baseExp": 241,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "surf",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      },
      {
        "moveId": "hydro_pump",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/260.gif"
  },
  'ralts': {
    "id": "ralts",
    "pokedexNumber": 280,
    "name": "랄토스",
    "nameEn": "Ralts",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 280,
      "attack": 25,
      "defense": 25,
      "spAttack": 45,
      "spDefense": 35,
      "speed": 40
    },
    "baseExp": 40,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
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
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/280.gif",
    "evolvesTo": "kirlia"
  },
  'kirlia': {
    "id": "kirlia",
    "pokedexNumber": 281,
    "name": "킬리아",
    "nameEn": "Kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseStats": {
      "hp": 380,
      "attack": 35,
      "defense": 35,
      "spAttack": 65,
      "spDefense": 55,
      "speed": 50
    },
    "baseExp": 97,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "moveId": "moonblast",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/281.gif",
    "evolvesTo": "gardevoir"
  },
  'shroomish': {
    "id": "shroomish",
    "pokedexNumber": 285,
    "name": "버섯꼬",
    "nameEn": "Shroomish",
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 40,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 60,
      "speed": 35
    },
    "baseExp": 59,
    "evolutionStage": 1,
    "evolutionStagesTotal": 2,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "vine_whip",
        "learnLevel": 1
      },
      {
        "moveId": "giga_drain",
        "learnLevel": 8
      },
      {
        "moveId": "solar_beam",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/285.gif",
    "evolvesTo": "breloom"
  },
  'breloom': {
    "id": "breloom",
    "pokedexNumber": 286,
    "name": "버섯모",
    "nameEn": "Breloom",
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 130,
      "defense": 80,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 70
    },
    "baseExp": 161,
    "evolutionStage": 2,
    "evolutionStagesTotal": 2,
    "cost": 6,
    "possibleMoves": [
      {
        "moveId": "mach_punch",
        "learnLevel": 1
      },
      {
        "moveId": "giga_drain",
        "learnLevel": 8
      },
      {
        "moveId": "close_combat",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/286.gif"
  },
  'aron': {
    "id": "aron",
    "pokedexNumber": 304,
    "name": "가보리",
    "nameEn": "Aron",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 70,
      "defense": 100,
      "spAttack": 40,
      "spDefense": 40,
      "speed": 30
    },
    "baseExp": 66,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/304.gif",
    "evolvesTo": "lairon"
  },
  'lairon': {
    "id": "lairon",
    "pokedexNumber": 305,
    "name": "갱도라",
    "nameEn": "Lairon",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 90,
      "defense": 140,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 40
    },
    "baseExp": 151,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/305.gif",
    "evolvesTo": "aggron"
  },
  'aggron': {
    "id": "aggron",
    "pokedexNumber": 306,
    "name": "보스로라",
    "nameEn": "Aggron",
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 700,
      "attack": 110,
      "defense": 180,
      "spAttack": 60,
      "spDefense": 60,
      "speed": 50
    },
    "baseExp": 239,
    "evolutionStage": 3,
    "evolutionStagesTotal": 3,
    "cost": 9,
    "possibleMoves": [
      {
        "moveId": "iron_head",
        "learnLevel": 1
      },
      {
        "moveId": "stone_edge",
        "learnLevel": 8
      },
      {
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/306.gif"
  },
  'trapinch': {
    "id": "trapinch",
    "pokedexNumber": 328,
    "name": "톱치",
    "nameEn": "Trapinch",
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 100,
      "defense": 45,
      "spAttack": 45,
      "spDefense": 45,
      "speed": 10
    },
    "baseExp": 58,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 1,
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
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/328.gif",
    "evolvesTo": "vibrava"
  },
  'vibrava': {
    "id": "vibrava",
    "pokedexNumber": 329,
    "name": "비브라바",
    "nameEn": "Vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 500,
      "attack": 70,
      "defense": 50,
      "spAttack": 50,
      "spDefense": 50,
      "speed": 70
    },
    "baseExp": 119,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
    "possibleMoves": [
      {
        "moveId": "dragon_claw",
        "learnLevel": 1
      },
      {
        "moveId": "earthquake",
        "learnLevel": 8
      },
      {
        "moveId": "air_slash",
        "learnLevel": 15
      }
    ],
    "range": 3,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/329.gif",
    "evolvesTo": "flygon"
  },
  'flygon': {
    "id": "flygon",
    "pokedexNumber": 330,
    "name": "플라이곤",
    "nameEn": "Flygon",
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 800,
      "attack": 100,
      "defense": 80,
      "spAttack": 80,
      "spDefense": 80,
      "speed": 100
    },
    "baseExp": 234,
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
        "moveId": "earthquake",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/330.gif"
  },
  'bagon': {
    "id": "bagon",
    "pokedexNumber": 371,
    "name": "아공이",
    "nameEn": "Bagon",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 450,
      "attack": 75,
      "defense": 60,
      "spAttack": 40,
      "spDefense": 30,
      "speed": 50
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 2,
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
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/371.gif",
    "evolvesTo": "shelgon"
  },
  'shelgon': {
    "id": "shelgon",
    "pokedexNumber": 372,
    "name": "쉘곤",
    "nameEn": "Shelgon",
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 650,
      "attack": 95,
      "defense": 100,
      "spAttack": 60,
      "spDefense": 50,
      "speed": 50
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
    "cost": 3,
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
        "moveId": "iron_head",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/372.gif",
    "evolvesTo": "salamence"
  },
  'beldum': {
    "id": "beldum",
    "pokedexNumber": 374,
    "name": "메탕",
    "nameEn": "Beldum",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 400,
      "attack": 55,
      "defense": 80,
      "spAttack": 35,
      "spDefense": 60,
      "speed": 30
    },
    "baseExp": 60,
    "evolutionStage": 1,
    "evolutionStagesTotal": 3,
    "cost": 2,
    "possibleMoves": [
      {
        "moveId": "tackle",
        "learnLevel": 1
      },
      {
        "moveId": "iron_head",
        "learnLevel": 8
      },
      {
        "moveId": "psybeam",
        "learnLevel": 15
      }
    ],
    "range": 1,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/374.gif",
    "evolvesTo": "metang"
  },
  'metang': {
    "id": "metang",
    "pokedexNumber": 375,
    "name": "메탕구",
    "nameEn": "Metang",
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 600,
      "attack": 75,
      "defense": 100,
      "spAttack": 55,
      "spDefense": 80,
      "speed": 50
    },
    "baseExp": 147,
    "evolutionStage": 2,
    "evolutionStagesTotal": 3,
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
        "moveId": "psybeam",
        "learnLevel": 15
      }
    ],
    "range": 2,
    "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/375.gif",
    "evolvesTo": "metagross"
  },
};

export const SHOP_POOL_TIER_BASE: string[] = [
  'abra',
  'bulbasaur',
  'caterpie',
  'charmander',
  'chespin',
  'chikorita',
  'chimchar',
  'cyndaquil',
  'ditto',
  'dratini',
  'eevee',
  'fennekin',
  'fuecoco',
  'gastly',
  'aron',
  'bagon',
  'beldum',
  'houndour',
  'larvitar',
  'mareep',
  'phanpy',
  'ralts',
  'shroomish',
  'trapinch',
  'wooper',
  'grookey',
  'growlithe',
  'heracross',
  'ho_oh',
  'jigglypuff',
  'lapras',
  'litten',
  'machop',
  'magikarp',
  'meowth',
  'mimikyu',
  'mudkip',
  'onix',
  'oshawott',
  'pidgey',
  'pikachu',
  'piplup',
  'popplio',
  'psyduck',
  'quaxly',
  'rattata',
  'rowlet',
  'scorbunny',
  'snivy',
  'snorlax',
  'sobble',
  'sprigatito',
  'squirtle',
  'tepig',
  'torchic',
  'totodile',
  'treecko',
  'turtwig',
  'weedle',
];

export const SHOP_POOL_LEGENDARIES: string[] = [
  'arceus',
  'articuno',
  'celebi',
  'dialga',
  'eternatus',
  'giratina',
  'groudon',
  'koraidon',
  'kyogre',
  'kyurem',
  'lugia',
  'lunala',
  'mew',
  'mewtwo',
  'miraidon',
  'moltres',
  'necrozma',
  'palkia',
  'pecharunt',
  'rayquaza',
  'reshiram',
  'solgaleo',
  'victini',
  'xerneas',
  'yveltal',
  'zacian',
  'zamazenta',
  'zapdos',
  'zekrom',
  'zygarde',
];
