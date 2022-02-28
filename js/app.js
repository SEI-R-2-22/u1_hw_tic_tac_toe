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

let nodeList = document.querySelectorAll('.grid')
let buttonArray = Array.from(nodeList)
let nullArray = [null, null, null, null, null, null, null, null, null]

xDisplay.innerText = xScore
oDisplay.innerText = oScore

////////////////////////////////
// Functions For Game Logic Here

const gameOutcomes = (player, score) => {
  console.log(score)
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
  console.log(score)
  displayWinner.innerText = `Player ${player} Wins!`
  score++
  console.log(xScore, oScore)
  player === 'X' ? (xDisplay.innerText = score) : (oDisplay.innerText = score)
  player === 'X' ? (xScore = score) : (oScore = score)
  nodeList.forEach((elem) => {
    elem.disabled = true
  })
}

////////////////////////////////
// Event Listeners Here

// Can I remove an event listener from a callback function?

const gameLogic = (i) => {
  if (currentTurn % 2 === 0) {
    nodeList[i].append('X')
    nullArray[i] = 'X'
    buttonArray[i] = 'X'
    nodeList[i].disabled = true
    gameOutcomes(xPlayer, xScore)
    displayTurn.innerText = 'Player Two'
  } else if (currentTurn % 2 !== 0) {
    nodeList[i].append('O')
    nullArray[i] = 'O'
    buttonArray[i] = 'O'
    nodeList[i].disabled = true
    gameOutcomes(oPlayer, oScore)
    displayTurn.innerText = 'Player One'
  }
  currentTurn++
}

for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', () => {
    gameLogic(i)
  })
}

restart.addEventListener('click', () => {
  nodeList = document.querySelectorAll('.grid')
  buttonArray = Array.from(nodeList)
  nullArray = [null, null, null, null, null, null, null, null, null]
  nodeList.forEach((elem) => {
    elem.disabled = false
    elem.innerText = ''
  })
})
