// Global Variables Here
//used to store playing user
let player = 'x'
//used to register if game is in progress or over
let gameInProgress = true
//variable to encompass table boxes
const boxes = document.getElementsByClassName('box')
//grabs and stores button
const btn = document.getElementById('play')
const bttn = document.getElementById('replay')
let turnCounter = 0

////////////////////////////////
// Functions For Game Logic Here

const playerPlays = (index) => {
  if (boxes[index].innerHTML === '' && gameInProgress === true) {
    boxes[index].innerHTML = player
  }
  turnCounter++
  if (
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[1].innerHTML === boxes[2].innerHTML &&
    boxes[0].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[3].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[5].innerHTML &&
    boxes[3].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[6].innerHTML === boxes[7].innerHTML &&
    boxes[7].innerHTML === boxes[8].innerHTML &&
    boxes[6].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[0].innerHTML === boxes[3].innerHTML &&
    boxes[3].innerHTML === boxes[6].innerHTML &&
    boxes[0].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[1].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[7].innerHTML &&
    boxes[1].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[2].innerHTML === boxes[5].innerHTML &&
    boxes[5].innerHTML === boxes[8].innerHTML &&
    boxes[2].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[0].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[8].innerHTML &&
    boxes[0].innerHTML != ''
  ) {
    displayWinner()
  } else if (
    boxes[2].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[6].innerHTML &&
    boxes[2].innerHTML != ''
  ) {
    displayWinner()
  } else if (turnCounter === 9) {
    displayTie()
  }
  if (player === 'x') {
    ;(player = 'o'), (document.getElementById('player').innerHTML = 'Turn: O')
  } else if (player === 'o') {
    ;(player = 'x'), (document.getElementById('player').innerHTML = 'Turn: X')
  }
}

//for loop that begins game
const playGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      playerPlays(i)
    })
  }
}

const displayWinner = () => {
  let winMessage = player + ' you win!'
  document.getElementById('status').innerHTML = winMessage.toUpperCase()
  gameInProgress = false
  endGame()
}

const displayTie = () => {
  let drawMessage = 'Draw! Please play again.'
  document.getElementById('status').innerHTML = drawMessage
  gameInProgress = false
}

const replayGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
    document.getElementById('status').innerHTML = 'Results'
    boxes[i].classList.remove('disable')
  }
  player = 'x'
  gameInProgress = true
  turnCounter = 0
}

const endGame = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', playGame)
    boxes[i].classList.add('disable')
  }
}

////////////////////////////////
// Event Listeners Here
btn.addEventListener('click', playGame)
bttn.addEventListener('click', replayGame)
//////////////////////////////
