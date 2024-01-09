const table = document.getElementById('bodyTable');
const inputPoke = document.getElementById('pokeName');
const inputBiomes = document.getElementById('inputBiomes');
const selectTime = document.getElementById('selectTime');

function loadTableData(){
    
    table.innerHTML = ''
    leg.forEach( item =>{
        let row = table.insertRow();

        let pokemon = row.insertCell(0);
        pokemon.innerHTML = item.pokemon;
        let biomes = row.insertCell(1);
        biomes.innerHTML = item.biomes;
        let time = row.insertCell(2);
        time.innerHTML = item.time;
        let others = row.insertCell(3);
        others.innerHTML = item.others;
        let catchrate = row.insertCell(4);
        catchrate.innerHTML = item.catchrate;
    })
}

function searchPokemon(){
    let name = document.getElementById('pokeName').value.toLowerCase(); 
    if(name.length == 0){
        loadTableData();
    }
    else{    
        const filteredLeg = leg.filter(function(item){
            return  item.pokemon.toLowerCase().match(name);
        })
        filteredInsertTable(filteredLeg);
    }
    
}

function filterBy(){
    const biome = document.getElementById('inputBiomes').value.toLowerCase(); 
    const time = document.getElementById('selectTime').value.toLowerCase(); 

    if(biome.length == 0){
        if(time != 'time'){
            const filteredLeg = leg.filter(function(item){
                return item.time.toLowerCase().match(time);
            })
            filteredInsertTable(filteredLeg);
        }
        else{
            loadTableData();
        }
    }
    else{
        if(time != 'time'){
            const filteredLeg = leg.filter(function(item){
                return item.biomes.toLowerCase().match(biome);
            })

            const filteredLeg2 = filteredLeg.filter(function(item){
                return item.time.toLowerCase().match(time);
            })
            filteredInsertTable(filteredLeg2);
        }
        else{
            const filteredLeg = leg.filter(function(item){
                return item.biomes.toLowerCase().match(biome);
            })
            filteredInsertTable(filteredLeg);
        }
    }

}

function filteredInsertTable(filteredLeg){
    if(filteredLeg.length == 0){
        loadTableData();
    }
    else{
        table.innerHTML = '';
        filteredLeg.forEach( item =>{
            let row = table.insertRow();
    
            let pokemon = row.insertCell(0);
            pokemon.innerHTML = item.pokemon;
            let biomes = row.insertCell(1);
            biomes.innerHTML = item.biomes;
            let time = row.insertCell(2);
            time.innerHTML = item.time;
            let others = row.insertCell(3);
            others.innerHTML = item.others;
            let catchrate = row.insertCell(4);
            catchrate.innerHTML = item.catchrate;
        })
    }
}

function resetFilters(val){
    switch(val){
        case 'btnClean' : {
            inputPoke.value = '';
            inputBiomes.value = '';
            selectTime.value = 'time';
            break;
        }
        case 'inputPoke' : {
            inputBiomes.value = '';
            selectTime.value = 'time';
            break;
        }
        case 'inputBiomes' : {
            inputPoke.value = '';
            break;
        }
        case 'inputTime' : {
            inputPoke.value = '';
            break;
        }
    }

}

window.onload = function(){
    loadTableData();
    // getPokemon();
}

async function getPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon/ditto/"
    let res = await fetch(url);
    let pokemon = await res.json();
    console.log(pokemon)
}

