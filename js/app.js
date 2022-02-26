// Stores NodeList of div.ttt-cell elements
const cells = document.querySelectorAll('.ttt-cell')
// Stores a representation of the initial state of the game board: an array of 9 empty string elements
let board = new Array(9).fill('')
let isGameOver = false
// By default, player X starts the game
let currentPlayerToken = 'X'
const gameStatusNotification = document.getElementById(
  'game-status-notification'
)
const turnNotification = document.getElementById('turn-notification')
const restartGameBtn = document.getElementById('restart-game-btn')

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
  // The innerText of a vacant cell is an empty string, which is falsy
  return !!cell.innerText
}
/* Enables current player to claim the clicked cell by styling it according to their token */
const claimCell = (clickedCell) => {
  clickedCell.classList.add(currentPlayerToken.toLowerCase())
  clickedCell.innerText = currentPlayerToken
}
/* Modifies the board array at the appropriate index to reflect the current player's token */
const modifyBoardArray = (clickedCell) => {
  const idx = clickedCell.id.replace('ttt-cell-', '')
  board[idx] = currentPlayerToken
}

getWinnerExists = () => {
  return pathsToVictory.some((pathToVictory) => {
    const [index1, index2, index3] = pathToVictory
    return (
      board[index1] &&
      board[index1] === board[index2] &&
      board[index2] === board[index3]
    )
  })
}

// getIsXWinner = () => {
//   return pathsToVictory.some((pathToVictory) => {
//     return pathToVictory.every((element) => {
//       return board[element] === 'X'
//     })
//   })
// }

// getIsOWinner = () => {
//   return pathsToVictory.some((pathToVictory) => {
//     return pathToVictory.every((element) => {
//       return board[element] === 'O'
//     })
//   })
// }

const getIsTieGame = () => {
  return !getWinnerExists() && board.every((cell) => cell !== '')
}

const checkGameStatus = () => {
  if (getWinnerExists()) {
    isGameOver = true
    turnNotification.innerText = ''
    gameStatusNotification.innerText = `Victory is yours, Player ${currentPlayerToken}!`
  } else if (getIsTieGame()) {
    isGameOver = true
    turnNotification.innerText = ''
    gameStatusNotification.innerText = 'Tie game!'
  }
}

const swapCurrentPlayer = () => {
  currentPlayerToken = currentPlayerToken === 'X' ? 'O' : 'X'
  if (!isGameOver) {
    turnNotification.innerText = `Take your turn, Player ${currentPlayerToken}!`
  }
}

const handleTurn = (event) => {
  // Return early if the game is over or the cell is already claimed
  if (isGameOver) {
    return
  }
  const clickedCell = event.target
  if (isCellClaimed(clickedCell)) {
    alert('That cell has already been claimed!')
    return
  }
  claimCell(clickedCell)
  modifyBoardArray(clickedCell)
  checkGameStatus()
  swapCurrentPlayer()
}
/* Unclaims cells by clearing styles specific to a particular token */
unclaimCells = () => {
  for (let i = 0; i < cells.length; i++) {
    const cellNode = cells[i]
    cellNode.innerText = ''
    if (cellNode.classList.contains('x')) {
      cellNode.classList.remove('x')
    }
    if (cellNode.classList.contains('o')) {
      cellNode.classList.remove('o')
    }
  }
}

const clearNotifications = () => {
  turnNotification.innerText = 'Take your turn, Player X!'
  gameStatusNotification.innerText = ''
}

/* Initializes a brand new game by resetting the default game state */
const resetGameDefaults = () => {
  isGameOver = false
  currentPlayerToken = 'X'
  board = new Array(9).fill('')
  unclaimCells()
  clearNotifications()
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleTurn)
}

restartGameBtn.addEventListener('click', resetGameDefaults)
////////////////////////////////
