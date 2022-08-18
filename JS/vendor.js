let playerOneTurn = document.getElementById("player_one_turn");
let playerTwoTurn = document.getElementById("player_two_turn");
let playerOneScore = document.getElementById("player_one_score");
let playerTwoScore = document.getElementById("player_two_score");
let playerOneCurrentScore = document.getElementById("current_one_score");
let playerTwoCurrentScore = document.getElementById("current_two_score");
let diceNumber = document.getElementById("dice_number");
let rollDice = document.getElementById("roll_dice");
let holdDice = document.getElementById("hold_dice");
let diceRolled = document.getElementById("dice_rolled");
let strOne = 0;
let holdOne = 0;
let strTwo = 0;
let holdTwo = 0;
let turnsLeftPlayer1 = 5;
let turnsLeftPlayer2 = 5;

let diceRandom = Math.trunc(Math.random() * 7);
rollDice.addEventListener("click", function () {
  if(turnsLeftPlayer1 > 0){
    diceRandom = Math.trunc(Math.random() * 6 + 1);
    diceNumber.textContent = diceRandom;
    playerOne(diceRandom);
}
 if(turnsLeftPlayer1 <= 0){
    diceRandom = Math.trunc(Math.random() * 6 + 1);
    diceNumber.textContent = diceRandom;
    playerTwo(diceRandom);
}
});
holdDice.addEventListener("click", function(){
    if (turnsLeftPlayer1 > 0) {
        playerOneHold();
    }
    else if(turnsLeftPlayer2 > 0){
        playerTwoHold();
    }
});
function playerOne(diceRandom) {
      strOne += diceRandom;
      playerOneCurrentScore.textContent = strOne;
  if (diceRandom === 1) {
    turnsLeftPlayer1--;
    playerOneTurn.textContent = turnsLeftPlayer1;
    strOne = 0;
    playerOneCurrentScore.textContent = strOne;
  }
}
function playerTwo(diceRandom) {
    strTwo += diceRandom;
    playerTwoCurrentScore.textContent = strTwo;
if (diceRandom === 1) {
  turnsLeftPlayer2--;
  playerTwoTurn.textContent = turnsLeftPlayer2;
  strTwo = 0;
  playerTwoCurrentScore.textContent = strTwo;
}
}
function playerOneHold(){
    holdOne += strOne;
    playerOneScore.textContent = holdOne;
    strOne = 0;
    playerOneCurrentScore.textContent = strOne;
    --turnsLeftPlayer1;
    playerOneTurn.textContent = turnsLeftPlayer1;
  };
function playerTwoHold(){
    holdTwo += strTwo;
playerTwoScore.textContent = holdTwo;
strTwo = 0;
playerTwoCurrentScore.textContent = strTwo;
turnsLeftPlayer2--;
playerTwoTurn.textContent = turnsLeftPlayer2;
};
