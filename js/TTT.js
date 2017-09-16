var player1 = {

	value: "O",
	turn: true,
	played: []

}

var player2 = {

	value: "X",
	turn: false,
	played: []

}

function changePlayer() {
	player2.turn = !(player2.turn);
	player1.turn = !(player1.turn);
}
