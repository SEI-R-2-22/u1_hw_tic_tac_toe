// Global Variables Here

let squareClick = document.querySelectorAll('.square')
const selectionArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
let previousSelection = selectionArray[0]

const arena = []

//let currentSelection = selectionArray.push(currentSelection)

////////////////////////////////
// Functions For Game Logic Here

// Below was used to switch x and o, not sure if I needed it.
// if (previousSelection === 'x') {
//   let currentSelection = 'o'
//   selectionArray.push(currentSelection)
// } else {
//   let currentSelection = 'x'
//   selectionArray.push(currentSelection)
// }

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < squareClick.length; i++) {
  squareClick[i].addEventListener('click', () => {
    squareClick[i].innerText = selectionArray[i]
    arena.push(selectionArray[i])
    console.log(arena)
  })
}

////////////////////////////////
