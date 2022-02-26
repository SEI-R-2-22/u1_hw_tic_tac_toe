// Global Variables Here

let turnX = 1
let totalTurns = 0
const blankSpace = document.querySelector('#blank')
const allSquares = document.querySelectorAll('.square')
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

////////////////////////////////
// Functions For Game Logic Here

const checkWin = () => {
  // Store the value of every square in the array picks
  for (let i = 0; i < allSquares.length; i++) {
    picks.push(allSquares[i].innerText)
  }

  // Make an array containing the index of every square that has been picked
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
        return 'X'
      } else if (winString === 'OOO') {
        return 'O'
      }
    }
    possCombo = true
    winString = ''
  }

  picks.splice(0, 9)
  squareNums.splice(0, squareNums.length)
  return ''
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener('click', function () {
    if (allSquares[i].innerText === 'X' || allSquares[i].innerText === 'O') {
      blankSpace.innerText = 'Already picked!'
    } else {
      if (turnX > 0) {
        allSquares[i].innerText = 'X'
      } else {
        allSquares[i].innerText = 'O'
      }
      if (blankSpace.innerText === 'Already picked!') {
        blankSpace.innerText = ''
      }
      turnX *= -1
      totalTurns++
    }
    if (totalTurns >= 5) {
      winner = checkWin()
    }
    if (winner !== '') {
      blankSpace.innerText = `${winner} is the winner!`

      // Change the class of every square so that pointer events are turned off
      for (let j = 0; j < allSquares.length; j++) {
        allSquares[j].setAttribute('id', 'done')
      }
    }
  })
}

////////////////////////////////
