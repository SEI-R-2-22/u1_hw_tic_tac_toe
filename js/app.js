// Global Variables Here

let squareClick = document.querySelectorAll('.square')
const selectionArray = ['x']
let previousSelection = selectionArray[0]

//let currentSelection = selectionArray.push(currentSelection)

if (previousSelection === 'x') {
  let currentSelection = 'o'
  selectionArray.push(currentSelection)
} else {
  let currentSelection = 'x'
  selectionArray.push(currentSelection)
}

// switch (previousSelection) {
//   case 'x':
//     let currentSelection = 'o'
//     selectionArray.push(currentSelection)
//   case 'o':
//     let currentSelection = 'x'
//     selectionArray.push(currentSelection)
// }

console.log(selectionArray)

// if (selectionArray[0] === 'x') {

// }

////////////////////////////////
// Functions For Game Logic Here

for (let i = 0; i < squareClick.length; i++) {
  squareClick[i].addEventListener('click', () => {
    squareClick[i].innerText = selectionArray[i]
  })
}

////////////////////////////////
// Event Listeners Here

////////////////////////////////
