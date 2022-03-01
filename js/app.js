// Global Variables Here
const button = document.getElementsByClassName('btn')
const squares = document.querySelectorAll('.btn')

const playerX = 'X'
const playerO = 'O'

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const gameStatus = document.querySelector('.scoreboard')
let currentPlayer = playerX
let players = [playerX, playerO]
let winner = 0
////////////////////////////////
// Functions For Game Logic Here

const checkForWin = () => {
  if (
    squares[0].innerHTML === 'X' &&
    squares[1].innerHTML === 'X' &&
    squares[2].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
  } else if (
    squares[0].innerHTML === 'X' &&
    squares[3].innerHTML === 'X' &&
    squares[6].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
  } else if (
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[6].innerHTML === 'X' &&
    squares[7].innerHTML === 'X' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[1].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[7].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[2].innerHTML === 'X' &&
    squares[5].innerHTML === 'X' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[0].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[2].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[6].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'X wins!'
    winner === 1
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[3].innerHTML === 'O' &&
    squares[6].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[3].innerHTML === 'O' &&
    squares[4].innerHTML === 'O' &&
    squares[5].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[1].innerHTML === 'O' &&
    squares[4].innerHTML === 'O' &&
    squares[7].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[2].innerHTML === 'O' &&
    squares[5].innerHTML === 'O' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[4].innerHTML === 'O' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  } else if (
    squares[2].innerHTML === 'O' &&
    squares[4].innerHTML === 'O' &&
    squares[6].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'O wins!'
    winner === 2
  }
}

const checkForDraw = () => {
  if (
    squares[0].innerHTML === 'X' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'X' &&
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'O' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'X' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'X' &&
    squares[2].innerHTML === 'O' &&
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'O' &&
    squares[5].innerHTML === 'O' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'X' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'X' &&
    squares[3].innerHTML === 'O' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'X' &&
    squares[6].innerHTML === 'X' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'X' &&
    squares[1].innerHTML === 'X' &&
    squares[2].innerHTML === 'O' &&
    squares[3].innerHTML === 'O' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'X' &&
    squares[6].innerHTML === 'X' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'X' &&
    squares[2].innerHTML === 'O' &&
    squares[3].innerHTML === 'O' &&
    squares[4].innerHTML === 'O' &&
    squares[5].innerHTML === 'X' &&
    squares[6].innerHTML === 'X' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'X' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'X' &&
    squares[3].innerHTML === 'O' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'X' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'X' &&
    squares[8].innerHTML === 'O'
  ) {
    gameStatus.innerHTML = 'Its a Draw'
  } else if (
    squares[0].innerHTML === 'X' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'X' &&
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'O' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'its a draw'
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'O' &&
    squares[2].innerHTML === 'X' &&
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'O' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'its a draw'
  } else if (
    squares[0].innerHTML === 'O' &&
    squares[1].innerHTML === 'X' &&
    squares[2].innerHTML === 'O' &&
    squares[3].innerHTML === 'X' &&
    squares[4].innerHTML === 'X' &&
    squares[5].innerHTML === 'O' &&
    squares[6].innerHTML === 'O' &&
    squares[7].innerHTML === 'O' &&
    squares[8].innerHTML === 'X'
  ) {
    gameStatus.innerHTML = 'its a draw'
  }
}

////////////////////////////////
// Event Listeners Here

let game = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
      squares[i].innerHTML = currentPlayer
      if (currentPlayer === playerX) {
        currentPlayer = playerO
      } else if (currentPlayer === playerO) {
        currentPlayer = playerX
      }
      checkForWin()
      checkForDraw()
    })
  }
}
game()

const reset = document.getElementById('reset')
let resetGame = () => {
  for (let i = 0; i < squares.length; i++) {
    reset.addEventListener('click', () => {
      squares[i].innerHTML = ''
      gameStatus.innerHTML = ''
    })
  }
}
resetGame()

////////////////////////////////
