// Global Variables Here

////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here

////////////////////////////////

let box0 = document.querySelector('#square0')
let box1 = document.querySelector('#square1')
let box2 = document.querySelector('#square2')
let box3 = document.querySelector('#square3')
let box4 = document.querySelector('#square4')
let box5 = document.querySelector('#square5')
let box6 = document.querySelector('#square6')
let box7 = document.querySelector('#square7')
let box8 = document.querySelector('#square8')

let xTurn = true

let click1 = false
let click2 = false
let click3 = false
let click4 = false
let click5 = false
let click6 = false
let click7 = false
let click8 = false
let click9 = false

let winner = false
let winnerMessage = document.querySelector('.winner')
let winnerBoard = ['', '', '', '', '', '', '', '', '']
let squaresFilled = 0

box0.addEventListener('click', () => {
  if (winner === false) {
    if (click1 === false) {
      if (xTurn) {
        box0.innerHTML = 'X'
        winnerBoard[0] = 1
        squaresFilled++
      } else if (!xTurn) {
        box0.innerHTML = 'O'
        winnerBoard[0] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click1 = true
    }
  }
})

box1.addEventListener('click', () => {
  if (winner === false) {
    if (click2 === false) {
      if (xTurn) {
        box1.innerHTML = 'X'
        winnerBoard[1] = 1
        squaresFilled++
      } else if (!xTurn) {
        box1.innerHTML = 'O'
        winnerBoard[1] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click2 = true
    }
  }
})

box2.addEventListener('click', () => {
  if (winner === false) {
    if (click3 === false) {
      if (xTurn) {
        box2.innerHTML = 'X'
        winnerBoard[2] = 1
        squaresFilled++
      } else if (!xTurn) {
        box2.innerHTML = 'O'
        winnerBoard[2] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click3 = true
    }
  }
})

box3.addEventListener('click', () => {
  if (winner === false) {
    if (click4 === false) {
      if (xTurn) {
        box3.innerHTML = 'X'
        winnerBoard[3] = 1
        squaresFilled++
      } else if (!xTurn) {
        box3.innerHTML = 'O'
        winnerBoard[3] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click4 = true
    }
  }
})

box4.addEventListener('click', () => {
  if (winner === false) {
    if (click5 === false) {
      if (xTurn) {
        box4.innerHTML = 'X'
        winnerBoard[4] = 1
        squaresFilled++
      } else if (!xTurn) {
        box4.innerHTML = 'O'
        winnerBoard[4] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click5 = true
    }
  }
})

box5.addEventListener('click', () => {
  if (winner === false) {
    if (click6 === false) {
      if (xTurn) {
        box5.innerHTML = 'X'
        winnerBoard[5] = 1
        squaresFilled++
      } else if (!xTurn) {
        box5.innerHTML = 'O'
        winnerBoard[5] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click6 = true
    }
  }
})

box6.addEventListener('click', () => {
  if (winner === false) {
    if (click7 === false) {
      if (xTurn) {
        box6.innerHTML = 'X'
        winnerBoard[6] = 1
        squaresFilled++
      } else if (!xTurn) {
        box6.innerHTML = 'O'
        winnerBoard[6] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click7 = true
    }
  }
})

box7.addEventListener('click', () => {
  if (winner === false) {
    if (click8 === false) {
      if (xTurn) {
        box7.innerHTML = 'X'
        winnerBoard[7] = 1
        squaresFilled++
      } else if (!xTurn) {
        box7.innerHTML = 'O'
        winnerBoard[7] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click8 = true
    }
  }
})

box8.addEventListener('click', () => {
  if (winner === false) {
    if (click9 === false) {
      if (xTurn) {
        box8.innerHTML = 'X'
        winnerBoard[8] = 1
        squaresFilled++
      } else if (!xTurn) {
        box8.innerHTML = 'O'
        winnerBoard[8] = -1
        squaresFilled++
      }
      xTurn = !xTurn
      checkWin()
      click9 = true
    }
  }
})

function checkWin() {
  if (
    winnerBoard[0] + winnerBoard[1] + winnerBoard[2] === 3 ||
    winnerBoard[0] + winnerBoard[4] + winnerBoard[8] === 3 ||
    winnerBoard[0] + winnerBoard[3] + winnerBoard[6] === 3 ||
    winnerBoard[1] + winnerBoard[4] + winnerBoard[7] === 3 ||
    winnerBoard[2] + winnerBoard[5] + winnerBoard[8] === 3 ||
    winnerBoard[2] + winnerBoard[4] + winnerBoard[6] === 3 ||
    winnerBoard[3] + winnerBoard[4] + winnerBoard[5] === 3 ||
    winnerBoard[6] + winnerBoard[7] + winnerBoard[8] === 3
  ) {
    winner = true
    winnerMessage.innerHTML = 'Player X wins!'
  } else if (
    winnerBoard[0] + winnerBoard[1] + winnerBoard[2] === -3 ||
    winnerBoard[0] + winnerBoard[4] + winnerBoard[8] === -3 ||
    winnerBoard[0] + winnerBoard[3] + winnerBoard[6] === -3 ||
    winnerBoard[1] + winnerBoard[4] + winnerBoard[7] === -3 ||
    winnerBoard[2] + winnerBoard[5] + winnerBoard[8] === -3 ||
    winnerBoard[2] + winnerBoard[4] + winnerBoard[6] === -3 ||
    winnerBoard[3] + winnerBoard[4] + winnerBoard[5] === -3 ||
    winnerBoard[6] + winnerBoard[7] + winnerBoard[8] === -3
  ) {
    winner = true
    winnerMessage.innerHTML = 'Player O wins!'
  } else if (squaresFilled === 9) {
    winner = true
    winnerMessage.innerHTML = "It's a tie! Would you like to reset the game?"
  }
}

// box1.innerHTML === 'X' && box
// box1 === box2, box3 === 'X'
