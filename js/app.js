// Global Variables Here
const button = document.querySelectorAll('.btn')
const startButton = document.querySelector('.start')
let boxes = 9
let turn = 'X'
let winner = ''
let xWins = 0
let oWins = 0
let draws = 0
const winArrays = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8],
  4: [0, 3, 6],
  5: [1, 4, 7],
  6: [2, 5, 8],
  7: [0, 4, 8],
  8: [2, 4, 6]
}
const xChoices = []
const oChoices = []

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
  } else {
    turn = 'O'
  }
}

const gameOver = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true
  }
  if (winner === 'X') {
    winner = ''
    xWins++
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else if (winner === 'O') {
    winner = ''
    oWins++
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  } else {
    draws++
    console.log(draws)
    startButton.innerText = 'Play again?'
    startButton.disabled = false
  }
}

// const winCheck = () => {
//   for (let i = 0; i < winArrays.length; i++) {

//     if ( === true) {
//       winner = 'X'
//       gameOver()
//     } else if (winArrays[i].every() === oChoices.every()) {
//       winner = 'O'
//       gameOver()
//     }
//   }
// }
////////////////////////////////
// Event Listeners Here
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    button[i].innerText = turn
    button[i].disabled = true
    if (turn === 'X') {
      xChoices.push(i)
      turn = 'O'
    } else {
      oChoices.push(i)
      turn = 'X'
    }
    // winCheck()
    boxes--
    if (boxes === 0 && winner === '') {
      gameOver()
    }
  })
}
startButton.addEventListener('click', () => {
  startGame()
  startButton.disabled = true
})
////////////////////////////////
