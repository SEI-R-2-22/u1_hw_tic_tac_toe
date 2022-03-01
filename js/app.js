// Global Variables Here
let click = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let cells = document.querySelectorAll('.js-cell')
let turn = document.querySelector('.turn')
let selected = []
let player = null
let icon = ''
let winMessage = ''
let choiceOne = `🪨 's turn`
let choiceTwo = `🪶 's turn`

////////////////////////////////
// Functions For Game Logic Here
const countClick = (e) => {
  //Player Choice
  let position = parseInt(e.target.getAttribute('data-increment'))
  // Determine player
  if (selected.length % 2 === 0) {
    click.splice(position, 1, 1)

    player = 1
    winMessage = '🪶 Win!'
    icon = '🪶'
    turn.innerText = choiceOne
  } else if (selected.length % 2 === 1 && selected.length < 9) {
    click.splice(position, 1, 2)

    player = 2
    winMessage = '🪨 Win!'
    icon = '🪨'
    turn.innerText = choiceTwo
  }
  //Ban the selected choices
  if (selected.includes(position)) {
    return
  } else {
    // Show icon when cells are picked
    e.target.innerText = icon

    // Determine moves
    selected.push(position)

    // Winning combinations

    if (
      (click[0] === player && click[1] === player && click[2] === player) ||
      (click[3] === player && click[4] === player && click[5] === player) ||
      (click[6] === player && click[7] === player && click[8] === player) ||
      (click[0] === player && click[3] === player && click[6] === player) ||
      (click[1] === player && click[4] === player && click[7] === player) ||
      (click[2] === player && click[5] === player && click[8] === player) ||
      (click[0] === player && click[4] === player && click[8] === player) ||
      (click[2] === player && click[4] === player && click[6] === player)
    ) {
      turn.innerText = winMessage
      selected = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    } else if (!click.includes(0)) {
      turn.innerText = 'Tie!'
      return
    }
  }
}

// Mode 2

const secondMode = (e) => {
  //Player Choice
  let position = parseInt(e.target.getAttribute('data-increment'))
  if (selected.length < 9) {
    turn.innerText = choiceTwo
  }

  click.splice(position, 1, 1)
  if (selected.includes(position)) {
    return
  } else {
    e.target.innerText = '🪶'

    selected.push(position)

    if (
      (click[0] === 1 && click[1] === 1 && click[2] === 1) ||
      (click[3] === 1 && click[4] === 1 && click[5] === 1) ||
      (click[6] === 1 && click[7] === 1 && click[8] === 1) ||
      (click[0] === 1 && click[3] === 1 && click[6] === 1) ||
      (click[1] === 1 && click[4] === 1 && click[7] === 1) ||
      (click[2] === 1 && click[5] === 1 && click[8] === 1) ||
      (click[0] === 1 && click[4] === 1 && click[8] === 1) ||
      (click[2] === 1 && click[4] === 1 && click[6] === 1)
    ) {
      turn.innerText = '🪶 Win!'
      selected = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    } else {
      //Computer Choice
      const computerRange = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      const newRange = new Set(selected)
      const newArr = computerRange.filter((pos) => {
        return !newRange.has(pos)
      })
      const randomIndex = Math.floor(Math.random() * newArr.length)
      computerChoice = newArr[randomIndex]
      if (newArr.length === 0) {
        turn.innerText = 'Tie!'
        return
      }
      setTimeout(() => {
        cells[computerChoice].innerText = '🪨'
      }, 400)

      selected.push(computerChoice)

      click.splice(computerChoice, 1, 2)

      if (
        (click[0] === 2 && click[1] === 2 && click[2] === 2) ||
        (click[3] === 2 && click[4] === 2 && click[5] === 2) ||
        (click[6] === 2 && click[7] === 2 && click[8] === 2) ||
        (click[0] === 2 && click[3] === 2 && click[6] === 2) ||
        (click[1] === 2 && click[4] === 2 && click[7] === 2) ||
        (click[2] === 2 && click[5] === 2 && click[8] === 2) ||
        (click[0] === 2 && click[4] === 2 && click[8] === 2) ||
        (click[2] === 2 && click[4] === 2 && click[6] === 2)
      ) {
        console.log('You Lose!')
        selected = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        turn.innerText = '🪨 Win!'
      }
    }
  }
}

////////////////////////////////
// Event Listeners Here

let playerChoice

document.querySelector('#onePlayer').addEventListener('click', () => {
  playerChoice = true
  choosePlayer(playerChoice)
  // reset()
})

document.querySelector('#twoPlayer').addEventListener('click', () => {
  playerChoice = false
  choosePlayer(playerChoice)
  // reset()
})

const choosePlayer = (choice) => {
  if (choice) {
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', secondMode)
    }
  } else {
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', countClick)
    }
  }
}

const reset = () => {
  location.reload()
}

// const reset = () => {
//   click = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   selected = []
//   player = null
//   icon = ''
//   cells.forEach((q) => {
//     q.innerText = ''
//   })
// }

document.querySelector('#reset').onclick = reset
////////////////////////////////
