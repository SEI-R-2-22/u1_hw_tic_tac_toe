// Global Variables Here
let currentPlayer = "X";
let turnCount = -1;
let currentGameTurnCount = 0;
let isWinner = false;
let gridSize = 3; /// FUTURE DEVELOPMENT could change size of board?
let wins = {
  "playerX" : 0, 
  "playerO" : 0, 
  "ties" : 0
};

const boxes = document.querySelectorAll('.square');
const scoreBoxes = {
  "playerX" : document.querySelector("#score-x"),
  "playerO" : document.querySelector("#score-o"),
  "ties" : document.querySelector("#score-ties")
};
const messageBar = document.querySelector('#message');
const resetButton = document.querySelector('button#reset');
  resetButton.style.display = "none";
const compPlayerCheckbox = document.querySelector("#comp-player");

let boxMatrix = [];

// FILL BOXMATRIX WITH IDs OF ALL BOXES

const startBoxMatrix = () => {
  for (let i=0; i < gridSize; i++) { 
    boxMatrix[i] = [];
    for (j=0; j < gridSize; j++) {
      boxMatrix[i][j] = "" + String.fromCharCode(j+65).toLowerCase() + (i+1);
    }
  }
}


////////////////////////////////
// Functions For Game Logic Here
const restart = () => {
  isWinner = false;
  currentGameTurnCount = 0;
  resetButton.style.display = "none";
  messageBar.style.opacity = "0";
  stepTurnCount();
  startBoxMatrix();

  const allSquares = document.querySelectorAll(".square");

  for (let i=0; i<allSquares.length; i++) {
    allSquares[i].innerText = "";  
  }

  if (compPlayerCheckbox.checked && currentPlayer == "O") {
    stepTurnCount();
  }
}
const recordMove = (loc) => {

  for (let i=0; i < boxMatrix.length; i++) {
    for (let j=0; j < boxMatrix[i].length; j++) {
      if (boxMatrix[i][j] === loc) boxMatrix[i][j] = currentPlayer;

    }
  } 
  
}

const stepTurnCount = () => {
  turnCount++;
  //document.querySelector("#turn-count").innerText = turnCount;

  if (turnCount % 2 == 0) {
    currentPlayer = "X";
  }
  else if (turnCount % 2 == 1) {
    currentPlayer = "O";
  }
  document.querySelector("#player").innerText = currentPlayer;
}

const winCheck = () => {
  //CHECK ROWS
  for (let i=0; i<gridSize; i++) {
    let c = 0; // counter: # times [currentPlayer] appears in row 
    // Check [j]th element in row [i]
    for (let j=0; j < gridSize; j++) {
      if (boxMatrix[i][j] === currentPlayer) c++;
      if (j===gridSize-1 && c===gridSize) return currentPlayer;
    }  
  }
//CHECK COLS
  for (let i=0; i<gridSize; i++) {
    let c = 0; // counter: # of times [currentPlayer] appears in row 
    // Check [i]th element in column [j]
    for (let j=0; j < gridSize; j++) {
      if (boxMatrix[j][i] === currentPlayer) c++;
      if (j===gridSize-1 && c===gridSize) return currentPlayer;
    }  
  }

  //CHECK DIAGONALS
  let cAsc = 0; // To count in-order diagonal (1,1 > n,n)
  let cDesc = 0;  // To count reverse-order diagonal (1,n > n,1)
  for (let i=0; i<gridSize; i++) {
    if (boxMatrix[i][i] === currentPlayer) cAsc++;
    if (boxMatrix[i][gridSize-(i+1)] === currentPlayer) cDesc++; 
    if (i===gridSize-1 && (cAsc===gridSize || cDesc===gridSize)) {
      return currentPlayer;
    }
  }
  return false;
}