const leg = [
    { pokemon: 'Arceus', biomes: 'Any', time: 'Any', others: 'Timespace Altar with an Azure Flute', catchrate: '3%' },
    { pokemon: 'Articuno', biomes: 'Any', time: 'Any', others: 'Frozen Altar with a charged orb of frozen souls', catchrate: '3%' },
    { pokemon: 'Azelf', biomes: 'Any', time: 'Morning', others: 'Any', catchrate: '3%' },
    { pokemon: 'Calyrex', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Celebi', biomes: 'Any', time: 'Any', others: 'Altar & GS Ball', catchrate: '45%' },
    { pokemon: 'Chien-Pao', biomes: 'snowy_taiga_mountains, alps, snowy_taiga_hills, snowy mountains', time: 'Night', others: '//', catchrate: '6%' },
    { pokemon: 'Chi-Yu', biomes: 'wooded_red_rock_mountains, badlands, modified_badlands_plateu, wooded_badlands_plateu, modified_wooded_badlands_plateu, badlands_plateu, red_rock_mountains, eroded_badlands, red_rock_highlands, red_rock_lowlands', time: 'Day', others: '//', catchrate: '6%' },
    { pokemon: 'Cobalion', biomes: 'aspen_forest_hills, boreal_forest_hills, seasonal_forest_hills, birch_forest_hills, maple_hills, seasonal_birch_forest_hills, wooded_hills, all_birch_hills', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Cosmoem', biomes: '//', time: '//', others: 'Cosmog Evolution', catchrate: '45%' },
    { pokemon: 'Cosmog', biomes: 'ultra_jungle, ultra_crater, ultra_plant, ultra_deep_sea, ultra_desert, ultra_forest', time: 'Dawn, Day', others: '//', catchrate: '45%' },
    { pokemon: 'Cosmog', biomes: 'sunflower_plains', time: 'Dusk, Night', others: '//', catchrate: '45%' },
    { pokemon: 'Cresselia', biomes: 'tall_birch_forest', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Cresselia', biomes: '//', time: 'Midnight', others: '//', catchrate: '3%' },
    { pokemon: 'Darkrai', biomes: 'dark_forest_hills', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Deoxys', biomes: 'snowy_taiga_mountains, end_highlands', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Dialga', biomes: 'Any', time: 'Any', others: 'Timespace Altar with an Adamant Orb', catchrate: '3%' },
    { pokemon: 'Diancie', biomes: 'alps, alpine_foothills, mountain_edge, gravelly_mountains, wooded_mountains, modified_gravelly_mountains, mountains', time: 'Morning', others: 'Underground Y≤50', catchrate: '3%' },
    { pokemon: 'Enamorus', biomes: 'flowering_meadow, flowering_enchanted_grove, rose_fields, amaranth_fields, flowering_ancient_forest, allium_fields, cherry_blossom_clearing, sunflower_plains, flowering_grove, flower_forest, cherry_blossom_forest', time: 'Dawn, Dusk', others: '//', catchrate: '3%' },
    { pokemon: 'Entei', biomes: 'alps, alpine_foothills, mountain_edge, gravelly_mountains, wooded_mountains, modified_gravelly_mountains, mountains', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Eternatus', biomes: 'bayou, mangrove_marshes, cold_swamplands, end_barrens, coral_mangroves, bog, swamp_hills, cypress_swamplands, vibrant_swamplands, marshlands, swamp, glowshroom_bayou', time: 'Dawn, Morning', others: '//', catchrate: '10%' },
    { pokemon: 'Fezandipiti', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Genesect', biomes: 'alpine_foothills, bluff_peaks, dover_mountains, wooded_mountains, redwood_mountains, modified_gravelly_mountains, bluff_steeps', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Giratina', biomes: 'Any', time: 'Any', others: 'Timespace Altar with an Griseous Orb', catchrate: '3%' },
    { pokemon: 'Glastrier', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Groudon', biomes: 'desert_hills', time: 'Day', others: 'Weather Clear', catchrate: '5%' },
    { pokemon: 'Heatran', biomes: 'wooded_red_rock_mountains, badlands, modified_badlands_plateu, wooded_badlands_plateu, modified_wooded_badlands_plateu, badlands_plateu, red_rock_mountains, roded_badlands, red_rock_highlands, red_rock_lowlands', time: 'Any', others: 'Underground Y≤50 near lava', catchrate: '3%' },
    { pokemon: 'Ho-Oh', biomes: 'Any', time: '(Non ricordo)', others: 'Bell', catchrate: '3%' },
    { pokemon: 'Hoopa', biomes: 'lush_red_desert, desert, red_desert, oasis, desert_hills, small_end_islands, mojave_desert, dunes, red_desert_dunes, desert_lakes', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Jirachi', biomes: 'gravelly_mountains', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Keldeo', biomes: 'oasis, fresh_water_lake, great_lakes, river, greatk_lake_isles, desert_lakes', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Koraidon', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Kubfu', biomes: 'bamboo_jungle, bamboo_jungle_hills, bamboo_forest', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Kyogre', biomes: 'deep_frozen_ocean, deep_ocean, deep_lukewarm_ocean, deep_cold_ocean, deep_warm_ocean', time: 'Night', others: 'Weather rain or storm', catchrate: '5%' },
    { pokemon: 'Kyurem', biomes: 'ice_spikes', time: 'Afternoon, Dusk', others: '//', catchrate: '3%' },
    { pokemon: 'Landorus', biomes: 'modified_badlands_plateu, modified_wooded_badlands_plateu, wooded_badlands_plateu', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Latias', biomes: 'warm_ocean, ocean', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Latios', biomes: 'warm_ocean, ocean', time: 'Any', others: 'Afternoon', catchrate: '3%' },
    { pokemon: 'Lugia', biomes: 'Any', time: '(Non ricordo)', others: 'Bell', catchrate: '3%' },
    { pokemon: 'Lunala', biomes: '//', time: 'Night', others: 'Cosmog Evolution', catchrate: '45%' },
    { pokemon: 'Magearna', biomes: 'black_forest_clearing, dark_forest_hills, the_black_forest, ebony_woods, dark_forest, black_forest_hills, ebony_hills', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Manaphy', biomes: 'warm_ocean, lukewarm_ocean', time: 'Morning', others: 'Weather Clear', catchrate: '3%' },
    { pokemon: 'Marshadow', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Melmetal', biomes: '//', time: '//', others: 'Meltan evolution after 400 iron nuggets have been fed to the Meltan by interacting with it', catchrate: '3%' },
    { pokemon: 'Meloetta', biomes: 'flowering_meadow, rose_fields, flowering_enchanted_grove, amaranth_fields, flowering_ancient_forest, allium_fields, cherry_blossom_clearing, sunflower_plains, flowering_grove, cherry_blossom_forest, flower_forest', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Meltan', biomes: 'Any', time: 'Any', others: 'Melting iron (75% chance that Meltan will become a Ditto', catchrate: '3%' },
    { pokemon: 'Mesprit', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Mew', biomes: 'guiana_springs, modified_jungle', time: 'Day', others: '//', catchrate: '45%' },
    { pokemon: 'Mewtwo', biomes: '//', time: '//', others: 'Mew evolution', catchrate: '3%' },
    { pokemon: 'Miraidon', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Moltres', biomes: 'Any', time: 'Any', others: 'Fiery Shrine with a charged orb of fiery souls', catchrate: '3%' },
    { pokemon: 'Munkidori', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Necrozma', biomes: 'dark_forest', time: 'Night', others: '//', catchrate: '45%' },
    { pokemon: 'Ogerpon', biomes: '?', time: '?', others: '?', catchrate: '5%' },
    { pokemon: 'Okidogi', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Palkia', biomes: 'Any', time: 'Any', others: 'Timespace Altar with a Lustrous Orb', catchrate: '3%' },
    { pokemon: 'Phione', biomes: '//', time: '//', others: 'Manphy breeding', catchrate: '30%' },
    { pokemon: 'Raikou', biomes: 'shattered_savanna_plateu, shattered_savanna, araucaria_forest, savanna_plateu, sierra_valley, savanna, araucaria_savanna, sierra_range, baobab_savanna', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Rayquaza', biomes: 'alpine_foothills, alps, mountain_edge, gravelly_mountains, wooded_mountains, modified_gravelly_mountains, mountains', time: 'Afternoon, Dusk, Dawn', others: '//', catchrate: '3%' },
    { pokemon: 'Regice', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regidrago', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regieleki', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regigigas', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regirock', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Registeel', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Reshiram', biomes: 'giant_spruce_taiga, giant_tree_taiga_hills, giant_spruce_taiga_hills, blue_giant_taiga, wood_tropics, redwood_clearing, redwood_tropics, redwood_mountains, cika_mountains, cika_woods, seasonal_giant_taiga, giant_tree_taiga', time: 'Day', others: 'Any', catchrate: '45%' },
    { pokemon: 'Shaymin', biomes: 'flowering_meadow, rose_fields, flowering_enchanted_grove, amaranth_fields, flowering_ancient_forest, allium_fields, cherry_blossom_clearing, sunflower_plains, flowering_grove, mount_lunakila, cherry_blossom_forest, flower_forest', time: 'Morning', others: '//', catchrate: '45%' },
    { pokemon: 'Silvally', biomes: '//', time: '//', others: 'Type: null evolution/wiki ', catchrate: '3%' },
    { pokemon: 'Solgaleo', biomes: '//', time: 'Day', others: 'Cosmog Evolution', catchrate: '45%' },
    { pokemon: 'Spectrier', biomes: 'bayou, cold_swamplands, mangrove_marshes, coral_mangroves, bog, swamp_hills, cypress_swamplands, swamp, vibrant_swamplands, marshlands, glowshroom_bayou', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Suicune', biomes: 'beach, rainbow_beach, basalt_barrera, snowy_rocky_black_beach, snowy_beach, snowy_black_beach, mushroom_field_shore, rocky_beach, white_beach, stone_shore', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Bulu', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Fini', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Koko', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Lele', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Terapagos', biomes: '//', time: '//', others: '//', catchrate: '//' },
    { pokemon: 'Terrakion', biomes: 'aspen_forest_hills, boreal_forest_hills, seasonal_forest_hills, birch_forest_hills, maple_hills, seasonal_birch_forest_hills, wooded_hills, all_birch_hills', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Thundurus', biomes: 'autumnal_vallery, plains, sunflower_plains, meadow, shrublands, praire, grasslands_plateu, prairie_clearing', time: 'Morning', others: 'Weather rain or storm', catchrate: '3%' },
    { pokemon: 'Ting-Lu', biomes: '//', time: '//', others: '//', catchrate: '6%' },
    { pokemon: 'Tornadus', biomes: 'autumnal_vallery, plains, sunflower_plains, meadow, shrublands, praire, grasslands_plateu, prairie_clearing', time: 'Afternoon', others: 'Weather rain or storm', catchrate: '3%' },
    { pokemon: 'Type: Null', biomes: 'jungle_edge', time: 'Dusk, Night', others: '//', catchrate: '3%' },
    { pokemon: 'Urshifu', biomes: '//', time: '//', others: 'Kubfu evolution scroll', catchrate: '3%' },
    { pokemon: 'Uxie', biomes: 'black_forest_clearing, dark_forest_hills, oasis, the_black_forest, fresh_water_lake, great_lakes, ebody_woods, dark_forest, black_forest_hills, ebony_hills, great_lake_isles, desert_lakes', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Victini', biomes: 'shattered_savanna_plateu, shattered_savanna, araucaria_forest, savanna_plateu, sierra_valley, savanna, araucaria_savanna, sierra_range, baobab_savanna', time: 'Day', others: 'Weather Clear', catchrate: '3%' },
    { pokemon: 'Virizion', biomes: 'aspen_forest_hills, boreal_forest_hills, seasonal_forest_hills, birch_forest_hills, maple_hills, seasonal_birch_forest_hills, wooded_hills, all_birch_hills', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Volcanion', biomes: 'oasis, desert_lakes', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Wo-Chien', biomes: '?', time: '?', others: '?', catchrate: '6%' },
    { pokemon: 'Xerneas', biomes: 'dark_forest', time: 'Day, Midday', others: '//', catchrate: '45%' },
    { pokemon: 'Yveltal', biomes: 'taiga_mountains', time: 'Night', others: '//', catchrate: '45%' },
    { pokemon: 'Zacian', biomes: 'forest, birch_forest', time: 'Day', others: '//', catchrate: '10%' },
    { pokemon: 'Zamazenta', biomes: 'forest, birch_forest', time: 'Night', others: '//', catchrate: '10%' },
    { pokemon: 'Zapdos', biomes: 'Any', time: 'Any', others: 'Static Shrine with a charged orb of static souls', catchrate: '3%' },
    { pokemon: 'Zarude', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Zekrom', biomes: 'giant_spruce_taiga, giant_tree_taiga_hills, giant_spruce_taiga_hills, blue_giant_taiga, wood_tropics, redwood_clearing, redwood_mountains, cika_woods, cika_mountains, seasonal_giant_taiga, giant_tree_taiga', time: 'Night', others: '//', catchrate: '45%' },
    { pokemon: 'Zeraora', biomes: 'savanna_plateu', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Zygarde', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
]