//business logic for game objects
function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.player = ""
}

// business logic for player object
Player.prototype.rollDice = function() {
  let dice = Math.floor(Math.random() * 7) + 1;
  this.turnScore += dice
}


// User Interface --

let player1 = Player()
let player2 = Player()

//UI Logic
$(document).ready(function() {
event.preventDefault();
})