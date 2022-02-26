// Stores NodeList of div.ttt-cell elements
const cells = document.querySelectorAll('.ttt-cell')
// Stores a representation of the initial state of the game board: an array of 9 empty string elements
const board = new Array(9).fill('')
let isGameOver = false
// By default, player X starts the game
let currentPlayerToken = 'X'
const gameStatusNotification = document.getElementById(
  'game-status-notification'
)

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
/* Enables current player to claim the clicked cell by styling it according to their token (X or O) */
const claimCell = (clickedCell) => {
  clickedCell.classList.add(currentPlayerToken.toLowerCase())
  clickedCell.innerText = currentPlayerToken
}
/* Modifies the board array at the appropriate index to reflect the current player's token */
const modifyBoardArray = (clickedCell) => {
  const idx = clickedCell.id.replace('ttt-cell-', '')
  board[idx] = currentPlayerToken
}

getIsXWinner = () => {
  console.log('board:', board)
  return pathsToVictory.some((pathToVictory) => {
    return pathToVictory.every((element) => {
      return board[element] === 'X'
    })
  })
}

getIsOWinner = () => {
  console.log('board:', board)
  return pathsToVictory.some((pathToVictory) => {
    return pathToVictory.every((element) => {
      return board[element] === 'O'
    })
  })
}

const checkGameStatus = () => {
  if (getIsXWinner()) {
    gameStatusNotification.innerText = 'Victory is yours, Player X!'
  } else if (getIsOWinner()) {
    gameStatusNotification.innerText = 'Victory is yours, Player O!'
  }
}

const swapCurrentPlayer = () => {
  currentPlayerToken = currentPlayerToken === 'X' ? 'O' : 'X'
}

const handleTurn = (event) => {
  // Return early if the game is over or the cell is already occupied
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

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleTurn)
}

////////////////////////////////
