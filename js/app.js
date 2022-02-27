// Global variables that store a NodeList of DOM elements or individual DOM nodes
const cells = document.querySelectorAll('.ttt-cell')
const turnNotification = document.getElementById('turn-heading')
const gameStatusNotification = document.getElementById('game-status-heading')
const restartGameButton = document.getElementById('restart-game-btn')
// Global variables that describe the initial game state or internal game logic
let isGameOver = false
let currentPlayerToken = 'X'
// A representation of the initial state of the gameboard: an array of 9 empty string elements
const defaultBoardState = new Array(9).fill('')
let currentBoardState = [...defaultBoardState]
// A nested array representation of all possible winning combinations
const pathsToVictory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

const isCellClaimed = (cell) => {
  // The innerText of an occupied cell is 'X' or 'O', which is truthy,
  // and the innerText of a vacant cell is an empty string, which is falsy
  return !!cell.innerText

/* Claims the clicked cell for the current player by styling the DOM node according to their token */
const claimCell = (clickedCell) => {
  clickedCell.classList.add(currentPlayerToken.toLowerCase())
  clickedCell.innerText = currentPlayerToken
}
/* 
 * Updates the array representation of the current state of the gameboard
 * by placing the current player's token at the appropriate index  
 */
const modifyCurrentBoardState = (clickedCell) => {
  const idx = clickedCell.id.replace('ttt-cell-', '')
  board[idx] = currentPlayerToken
}

getIsGameWon = () => {
  return pathsToVictory.some((pathToVictory) => {
    const [index1, index2, index3] = pathToVictory
    return (
      board[index1] &&
      board[index1] === board[index2] &&
      board[index1] === board[index3]
    )
  })
}

const getIsGameTied = () => {
  return !getIsGameWon() && !board.includes('')
}

const endGame = (victorious = true) => {
  isGameOver = true
  turnNotification.innerText = ''
  if (victorious) {
    gameStatusNotification.innerText = `Victory is yours, Player ${currentPlayerToken}!`
  } else {
    gameStatusNotification.innerText = "It's a tie!"
  }
}

const checkGameStatus = () => {
  if (getIsGameWon()) {
    endGame()
  } else if (getIsGameTied()) {
    endGame(false)
  }
}

const swapCurrentPlayer = () => {
  currentPlayerToken = currentPlayerToken === 'X' ? 'O' : 'X'
  if (!isGameOver) {
    turnNotification.innerText = `Take your turn, Player ${currentPlayerToken}!`
  }
}

const takeTurn = (e) => {
  // Return early if the game is won or tied
  if (isGameOver) {
    return
  }
  const clickedCell = e.target
  // Return early if the desired spot is already taken
  if (isCellClaimed(clickedCell)) {
    alert('That cell has already been claimed! Please try again.')
    return
  }
  claimCell(clickedCell)
  modifyCurrentBoardState(clickedCell)
  checkGameStatus()
  swapCurrentPlayer()
}

const clearNotifications = () => {
  turnNotification.innerText = 'Take your turn, Player X!'
  gameStatusNotification.innerText = ''
}

/* Restores the default initial game state */
const resetGameDefaults = () => {
  isGameOver = false
  currentPlayerToken = 'X'
  currentBoardState = [...defaultBoardState]
  clearCells()
  clearNotifications()
}
// Attach click event listeners
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', takeTurn)
}

restartGameButton.addEventListener('click', resetGameDefaults)
