//Global Variables
const gameBoard = document.querySelector('#gameGrid')
const spacesJS = Array.from(document.getElementsByClassName('spacesHTML'))
let currentPlayer = 'X'
let whosNextJS = document.querySelector('.whosNextHTML')
const replayJS = document.querySelector('#replayHTML')

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

function checkDraw() {
  if (
    spacesJS[0].innerHTML !== '' &&
    spacesJS[1].innerHTML !== '' &&
    spacesJS[2].innerHTML !== '' &&
    spacesJS[3].innerHTML !== '' &&
    spacesJS[4].innerHTML !== '' &&
    spacesJS[5].innerHTML !== '' &&
    spacesJS[7].innerHTML !== '' &&
    spacesJS[8].innerHTML !== ''
  ) {
    currentPlayer = 'D'
  }
}

function verifyWin() {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winnerCombos[i]
    let a = spacesJS[winCondition[0]].innerHTML
    let b = spacesJS[winCondition[1]].innerHTML
    let c = spacesJS[winCondition[2]].innerHTML
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      currentPlayer = 'W'
      for (let j = 0; j < spacesJS.length; j++) {
        spacesJS[j].removeEventListener('click', boxClicked)
      }
    }
  }
}

//Function to put X or 0 When Box Clicked
const boxClicked = (e) => {
  const items = e.target.id
  if (!spacesJS[items]) {
    spacesJS[items] = currentPlayer
    e.target.innerText = currentPlayer
    checkDraw()
    verifyWin()
    render()
  }
}

function render() {
  if (currentPlayer === 'W') {
    whosNextJS.innerText = 'Player WINS!'
  } else if (currentPlayer === 'D') {
    whosNextJS.innerText = 'Draw'
    console.log('Draw')
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
    whosNextJS.innerText = "Player 'X' Up Next"
    console.log('O')
  } else {
    currentPlayer = 'O'
    whosNextJS.innerText = "Player 'O' Up Next"
    console.log('X')
  }
}

const wholeGame = () => {
  spacesJS.forEach((spacesHTML) => {
    spacesHTML.addEventListener('click', boxClicked)
  })
}

const replay = () => {
  window.location.reload()
}
replayJS.addEventListener('click', replay)

wholeGame()

// References:
//- https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn.
