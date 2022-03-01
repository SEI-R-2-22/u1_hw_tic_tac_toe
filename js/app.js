// Global Variables Here
const button1 = document.querySelector('#box1')
const button2 = document.querySelector('#box2')
const button3 = document.querySelector('#box3')
const button4 = document.querySelector('#box4')
const button5 = document.querySelector('#box5')
const button6 = document.querySelector('#box6')
const button7 = document.querySelector('#box7')
const button8 = document.querySelector('#box8')
const button9 = document.querySelector('#box9')
const buttons = document.querySelectorAll('.box')
const currentTurn = document.querySelector('.turn')

// const winningCombo = [
//   [1, 2, 3],
//   [1, 5, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [4, 5, 6],
//   [7, 8, 9],
//   [7, 5, 3]
// ]

////////////////////////////////
// Functions For Game Logic Here

let player = 1

function changeTurn(boxes) {
  if (player === 1) {
    currentTurn.innerText = "Player 2's Turn"
    player = 0
  } else {
    currentTurn.innerText = "Player 1's Turn"
    player = 1
  }
  if (currentTurn.innerText === "Player 1's Turn") {
    document.getElementById(boxes).innerHTML = 'X'
    document.getElementById(boxes).removeAttribute('onclick')
  } else {
    document.getElementById(boxes).innerHTML = 'O'
    document.getElementById(boxes).removeAttribute('onclick')
  }
}

function reload() {
  location.reload()
}

function checkCombo(boxes) {
  if (
    button1.innerHTML == 'X' &&
    button2.innerHTML == 'X' &&
    button3.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button1.innerHTML == 'O' &&
    button2.innerHTML == 'O' &&
    button3.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button1.innerHTML == 'X' &&
    button5.innerHTML == 'X' &&
    button9.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button1.innerHTML == 'O' &&
    button5.innerHTML == 'O' &&
    button9.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button1.innerHTML == 'X' &&
    button4.innerHTML == 'X' &&
    button7.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button1.innerHTML == 'O' &&
    button4.innerHTML == 'O' &&
    button7.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button2.innerHTML == 'X' &&
    button5.innerHTML == 'X' &&
    button8.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button2.innerHTML == 'O' &&
    button5.innerHTML == 'O' &&
    button8.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button3.innerHTML == 'X' &&
    button6.innerHTML == 'X' &&
    button9.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button3.innerHTML == 'O' &&
    button6.innerHTML == 'O' &&
    button9.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button4.innerHTML == 'X' &&
    button5.innerHTML == 'X' &&
    button6.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button4.innerHTML == 'O' &&
    button5.innerHTML == 'O' &&
    button6.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button7.innerHTML == 'X' &&
    button8.innerHTML == 'X' &&
    button9.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button7.innerHTML == 'O' &&
    button8.innerHTML == 'O' &&
    button9.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  }
  if (
    button7.innerHTML == 'X' &&
    button5.innerHTML == 'X' &&
    button3.innerHTML == 'X'
  ) {
    alert('Player 2 Wins!')
    player = 3
    endGame()
  } else if (
    button7.innerHTML == 'O' &&
    button5.innerHTML == 'O' &&
    button3.innerHTML == 'O'
  ) {
    alert('Player 1 Wins!')
    player = 3
    endGame()
  } else {
    checkDraw()
  }
}

function checkDraw() {
  if (
    (button1.innerHTML === 'X' || button1.innerHTML === 'O') &&
    (button2.innerHTML === 'X' || button2.innerHTML === 'O') &&
    (button3.innerHTML === 'X' || button3.innerHTML === 'O') &&
    (button4.innerHTML === 'X' || button4.innerHTML === 'O') &&
    (button5.innerHTML === 'X' || button5.innerHTML === 'O') &&
    (button6.innerHTML === 'X' || button6.innerHTML === 'O') &&
    (button7.innerHTML === 'X' || button7.innerHTML === 'O') &&
    (button8.innerHTML === 'X' || button8.innerHTML === 'O') &&
    (button9.innerHTML === 'X' || button9.innerHTML === 'O')
  ) {
    alert('Draw! Nobody Won.')
  }
}

function test() {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].removeAttribute('onclick') == true) {
      alert('Draw! nobody won!')
    }
  }
}

function remove() {
  buttons.removeAttribute('onclick')
}

function endGame() {
  if (player === 3) {
    document.getElementById('box1').removeAttribute('onclick')
    document.getElementById('box2').removeAttribute('onclick')
    document.getElementById('box3').removeAttribute('onclick')
    document.getElementById('box4').removeAttribute('onclick')
    document.getElementById('box5').removeAttribute('onclick')
    document.getElementById('box6').removeAttribute('onclick')
    document.getElementById('box7').removeAttribute('onclick')
    document.getElementById('box8').removeAttribute('onclick')
    document.getElementById('box9').removeAttribute('onclick')
  }
}

// Finish adding player = 3 & endgame function to alerts

//////////////
// Event Listeners Here

////////////////////////////////
