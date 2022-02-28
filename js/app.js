// Global Variables Here

let message = document.querySelector('.turnMessage')
let reset = document.querySelector('.reset')
let squares = document.querySelectorAll('.square')
let x = document.querySelector('#xScore')
let o = document.querySelector('#oScore')
let draw = document.querySelector('#drawScore')

let xTurn = true

let click = [false, false, false, false, false, false, false, false, false]

let winner = false
let winnerMessage = document.querySelector('.winner')
let winnerBoard = ['', '', '', '', '', '', '', '', '']
let squaresFilled = 0

let xScore = 0
let oScore = 0
let drawScore = 0

////////////////////////////////
// Functions For Game Logic Here

function checkWin() {
  // checks for row wins
  for (let rows = 0; rows <= 6; rows += 3) {
    if (
      winnerBoard[rows] + winnerBoard[rows + 1] + winnerBoard[rows + 2] ===
      3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player X Wins!'
      message.style.display = 'none'
      xScore++
      x.innerHTML = xScore
    } else if (
      winnerBoard[rows] + winnerBoard[rows + 1] + winnerBoard[rows + 2] ===
      -3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player O Wins!'
      message.style.display = 'none'
      oScore++
      o.innerHTML = oScore
    }
  }
  //check for column wins
  for (let columns = 0; columns <= 2; columns++) {
    if (
      winnerBoard[columns] +
        winnerBoard[columns + 3] +
        winnerBoard[columns + 6] ===
      3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player X Wins!'
      message.style.display = 'none'
      xScore++
      x.innerHTML = xScore
    } else if (
      winnerBoard[columns] +
        winnerBoard[columns + 3] +
        winnerBoard[columns + 6] ===
      -3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player O Wins!'
      message.style.display = 'none'
      oScore++
      o.innerHTML = oScore
    }
    //check for diagonal wins
    if (
      winnerBoard[0] + winnerBoard[4] + winnerBoard[8] === 3 ||
      winnerBoard[2] + winnerBoard[4] + winnerBoard[6] === 3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player X Wins!'
      message.style.display = 'none'
      xScore++
      x.innerHTML = xScore
    } else if (
      winnerBoard[0] + winnerBoard[4] + winnerBoard[8] === -3 ||
      winnerBoard[2] + winnerBoard[4] + winnerBoard[6] === -3
    ) {
      winner = true
      winnerMessage.innerHTML = 'Player O Wins!'
      message.style.display = 'none'
      oScore++
      o.innerHTML = oScore
      //check for ties
    }
    if (squaresFilled === 9) {
      message.innerHTML = ''
      winner = true
      winnerMessage.innerHTML = "It's a tie! Would you like to reset the game?"
      message.style.display = 'none'
      drawScore++
      draw.innerHTML = drawScore
    }
  }
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (winner === false) {
      if (click[i] === false) {
        if (xTurn) {
          squares[i].innerHTML = 'X'
          winnerBoard[i] = 1
          squaresFilled++
          message.innerHTML = "O's Turn"
        } else if (!xTurn) {
          squares[i].innerHTML = 'O'
          winnerBoard[i] = -1
          squaresFilled++
          message.innerHTML = "X's Turn"
        }
        xTurn = !xTurn
        checkWin()
        click[i] = true
      }
    }
  })
}

reset.addEventListener('click', () => {
  let boxes = document.querySelectorAll('.square')

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
  }

  click = [false, false, false, false, false, false, false, false, false]

  winner = false
  winnerMessage.innerHTML = ''
  winnerBoard = ['', '', '', '', '', '', '', '', '']
  squaresFilled = 0

  message.style.display = 'block'
})

////////////////////////////////

/*
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    if (winner === false) {
      if (click0 === false) {
        if (xTurn) {
          box0.innerHTML = 'X'
          winnerBoard[0] = 1
          squaresFilled++
          message.innerHTML = "O's Turn"
        } else if (!xTurn) {
          box0.innerHTML = 'O'
          winnerBoard[0] = -1
          squaresFilled++
          message.innerHTML = "X's Turn"
        }
        xTurn = !xTurn
        checkWin()
        click0 = true
      }
    }
  })
})
*/
