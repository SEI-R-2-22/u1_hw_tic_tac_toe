// Global Variables Here

let turnX = 1
let firstTurn = 1
let totalTurns = 0
const blankSpace = document.querySelector('#blank')
const allSquares = document.querySelectorAll('.square')
const turnText = document.querySelector('#turn')
let picks = []
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
let squareNums = []
let winString = ''
let winner = ''
const xWins = document.querySelector('#x-wins')
const draws = document.querySelector('#draws')
const oWins = document.querySelector('#o-wins')
let xWinTotal = 0
let drawTotal = 0
let oWinTotal = 0

////////////////////////////////
// Functions For Game Logic Here

const resetWinTotals = () => {
  xWinTotal = 0
  drawTotal = 0
  oWinTotal = 0
  xWins.innerText = xWinTotal
  oWins.innerText = oWinTotal
  draws.innerText = drawTotal
}

const resetBoard = () => {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].innerText = ''
    allSquares[i].setAttribute('id', 'playing')
  }
  blankSpace.innerText = ''
  totalTurns = 0
  firstTurn *= -1
  turnX = firstTurn
  turnText.innerText = turnX > 0 ? 'X' : 'O'
  winner = ''
  winString = ''
  picks = []
  squareNums = []
}

const checkWin = () => {
  // Store the value of every square in an array (picks)
  for (let i = 0; i < allSquares.length; i++) {
    picks.push(allSquares[i].innerText)
  }

  // Make an array (squareNums) containing the index of every square that has been picked
  for (let i = 0; i < picks.length; i++) {
    if (picks[i] !== '') {
      squareNums.push(i)
    }
  }

  // Check to see which possible winning combinations could have happened
  let possCombo = true
  for (let i = 0; i < winningCombos.length; i++) {
    for (let j = 0; j < winningCombos[i].length; j++) {
      if (squareNums.includes(winningCombos[i][j]) === false) {
        possCombo = false
      }
    }
    // If the possible combo can be met, check if it's all X's or O's
    if (possCombo) {
      for (let j = 0; j < winningCombos[i].length; j++) {
        winString += picks[winningCombos[i][j]]
      }
      if (winString === 'XXX') {
        xWinTotal++
        xWins.innerText = xWinTotal
        return 'X'
      } else if (winString === 'OOO') {
        oWinTotal++
        oWins.innerText = oWinTotal
        return 'O'
      }
    }
    possCombo = true
    winString = ''
  }

  // These will only be executed if neither X nor O has won
  // Both of these commands reset picks and squareNums to empty arrays

  picks.splice(0, 9)
  squareNums.splice(0, squareNums.length)
  return ''
}

////////////////////////////////
// Event Listeners Here

btn.addEventListener('click', () => {
  resetBoard()
})

btn2.addEventListener('click', () => {
  resetWinTotals()
})

for (let i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener('click', function () {
    //User either clicks and empty square or a full square
    if (allSquares[i].innerText === 'X' || allSquares[i].innerText === 'O') {
      blankSpace.innerText = 'Already picked!'
    } else {
      // Set the square's value based on the player's turn
      if (turnX > 0) {
        allSquares[i].innerText = 'X'
      } else {
        allSquares[i].innerText = 'O'
      }

      // Reset the blank space if a valid square is chosen
      if (blankSpace.innerText === 'Already picked!') {
        blankSpace.innerText = ''
      }
      turnX *= -1
      turnText.innerText = turnX > 0 ? 'X' : 'O'
      totalTurns++
    }

    // Check for a winner only when possible (5 turns in)
    if (totalTurns >= 5) {
      winner = checkWin()
    }

    // Trigger end of game if a winner has been determined or max turns are reached
    if (winner !== '' || totalTurns === 9) {
      if (winner !== '') {
        blankSpace.innerText = `${winner} is the winner!`
      } else {
        blankSpace.innerText = `The game is a tie!`
        drawTotal++
        draws.innerText = drawTotal
      }

      // Change the id of every square so that pointer events are turned off
      for (let j = 0; j < allSquares.length; j++) {
        allSquares[j].setAttribute('id', 'done')
      }
    }
  })
}

////////////////////////////////
