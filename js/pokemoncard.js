//pokemonCards array holds names of all pokemon cards in original booster pack
const pokemonCards = [
    ['Alakazam', 'Holographic'],
    ['Blastoise', 'Holographic'],
    ['Chansey', 'Holographic'],
    ['Charizard', 'Holographic'],
    ['Clefairy', 'Holographic'],
    ['Gyarados', 'Holographic'],
    ['Hitmonchan', 'Holographic'],
    ['Machamp', 'Holographic'],
    ['Magneton', 'Holographic'],
    ['Mewtwo', 'Holographic'],
    ['Nidoking', 'Holographic'],
    ['Ninetales', 'Holographic'],
    ['Poliwrath', 'Holographic'],
    ['Raichu', 'Holographic'],
    ['Venusaur', 'Holographic'],
    ['Zapdos', 'Holographic'],
    ['Beedrill', 'Rare'],
    ['Dragonair', 'Rare'],
    ['Dugtrio', 'Rare'],
    ['Electabuzz', 'Rare'],
    ['Electrode', 'Rare'],
    ['Pidgeotto', 'Rare'],
    ['Arcanine', 'Uncommon'],
    ['Charmeleon', 'Uncommon'],
    ['Dewgong', 'Uncommon'],
    ['Dratini', 'Uncommon'],
    ['Farfetchd', 'Uncommon'],
    ['Growlithe', 'Uncommon'],
    ['Haunter', 'Uncommon'],
    ['Ivysaur', 'Uncommon'],
    ['Jynx', 'Uncommon'],
    ['Kadabra', 'Uncommon'],
    ['Kakuna', 'Uncommon'],
    ['Machoke', 'Uncommon'],
    ['Magikarp', 'Uncommon'],
    ['Magmar', 'Uncommon'],
    ['Nidorino', 'Uncommon'],
    ['Poliwhirl', 'Uncommon'],
    ['Porygon', 'Uncommon'],
    ['Raticate', 'Uncommon'],
    ['Seel', 'Uncommon'],
    ['Wartortle', 'Uncommon'],
    ['Abra', 'Common'],
    ['Bulbasaur', 'Common'],
    ['Caterpie', 'Common'],
    ['Charmander', 'Common'],
    ['Diglett', 'Common'],
    ['Doduo', 'Common'],
    ['Drowzee', 'Common'],
    ['Gastly', 'Common'],
    ['Koffing', 'Common'],
    ['Machop', 'Common'],
    ['Magnemite', 'Common'],
    ['Metapod', 'Common'],
    ['Nidoran M', 'Common'],
    ['Onix', 'Common'],
    ['Pidgey', 'Common'],
    ['Pikachu', 'Common'],
    ['Poliwag', 'Common'],
    ['Ponyta', 'Common'],
    ['Rattata', 'Common'],
    ['Sandshrew', 'Common'],
    ['Squirtle', 'Common'],
    ['Starmie', 'Common'],
    ['Staryu', 'Common'],
    ['Tangela', 'Common'],
    ['Voltorb', 'Common'],
    ['Vulpix', 'Common'],
    ['Weedle', 'Common'],
    ['Clefairy Doll', 'Rare'],
    ['Computer Search', 'Rare'],
    ['Devolution Spray', 'Rare'],
    ['Imposter Professor Oak', 'Rare'],
    ['Item Finder', 'Rare'],
    ['Lass', 'Rare'],
    ['Pokemon Breeder', 'Rare'],
    ['Pokemon Trader', 'Rare'],
    ['Scoop Up', 'Rare'],
    ['Super Energy Removal', 'Rare'],
    ['Defender', 'Uncommon'],
    ['Energy Retrieval', 'Uncommon'],
    ['Full Heal', 'Uncommon'],
    ['Maintenance', 'Uncommon'],
    ['PlusPower', 'Uncommon'],
    ['Pokemon Center', 'Uncommon'],
    ['Pokemon Flute', 'Uncommon'],
    ['Pokedex', 'Uncommon'],
    ['Professor Oak', 'Uncommon'],
    ['Revive', 'Uncommon'],
    ['Super Potion', 'Uncommon'],
    ['Bill', 'Common'],
    ['Energy Removal', 'Common'],
    ['Gust of Wind', 'Common'],
    ['Potion', 'Common'],
    ['Switch', 'Common'],
    ['Double Colorless Energy', 'Uncommon'],
    ['Fighting Energy', 'Common'],
    ['Fire Energy', 'Common'],
    ['Grass Energy', 'Common'],
    ['Lightning Energy', 'Common'],
    ['Psychic Energy', 'Common'],
    ['Water Energy', 'Common']
];
var cardNumber;
var cardName;

//Cache DOM
let cardPicture;
let info;

function selectPack(packNumber, pack) {
    if (packNumber === 1 || packNumber === 3) {
        document.getElementById("table").outerHTML = "";

        //img holds image of pokemon card
        var img = new Image();
        var div = document.getElementById('div1');
        div.appendChild(img);
        if (packNumber === 1)
            img.src = "https://images-na.ssl-images-amazon.com/images/I/51RbSD7izLL._SY300_.jpg";
        if (packNumber === 3)
            img.src = "https://images-na.ssl-images-amazon.com/images/I/61mNw3ThUkL.jpg";
        img.id = "cardPicture";
        document.getElementById('header1').innerHTML = "Draw a card";
        cardPicture = document.getElementById('cardPicture');

        cardPicture.style.width = 252;
        cardPicture.style.height = 352;
        cardPicture.style.position = "relative";
        cardPicture.style.top = "50px";
        img.onclick = function() {
            draw(packNumber);
        };
    }
}

function draw(packNumber) { //pokemon pack selected
    info = document.getElementById('info');
    if (packNumber == 1) {
        cardNumber = Math.floor(Math.random() * 102);
        cardName = pokemonCards[cardNumber][0].replace(/\s+/g, '-');
        url = "http://pod.pokellector.com/cards/119/" + cardName + ".BS." + (cardNumber + 1) + ".png";
        info.innerHTML = "#" + (cardNumber + 1) + "/102 " + cardName;
        cardPicture.src = url;
    }
    if (packNumber == 3) { //yugioh pack selected
        cardNumber = Math.floor(Math.random() * 126);
        if (cardNumber < 10)
            url = "https://ycgscripts-chakrasitesinc.netdna-ssl.com/images/lob/LOB-EN00" + cardNumber + ".jpg";
        else if (cardNumber < 100)
            url = "https://ycgscripts-chakrasitesinc.netdna-ssl.com/images/lob/LOB-EN0" + cardNumber + ".jpg";
        else
            url = "https://ycgscripts-chakrasitesinc.netdna-ssl.com/images/lob/LOB-EN" + cardNumber + ".jpg";
        info.innerHTML = "#" + (cardNumber) + "/126 " + cardName;
        cardPicture.src = url;
    }
}
