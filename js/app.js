let currentPlayer
let currentTurn = -1
let board
let count = 0
let gameWon = false

const gameStatus = document.querySelector(`.panelStatus`)
const catsGameMessage = () => `Cat's Game! It's a tie. Play again?`

gameStatus.innerHTML = `It's X's turn!`
initGame()

function initGame() {
  board = ['', '', '', '', '', '', '', '', '']
  currentTurn *= -1
  currentPlayer = currentTurn
  if (currentTurn === 1) {
    gameStatus.textContent = "X's go first!"
  } else {
    gameStatus.textContent = "O's go first!"
  }

  document
    .querySelectorAll('section.board')[0]
    .childNodes.forEach((element) => {
      element.textContent = ''
      element.color = ''
    })
  count = 0
  gameWon = false
}
function clear() {
  board = ['', '', '', '', '', '', '', '', '']
}
function gameOver() {
  clear()
  return (count === 9 && gameWon === false) || gameWon === true
}

function click(event) {
  let square = parseInt(event.target.id.replace('sq', ''))
  if (board[square] !== '') return
  checkGameWinner()
  render(square)
}

function checkGameWinner() {
  if (gameWon === false) {
    if (
      board[0] + board[1] + board[2] === 3 ||
      board[0] + board[3] + board[6] === 3 ||
      board[0] + board[4] + board[8] === 3 ||
      board[3] + board[4] + board[5] === 3 ||
      board[6] + board[7] + board[8] === 3 ||
      board[2] + board[5] + board[8] === 3 ||
      board[2] + board[4] + board[6] === 3 ||
      board[1] + board[4] + board[7] === 3
    ) {
      gameWon = true
      gameStatus.textContent = "X's Win!"
    }
    if (
      board[0] + board[1] + board[2] === -3 ||
      board[0] + board[3] + board[6] === -3 ||
      board[0] + board[4] + board[8] === -3 ||
      board[3] + board[4] + board[5] === -3 ||
      board[6] + board[7] + board[8] === -3 ||
      board[2] + board[5] + board[8] === -3 ||
      board[2] + board[4] + board[6] === -3 ||
      board[1] + board[4] + board[7] === -3
    ) {
      gameWon = true
      gameStatus.textContent = "O's Win!"
    }
  }
}

function render(square) {
  if (gameWon === false) {
    claimedSquare = document.getElementById(`sq${square}`)
    board[square] = currentPlayer
    if (currentPlayer === 1) {
      claimedSquare.textContent = 'X'
      gameStatus.textContent = "O's Turn!"
    } else {
      claimedSquare.textContent = 'O'
      gameStatus.textContent = "X's Turn!"
    }
  }
  currentPlayer *= -1
  checkGameWinner()
  count++
  if (count === 9 && gameWon === false) {
    gameStatus.textContent = catsGameMessage()
  }
}

////////////////////////////////
// Event Listeners Here
document.querySelector('section.board').addEventListener('click', click)
document.querySelector('.restartButton').addEventListener('click', initGame)
////////////////////////////////
