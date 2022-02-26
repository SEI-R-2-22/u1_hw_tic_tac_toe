// Global Variables Here

let squares = document.querySelectorAll('.square')
const selectionArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
let previousSelection = selectionArray[0]
const arena = []

//let currentSelection = selectionArray.push(currentSelection)

////////////////////////////////
// Functions For Game Logic Here

const winEval = () => {
  if (arena[0] === arena[1] && arena[0] === arena[2]) {
    console.log('You have won!')
  }
}

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

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    let position = parseInt(squares[i].getAttribute('sqr-position'))
    let selection = selectionArray.pop()

    squares[i].innerText = selection
    arena[position] = selection

    winEval()

    // console.log(arena)
    // console.log(selectionArray)
    // console.log(selection)
    // console.log(position)
  })
}

////////////////////////////////
