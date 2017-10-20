/*pokemonCards array holds names of all pokemon cards in original booster pack. The name of the pokemon is needed for the URL of the pokemon website. This isn't necessary for the URL of Yugioh cards, so we don't need another array specifically for Yugioh cards*/
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

/*
    hearthstoneCards array holds names of all hearthstone cards in this particular deck. The name of the hearthstone card is needed for the URL of the hearthstone website.
    There are thirty cards in this deck.
    Each element in this array is a sub-array consisting of card name, card class, and card rarity.
*/
const hearthstoneCards = [
    ['Houndmaster', 'Hunter', 'Free'],
    ['ArcaneShot', 'Hunter', 'Basic'],
    ['BestialWrath', 'Hunter', 'Epic'],
    ['ExplosiveShot', 'Hunter', 'Rare'],
    ['Flare', 'Hunter', 'Rare'],
    ['FreezingTrap', 'Hunter', 'Common'],
    ['HuntersMark', 'Hunter', 'Basic'],
    ['KingKrush', 'Hunter', 'Legendary'],
    ['KillCommand', 'Hunter', 'Basic'],
    ['Misdirection', 'Hunter', 'Rare'],
    ['SnakeTrap', 'Hunter', 'Epic'],
    ['ScavengingHyena', 'Hunter', 'Common'],
    ['MultiShot', 'Hunter', 'Basic'],
    ['TundraRhino', 'Hunter', 'Basic'],
    ['UnleashtheHounds', 'Hunter', 'Common'],
    ['FaerieDragon', 'Neutral', 'Common'],
    ['Abomination', 'Neutral', 'Rare'],
    ['DalaranMage', 'Neutral', 'Basic'],
    ['FlesheatingGhoul', 'Neutral', 'Rare'],
    ['HarrisonJones', 'Neutral', 'Legendary'],
    ['IllidanStormrage', 'Neutral', 'Legendary'],
    ['MasterSwordsmith', 'Neutral', 'Rare'],
    ['MurlocTidecaller', 'Neutral', 'Rare'],
    ['SilverbackPatriarch', 'Neutral', 'Basic'],
    ['SouthseaDeckhand', 'Neutral', 'Common'],
    ['StormwindChampion', 'Neutral', 'Basic'],
    ['TwilightDrake', 'Neutral', 'Rare'],
    ['VentureCoMercenary', 'Neutral', 'Common'],
    ['WorgenInfiltrator', 'Neutral', 'Common'],
    ['Ysera', 'Neutral', 'Legendary']
];

var cardNumber;
var cardName;

//Cache DOM
let cardPicture;
let info;

/*This function handles the request of which pack was selected. It moves the image of the card package to the center, and sets up the next function to attach the image of specific card. */
function selectPack(packNumber) {
    if (packNumber === 1 || packNumber === 2 || packNumber === 3) {
        document.getElementById("table").outerHTML = "";

        //img holds image of card package.
        var img = new Image();
        var div = document.getElementById('div1');
        div.appendChild(img);
        if (packNumber === 1)
            img.src = "https://images-na.ssl-images-amazon.com/images/I/51RbSD7izLL._SY300_.jpg";
        if (packNumber === 2)
            img.src = "http://media-hearth.cursecdn.com/attachments/39/664/cardback_0.png";
        if (packNumber === 3)
            img.src = "https://images-na.ssl-images-amazon.com/images/I/61mNw3ThUkL.jpg";
        img.id = "cardPicture";
        document.getElementById('header1').innerHTML = "Draw a card";
        cardPicture = document.getElementById('cardPicture');

        cardPicture.style.width = 252;
        cardPicture.style.height = 352;
        cardPicture.style.position = "relative";
        cardPicture.style.top = "50px";

        img.onclick = function() {//Open pack of cards.
            draw(packNumber);
        };
    }
}

/*this function gets an appropriate random number based on the range of possible cards within in a pack, then attaches the correct url to cardPicture. */
function draw(packNumber) {
    info = document.getElementById('info');

    if (packNumber == 1) { //if pokemon pack was selected
        cardNumber = Math.floor(Math.random() * 102);
        cardName = pokemonCards[cardNumber][0].replace(/\s+/g, '-');
        url = "http://pod.pokellector.com/cards/119/" + cardName + ".BS." + (cardNumber + 1) + ".png";
        info.innerHTML = "#" + (cardNumber + 1) + "/102 " + cardName;
        cardPicture.src = url;
    }
    if (packNumber == 2) { //if hearthstone deck was selected
        cardNumber = Math.floor(Math.random() * 30);
        cardName = hearthstoneCards[cardNumber][0];
        url = "http://www.hearthstonewarcraft.com/images/cards/" + cardName + "_hearthstone.png";
        info.innerHTML = "#" + (cardNumber + 1) + "/30 " + cardName;
        cardPicture.src = url;
    }
    if (packNumber == 3) { //if yugioh pack was selected
        cardNumber = Math.floor(Math.random() * 126);
		url = "https://ycgscripts-chakrasitesinc.netdna-ssl.com/images/lob/LOB-EN";
        if (cardNumber < 10)
            url += "00" + cardNumber + ".jpg";
        else if (cardNumber < 100)
            url += "0" + cardNumber + ".jpg";
        else
            url += "" + cardNumber + ".jpg";
        info.innerHTML = "#" + (cardNumber) + "/126 " + cardName;
        cardPicture.src = url;
    }
}
