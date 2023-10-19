// BEAT THAT!
// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// Dice randomizing helper
var randomDiceRolls = function () {
  var randomInterger = Math.floor(Math.random() * 6) + 1;
  return randomInterger;
};

// Player Roll Dice
var playerRollDice = function () {
  var counter = 0;
  while (counter < 2) {
    currentPlayerDiceArray.push(randomDiceRolls());
    counter += 1;
  }
  return [currentPlayerDiceArray[0], currentPlayerDiceArray[1]];
};

// Global Variables
var gameState = "diceRollState";
var myOutputValue = "";
var currentPlayerDiceArray = [];
var currentPlayer = 0;
var playerScoreArray = [0, 0];

var playerChooseDiceSequence = function (input) {
  if (input == 1) {
    var playerScore = Number(
      String(currentPlayerDiceArray[0]) + String(currentPlayerDiceArray[1])
    );
    console.log(playerScore);
  } else if (input == 2) {
    var playerScore = Number(
      String(currentPlayerDiceArray[1]) + String(currentPlayerDiceArray[0])
    );
    console.log(playerScore);
  }
  playerScoreArray[currentPlayer] = playerScore;
  if (currentPlayer == 1) {
    var result = scoreComparison();
    console.log(`result`, result);
    return `Player 1 score is ${playerScoreArray[0]}, Player 2 score is ${playerScoreArray[1]}. <br> ${result}`;
  }
  return `Player ${currentPlayer + 1}, Your Score is ${playerScore}`;
};

var scoreComparison = function () {
  if (playerScoreArray[0] > playerScoreArray[1]) {
    console.log(playerScoreArray);
    return `Player 1 wins`;
  } else {
    console.log(playerScoreArray);
    return `Player 2 wins`;
  }
};

var main = function (input) {
  if (gameState == "diceRollState") {
    playerRollDice();
    console.log(`game state is ${gameState}`);
    console.log(`current player dice array`, currentPlayerDiceArray);
    gameState = "chooseDiceSequenceState"; // GAME STATE CHANGED TO CHOOSE-DICE SEQUENCE
    console.log(`game state is ${gameState}`);
    myOutputValue =
      `Player ${currentPlayer + 1} rolled ${currentPlayerDiceArray[0]} and ${
        currentPlayerDiceArray[1]
      }` +
      `<br><br> Player ${
        currentPlayer + 1
      }, please choose the sequence of your number by inputting 1 or 2`;
  } else if (gameState === "chooseDiceSequenceState") {
    myOutputValue = playerChooseDiceSequence(input);
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    gameState = "diceRollState";
    currentPlayerDiceArray = []; //To reset my diceArray so that the loop happens
    console.log(`current player is ${currentPlayer}`);
    console.log(gameState);
  }
  return myOutputValue;
};
