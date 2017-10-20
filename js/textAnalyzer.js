//Cache the DOM
var output = document.getElementById("output");
var input = document.getElementById("textarea");
var copyButton = document.getElementById("copyButton");

//Modal elements
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function textInfo() { //computes various info about the text input
    characterCounter.innerHTML = input.value.length;
    numberCounter.innerHTML = numberCount();
    vowelCounter.innerHTML = vowelCount();
    consonantCounter.innerHTML = consonantCount();
    wordCounter.innerHTML = wordCount();
    spaceCounter.innerHTML = spaceCount();
    copyButton.innerHTML = "Copy to Clipboard";
}

function copyOutput() { //copies the output to your clipboard
    output.select();
    try {
        document.execCommand("copy");
        copyButton.innerHTML = "Copied!";
    } catch (error) {
        console.log("Copy failed. Try copying manually.");
    }
}

function clearInput() { //clear the input box
    input.value = "";

    characterCounter.innerHTML = 0;
    numberCounter.innerHTML = 0;
    vowelCounter.innerHTML = 0;
    consonantCounter.innerHTML = 0;
    wordCounter.innerHTML = 0;
    spaceCounter.innerHTML = 0;
}

function numberCount() { //counts the total amount of numbers in text
    return input.value.replace(/\D/g, "").length;
}

function vowelCount() { // counts the number of vowels
    return input.value.match(/[aeiou]/gi || []).length;
}

function consonantCount() { // counts the number of consonants
    return input.value.match(/[bcdfghjklmnpqrstvxzwy]/gi || []).length;
}

function wordCount() { //counts the number of words
    return input.value.split(" ").length;
}

function spaceCount() { //counts total amount of white space
    return (input.value.split(" ").length - 1);
}

//add functions that modify the input text below

function upperCase() { //capitalizes every letter
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.toUpperCase();
}

function lowerCase() { // Changes all text to lowercase
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.toLowerCase();
}

function reverseString() { //reverse string
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.split("").reverse().join("");
}

function stretchString() { //stretch string
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.split("").join(" ");
}

function pascalCase() { // Capitalize all first characters
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.replace(/\s/g, ' ').split(' ').map(function(word) {
        if (word) {
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return '';
        }
    }).join(' ');
}

function removeWhitespace() { //get rid of whitespace
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.split(" ").join("");
}

function trimWhitespace() { //trim leading/trailing whitespace
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.trim();
}

function shuffle(string) {
    // helper function to shuffle string
    // Fisher–Yates shuffle - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    var parts = string.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}

function shuffleString() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    //shuffle string
    output.value = shuffle(input.value)
}

function printASCII() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = "";
    for (var i = 0; i < input.value.length; i++) {
        output.value += input.value.charCodeAt(i);
    }
}

function removeNumbers() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.replace(/[0-9]/g, '');
}

function rot13() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    var original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var shifted = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    output.value = input.value.replace(/[A-Za-z]/g, function(char) {
        return original.charAt(shifted.indexOf(char))
    });
}

function camelCase() {
    if (input.value === "") {
        modal.style.display = "block";
    }

    //Get it Capitalized
    var capsCased = input.value.replace(/\s/g, ' ').split(' ').map(function(word) {
        if (word) {
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return '';
        }
    }).join(' ');
    // Make the first letter as Lower Case
    capsCased = capsCased.charAt(0).toLowerCase() + capsCased.substring(1);
    output.value = capsCased.split(" ").join("");
}

function snakeCase() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.trim().replace(/ /g, '_');
}

function shuffleWords() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    var words = input.value.split(" ");
    var a, b, i;
    for (i = words.length; i; i--) {
        a = Math.floor(Math.random() * i);
        b = words[i - 1];
        words[i - 1] = words[a];
        words[a] = b;
    }
    output.value = words.join(" ");
}

function removeLetters() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.replace(/[a-zA-Z]/g, '').trim();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function morseCode() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    var code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"];
    var text = "abcdefghijklmnopqrstuvwxyz1234567890";
    output.value = input.value.toLowerCase().replace(/[a-z0-9 ]/g, function(char) {
        if (char === ' ') {
            return "  /  ";
        }
        return code[text.indexOf(char)] + " ";
    });
}

// For information of Tap Code - https://en.wikipedia.org/wiki/Tap_code
function tapCode() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    var key = "abcdefghijklmnopqrstuvwxyz";

    var code = [
        ". .", ". ..", ". ...", ". ....", ". .....",
        ".. .", ".. ..", ".. ...", ".. ....", ".. .....", ". ...",
        "... .", "... ..", "... ...", "... ....", "... .....",
        ".... .", ".... ..", ".... ...", ".... ....", ".... .....",
        "..... .", "..... ..", "..... ...", "..... ....", "..... .....",
    ];

    output.value = input.value.toLowerCase().replace(/[a-z]/g, function(char) {
        if (char === ' ') {
            return "/  ";
        }
        return code[key.indexOf(char)] + "  ";
    });
}

function removeVowels() {
    if (input.value === "") {
        modal.style.display = "block";
    }
    output.value = input.value.replace(/[aeiou]/g, '');
}

//Replaces whole numbers that aren't part of other words with their hex representation
function decToHex(){
    if (input.value === "") {
        modal.style.display = "block";
    }

    var words = input.value.split(" ");
    for(var i = 0; i < words.length; i++){
        if(!isNaN(words[i])){
            var num = Number(words[i]); //Convert to number, won't convert to hex if still string
            words[i] = "0x" + num.toString(16);
        }
    }
    output.value = words.join(" ");
}


// Remove duplicated words
function removeDuplicates() {
    if (input.value === "") {
        modal.style.display = "block";
    }

    var arr = input.value.toLowerCase().match(/\w+/g); // Remove punctuation
    var arrCopy = arr.slice();  // Create copy of array to modify
    var results = [];
    
    for(var i = 0; i < arr.length; i++) {
      var current = arrCopy.shift();
      if(results.indexOf(current) === -1) {
        results.push(current);
      }
    }
    output.value = results.sort(' ').join(' ');
  }

function removeLeadingNumbers(){
    if (input.value === "") {
        modal.style.display = "block";
    }
    var words = input.value;
    while(true){
        if(Number.isInteger(parseInt(words.charAt(0))) && words.length>0){
            words=words.slice(1);
        }else{
            break;
        }
    }
    output.value = words;
}

