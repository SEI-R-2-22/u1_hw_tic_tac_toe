// Global Variables Here
const TicTacToe = 'game';
const player1 = 'X';
const player = 'O';
let gameStart = true;
let currentPlayer = "X";
const statusDisplay = document.querySelector('.game--status');
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ends in a draw`;
let xTurn = true 
const oTurn = false 



////////////////////////////////
// Functions For Game Logic Here

function print() {     
if (xTurn===true) {
//code to be executed }
cell.innerHTML = "x"
xTurn = !xTurn
} else {
cell.innerHTML = "o"
xTurn = !xTurn
}}

////////////////////////////////
// Event Listeners Here



for (let i = 1; i < 10; i++) {
  // targeting divs 
    let cell = document.getElementById(`c${i}`);
}


if (oTurn===true) {
    //code to be executed }
    cell.innerHTML = "o"
    oTurn = !oTurn
    
}else {cell.innerHTML = "x"
       oTurn = !oTurn
}

if (xTurn===true) {
    //code to be executed }
    cell.innerHTML = "x"
    xTurn = !xTurn
    
}else {cell.innerHTML = "o"
       oTurn = !oTurn
}

console.log('Next person is...');
if (currentPlayer === 'x') {
}else currentPlayer = 'o'


    

    // adding event listener to divs
   cell.addEventListener('click',function(){
       print()
   })



////////////////////////////////


const winningConditions = [
    [2,4,6],
    [8,2,4],
    [8,2,6],
    [6,4,8],
    [4,6,2],
    [4,8,2],
];

function gameOver()
{
gameBoardWinner = '?';
return
winner(2,4,6)
winner(4,8,2)
}
