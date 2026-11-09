import json, re

with open('public/parsed_pokemon.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Helper to map moves according to primary and secondary types
TYPE_MOVES = {
    'normal': ['tackle', 'hyper_beam', 'swords_dance'],
    'fire': ['ember', 'flamethrower', 'fire_blast', 'flare_blitz'],
    'water': ['water_gun', 'surf', 'hydro_pump', 'waterfall'],
    'grass': ['vine_whip', 'energy_ball', 'solar_beam', 'giga_drain'],
    'electric': ['thundershock', 'thunderbolt', 'thunder', 'volt_tackle'],
    'ice': ['ice_beam', 'blizzard'],
    'fighting': ['mach_punch', 'close_combat'],
    'poison': ['sludge_bomb', 'toxic'],
    'ground': ['earthquake', 'bonemerang'],
    'flying': ['air_slash', 'brave_bird'],
    'psychic': ['psybeam', 'psychic'],
    'bug': ['x_scissor', 'bug_buzz'],
    'rock': ['stone_edge'],
    'ghost': ['shadow_ball'],
    'dragon': ['dragon_claw', 'draco_meteor'],
    'dark': ['dark_pulse'],
    'steel': ['iron_head', 'flash_cannon'],
    'fairy': ['moonblast', 'play_rough']
}

# Specific signature moves
SIGNATURE_MOVES = {
    'arceus': 'judgment',
    'greninja': 'water_shuriken',
    'tinkaton': 'gigaton_hammer',
    'koraidon': 'collision_course',
    'miraidon': 'electro_drift',
    'solgaleo': 'sunsteel_strike',
    'lunala': 'moongeist_beam',
    'lugia': 'aeroblast',
    'ho-oh': 'sacred_fire',
    'dialga': 'roaroftime',
    'palkia': 'spacialrend',
    'giratina': 'shadowforce',
    'reshiram': 'blue_flare',
    'zekrom': 'bolt_strike',
    'xerneas': 'geomancy',
    'yveltal': 'oblivion_wing',
    'zacian': 'behemoth_blade',
    'zamazenta': 'dauntless_shield',
    'eternatus': 'dynamax_cannon',
    'celebi': 'seed_flare',
    'victini': 'v_create',
    'kyogre': 'origin_pulse',
    'groudon': 'precipice_blades'
}

# Known evolution links
EVOLUTIONS = {
    'bulbasaur': 'ivysaur',
    'ivysaur': 'venusaur',
    'charmander': 'charmeleon',
    'charmeleon': 'charizard',
    'squirtle': 'wartortle',
    'wartortle': 'blastoise',
    'caterpie': 'metapod',
    'metapod': 'butterfree',
    'weedle': 'kakuna',
    'kakuna': 'beedrill',
    'pidgey': 'pidgeotto',
    'pidgeotto': 'pidgeot',
    'rattata': 'raticate',
    'pikachu': 'raichu',
    'jigglypuff': 'wigglytuff',
    'meowth': 'persian',
    'psyduck': 'golduck',
    'growlithe': 'arcanine',
    'abra': 'kadabra',
    'kadabra': 'alakazam',
    'machop': 'machoke',
    'machoke': 'machamp',
    'gastly': 'haunter',
    'haunter': 'gengar',
    'magikarp': 'gyarados',
    'eevee': 'vaporeon',
    'dratini': 'dragonair',
    'dragonair': 'dragonite',
}

TRADE_EVOS = {'haunter', 'kadabra', 'machoke', 'graveler'}

LEGENDARIES = {
    'articuno', 'zapdos', 'moltres', 'mewtwo', 'mew',
    'lugia', 'ho-oh', 'celebi', 'kyogre', 'groudon', 'rayquaza',
    'dialga', 'palkia', 'giratina', 'arceus', 'victini',
    'reshiram', 'zekrom', 'kyurem', 'xerneas', 'yveltal', 'zygarde',
    'solgaleo', 'lunala', 'necrozma', 'zacian', 'zamazenta', 'eternatus',
    'koraidon', 'miraidon', 'pecharunt'
}

THREE_STAGE_BASES = {'bulbasaur', 'charmander', 'squirtle', 'caterpie', 'weedle', 'pidgey', 'abra', 'machop', 'gastly', 'dratini', 'chikorita', 'cyndaquil', 'totodile', 'treecko', 'torchic', 'mudkip', 'turtwig', 'chimchar', 'piplup', 'snivy', 'tepig', 'oshawott', 'chespin', 'fennekin', 'rowlet', 'litten', 'popplio', 'grookey', 'scorbunny', 'sobble', 'sprigatito', 'fuecoco', 'quaxly'}
THREE_STAGE_MIDS = {'ivysaur', 'charmeleon', 'wartortle', 'metapod', 'kakuna', 'pidgeotto', 'kadabra', 'machoke', 'haunter', 'dragonair'}
THREE_STAGE_FINALS = {'venusaur', 'charizard', 'blastoise', 'butterfree', 'beedrill', 'pidgeot', 'alakazam', 'machamp', 'gengar', 'dragonite', 'tyranitar', 'gardevoir', 'salamence', 'metagross', 'garchomp', 'hydreigon', 'greninja', 'corviknight', 'tinkaton'}

TWO_STAGE_BASES = {'rattata', 'pikachu', 'jigglypuff', 'meowth', 'psyduck', 'growlithe', 'magikarp', 'eevee'}
TWO_STAGE_FINALS = {'raticate', 'raichu', 'wigglytuff', 'persian', 'golduck', 'arcanine', 'gyarados', 'vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'sylveon', 'scizor', 'lucario', 'zoroark'}

out_species = []
shop_pool_base = []
shop_pool_legendaries = []

for p in data:
    clean_id = p['name'].lower().replace(' ', '_').replace('.', '').replace("'", '').replace('-', '_')
    if clean_id == 'ho_oh': clean_id = 'ho_oh'
    
    # Types
    types = [p['type1']]
    if p['type2']:
        types.append(p['type2'])
    
    # Range
    p_range = 1
    if any(t in ['water', 'fire', 'electric', 'grass', 'psychic', 'ghost', 'fairy', 'ice'] for t in types):
        p_range = 3
    if 'flying' in types or 'dragon' in types:
        p_range = max(p_range, 2)
    
    # Evolution stage & total stages & Cost
    is_legend = clean_id in LEGENDARIES
    
    if is_legend:
        evo_stage = 1
        evo_total = 1
        cost = 10
        shop_pool_legendaries.append(clean_id)
    elif clean_id in THREE_STAGE_BASES:
        evo_stage = 1
        evo_total = 3
        cost = 1
        shop_pool_base.append(clean_id)
    elif clean_id in THREE_STAGE_MIDS:
        evo_stage = 2
        evo_total = 3
        cost = 3
    elif clean_id in THREE_STAGE_FINALS:
        evo_stage = 3
        evo_total = 3
        cost = 9
    elif clean_id in TWO_STAGE_BASES:
        evo_stage = 1
        evo_total = 2
        cost = 2
        shop_pool_base.append(clean_id)
    elif clean_id in TWO_STAGE_FINALS:
        evo_stage = 2
        evo_total = 2
        cost = 6
    else:
        # Non-evolving / single stage
        evo_stage = 1
        evo_total = 1
        cost = 3
        shop_pool_base.append(clean_id)
        
    # Moves
    moves = []
    # Primary type move
    t1_moves = TYPE_MOVES.get(p['type1'], ['tackle'])
    moves.append({'moveId': t1_moves[0], 'learnLevel': 1})
    if len(t1_moves) > 1:
        moves.append({'moveId': t1_moves[1], 'learnLevel': 8})
    if p['type2'] and p['type2'] in TYPE_MOVES:
        t2_moves = TYPE_MOVES[p['type2']]
        moves.append({'moveId': t2_moves[0], 'learnLevel': 15})
    # Signature move
    sig = SIGNATURE_MOVES.get(clean_id)
    if sig:
        moves.append({'moveId': sig, 'learnLevel': 1})
    elif len(t1_moves) > 2:
        moves.append({'moveId': t1_moves[2], 'learnLevel': 25})
    
    # Evolves to
    evolves_to = EVOLUTIONS.get(clean_id)
    requires_trade = clean_id in TRADE_EVOS
    
    dex_num = int(p['id'])
    sprite_url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/{dex_num}.gif"
    
    spec = {
        'id': clean_id,
        'pokedexNumber': dex_num,
        'name': p['name_ko'],
        'nameEn': p['name'],
        'types': types,
        'baseStats': {
            'hp': p['hp'] * 10,
            'attack': p['atk'],
            'defense': p['def'],
            'spAttack': p['spa'],
            'spDefense': p['spd'],
            'speed': p['spe']
        },
        'baseExp': int((p['hp'] + p['atk'] + p['def'] + p['spa'] + p['spd'] + p['spe']) / 2),
        'evolutionStage': evo_stage,
        'evolutionStagesTotal': evo_total,
        'cost': cost,
        'possibleMoves': moves,
        'range': p_range,
        'spriteUrl': sprite_url
    }
    if is_legend:
        spec['isLegendary'] = True
    if evolves_to:
        spec['evolvesTo'] = evolves_to
    if requires_trade:
        spec['requiresTradeItem'] = True
        
    out_species.append(spec)

ts_content = """import { PokemonSpecies } from '../types/game';

export const POKEMON_SPECIES: Record<string, PokemonSpecies> = {
"""

for s in out_species:
    ts_content += f"  '{s['id']}': {json.dumps(s, ensure_ascii=False, indent=4).replace(chr(10), chr(10) + '  ')},\n"

ts_content += "};\n\n"

ts_content += "export const SHOP_POOL_TIER_BASE: string[] = [\n"
for b in sorted(list(set(shop_pool_base))):
    ts_content += f"  '{b}',\n"
ts_content += "];\n\n"

ts_content += "export const SHOP_POOL_LEGENDARIES: string[] = [\n"
for l in sorted(list(set(shop_pool_legendaries))):
    ts_content += f"  '{l}',\n"
ts_content += "];\n"

with open('src/data/pokemonData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated {len(out_species)} Pokemon species into src/data/pokemonData.ts")
