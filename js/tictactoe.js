function startGame() {
    document.turn = "X"
    document.winner = null
}

function nextMove(square) {
    if(document.winner == null) {
        if(square.innerHTML=="") {
        square.innerHTML = document.turn
        switchTurns()
        }
    }
     
}

function switchTurns() {
    if(checkWinner(document.turn)) {
        window.alert(document.winner +" won the game")
    }
    if(document.turn=="X")
        document.turn = "O"
    else
        document.turn = "X"    
}


function checkWinner(turn) {
    if(checkIfSame(1,2,3,turn)
    || checkIfSame(4,5,6,turn)
    || checkIfSame(7,8,9,turn)
    || checkIfSame(1,4,7,turn)
    || checkIfSame(2,5,8,turn)
    || checkIfSame(3,6,9,turn)
    || checkIfSame(1,5,9,turn)
    || checkIfSame(3,5,7,turn)) {
        document.winner = turn
        return true
    }
}


function checkIfSame(s1,s2,s3,turn) {
    var result = false
    if(getSqaure(s1).innerHTML == turn 
    && getSqaure(s2).innerHTML == turn 
    && getSqaure(s3).innerHTML == turn)
        result = true
    return result    
}


function getSqaure(number) {
    return document.getElementById("square"+number)
}