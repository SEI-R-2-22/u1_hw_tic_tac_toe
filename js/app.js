// Stores NodeList of div.ttt-cell elements
const cells = document.querySelectorAll('.ttt-cell')
// Stores a representation of the initial state of the game board: an array of 9 empty string elements
const board = new Array(9).fill('')
let isGameOver = false
// By default, player X starts the game
let currentPlayerToken = 'X'

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

const checkGameStatus = () => {}

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
  swapCurrentPlayer()
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleTurn)
}

////////////////////////////////
