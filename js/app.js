// Global Variables Here

let gridA
let turn
let playerWon
let gridColor
let gridX
// let gridIndex = parseInt(e.target.id.replace('grid', ''))

////////////////////////////////
// Functions For Game Logic Here
const intro = document.querySelector('#intro')
const startBtn = document.querySelector('#restart-Btn')
const gridAll = document.querySelectorAll('.grid')
////////////////////////////////
// Event Listeners Here

startBtn.addEventListener('click', game)
// console.log(startBtn)
gridAll.forEach((grid) => {
  grid.addEventListener('click', select)
})
// console.log(gridAll)

// gridAll[0].addEventListener('click', console.log('works'))
////////////////////////////////

game()

function game() {
  gridA = [null, null, null, null, null, null, null, null, null]
  // console.log(gridA)
  turn = 1
  playerWon = null
  startBtn.setAttribute('hidden', true)
  console.log(startBtn)
  build()
}

// https://www.w3schools.com/jsref/jsref_foreach.asp
function build() {
  gridA.forEach((grid, i) => {
    // referencing creating an image https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create
    // function toe() {
    //   let toe = document.createElement('O')
    //   toe.innerHTML(
    //     'https://media.giphy.com/media/3o6nV9Jwb8UXVCldHa/giphy.gif'
    //   )
    //   // toe.setAttribute('width', '85')
    //   // toe.setAttribute('height', '228')
    //   toe.setAttribute('alt', 'TOE')
    //   document.body.appendChild(toe)
    // }

    // toe.se

    // let toe = new Image()
    // toe.src = 'https://media.giphy.com/media/3o6nV9Jwb8UXVCldHa/giphy.gif'
    // document.body.appendChild(toe)

    // EXAMPLE FROM STUDENT -
    //     const name = "John";
    // // assuming 'el' is an HTML DOM element
    // el.innerHTML = name; // harmless in this case

    // // ...

    // name = "<script>alert('I am John in an annoying alert!')</script>";
    // el.innerHTML = name; // harmless in this case

    if (grid === 1) {
      gridColor = 'blue'
      gridX = 'x'
    } else if (grid === -1) {
      gridColor = 'green'
      gridX = 'o'
    } else if (grid === null) {
      // gridColor = 'gray'
      gridX = null
    }
    // console.log(gridAll[4])
    gridAll[i].style.color = gridColor
    gridAll[i].innerHTML = gridX
  })

  // Null was not working : referenced optional chainging
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  if (!playerWon) {
    intro.innerText = `${turn === 1 ? "X's" : "TOE's"} turn`
    intro.style.color = `${turn === 1 ? 'purple' : 'blue'}`
    // control.log('winner winner chicken dinner, but not yet')
  } else if (playerWon == 'T') {
    intro.innerText = 'Tie Game! Replay'
    intro.style.color = 'purple'
    console.log('T')
  } else {
    intro.textContent = `${playerWon === 1 ? 'X' : 'TOE'} is winner!`
    console.log('winner')
  }
}

function select(e) {
  let gridIndex = parseInt(e.target.id.replace('grid', ''))

  if (gridA[gridIndex] === -1 || gridA[gridIndex] === 1) {
    // console.log('working')
    consol
    return
  } else if (playerWon !== null) {
    // console.log('working2')
    return
  }

  // referencing https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
  startBtn.removeAttribute('hidden')
  gridA[gridIndex] = turn
  turn *= -1

  playerWon = findWinner()
  build()
  console.log(gridA)
}

// function findWinner() {
//   if (gridA[0] == gridA[1] && gridA[0] == gridA[2]) {
//     return gridA[0]
//   } else if (gridA[3] == gridA[4] && gridA[3] == gridA[5]) {
//     return gridA[3]
//   } else if (gridA[6] == gridA[7] && gridA[6] == gridA[8]) {
//     return gridA[6]
//   } else if (gridA[0] == gridA[3] && gridA[0] == gridA[6]) {
//     return gridA[0]
//   } else if (gridA[1] == gridA[4] && gridA[1] == gridA[7]) {
//     return gridA[1]
//   } else if (gridA[2] == gridA[5] && gridA[2] == gridA[8]) {
//     return gridA[2]
//   } else if (gridA[0] == gridA[4] && gridA[0] == gridA[8]) {
//     return gridA[0]
//   } else if (gridA[2] == gridA[4] && gridA[2] == gridA[6]) {
//     return gridA[2]
//   }
//   return ''
// }

// Math.abs() returns the absolute value of a number: Reference from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_abs
// This seemed to be the most used process to find the winner in stack overflow as well
function findWinner() {
  if (Math.abs(gridA[0] + gridA[1] + gridA[2]) === 3) return gridA[0]
  if (Math.abs(gridA[3] + gridA[4] + gridA[5]) === 3) return gridA[3]
  if (Math.abs(gridA[6] + gridA[7] + gridA[8]) === 3) return gridA[6]
  if (Math.abs(gridA[0] + gridA[3] + gridA[6]) === 3) return gridA[0]
  if (Math.abs(gridA[1] + gridA[4] + gridA[7]) === 3) return gridA[1]
  if (Math.abs(gridA[2] + gridA[5] + gridA[8]) === 3) return gridA[2]
  if (Math.abs(gridA[0] + gridA[4] + gridA[8]) === 3) return gridA[0]
  if (Math.abs(gridA[2] + gridA[4] + gridA[6]) === 3) return gridA[2]
  // const numWin = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ]
  if (gridA.includes(null)) {
    return null
  } else {
    return 'T'
  }
}
