// Global Variables Here
let currentPlayer = "X";
let turnCount = 0;
let gridSize = 3; /// FUTURE DEVELOPMENT could change size of board.

const boxes = document.querySelectorAll('.square');
const resetButton = document.querySelector('button#reset');
const boxMatrix = [];

// FILL BOXMATRIX WITH IDs OF ALL BOXES

const startBoxMatrix = () => {
  for (let i=0; i < gridSize; i++) { 
    boxMatrix[i] = [];
    for (j=0; j < gridSize; j++) {
      boxMatrix[i][j] = "" + String.fromCharCode(j+65).toLowerCase() + (i+1);
    }
  }
}

const restart = () => {
  startBoxMatrix();
  for (let i=0; i<boxes.length; i++) {
    boxes[i].innerText = "";  
  }
}
////////////////////////////////
// Functions For Game Logic Here

const recordMove = (loc) => {

  for (let i=0; i < boxMatrix.length; i++) {
    for (let j=0; j < boxMatrix[i].length; j++) {
      if (boxMatrix[i][j] === loc) boxMatrix[i][j] = currentPlayer;

    }
  } 
  
}

const stepTurnCount = () => {
  turnCount++;
  document.querySelector("#turn-count").innerText = turnCount;

  if (turnCount % 2 == 0) currentPlayer = "X";
  else if (turnCount % 2 == 1) currentPlayer = "O";
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
  for (let i=0; i<gridSize; i++) {
    let cAsc = 0; // To count in-order diagonal (1,1 > n,n)
    let cDesc = 0; // To count reverse-order diagonal (1,n > n,1)
    if (boxMatrix[i][i] === currentPlayer) cAsc++;
    if (boxMatrix[i][gridSize-(i+1)] === currentPlayer) cDesc++; 
    if (i===gridSize-1 && (cAsc===gridSize || cDesc===gridSize)) {return currentPlayer;}
  }
  return false;
}


function removeAllEventListeners() {
  const liveBoard = document.querySelector(".gameboard");
  const lockedBoard = liveBoard.cloneNode(true);
  liveBoard.parentNode.replaceChild(lockedBoard, liveBoard);
}

////////////////////////////////
// Event Listeners Here
for (let i=0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function sqClick() {
    const thisId = boxes[i].getAttribute("id");
    document.querySelector('#'+thisId).innerText = currentPlayer;
    
    recordMove(thisId); //NEED TO WRITE THIS: LOOP THROUGH BOX MATRIX UNTIL FIND ID VALUE, THEN REPLACE IT WITH CURRENT PLAYER.

//    console.log(boxMatrix);
    boxes[i].removeEventListener('click',sqClick);

    let winner = winCheck();
    if (winner) {
      console.log(`Winner: ${winner}!`);
      removeAllEventListeners();
      
    }
    else stepTurnCount();
  });
}


////////////////////////////////
restart();