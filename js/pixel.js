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

function searchBiomes(){
    let biome = document.getElementById('inputBiomes').value.toLowerCase(); 
    let time = document.getElementById('selectTime').value; 
    // const completelyFilteredLeg; 


    if(biome.length == 0){
        loadTableData();
        
    }
    else{    
        var completelyFilteredLeg = leg.filter(function(item){
            return item.biomes.match(biome);
        })

        // console.log(time)
        if(time != 'time'){
            var completelyFilteredLeg2 = completelyFilteredLeg.filter(function(item){
                console.log(item.time)
                return item.time == time;
            })
            filteredInsertTable(completelyFilteredLeg2);
        }
        else{
            filteredInsertTable(completelyFilteredLeg);
        }

        // filteredInsertTable(completelyFilteredLeg);
    }



}

function changeTime(val){
    const filteredLeg = leg.filter(function(item){
        return item.time == val.value;
    })
    filteredInsertTable(filteredLeg);
    
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

const leg = [
    { pokemon: 'Arceus', biomes: 'Any', time: 'Any', others: 'Timespace Altar with an Azure Flute', catchrate: '3%' },
    { pokemon: 'Articuno', biomes: 'Any', time: 'Any', others: 'Frozen Altar with a charged orb of frozen souls', catchrate: '3%' },
    { pokemon: 'Azelf', biomes: 'Any', time: 'Morning', others: 'Any', catchrate: '3%' },
    { pokemon: 'Calyrex', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Celebi', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Chien-Pao', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Chi-Yu', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Cobalion', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Cosmoem', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Cosmog', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Cresselia', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Darkrai', biomes: 'dark_forest_hills', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Deoxys', biomes: 'snowy_taiga_mountains, end_highlands', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Dialga', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Diancie', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Enamorus', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Entei', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Eternatus', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Fezandipiti', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Genesect', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Giratina', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Glastrier', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Groudon', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Heatran', biomes: 'Any', time: 'Any', others: 'Underground Y≤50 near lava', catchrate: '3%' },
    { pokemon: 'Ho-Oh', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Hoopa', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Jirachi', biomes: 'gravelly_mountains', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Keldeo', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Koraidon', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Kubfu', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Kyogre', biomes: 'deep_frozen_ocean, deep_ocean, deep_lukewarm_ocean, deep_cold_ocean, deep_warm_ocean', time: 'Night', others: 'While rain or storm', catchrate: '5%' },
    { pokemon: 'Kyurem', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Landorus', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Latias', biomes: 'warm_ocean, ocean', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Latios', biomes: 'warm_ocean, ocean', time: 'Any', others: 'Afternoon', catchrate: '3%' },
    { pokemon: 'Lugia', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Lunala', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Magearna', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Manaphy', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Marshadow', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Melmetal', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Meloetta', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Meltan', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Mesprit', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Mew', biomes: 'guiana_springs, modified_jungle', time: 'Day', others: '//', catchrate: '45%' },
    { pokemon: 'Mewtwo', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Miraidon', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Moltres', biomes: 'Any', time: 'Any', others: 'Fiery Shrine with a charged orb of fiery souls', catchrate: '3%' },
    { pokemon: 'Munkidori', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Necrozma', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Ogerpon', biomes: '?', time: '?', others: '?', catchrate: '5%' },
    { pokemon: 'Okidogi', biomes: '?', time: '?', others: '?', catchrate: '3%' },
    { pokemon: 'Palkia', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Phione', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Raikou', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Rayquaza', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regice', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regidrago', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regieleki', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regigigas', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Regirock', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Registeel', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Reshiram', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Shaymin', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Silvally', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Solgaleo', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Spectrier', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Suicune', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Tapu Bulu', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Day', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Fini', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Koko', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Tapu Lele', biomes: 'tropical_islands, jungle, tropical_rainforest', time: 'Night', others: '//', catchrate: '3%' },
    { pokemon: 'Terapagos', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Terrakion', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Thundurus', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Ting-Lu', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Tornadus', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Type: Null', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Urshifu', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Uxie', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Victini', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Virizion', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Volcanion', biomes: 'oasis, desert_lakes', time: 'Dawn, Morning', others: '//', catchrate: '3%' },
    { pokemon: 'Wo-Chien', biomes: '?', time: '?', others: '?', catchrate: '6%' },
    { pokemon: 'Xerneas', biomes: 'Any', time: 'Any', others: 'any', catchrate: '3%' },
    { pokemon: 'Yveltal', biomes: 'taiga_mountains', time: 'Night', others: '//', catchrate: '45%' },
    { pokemon: 'Zacian', biomes: 'forest, birch_forest', time: 'Day', others: '//', catchrate: '10%' },
    { pokemon: 'Zamazenta', biomes: 'forest, birch_forest', time: 'Night', others: '//', catchrate: '10%' },
    { pokemon: 'Zapdos', biomes: 'Any', time: 'Any', others: 'Static Shrine with a charged orb of static souls', catchrate: '3%' },
    { pokemon: 'Zarude', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
    { pokemon: 'Zekrom', biomes: 'giant_spruce_taiga, giant_tree_taiga_hills, giant_spruce_taiga_hills, blue_giant_taiga, wood_tropics, redwood_clearing, redwood_mountains, cika_woods, cika_mountains, seasonal_giant_taiga, giant_tree_taiga', time: 'Night', others: '//', catchrate: '45%' },
    { pokemon: 'Zeraora', biomes: 'savanna_plateu', time: 'Afternoon', others: '//', catchrate: '3%' },
    { pokemon: 'Zygarde', biomes: 'Any', time: 'Any', others: 'Any', catchrate: '3%' },
]