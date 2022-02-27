// Global Variables Here

////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here

////////////////////////////////

let box1 = document.querySelector('#square0')
let box2 = document.querySelector('#square1')
let box3 = document.querySelector('#square2')
let box4 = document.querySelector('#square3')
let box5 = document.querySelector('#square4')
let box6 = document.querySelector('#square5')
let box7 = document.querySelector('#square6')
let box8 = document.querySelector('#square7')
let box9 = document.querySelector('#square8')

let xTurn = true

let click1 = false
let click2 = false
let click3 = false
let click4 = false
let click5 = false
let click6 = false
let click7 = false
let click8 = false
let click9 = false

box1.addEventListener('click', () => {
  if (click1 === false) {
    if (xTurn) {
      box1.innerHTML = 'X'
    } else if (!xTurn) {
      box1.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click1 = true
  }
})

box2.addEventListener('click', () => {
  if (click2 === false) {
    if (xTurn) {
      box2.innerHTML = 'X'
    } else if (!xTurn) {
      box2.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click2 = true
  }
})

box3.addEventListener('click', () => {
  if (click3 === false) {
    if (xTurn) {
      box3.innerHTML = 'X'
    } else if (!xTurn) {
      box3.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click3 = true
  }
})

box4.addEventListener('click', () => {
  if (click4 === false) {
    if (xTurn) {
      box4.innerHTML = 'X'
    } else if (!xTurn) {
      box4.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click4 = true
  }
})

box5.addEventListener('click', () => {
  if (click5 === false) {
    if (xTurn) {
      box5.innerHTML = 'X'
    } else if (!xTurn) {
      box5.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click5 = true
  }
})

box6.addEventListener('click', () => {
  if (click6 === false) {
    if (xTurn) {
      box6.innerHTML = 'X'
    } else if (!xTurn) {
      box6.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click6 = true
  }
})

box7.addEventListener('click', () => {
  if (click7 === false) {
    if (xTurn) {
      box7.innerHTML = 'X'
    } else if (!xTurn) {
      box7.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click7 = true
  }
})

box8.addEventListener('click', () => {
  if (click8 === false) {
    if (xTurn) {
      box8.innerHTML = 'X'
    } else if (!xTurn) {
      box8.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click8 = true
  }
})

box9.addEventListener('click', () => {
  if (click9 === false) {
    if (xTurn) {
      box9.innerHTML = 'X'
    } else if (!xTurn) {
      box9.innerHTML = 'O'
    }
    xTurn = !xTurn
    //checkWin()
    click9 = true
  }
})
// box1.innerHTML === 'X' && box
// box1 === box2, box3 === 'X'
