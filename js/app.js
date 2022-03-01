/////////////////////////////////
// Global Variables Here

/// Gameboard
const gameBoard = document.querySelector('#gameboard')
const gameBlock = Array.from(document.getElementsByClassName('cellBlock'))
console.log(gameBlock)
const playAgain = document.querySelector('.startOver')

let player = 'X'
let nextTurn = document.querySelector('.turn')

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function verifyDraw() {
  if (
    gameBlock[0].innerHTML !== '' &&
    gameBlock[1].innerHTML !== '' &&
    gameBlock[2].innerHTML !== '' &&
    gameBlock[3].innerHTML !== '' &&
    gameBlock[4].innerHTML !== '' &&
    gameBlock[5].innerHTML !== '' &&
    gameBlock[7].innerHTML !== '' &&
    gameBlock[8].innerHTML !== ''
  ) {
    player = 'D'
  }
}

function verified() {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winnerCombos[i]
    let a = gameBlock[winCondition[0]].innerHTML
    let b = gameBlock[winCondition[1]].innerHTML
    let c = gameBlock[winCondition[2]].innerHTML
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      player = 'W'
      for (let j = 0; j < gameBlock.length; j++) {
        gameBlock[j].removeEventListener('click', clicked)
      }
    }
  }
}

function clicked(e) {
  const id = e.target.id
  if (!gameBlock[id]) {
    gameBlock[id] = player
    e.target.innerText = player
    verifyDraw()
    verified()
    notifyMessage()
  } else {
    return
  }
}

function notifyMessage() {
  if (player === 'W') {
    s
    nextTurn.innerText = 'You won!'
  } else if (player === 'D') {
    nextTurn.innerText = "It's a draw!"
  } else if (player === 'O') {
    player = 'X'
    nextTurn.innerText = "Player 'X ' Up Next"
  } else {
    player = 'O'
    nextTurn.innerText = "Player 'O' Up Next"
  }
}
// ////////////////////////////////
// // Event Listeners Here

// Run Game
const runGame = () => {
  gameBlock.forEach((cellBlock) => {
    cellBlock.addEventListener('click', clicked)
  })
}

// Play Again
const replay = () => {
  window.location.reload()
}
playAgain.addEventListener('click', replay)

runGame()

///// SOURCES /////
// Array Includes - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Array forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// JavaScript Comparison Operators - https://www.w3schools.com/js/js_operators.asp
// Target Event Property - https://www.w3schools.com/jsref/event_target.asp
// Exit Functions - https://flexiple.com/javascript-exit-functions/#:~:text=React%2C%20Python-,Using%20break%20to%20exit%20a%20function%20in%20javascript,using%20labels%20within%20the%20function.
// Grid Guide - https://css-tricks.com/snippets/css/complete-guide-grid/
// Break and Continue - https://www.w3schools.com/js/js_break.asp
// Differences between innerHTML, innerText and textContent - https://www.w3schools.com/jsref/prop_node_innertext.asp
