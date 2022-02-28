// Global Variables Here
const blocks = document.querySelectorAll('.block')
const arrBlocks = Array.from(blocks)
const playerElement = document.querySelector('#player')
const winMessage = document.querySelector('#win')
const resetButton = document.querySelector('button')
const playerWinCountElement = document.querySelector('#playerWinCount')
const computerWinCountElement = document.querySelector('#computerWinCount')
const CROSS = 'cross'
const CIRCLE = 'circle'
const PLAYER = 'Player'
const COMPUTER = 'Computer'
let player = PLAYER

let isComputerTurn = false
let isGameOver = false
let playerWinCount = 0
let computerWinCount = 0
let computerTimer
const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// define vars
// logic
// return

////////////////////////////////
// Functions For Game Logic Here
const clickHandler = (e) => {
  const identity = e.detail === COMPUTER ? COMPUTER : PLAYER
  const className = identity === COMPUTER ? CIRCLE : CROSS
  if (isComputerTurn && identity === PLAYER) return

  e.target.removeEventListener('click', clickHandler)
  e.target.classList.add(className)
  checkPatterns()
  checkDraw()

  if (isGameOver) return
  isComputerTurn = false

  renderPlayerTurn(identity === PLAYER ? COMPUTER : PLAYER)
  if (identity === PLAYER) {
    isComputerTurn = true
    computerTimer = setTimeout(computerClick, 1000)
  }
}

const computerClick = () => {
  const emptyBlocks = getEmptyBlocks()
  const index = Math.floor(Math.random() * emptyBlocks.length)
  const emptyBlock = emptyBlocks[index]
  const event = new CustomEvent('click', { detail: COMPUTER })

  emptyBlock.dispatchEvent(event)
}

const getEmptyBlocks = () => {
  return arrBlocks.filter(
    (block) => !(hasClass(block, CROSS) || hasClass(block, CIRCLE))
  )
}

const renderPlayerTurn = (player) => {
  playerElement.innerText = `${player}'s turn`
}

const checkPattern = (pattern) => {
  for (let j = 0; j < 3; j++) {
    const blockIndexToCheck = pattern[j]
    const block = blocks[blockIndexToCheck]
    const playerXClassName = CROSS
    if (!block.classList.contains(playerXClassName)) {
      return false
    }
  }

  return true
}

const checkComputerPattern = (pattern) => {
  for (let j = 0; j < 3; j++) {
    const blockIndexToCheck = pattern[j]
    const block = blocks[blockIndexToCheck]
    if (!block.classList.contains(CIRCLE)) {
      return false
    }
  }

  return true
}

const checkPatterns = () => {
  for (let i = 0; i < 8; i++) {
    if (checkPattern(patterns[i]) || checkComputerPattern(patterns[i])) {
      gameOver()
      break
    }
  }
  return false
}

const gameOver = () => {
  const identity = isComputerTurn ? COMPUTER : PLAYER
  const message = document.createTextNode(`${identity} Wins`)
  winMessage.appendChild(message)
  removeEventListeners()
  isGameOver = true
  playerElement.innerText = ''
  updatePlayerCount()
  isComputerTurn = false
}

const updatePlayerCount = () => {
  const identity = isComputerTurn ? COMPUTER : PLAYER
  if (identity === PLAYER) {
    playerWinCount++
  } else {
    computerWinCount++
  }
  playerWinCountElement.innerText = `${PLAYER}: ${playerWinCount}`
  computerWinCountElement.innerText = `${COMPUTER}: ${computerWinCount}`
}

const reset = () => {
  player = PLAYER
  isGameOver = false
  for (i = 0; i < 9; i++) {
    blocks[i].classList.remove(CROSS, CIRCLE)
  }
  removeEventListeners()
  addEventListeners()
  winMessage.innerHTML = ''
  clearTimeout(computerTimer)
  renderPlayerTurn(PLAYER)
}

const hasClass = (element, className) => element.classList.contains(className)

const checkDraw = () => {
  if (isGameOver) return
  for (let i = 0; i < 9; i++) {
    const block = blocks[i]
    const isBlockPlayed = !(hasClass(block, CROSS) || hasClass(block, CIRCLE))
    if (isBlockPlayed) {
      return
    }
  }
  draw()
}

const draw = () => {
  const message = document.createTextNode(`Draw`)
  winMessage.appendChild(message)
  isGameOver = true
}

////////////////////////////////
// Event Listeners Here

const removeEventListeners = () => {
  for (i = 0; i < 9; i++) {
    blocks[i].removeEventListener('click', clickHandler)
  }
}

const addEventListeners = () => {
  for (i = 0; i < 9; i++) {
    blocks[i].addEventListener('click', clickHandler)
  }
}
addEventListeners()

const addResetClickListeners = () => {
  return resetButton.addEventListener('click', reset)
}
addResetClickListeners()

renderPlayerTurn(PLAYER)
////////////////////////////////
