//Cache the DOM
const output = document.getElementById("output");
const input = document.getElementById("textarea");

function characterCount() { //counts total amount of characters
    characterCounter.innerHTML = input.value.length;
}

function spaceCount() { //counts total amount of white space
    var str = input.value;
    var spaceCount = (str.split(" ").length);
    output.innerHTML = (spaceCount - 1);
}

function upperCase() { //capitalizes every letter
    output.innerHTML = input.value.toUpperCase();
}

function lowerCase() { // Changes all text to lowercase
    output.innerHTML = input.value.toLowerCase();
}

function reverseString() { //reverse string
    output.innerHTML = input.value.split("").reverse().join("");
}

function numberCount() { //counts the total amount of numbers in text
    output.innerHTML = input.value.replace(/\D/g, "").length;
}

function vowelCount() { // counts the number of vowels
    output.innerHTML = input.value.match(/[aeiou]/gi || []).length;
}

function consonantCount() { // counts the number of consonants
    output.innerHTML = input.value.match(/[bcdfghjklmnpqrstvxzwy]/gi || []).length;
}

function wordCount(){ //counts the number of words
    output.innerHTML = input.value.split(" ").length;
}

function pascalCase() { // Capitalize all first characters
    output.innerHTML = input.value.replace(/\s/g, ' ').split(' ').map(function(word) {
        if(word) {
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return '';
        }
    }).join(' ');
}