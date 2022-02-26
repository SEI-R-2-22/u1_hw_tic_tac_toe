// Global Variables Here
const button = document.querySelectorAll('.btn')
const startButton = document.querySelector('.start')
const whoTurn = document.querySelector('.who')
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
const xChoices = []
const oChoices = []

for (let i = 0; i < button.length; i++) {
  boxes = 9
  button[i].innerText = ''
  button[i].disabled = true
}
////////////////////////////////
// Functions For Game Logic Here
const startGame = () => {
  for (let i = 0; i < button.length; i++) {
    boxes = 9
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
    winner = ''
    xWins++
    console.log('xWins: ' + xWins)
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'O') {
    winner = ''
    oWins++
    console.log('oWins: ' + oWins)
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else {
    draws++
    console.log('Draw: ' + draws)
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  }
}

const winCheck = () => {
  for (let i = 0; i < winArrays.length; i++) {
    let setCheck = winArrays[i]
    let xTrips = 0
    let oTrips = 0
    console.log('set:' + setCheck)
    console.log('x array: ' + xChoices)
    console.log('o array: ' + oChoices)
    for (let i = 0; i < setCheck.length; i++) {
      if (xChoices.includes(setCheck[i])) {
        xTrips++
        console.log('good x ' + xChoices[i] + ' ' + xTrips)
      } else if (oChoices.includes(setCheck[i])) {
        oTrips++
        console.log('good o ' + oChoices[i] + ' ' + oTrips)
      }
    }
    if (xTrips === 3) {
      winner = 'X'
      gameOver()
    } else if (oTrips === 3) {
      winner = 'O'
      gameOver()
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
    if (boxes === 0 && winner === '') {
      gameOver()
    }
  })
}
startButton.addEventListener('click', () => {
  startGame()
  startButton.disabled = true
  startButton.innerText = 'Have fun!'
})
////////////////////////////////
