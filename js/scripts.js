//business logic for game objects
function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.player = ""
}


// business logic for player object
Player.prototype.rollDice = function(dice) {
  let dice = Math.floor(Math.random() * 7) + 1;
  this.turnScore += dice
  console.log(dice)
}

// User Interface --
$(document).ready(function() {
  $("form#gameboard").submit(function(event) {
    event.preventDefault();
    let player1 = new Player()
    let player2 = new Player()


}})