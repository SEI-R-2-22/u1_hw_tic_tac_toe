// Global variables that store a NodeList or individual DOM nodes
const xScoreSpan = document.getElementById('x-score')
const oScoreSpan = document.getElementById('o-score')
const cells = document.querySelectorAll('.ttt-cell')
const turnNotification = document.getElementById('turn-heading')
const gameStatusNotification = document.getElementById('game-status-heading')
const restartGameButton = document.getElementById('restart-game-btn')
const resetScoresButton = document.getElementById('reset-scores-btn')
// Global variables that describe the initial game state
let xWinCount = 0
let oWinCount = 0
let isGameOver = false
let currentPlayerToken = 'X'
// Stores a representation of the initial state of the gameboard: an array of 9 empty string elements
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

/* Returns true if the given cell is occupied and false if not */
const isCellClaimed = (cell) => {
  // The innerText of an occupied cell is 'X' or 'O', which is truthy,
  // and the innerText of a vacant cell is an empty string, which is falsy
  return !!cell.innerText
}

/* Enables the current player to claim the clicked cell by styling the DOM node according to their token */
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
  currentBoardState[idx] = currentPlayerToken
}

/* Returns true if either player has won the game */
getIsGameWon = () => {
  return pathsToVictory.some((pathToVictory) => {
    const [index1, index2, index3] = pathToVictory
    return (
      currentBoardState[index1] &&
      currentBoardState[index1] === currentBoardState[index2] &&
      currentBoardState[index2] === currentBoardState[index3]
    )
  })
}

/* Returns true if the game is tied */
const getIsGameTied = () => {
  return !getIsGameWon() && currentBoardState.every((spot) => spot !== '')
}

/* Increments the winner's score and then displays each player's score */
const updateScores = () => {
  currentPlayerToken === 'X' ? xWinCount++ : oWinCount++
  xScoreSpan.innerText = xWinCount
  oScoreSpan.innerText = oWinCount
}

/* Marks the game as over and displays the game result */
const endGame = (victorious = true) => {
  isGameOver = true
  turnNotification.innerText = ''
  if (victorious) {
    gameStatusNotification.innerText = `Victory is yours, Player ${currentPlayerToken}!`
    updateScores()
  } else {
    gameStatusNotification.innerText = "It's a tie!"
  }
}

/* Determines the status of the game, handling a victory or a draw */
const checkGameStatus = () => {
  if (getIsGameWon()) {
    endGame()
  } else if (getIsGameTied()) {
    endGame(false)
  }
}

/* Switches the current player at the end of each turn */
const swapCurrentPlayer = () => {
  currentPlayerToken = currentPlayerToken === 'X' ? 'O' : 'X'
  if (!isGameOver) {
    turnNotification.innerText = `Take your turn, Player ${currentPlayerToken}!`
  }
}

/* Handles the player's turn when a cell is clicked */
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

/* Clears or resets the headings that display the current player's turn and game status */
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

/* Restores the initial game scores of 0 */
const resetScores = () => {
  xWinCount = 0
  oWinCount = 0
  xScoreSpan.innerText = xWinCount
  oScoreSpan.innerText = oWinCount
}

// Attach click event listeners
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', takeTurn)
}

restartGameButton.addEventListener('click', resetGameDefaults)
resetScoresButton.addEventListener('click', resetScores)
