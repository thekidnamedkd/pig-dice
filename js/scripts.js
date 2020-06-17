//business logic for game objects
function Gameboard(player1, player2) {
  this.player1 = player1
  this.player2 = player2
}

function Player1(diceRoll) {
  this.diceRoll = diceRoll
}

function Player2(diceRoll) {
  this.diceRoll = diceRoll
}

// business logic for player object

function diceRoll (number) {
  Math.floor(Math.random() * 7) + 1; 
}

$(document).ready(function() {
event.preventDefault();
})