// FUNCTIONS FOR COMPUTER PLAYER FUNCTIONALITY
function findCurrentOpenSquares() {
  const allSquares = Array.from(document.querySelectorAll(".square"));
  const openSquares = allSquares.filter(n => n.innerText == "");
  return openSquares;
}
function computerTurn() {
  const openSquaresNodes = findCurrentOpenSquares();
  if (compPlayerCheckbox.checked && currentPlayer == "O") {
    let rand = Math.floor(Math.random() * openSquaresNodes.length);
    let randTime = Math.floor(Math.random() * 1000);
    setTimeout(() => { openSquaresNodes[rand].click(); }, 200+randTime);
  }
}




//// RESIZE THE BOARD:

function resizeBoard(n) {
  let divStack = "";
  let newMatrix = [];

  ///// Create n x n matrix
  for (let i=0; i < n; i++) { 
    newMatrix[i] = [];
    for (j=0; j < n; j++) {
      newMatrix[i][j] = "" + String.fromCharCode(j+65).toLowerCase() + (i+1);
    }
  }

  ///// Create n^2 divs, with ids populated from newMatrix
  for (let i=0; i < n**2; i++) {
    divStack += `<div class="square" id="${newMatrix.flat()[i]}"></div>
`;
  }
  ///// OVERWRITE EXISING ELEMENTS with new board size
  const gameboard = document.querySelector(".gameboard");
  gameboard.innerHTML = divStack;
  let newGridLayout = `repeat(${n}, ${100/n}%)`;
  gameboard.style.gridTemplateRows = newGridLayout;
  gameboard.style.gridTemplateColumns = newGridLayout;
  boxMatrix = newMatrix;
  gridSize = n;
  turnCount = 0;
  currentGameTurnCount = 0;
  restart();
  addEventListenersToSquares();

}
////////////////////////////////
// Event Listeners Here
function addEventListenersToSquares() {
  const allBoxes = document.querySelectorAll(".square");

  for (let i=0; i < allBoxes.length; i++) {
  
    allBoxes[i].addEventListener('click', function sqClick() {
      currentGameTurnCount++;
      console.log(currentGameTurnCount);

      const thisId = allBoxes[i].getAttribute("id");
      let thisBox = document.querySelector('#'+thisId);
      if (isWinner) {
      }
      else if (thisBox.innerText !== "") {
      }
      else {
        if (currentPlayer == "X") thisBox.innerHTML = `<span class="red">${currentPlayer}</span>`;
        else if (currentPlayer == "O") thisBox.innerHTML = `<span class="blue">${currentPlayer}</span>`;
  
        recordMove(thisId); 
  
        let winner = winCheck();
        if (winner) {
          messageBar.style.opacity = "100";
  
          messageBar.innerText = `Winner: ${winner}!`;
          isWinner = true;
          resetButton.style.display = "block";
          
          if (winner == "X") {
            wins.playerX += 1;
            scoreBoxes.playerX.innerText = wins.playerX;        
          }
          else if (winner == "O") {
            wins.playerO += 1;
            scoreBoxes.playerO.innerText = wins.playerO;
          }
        } else if (currentGameTurnCount == gridSize**2) {
          console.log(currentGameTurnCount, gridSize);
          resetButton.style.display = "block";
          wins.ties += 1;
          messageBar.style.opacity = "100";
          messageBar.innerText = "It's a tie. Play again!";
          scoreBoxes.ties.innerText = wins.ties;
        }
        else {
          stepTurnCount();
          computerTurn();
        }
        
      }
    });
  }
}

resetButton.addEventListener('click', restart);

compPlayerCheckbox.addEventListener('click',computerTurn);

const gridSizeBtn = document.querySelector("#grid-size-btn");
gridSizeBtn.addEventListener('click',() => {
  const newGridSize = document.querySelector("#grid-size-select").value;
  resizeBoard(parseInt(newGridSize));
  restart();
});

////


//resizeBoard(5);



////////////////////////////////

//// ONCE ALL SCRIPT IS PARSED, 
//// ACTUALLY START THE GAME:
restart();
addEventListenersToSquares();



