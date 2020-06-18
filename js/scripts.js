//business logic for game objects
function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
}

// business logic for player object
Player.prototype.rollDice = function() {
  let dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 1) {
  this.turnScore = 0;
  } else if (dice !== 1) {
  this.turnScore += dice;
  }

Player.prototype.holdDice = function() {
  this.totalScore = this.totalScore + this.turnScore;
  this.turnScore = 0;
}
  console.log(dice);
}

// User Interface --
$(document).ready(function(event) {
    let player1 = new Player();
    let player2 = new Player();
    console.log(player1)
    console.log(player2)
    
    $("button#roll1").click(function() {
      player1.rollDice();
      $(".p1-temp-score").html(player1.turnScore)
    });

    $("button#hold1").click(function() {
      player1.holdDice();
      $(".p1-total-score").html(player1.totalScore);
    });

    $("button#roll2").click(function() {
      player2.rollDice();
      $(".p2-temp-score").html(player2.turnScore)
    }); 

    $("button#hold2").click(function() {
      player2.holdDice();
      $(".p2-total-score").html(player2.totalScore);
    });
});