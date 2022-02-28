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
// const buttons = document.querySelectorAll('.box')
const currentTurn = document.querySelector('.turn')

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
  } else {
    document.getElementById(boxes).innerHTML = 'O'
  }
}

////////////////////////////////
// Event Listeners Here

////////////////////////////////
