// Global Variables Here

let squareClick = document.querySelectorAll('.square')

const selectionArray = ['x']
let previousSelection = selectionArray[0]

//let currentSelection = selectionArray.push(currentSelection)

switch (previousSelection) {
  case 'x':
    selectionArray.push('o')
  default:
    selectionArray.push('x')
}

console.log(selectionArray)

// if (selectionArray[0] === 'x') {

// }

////////////////////////////////
// Functions For Game Logic Here

for (let i = 0; i < squareClick.length; i++) {
  squareClick[i].addEventListener('click', () => {
    squareClick[i].innerText = 'X'
  })
}

////////////////////////////////
// Event Listeners Here

////////////////////////////////
