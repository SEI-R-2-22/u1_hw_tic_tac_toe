// Global Variables Here

const playerX = 'X';

const playerO = 'O';

let t0 = document.getElementById('t0');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');
let t5 = document.getElementById('t5');
let t6 = document.getElementById('t6');
let t7 = document.getElementById('t7');
let t8 = document.getElementById('t8');

let xScore = 0;
let oScore = 0;


const gameBoard = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'];

let boardStatus = [0,0,0,0,0,0,0,0,0]

let currentPlayer;

let currentTile;

let currentTileId;

let gameStatus = false;

let sum;

let Message = document.getElementById('Message');

////////////////////////////////
// Functions For Game Logic Here

// Clear Grid from previous game
function clearGrid() {

    boardStatus = [0,0,0,0,0,0,0,0,0];
    t0.innerText = '';
    t1.innerText = '';
    t2.innerText = '';
    t3.innerText = '';
    t4.innerText = '';
    t5.innerText = '';
    t6.innerText = '';
    t7.innerText = '';
    t8.innerText = '';
  
    // Clear Red class from grid
    if(t0.classList.contains('red')===true) {
        t0.classList.toggle('red')
    }
    if(t1.classList.contains('red')===true) {
        t1.classList.toggle('red')
    }
    if(t2.classList.contains('red')===true) {
        t2.classList.toggle('red')
    }
    if(t3.classList.contains('red')===true) {
        t3.classList.toggle('red')
    }
    if(t4.classList.contains('red')===true) {
        t4.classList.toggle('red')
    }
    if(t5.classList.contains('red')===true) {
        t5.classList.toggle('red')
    }
    if(t6.classList.contains('red')===true) {
        t6.classList.toggle('red')
    }
    if(t7.classList.contains('red')===true) {
        t7.classList.toggle('red')
    }
    if(t8.classList.contains('red')===true) {
        t8.classList.toggle('red')
    }
    // clear blue class from grid
    if(t0.classList.contains('blue')===true) {
        t0.classList.toggle('blue')
    }
    if(t1.classList.contains('blue')===true) {
        t1.classList.toggle('blue')
    }
    if(t2.classList.contains('blue')===true) {
        t2.classList.toggle('blue')
    }
    if(t3.classList.contains('blue')===true) {
        t3.classList.toggle('blue')
    }
    if(t4.classList.contains('blue')===true) {
        t4.classList.toggle('blue')
    }
    if(t5.classList.contains('blue')===true) {
        t5.classList.toggle('blue')
    }
    if(t6.classList.contains('blue')===true) {
        t6.classList.toggle('blue')
    }
    if(t7.classList.contains('blue')===true) {
        t7.classList.toggle('blue')
    }
    if(t8.classList.contains('blue')===true) {
        t8.classList.toggle('blue')
    }



}

// Choose who goes first
function gameStart() {

    clearGrid();

    gameStatus = true;

    let playerSelect = Math.random();

    if (playerSelect <= 0.5) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
    Message.innerHTML = (`${currentPlayer}'S GO FIRST`);

    initializeScore();
}

// Set up scoreboard
function initializeScore() {
    document.querySelector('.scoreX').innerText=(`X: ${xScore}`);
    document.querySelector('.scoreO').innerText=(`O: ${oScore}`);
}


//alternate turns
function changePlayer () {
    if (currentPlayer === 'O') {
        currentPlayer = playerX;
    } else if (currentPlayer === 'X') {
        currentPlayer = playerO;
    }

    Message.innerHTML = (`${currentPlayer}'S TURN`);
}

function makeMove(tileClick) {
    
    // check game status

    if (gameStatus === true) {

        currentTile = tileClick.target;

        currentTileId = currentTile.id;

        // if tile is unoccupied

        if (currentTile.innerText === "") {

            currentTile.innerText = currentPlayer;

            assignColor();

            updateGameBoard();

            changePlayer();

            checkWinConditions();

        } else {
            alert(`THIS TILE HAS BEEN PLAYED. CHOOSE ANOTHER TO PROCEED.`);
        }
    } else {
        alert(`PRESS START TO BEGIN`);
    }

}

function assignColor() {
    if (currentPlayer === playerX) {
        currentTile.classList.toggle("red")
          
    } else if (currentPlayer === playerO) {
        currentTile.classList.toggle("blue");
    }
};

function updateGameBoard() {
    if (currentPlayer === playerX) {
        for (i=0; i<gameBoard.length; i++) {

            if (currentTileId === gameBoard[i]) {
                boardStatus[i] = 1;
            }
        }
    } else if (currentPlayer === playerO) {
        for (i=0; i<gameBoard.length; i++) {
            if (currentTileId === gameBoard[i]) {
                boardStatus[i] = -1;
            }
        }

    }
    console.log(boardStatus);
}

function checkWinConditions() {
    //inspiration for checkWinConditions taken from https://chalk-tac-toe.surge.sh/

    if (boardStatus[0] + boardStatus[1] + boardStatus[2] === 3 || 
        boardStatus[3] + boardStatus[4] + boardStatus[5] === 3 || 
        boardStatus[6] + boardStatus[7] + boardStatus[8] === 3 || 
        boardStatus[0] + boardStatus[3] + boardStatus[6] === 3 ||
        boardStatus[1] + boardStatus[4] + boardStatus[7] === 3 ||
        boardStatus[2] + boardStatus[5] + boardStatus[8] === 3 ||
        boardStatus[0] + boardStatus[4] + boardStatus[8] === 3 ||
        boardStatus[2] + boardStatus[4] + boardStatus[6] === 3) {
        
        Message.innerHTML = "WINNER: THE X'S";

        xScore = xScore + 1;

        gameStatus = false;

    } else if (boardStatus[0] + boardStatus[1] + boardStatus[2] === -3 || 
        boardStatus[3] + boardStatus[4] + boardStatus[5] === -3 || 
        boardStatus[6] + boardStatus[7] + boardStatus[8] === -3 || 
        boardStatus[0] + boardStatus[3] + boardStatus[6] === -3 ||
        boardStatus[1] + boardStatus[4] + boardStatus[7] ===-3 ||
        boardStatus[2] + boardStatus[5] + boardStatus[8] === -3 ||
        boardStatus[0] + boardStatus[4] + boardStatus[8] === -3 ||
        boardStatus[2] + boardStatus[4] + boardStatus[6] === -3) {

        Message.innerHTML = "WINNER: THE O'S";

        oScore = oScore + 1;

        gameStatus=false;
    } else {
        checkDraw();
    }
}

function checkDraw() {
    sum = 1;
    for(i=1; i<boardStatus.length; i++) {
 
        if (boardStatus[i] !== 0) {
            sum = sum + 1;
        }
    }
    console.log(sum);

    if(sum >= 9) {
        Message.innerHTML = "AND THAT'S A DRAW!"; 
        gameStatus=false;
    }
}



////////////////////////////////
// Event Listeners Here
document.getElementById('start').addEventListener('click',gameStart);
document.querySelectorAll('.tile').forEach(tile => tile.addEventListener('click', makeMove));
////////////////////////////////
