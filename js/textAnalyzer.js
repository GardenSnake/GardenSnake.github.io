function characterCount() { //counts total amount of characters
    document.getElementById("output").innerHTML = document.getElementById("textarea").value.length;
}

function spaceCount() { //counts total amount of white space
    var str = document.getElementById("textarea").value;
    var spaceCount = (str.split(" ").length);
    document.getElementById("output").innerHTML = (spaceCount - 1);
}

function upperCase() { //capitalizes every letter
    document.getElementById("output").innerHTML = document.getElementById("textarea").value.toUpperCase();
}
