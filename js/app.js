// Global Variables Here

let squares = document.querySelectorAll('.square')
const selectionArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
let previousSelection = selectionArray[0]
const arena = []
let winner = undefined

//let currentSelection = selectionArray.push(currentSelection)

////////////////////////////////
// Functions For Game Logic Here

const winEval = (position) => {
  switch (position) {
    case 0:
      if (arena[0] === arena[1] && arena[0] === arena[2]) {
        winner = arena[0]
        console.log(`${winner} has won!`)
      } else if (arena[0] === arena[3] && arena[0] === arena[6]) {
        let winner = arena[0]
        console.log(`${winner} has won!`)
      } else if (arena[0] === arena[4] && arena[0] === arena[8]) {
        let winner = arena[0]
        console.log(`${winner} has won!`)
      }
      break
    case 1:
      if (arena[1] === arena[0] && arena[1] === arena[2]) {
        let winner = arena[1]
        console.log(`${winner} has won!`)
      } else if (arena[1] === arena[4] && arena[1] === arena[7]) {
        let winner = arena[1]
        console.log(`${winner} has won!`)
      }
      break
    case 2:
      if (arena[2] === arena[0] && arena[2] === arena[1]) {
        let winner = arena[2]
        console.log(`${winner} has won!`)
      } else if (arena[2] === arena[5] && arena[2] === arena[8]) {
        let winner = arena[2]
        console.log(`${winner} has won!`)
      } else if (arena[2] === arena[4] && arena[2] === arena[6]) {
        let winner = arena[2]
        console.log(`${winner} has won!`)
      }
      break
    case 3:
      if (arena[3] === arena[0] && arena[3] === arena[6]) {
        let winner = arena[3]
        console.log(`${winner} has won!`)
      } else if (arena[3] === arena[4] && arena[3] === arena[5]) {
        let winner = arena[3]
        console.log(`${winner} has won!`)
      }
      break
    case 4:
      if (arena[4] === arena[1] && arena[4] === arena[7]) {
        let winner = arena[4]
        console.log(`${winner} has won!`)
      } else if (arena[4] === arena[3] && arena[4] === arena[5]) {
        let winner = arena[4]
        console.log(`${winner} has won!`)
      } else if (arena[4] === arena[0] && arena[4] === arena[8]) {
        let winner = arena[4]
        console.log(`${winner} has won!`)
      } else if (arena[4] === arena[2] && arena[4] === arena[6]) {
        let winner = arena[4]
        console.log(`${winner} has won!`)
      }
      break
    case 5:
      if (arena[5] === arena[2] && arena[5] === arena[8]) {
        let winner = arena[5]
        console.log(`${winner} has won!`)
      } else if (arena[5] === arena[3] && arena[5] === arena[4]) {
        let winner = arena[5]
        console.log(`${winner} has won!`)
      }
      break
    case 6:
      if (arena[6] === arena[0] && arena[6] === arena[3]) {
        let winner = arena[6]
        console.log(`${winner} has won!`)
      } else if (arena[6] === arena[4] && arena[6] === arena[2]) {
        let winner = arena[6]
        console.log(`${winner} has won!`)
      } else if (arena[6] === arena[7] && arena[6] === arena[8]) {
        let winner = arena[6]
        console.log(`${winner} has won!`)
      }
      break
    case 7:
      if (arena[7] === arena[1] && arena[7] === arena[4]) {
        let winner = arena[7]
        console.log(`${winner} has won!`)
      } else if (arena[7] === arena[6] && arena[7] === arena[8]) {
        let winner = arena[7]
        console.log(`${winner} has won!`)
      }
      break
    case 8:
      if (arena[8] === arena[2] && arena[8] === arena[5]) {
        let winner = arena[8]
        console.log(`${winner} has won!`)
      } else if (arena[8] === arena[6] && arena[8] === arena[7]) {
        let winner = arena[8]
        console.log(`${winner} has won!`)
      } else if (arena[8] === arena[0] && arena[8] === arena[4]) {
        let winner = arena[8]
        console.log(`${winner} has won!`)
      }
      break
  }
}
//
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

let storeClick = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
]

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (!winner) {
      let position = parseInt(squares[i].getAttribute('sqr-position'))

      if (!storeClick[position]) {
        let selection = selectionArray.pop()

        squares[i].innerText = selection
        arena[position] = selection
        storeClick[position] = 'Marked'

        winEval(position)

        console.log(storeClick)
        //console.log(i)
        // console.log(arena)
        // console.log(selectionArray)
        // console.log(selection)
        //console.log(position)
      }
    }
  })
}

////////////////////////////////

// I need to think about you some more: if (storeClick[position] === position) {

let testArray = [0, undefined, 2, 3]

if (testArray[1]) {
  console.log('test worked')
}
