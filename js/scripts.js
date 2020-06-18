//business logic for game objects
function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.dice = 0;
}

// business logic for player object
Player.prototype.rollDice = function() {
  let dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 1) {
  this.turnScore = 0;
  } else if (dice !== 1) {
  this.turnScore += dice;
  }
  return dice;
}

Player.prototype.holdDice = function() {
  this.totalScore = this.totalScore + this.turnScore;
  this.turnScore = 0;
}

Player.prototype.newGame = function () {
  this.turnScore = 0;
  this.totalScore = 0;
}

// User Interface --
$(document).ready(function(event) {
    let player1 = new Player();
    let player2 = new Player();

    $("button#reload").click(function() {
      player1.newGame();
      player2.newGame();
      $(".p1-temp-score").html(player1.turnScore);
      $(".p1-total-score").html(player1.totalScore);
      $(".p2-temp-score").html(player2.turnScore);
      $(".p2-total-score").html(player2.totalScore);
      $(".victory").hide();
    });

    $("button#roll1").click(function() {
      const diceRoll1 = player1.rollDice();
      $(".p1-temp-score").html(player1.turnScore);
      $(".p1-dice-output").html(diceRoll1);
    });

    $("button#hold1").click(function() {
      player1.holdDice();
      $(".p1-total-score").html(player1.totalScore);
      if (player1.totalScore >= 100)
        $("#p1win").show();
    });

    $("button#roll2").click(function() {
      const diceRoll2 = player2.rollDice();
      player2.rollDice();
      $(".p2-temp-score").html(player2.turnScore);
      $(".p2-dice-output").html(diceRoll2);
    }); 

    $("button#hold2").click(function() {
      player2.holdDice();
      $(".p2-total-score").html(player2.totalScore);
      if (player2.totalScore >= 100)
      $("#p2win").show();
  });
});