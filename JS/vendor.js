let playerOneTurn = document.getElementById("player_one_turn");
let playerTwoTurn = document.getElementById("player_two_turn");
let playerOneScore = document.getElementById("player_one_score");
let playerTwoScore = document.getElementById("player_two_score");
let playerOneCurrentScore = document.getElementById("current_one_score");
let playerTwoCurrentScore = document.getElementById("current_two_score");
let diceNumber = document.getElementById("dice_number");
let rollDice = document.getElementById("roll_dice");
let holdDice = document.getElementById("hold_dice");
let strOne = 0;
let holdOne = 0;
let turnsLeftPlayer1 = 5;
let turnsLeftPlayer2 = 5;
// Random Number Generator from 1 to 6
let diceRandom = Math.trunc(Math.random() * 7);
rollDice.addEventListener("click", function () {
  diceRandom = Math.trunc(Math.random() * 6 + 1);
  diceNumber.textContent = diceRandom;
  playerOne(diceRandom);
});
function playerOne(diceRandom) {
  strOne += diceRandom;
  playerOneCurrentScore.textContent = strOne;
  console.log(strOne);
  if (diceRandom === 1) {
    turnsLeftPlayer1--;
    playerOneTurn.textContent = turnsLeftPlayer1;
    strOne = 0;
    playerOneCurrentScore.textContent = strOne;
  }
}
holdDice.addEventListener("click", function () {
  holdOne += strOne;
  playerOneScore.textContent = holdOne;
  strOne = 0;
  playerOneCurrentScore.textContent = strOne;
  turnsLeftPlayer1--;
  playerOneTurn.textContent = turnsLeftPlayer1;
});
