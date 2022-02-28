// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.



////////////////////////////////
// Global Variables Here
let player
let goFirst = -1
let board
let count = 0
let xWin = 0
let oWin = 0
let dWin = 0
let winner = false
const playAnother = document.getElementById('playAnother')
const X = document.getElementById('xScore')
const O = document.getElementById('oScore')
const D = document.getElementById('dScore')
////////////////////////////////
// Functions For Game Logic Here




////////////////////////////////
// Event Listeners Here
//Event listener for board clicks (a selector on a section of the board)

//Event listener for clicking on play again button


////////////////////////////////
