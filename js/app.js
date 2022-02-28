// Global Variables Here
const button = document.querySelectorAll('.btn')
const startButton = document.querySelector('.start')
const whoTurn = document.querySelector('.who')
const xScore = document.querySelector('.x-score')
const oScore = document.querySelector('.o-score')
const drawTotal = document.querySelector('.draw-total')
const resetButton = document.querySelector('.reset')
const timer = document.querySelector('.timer')
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
let boxes = 9
let turn = ''
let winner = ''
let xWins = 0
let oWins = 0
let draws = 0
let xChoices = []
let oChoices = []
let countDownTimer = 0
let time = 10

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
    whoTurn.innerText = 'X goes first!'
  } else {
    turn = 'O'
    whoTurn.innerText = 'O goes first!'
  }
  startButton.innerText = 'Turn time: ' + time
  countDown()
}

const gameOver = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true
  }
  if (winner === 'X') {
    xWins++
    whoTurn.innerText = 'X wins!  Game Over.  Play again!'
    xScore.innerText = 'X wins: ' + xWins
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'O') {
    oWins++
    whoTurn.innerText = 'O wins!  Game Over.  Play again!'
    oScore.innerText = 'O wins: ' + oWins
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'draw') {
    draws++
    whoTurn.innerText = 'Draw!  Game Over.  Play again!'
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
        if (xTrips === 3) {
          winner = 'X'
          gameOver()
        }
      } else if (oChoices.includes(setCheck[i]) && winner === '') {
        oTrips++
        if (oTrips === 3) {
          winner = 'O'
          gameOver()
        }
      }
    }
  }
  if (boxes === 0 && winner === '') {
    winner = 'draw'
    gameOver()
  }
}
const resetScores = () => {
  xWins = 0
  xScore.innerText = 'X wins: ' + xWins
  oWins = 0
  oScore.innerText = 'O wins: ' + oWins
  draws = 0
  drawTotal.innerText = 'Draws: ' + draws
}
const simpleAI = () => {
  let randomSquare = Math.floor(Math.random() * 9)
  if (button[randomSquare].disabled === false) {
    button[randomSquare].click()
  } else {
    simpleAI()
  }
}
const countDown = () => {
  countDownTimer = setInterval(() => {
    time--
    startButton.innerText = 'Turn time: ' + time
    if (time === 0) {
      clearInterval(countDownTimer)
      simpleAI()
    }
  }, 1000)
}

const resetTimer = () => {
  time = 10
  clearInterval(countDownTimer)
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
      whoTurn.innerText = 'Os turn'
    } else if (turn === 'O') {
      oChoices.push(i)
      turn = 'X'
      whoTurn.innerText = 'Xs turn'
    }
    resetTimer()
    boxes--
    winCheck()
    if (boxes >= 0 && winner === '') {
      countDown()
    }
  })
}
startButton.addEventListener('click', () => {
  startGame()
  startButton.disabled = true
})

resetButton.addEventListener('click', () => {
  resetScores()
})
////////////////////////////////
