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
    playerDiceArray.push(randomDiceRolls());
    counter += 1;
  }
  return [playerDiceArray[0], playerDiceArray[1]];
};

// Global Variables
var gameState = "diceRollState";
var myOutputValue = "";
var playerDiceArray = [];
var currentPlayer = 1;

var playerChooseDiceSequence = function (input) {
  if (input == 1) {
    var playerScore = Number(
      String(playerDiceArray[0]) + String(playerDiceArray[1])
    );
    console.log(playerScore);
    return `Your Score is ${playerScore}`;
  } else if (input == 2) {
    var playerScore = Number(
      String(playerDiceArray[1]) + String(playerDiceArray[0])
    );
    console.log(playerScore);
    return `Your Score is ${playerScore}`;
  }
};

var main = function (input) {
  while (counter <= 2)
    if (gameState == "diceRollState") {
      playerRollDice();
      console.log(`game state is ${gameState}`);
      console.log(playerDiceArray);
      gameState = "chooseDiceSequenceState"; // GAME STATE CHANGED TO CHOOSE-DICE SEQUENCE
      console.log(`game state is ${gameState}`);
      myOutputValue =
        `Player 1 rolled ${playerDiceArray[0]} and ${playerDiceArray[1]}` +
        `<br><br> Player ${currentPlayer}, please choose the sequence of your number by inputting 1 or 2`;
    } else if (gameState === "chooseDiceSequenceState") {
      myOutputValue = playerChooseDiceSequence(input);
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      gameState = "rollDiceState";
      console.log(`current player is ${currentPlayer}`);
      console.log(gameState);
    }
  return myOutputValue;
};
