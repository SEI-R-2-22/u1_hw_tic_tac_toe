// const runGame = () => {}
// Global Variables Here

let xPlayer = 'X'
let xScore = 0

let oPlayer = 'O'
let oScore = 0

let currentTurn = 0
let scoreCounter = 0

const displayTurn = document.querySelector('#display-turn')
const displayWinner = document.querySelector('#display-winner')
const xDisplay = document.querySelector('#x')
const oDisplay = document.querySelector('#o')
const drawDisplay = document.querySelector('#draw')
const restart = document.querySelector('#restart')

const nodeList = document.querySelectorAll('.grid')
const buttonArray = Array.from(nodeList)
const nullArray = [null, null, null, null, null, null, null, null, null]

xDisplay.innerText = xScore
oDisplay.innerText = oScore

////////////////////////////////
// Functions For Game Logic Here

const gameOutcomes = (player, score) => {
  if (
    buttonArray[0] === player &&
    buttonArray[1] === player &&
    buttonArray[2] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[3] === player &&
    buttonArray[4] === player &&
    buttonArray[5] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[6] === player &&
    buttonArray[7] === player &&
    buttonArray[8] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[0] === player &&
    buttonArray[3] === player &&
    buttonArray[6] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[1] === player &&
    buttonArray[4] === player &&
    buttonArray[7] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[2] === player &&
    buttonArray[5] === player &&
    buttonArray[8] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[0] === player &&
    buttonArray[4] === player &&
    buttonArray[8] === player
  ) {
    gameWinner(player, score)
  } else if (
    buttonArray[2] === player &&
    buttonArray[4] === player &&
    buttonArray[6] === player
  ) {
    gameWinner(player, score)
  } else if (nullArray.includes(null) === false) {
    drawDisplay.innerText = "It's a tie!"
  }
}

const gameWinner = (player, score) => {
  displayWinner.innerText = `Player ${player} Wins!`
  score++
  player === 'X' ? (xDisplay.innerText = score) : (oDisplay.innerText = score)
  nodeList.forEach((elem) => {
    elem.disabled = true
  })
}

////////////////////////////////
// Event Listeners Here

// Can I remove an event listener from a callback function?

const gameLogic = (i) => {
  if (currentTurn % 2 === 0) {
    displayTurn.innerText = 'Player One'
    nodeList[i].append('X')
    nullArray[i] = 'X'
    buttonArray[i] = 'X'
    console.log(buttonArray)
    nodeList[i].disabled = true
    gameOutcomes(xPlayer, xScore)
  } else if (currentTurn % 2 !== 0) {
    displayTurn.innerText = 'Player Two'
    nodeList[i].append('O')
    nullArray[i] = 'O'
    buttonArray[i] = 'O'
    nodeList[i].disabled = true
    gameOutcomes(oPlayer, oScore)
  }
  currentTurn++
}

for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', () => {
    gameLogic(i)
  })
}

for (let i = 0; i < buttonArray.length; i++) {
  restart.addEventListener('click', () => {
    nodeList[i].innerText = ''
    nodeList[i].disabled = false
    buttonArray = Array.from(nodeList[i])
    nullArray[i] = 'null'
    displayWinner.innerText = ''
  })
}
