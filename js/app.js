
//credits: https://www.youtube.com/watch?v=Azx_uooP8rM 
//credits: https://javascript.plainenglish.io/build-tic-tac-toe-game-using-javascript-3afba3c8fdcc

////////////////////////////////
// Global Variables Here

const statusDisplay = document.querySelector(".game-status");

let gameActive = true
let currentPlayer = "X"
let gamePlay = ["", "", "", "", "", "", "", "", ""]

const winningMessage = () =>
`Player ${currentPlayer} has won.`
const drawMessage = () => 
`Game is a draw`
const currentPlayerTurn = () =>
`its ${currentPlayer} turn`

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



////////////////////////////////
// Functions For Game Logic Here
//choose cell
function chooseCellPlayed(clickedCell, clickedCellIndex) {
    gamePlay[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}

statusDisplay.innerHTML = currentPlayerTurn()
//change players 
function choosePlayerChanged () {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    statusDisplay.innerHTML = currentPlayerTurn()
}
//choose results 
function chooseResultCheck() {
    let roundWon = false
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gamePlay[winCondition[0]];
        let b = gamePlay[winCondition[1]];
        let c = gamePlay[winCondition[2]];
        
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true
            break
        }
    }

if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
}

let roundDraw = !gamePlay.includes("")
if (roundDraw) {
    statusDisplay.innerHTML = drawMessage ();
    gameActive = false
    return
}

choosePlayerChanged();
}

function chooseCellClick (clickedCellEvent) {
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))

if (gamePlay[clickedCellIndex] !== "" || !gameActive){
    return
}

chooseCellPlayed(clickedCell, clickedCellIndex)
chooseResultCheck();


}

function chooseRestartGame() {
    gameActive = true
    currentPlayer = "O"
     gamePlay = ["", "", "", "", "", "", "", "", ""]
     statusDisplay.innerHTML = currentPlayerTurn()

    document.querySelectorAll(".cell")
    .forEach((cell) => (cell.innerHTML = ""))
}



////////////////////////////////
// Event Listeners Here
document.querySelectorAll(".cell")
.forEach((cell) => cell.addEventListener("click", chooseCellClick))

document.querySelector(".game-restart")
.addEventListener("click", chooseRestartGame)


////////////////////////////////
