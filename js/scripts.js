//business logic for game objects
function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.player = ""
}

// business logic for player object
Player.prototype.rollDice = function() {
  let dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 1) {
  this.turnScore = 0;
  } else if (dice !== 1) {
  this.turnScore += dice
  }
  console.log(dice)
}

// User Interface --
$(document).ready(function(event) {
    let player1 = new Player();
    let player2 = new Player();

    $("button#roll1").click(function() {
      player1.rollDice();
      $(".p1-temp-score").html(player1.turnScore)
      $(".p1-dice-output").html(Player.rollDice)
    });

    $("button#roll2").click(function() {
      player2.rollDice();
      $(".p2-temp-score").html(player2.turnScore)
    }); 
});