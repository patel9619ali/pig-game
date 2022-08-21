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
let strOne;
let holdOne;
let strTwo;
let holdTwo;
let turnsLeftPlayer1;
let turnsLeftPlayer2;
let imageTag = document.createElement("img");
let init = function calcInit(){
strOne = 0;
holdOne = 0;
strTwo = 0;
holdTwo = 0;
turnsLeftPlayer1 = 3;
turnsLeftPlayer2 = 3;
playerOneTurn.textContent = turnsLeftPlayer1;
playerTwoTurn.textContent = turnsLeftPlayer2;
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
playerOneCurrentScore.textContent = 0;
playerTwoCurrentScore.textContent = 0;
imageTag.classList.add("image_remove");
}
init();
let newGame = document.getElementById("new_game");

let diceRandom = Math.trunc(Math.random() * 6 + 1);
console.log(`For Gloabal ${diceRandom}`);

newGame.addEventListener('click' , init)

function imageAdding(){
  imageTag.src = `file:///C:/Users/PATEL%20ALI/Downloads/Pig-Game-master/pig-game-master/Assets/images/dice_${diceRandom}.png`;
  imageTag.classList.add("dice_image");
  imageTag.classList.remove("image_remove");
  diceRolled.appendChild(imageTag);
}
rollDice.addEventListener("click", function () {
  if (turnsLeftPlayer1 > 0) {
    diceRandom = Math.trunc(Math.random() * 6 + 1);
    imageAdding();
    playerOne(diceRandom);
  }
  if (turnsLeftPlayer1 <= 0 && turnsLeftPlayer2 > 0) {
    diceRandom = Math.trunc(Math.random() * 6 + 1);
    imageAdding();
    playerTwo(diceRandom);
  }
  whoWon();
});
holdDice.addEventListener("click", function () {
  if (turnsLeftPlayer1 > 0) {
    playerOneHold();
  } else if (turnsLeftPlayer2 > 0) {
    playerTwoHold();
  }
  whoWon();
});
function playerOne(diceRandom) {
  strOne += diceRandom;
  playerOneCurrentScore.textContent = strOne;
  if (diceRandom === 1) {
    turnsLeftPlayer1--;
    playerOneTurn.textContent = turnsLeftPlayer1;
    alert('You Got one')
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
function playerOneHold() {
  holdOne += strOne;
  playerOneScore.textContent = holdOne;
  strOne = 0;
  playerOneCurrentScore.textContent = strOne;
  --turnsLeftPlayer1;
  playerOneTurn.textContent = turnsLeftPlayer1;
}
function playerTwoHold() {
  holdTwo += strTwo;
  playerTwoScore.textContent = holdTwo;
  strTwo = 0;
  playerTwoCurrentScore.textContent = strTwo;
  turnsLeftPlayer2--;
  playerTwoTurn.textContent = turnsLeftPlayer2;
}

function whoWon() {
  if (turnsLeftPlayer1 == 0 && turnsLeftPlayer2 == 0) {
    if (playerOneScore.textContent > playerTwoScore.textContent) {
      console.log(`${playerOneScore.textContent} > ${playerTwoScore.textContent}`)
      alert(`Player One Won`);
    } else if (playerOneScore.textContent < playerTwoScore.textContent) {
      console.log(`${playerOneScore.textContent} < ${playerTwoScore.textContent}`)
      alert(`Player Two Won`);
    } else {
      alert(`Its a Draw`);
    }
  }
}
