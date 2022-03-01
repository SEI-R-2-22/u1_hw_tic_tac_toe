////////////////////////////////
// Global Variables Here
const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const playerOne = "X";
const playerTwo = "O";
let currentPlayer = playerOne;


////////////////////////////////
// Functions For Game Logic Here
function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
      if (hasPlayerWon(currentPlayer)) {
        playText.innerHTML = `${currentPlayer} is the winner!!!`;
        return;
      }
      currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
  }
  
  const hasPlayerWon = (player) => {
    if (spaces[0] === player) {
      if (spaces[1] === player && spaces[2] === player) {
        return true;
      }
      if (spaces[3] === player && spaces[6] === player) {
        return true;
      }
      if (spaces[4] === player && spaces[8] === player) {
        return true;
      }
    }
    if (spaces[8] === player) {
      if (spaces[2] === player && spaces[5] === player) {
        return true;
      }
      if (spaces[7] === player && spaces[6] === player) {
        return true;
      }
    }
    if (spaces[4] === player) {
      if (spaces[3] === player && spaces[5] === player) {
        return true;
      }
      if (spaces[1] === player && spaces[7] === player) {
        return true;
      }
      if (spaces[2] === player && spaces[6] === player) {
          return true;
      }
    }
  };


////////////////////////////////
// Event Listeners Here
const gameSquares = () => {
    boxes.forEach((box, index) => {
      let styleString = "";
      if (index < 3) {
        styleString += `border-bottom: 3px solid black;`;
      }
      if (index % 3 === 0) {
        styleString += `border-right: 3px solid black;`;
      }
      if (index % 3 === 2) {
        styleString += `border-left: 3px solid black;`;
      }
      if (index > 5) {
        styleString += `border-top: 3px solid black;`;
      }
      box.style = styleString;
  
      box.addEventListener("click", boxClicked);
    });
  };

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerHTML = `Tic-Tac-Toe`;

  currentPlayer = playerOne;
});

gameSquares();


////////////////////////////////
