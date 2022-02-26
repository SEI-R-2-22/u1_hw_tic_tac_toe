// Global Variables Here

let squares = document.querySelectorAll('.square')
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

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    squares[i].innerText = selectionArray[i]
    let position = parseInt(squares[i].getAttribute('sqr-position'))
    let selection = selectionArray[i]

    arena[position] = selection
    //arena[position].push(selection)

    console.log(position)
    console.log(arena)
  })
}

////////////////////////////////
