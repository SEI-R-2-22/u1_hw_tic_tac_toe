// Global Variables Here
const button = document.querySelectorAll('.btn')
const startButton = document.querySelector('.start')
const whoTurn = document.querySelector('.who')
const xScore = document.querySelector('.x-score')
const oScore = document.querySelector('.o-score')
const drawTotal = document.querySelector('.draw-total')
let boxes = 9
let turn = 'X'
let winner = ''
let xWins = 0
let oWins = 0
let draws = 0
const winArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let xChoices = []
let oChoices = []

for (let i = 0; i < button.length; i++) {
  button[i].innerText = ''
  button[i].disabled = true
}
////////////////////////////////
// Functions For Game Logic Here
const startGame = () => {
  winner = ''
  xChoices = []
  oChoices = []
  boxes = 9
  for (let i = 0; i < button.length; i++) {
    button[i].innerText = ''
    button[i].disabled = false
  }
  let turnOrder = Math.floor(Math.random() * 2)
  console.log(turnOrder)
  if (turnOrder === 0) {
    turn = 'X'
    whoTurn.innerText = turn
  } else {
    turn = 'O'
    whoTurn.innerText = turn
  }
}

const gameOver = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true
  }
  if (winner === 'X') {
    xWins++
    whoTurn.innerText = 'Game Over.  Play again!'
    xScore.innerText = 'X: ' + xWins
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'O') {
    oWins++
    whoTurn.innerText = 'Game Over.  Play again!'
    oScore.innerText = 'O: ' + oWins
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'draw') {
    boxes++
    draws++
    whoTurn.innerText = 'Game Over.  Play again!'
    drawTotal.innerText = 'Draws: ' + draws
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  }
}

const winCheck = () => {
  for (let i = 0; i < winArrays.length; i++) {
    let setCheck = winArrays[i]
    let xTrips = 0
    let oTrips = 0
    for (let i = 0; i < setCheck.length; i++) {
      if (xChoices.includes(setCheck[i]) && winner === '') {
        xTrips++
        console.log('x ' + xTrips)
        if (xTrips === 3) {
          winner = 'X'
          gameOver()
        } else if (boxes === 0 && winner === '') {
          winner = 'draw'
        }
      } else if (oChoices.includes(setCheck[i]) && winner === '') {
        oTrips++
        console.log('o ' + oTrips)
        if (oTrips === 3) {
          winner = 'O'
          gameOver()
        } else if (boxes === 0 && winner === '') {
          winner = 'draw'
        }
      } else if (boxes === 0 && winner === 'draw') {
        console.log(winner)
        gameOver()
      }
    }
  }
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    button[i].innerText = turn
    button[i].disabled = true
    if (turn === 'X') {
      xChoices.push(i)
      turn = 'O'
      whoTurn.innerText = turn
    } else if (turn === 'O') {
      oChoices.push(i)
      turn = 'X'
      whoTurn.innerText = turn
    }
    winCheck()
    boxes--
  })
}
startButton.addEventListener('click', () => {
  startGame()
  startButton.disabled = true
  startButton.innerText = 'Have fun!'
})
////////////////////////////////
