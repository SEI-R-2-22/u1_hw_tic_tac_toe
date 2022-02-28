// Global Variables Here
const SQUARE_SIZE = '150px'
const GAP_SIZE = '5px'
const BOARD_SIZE =
  (
    parseInt(SQUARE_SIZE.slice(0, -2)) * 3 +
    parseInt(GAP_SIZE.slice(0, -2)) * 2
  ).toString() + 'px'

let turn = 1
let gameGoing = true
let gamesPlayed = 0

const board = document.querySelector('#board')
const divOne = document.querySelector('#one')
const divTwo = document.querySelector('#two')
const divThree = document.querySelector('#three')
const divFour = document.querySelector('#four')
const divFive = document.querySelector('#five')
const divSix = document.querySelector('#six')
const divSeven = document.querySelector('#seven')
const divEight = document.querySelector('#eight')
const divNine = document.querySelector('#nine')

const squares = document.querySelectorAll('.square')

const turnMessage = document.querySelector('h3')

let xWins = 0
let oWins = 0

const scoreMessage = document.querySelector('#score')

//Set up board
board.style.gap = GAP_SIZE
board.style.width = BOARD_SIZE
board.style.height = BOARD_SIZE
for (let i = 0; i < squares.length; i++) {
  squares[i].style.height = SQUARE_SIZE
  squares[i].style.width = SQUARE_SIZE
}

////////////////////////////////
// Functions For Game Logic Here
const checkWinner = () => {
  if (
    divOne.innerText !== '' &&
    divTwo.innerText !== '' &&
    divThree.innerText !== '' &&
    divOne.innerText === divTwo.innerText &&
    divOne.innerText === divThree.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divOne.innerText !== '' &&
    divFour.innerText !== '' &&
    divSeven.innerText !== '' &&
    divOne.innerText === divFour.innerText &&
    divOne.innerText === divSeven.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divOne.innerText !== '' &&
    divFive.innerText !== '' &&
    divNine.innerText !== '' &&
    divOne.innerText === divFive.innerText &&
    divOne.innerText === divNine.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divTwo.innerText !== '' &&
    divFive.innerText !== '' &&
    divEight.innerText !== '' &&
    divTwo.innerText === divFive.innerText &&
    divTwo.innerText === divEight.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divThree.innerText !== '' &&
    divSix.innerText !== '' &&
    divNine.innerText !== '' &&
    divThree.innerText === divSix.innerText &&
    divThree.innerText === divNine.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divThree.innerText !== '' &&
    divFive.innerText !== '' &&
    divSeven.innerText !== '' &&
    divThree.innerText === divFive.innerText &&
    divThree.innerText === divSeven.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divFour.innerText !== '' &&
    divFive.innerText !== '' &&
    divSix.innerText !== '' &&
    divFour.innerText === divFive.innerText &&
    divFour.innerText === divSix.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divSeven.innerText !== '' &&
    divEight.innerText !== '' &&
    divNine.innerText !== '' &&
    divSeven.innerText === divEight.innerText &&
    divSeven.innerText === divNine.innerText
  ) {
    console.log('Winner')
    engGame()
  } else if (
    divOne.innerText !== '' &&
    divTwo.innerText !== '' &&
    divThree.innerText !== '' &&
    divFour.innerText !== '' &&
    divFive.innerText !== '' &&
    divSix.innerText !== '' &&
    divSeven.innerText !== '' &&
    divEight.innerText !== '' &&
    divNine.innerText !== ''
  ) {
    turnMessage.innerText = "It's a tie!"
  }
}

const engGame = () => {
  gameGoing = false
  if (turn % 2 === 1) {
    turnMessage.innerText = "O's win!"
    oWins++
    updateScore()
  } else {
    turnMessage.innerText = "X's win!"
    xWins++
    updateScore()
  }
}

const updateScore = () => {
  scoreMessage.innerText =
    'X wins: ' + xWins.toString() + '\nO wins: ' + oWins.toString()
}
////////////////////////////////
// Event Listeners Here

// Click function
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (gameGoing) {
      if (squares[i].innerText === '') {
        if (turn % 2 === 1) {
          squares[i].innerText = 'X'
          turn++
          turnMessage.innerText = "O's turn"
          checkWinner()
        } else {
          squares[i].innerText = 'O'
          turn++
          turnMessage.innerText = "X's turn"
          checkWinner()
        }
      }
    }
  })
}

// Reset button function
document.querySelector('button').addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = ''
  }
  gameGoing = true
  gamesPlayed++
  if (gamesPlayed % 2 === 1) {
    turnMessage.innerText = "O's turn"
    turn = 0
  } else {
    turnMessage.innerText = "X's turn"
    turn = 1
  }
})
////////////////////////////////
