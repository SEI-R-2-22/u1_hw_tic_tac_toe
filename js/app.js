// Global Variables Here
let gameStarted = true; // Boolean that tracks if game is being played

let currentPlayer = "Player 1"; // Variable to show who's turn and also declaring player one turn

let playerTurn = 0 // Variable used to track turn

let playerOneScore = 0; // Variable to track player one's score

let p1ScoreDisplay = document.querySelector("#p1-score-display"); // Variable used to display player one score

let playerTwoScore = 0; // Variable to track score

let p2ScoreDisplay = document.querySelector("#p2-score-display"); // Variable used to display player two score

let drawScore = 0; // Variable to track draw score

let drawScoreDisplay = document.querySelector("#draw-score-display"); // Variable used to display draw score

let box = document.querySelectorAll(".box"); // Create an array of all the boxes inside gameboard

let boxesClicked = ["", "", "", "", "", "", "", "", ""]; // Array used to store moves and keep track of unclicked boxes

let aiButton = document.querySelector("#ai-mode"); //Variable to hold aibutton

let playAi = false;  // Variable to track if playing against computer

let p2head = document.querySelector("#p2-head");

let twoPlayerBtn = document.querySelector("#two-player-mode");

const toGetThreeInRow = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], //// Array containing all the possible "3 in a row lines" within 3x3 gameboard
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let replayBtn = document.querySelector(".replay-btn"); //  Variable to contain replay button

const gameStatus = document.querySelector("#game-status"); // Variable used to chnage display messages

const winnerStatus = () => currentPlayer + " has won!" // Arrow Function to declare winner

const drawStatus = () => "It's a Draw!"; // Arrow Function to declare a draw

const currentPlayerTurn = () => currentPlayer + "\'s turn!" // Arrow function that shows who's turn









////////////////////////////////


///// Functions For Game Logic Here
gameStatus.innerText = currentPlayerTurn(); // Starts with player 1 turn


///// Function that marks box clicked
function boxMarked(clickedBox, clickedBoxIndex) {
  if (playerTurn % 2 === 0) { // Checks if it's player one turn
    playerOneGo(clickedBox, clickedBoxIndex);
    // boxesClicked[clickedBoxIndex] = "X"; // storing move into our array to keep track
    // clickedBox.innerText = "X" // Marks "X" on the box that is click on gameboard
    // // playerTurn++;

    gameStatus.innerText = currentPlayerTurn();
  } else if (playerTurn % 2 === 1) { // Checks if it's player two turn
    playerTwo(clickedBox, clickedBoxIndex);
    // boxesClicked[clickedBoxIndex] = "O"; // Storing move into our array to keep track
    // clickedBox.innerText = "O;" // Marks "O" on the box that is click on gameboard
    // // playerTurn++;

  }

};

////Function that defines player's turn
function playerOneGo(clickedBox, clickedBoxIndex) {
    boxesClicked[clickedBoxIndex] = "X";
    clickedBox.innerText = "X";
};
function playerTwo(clickedBox, clickedBoxIndex) {
    boxesClicked[clickedBoxIndex] = "O";
    clickedBox.innerText = "O"
};

///// Function that changes player turn
function playerChange() {
  playerTurn++;
  currentPlayer === "Player 1" ? currentPlayer = "Player 2" : currentPlayer = "Player 1" // Just practicing Tenary Operator
  gameStatus.innerText = currentPlayerTurn(); // Changes diplay text to current player turn
};


///// Function to check everything after each click
const checkResults = () => {
  let gameEnd = false; // Boolean to track is game ends
  for (let i = 0; i < toGetThreeInRow.length; i++) { // For loop used to iterate through array of "3 in a row"
    const gotThreeInRow = toGetThreeInRow[i]; // Variable to hold each "line of 3 in a row"
    let a = boxesClicked[gotThreeInRow[0]];
    let b = boxesClicked[gotThreeInRow[1]]; // Variables to hold each "possible line on gameboard"
    let c = boxesClicked[gotThreeInRow[2]];
    if (a === "" || b === "" || c === "") { // Checks if any boxes in the "line" are empty
      continue;
    }
    if (a === b && b === c) { // Checks if boxes in the "line" are same
      gameEnd = true; // Ends game if statement is true
      break;
    }
  }
  if (gameEnd) { // If statement to check who won
    gameStatus.innerText = winnerStatus(); // Declares winner on page
    if (currentPlayer === "Player 1") {
      playerOneScore++;
      p1ScoreDisplay.innerText = playerOneScore;
    } else { //// If/else statement that changes score and displays updated score of winner
      playerTwoScore++;
      p2ScoreDisplay.innerText = playerTwoScore;
    }
    gameStarted = false; // Changes the game to inactive
    replayBtn.style.visibility = "visible"; // Shows replay button
    return;
  }
  let gameDraw = !boxesClicked.includes(""); // Variable that checks if all boxes have been marked without a "3 in a row"
  if (gameDraw) {
    drawScore++;
    drawScoreDisplay.innerText = drawScore; //// If statement that changes draw score and displays updated draw score
    gameStatus.innerText = drawStatus();
    gameStarted = false; // Changes the game to inactive
    replayBtn.style.visibility = "visible"; // Shows replay button
    return;
  }
  playerChange(); // Calls function to change current player if game ending conditions are not met

};


///// Function that's call when box is clicked
function boxClicked(clickedBoxEvent) {
  const clickedBox = clickedBoxEvent.target; // Variable that holds the box that was clicked from event listener
  const clickedBoxIndex = parseInt(clickedBox.dataset.index); // Variable that holds index of box
  // const boxclicktest = boxesClicked[clickedBoxIndex];
  if (boxesClicked[clickedBoxIndex] !== "" || !gameStarted) { // If statement that will ignore click if already marked or if the game has already ended
    return;
  }
  boxMarked(clickedBox, clickedBoxIndex); // Invokes function
  checkResults(); // Check if game ended

  // console.log(boxclicktest);
};


///// Function that is called when replay button is clicked
function replay() {
  replayBtn.style.visibility = "hidden"; // Hides button after it's clicked
  gameStatus.innerText = currentPlayerTurn(); // Resets display to current player
  gameStarted = true; // Starts the game
  playerTurn = 0; // Resets player turn count
  currentPlayer = "Player 1" // Reset to Player 1 turn
  for (let i = 0; i < box.length; i++) {
    box[i].innerText = ""; //// For loop that clears out gameboard and array keeping track of moves made
    boxesClicked[i] = "";
  }
};


function aiMode() {
    playAi = true;
    aiButton.style.visibility = "hidden";
    p2head.innerText = "AI";
    twoPlayerBtn.style.visibility = "visible";
};

function twoPlayerMode() {
    playAi = false;
    aiButton.style.visibility = "visible";
    p2head.innerText = "Player 2";
    twoPlayerBtn.style.visibility = "hidden";
};   
    
    


////////////////////////////////
// Event Listeners Here
for (let i = 0; i < box.length; i++) {              
  box[i].addEventListener("click", boxClicked); //// For loop that add event listener to each box on gameboard
};
twoPlayerBtn.addEventListener("click", twoPlayerMode); //Add event listener to player mode button
aiButton.addEventListener("click", aiMode); // Add event listener to play computer button
replayBtn.addEventListener("click", replay); // Adds event listener to replay button
///////////////////////////////