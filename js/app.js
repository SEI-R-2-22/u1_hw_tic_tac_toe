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
let octothorp
let count = 0
let xWin = 0
let oWin = 0
let dWin = 0
let winner = false
const playAnother = document.getElementById('playAnother')
const X = document.getElementById('xScore')
const O = document.getElementById('oScore')
const D = document.getElementById('dScore')
const message = document.getElementById('message')
////////////////////////////////
// Functions For Game Logic Here
init()

function init() {
    board = ['', '', '', '', '', '', '', '', '',]
    goFirst *= -1
    player = goFirst
    X.innerText = xWin
    O.innerText = oWin
    D.innerText = dWin

    if (goFirst === 1) {
        message.textContent = 'x goes first'
    } else {
        message.textContent = 'o goes first'
    }
    document
        .querySelectorAll('section.scoreBoard')[0]
        .childNodes.forEach((element) => {
            element.textContent = ''
            element.color = ''
        })
    count = 0
    winner = false
}
function gameOver() {
    clear()
    return (count === 0 && winner === false) || winner === true
}

function checkWinner() {
    if (winner === false) {
        if (
            octothorp[0] + octothorp[1] + octothorp[2] === 3 ||
            octothorp[0] + octothorp[3] + octothorp[6] === 3 ||
            octothorp[0] + octothorp[4] + octothorp[8] === 3 ||
            octothorp[1] + octothorp[4] + octothorp[7] === 3 ||
            octothorp[2] + octothorp[5] + octothorp[8] === 3 ||
            octothorp[3] + octothorp[4] + octothorp[5] === 3 ||
            octothorp[0] + octothorp[1] + octothorp[2] === 3 ||
            octothorp[6] + octothorp[7] + octothorp[8] === 3
        ) {
            message.textContent = 'X WINS!'
            message.style.color = '#FFD700'
            winner = true
            xWin++
            X.innerText = xWin
        }
        if (
            octothorp[0] + octothorp[1] + octothorp[2] === -3 ||
            octothorp[0] + octothorp[3] + octothorp[6] === -3 ||
            octothorp[0] + octothorp[4] + octothorp[8] === -3 ||
            octothorp[1] + octothorp[4] + octothorp[7] === -3 ||
            octothorp[2] + octothorp[5] + octothorp[8] === -3 ||
            octothorp[3] + octothorp[4] + octothorp[5] === -3 ||
            octothorp[0] + octothorp[1] + octothorp[2] === -3 ||
            octothorp[6] + octothorp[7] + octothorp[8] === -3
        ) {
            message.textContent = 'O WINS!'
            message.style.color = '#FFD700'
            winner = true
            oWin++
            O.innerText = oWin
        }
    }
}

function render(cell) {
    if (winner === false) {
        markSpot = document.getElementById(`cll${cell}`)
        octothorp[cell] = player
        if (player === 1) {
            markSpot.textContent = 'X'
            markSpot.style.color = 'FF0000'
            message.textContent = 'O\'s Turn!'
        } else {
            markSpot.textContent = 'O'
            markSpot.style.color = 'FF0000'
            message.textContent = 'X\'s Turn!'
        }
    }
}
////////////////////////////////
// Event Listeners Here
//Event listener for board clicks (a selector on a section of the board)
function render(cell) {
    if (winner === false) {
        markSpot = document.getElementById(`cll${cell}`)
        octothorp[cell] = player
        if (player === 1) {
            markSpot.textContent = 'X'
            markSpot.style.color = 'FF0000'
            message.textContent = 'O\'s Turn!'
        } else {
            markSpot.textContent = 'O'
            markSpot.style.color = '800080'
            message.textContent = 'X\'s Turn!'
        }
    }
    player *= -1
    checkWinner()
    count++
    if (count === 9 && winner === false) {
        D.innerText = dWin
        clear()
        message.textContent = 'DRAW!'
        message.style.color = 'DB7093'
    }
}
//Event listener for clicking on play again button


////////////////////////////////
