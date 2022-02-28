// target all the HTML tags needed
const message = document.querySelector('#banner')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const playAgain = document.querySelector('#againText')
const gameBoxes = document.querySelectorAll('.gamebox')
const scoreList = document.querySelector('#scoreList')

//var needed to track player moves
const boxesLength = gameBoxes.length
let moveCounter = 0
const playerOneMoves = []
const playerTwoMoves = []

//main game function
const startGame = () => {
  // loop through all the game boxes and add eventlistner to each box.
  for (let i = 0; i < boxesLength; i++) {
    gameBoxes[i].addEventListener('click', () => {
      //if box is empty move to allow player to play the box.
      if (gameBoxes[i].innerHTML === '') {
        //if the moveCounter is undedfined, it means the game is over. return without doing anything.
        if (moveCounter === undefined) {
          return
        } else if (moveCounter % 2 === 0) {
          // if movecounter%2 = 0 that means it is the first players turn.
          //add a O and change background color to the box that is clicked
          gameBoxes[i].innerHTML = 'O'
          gameBoxes[i].style.backgroundColor = '#ffe4e6'
          //keep track of the box that was clicked.
          playerOneMoves.push(gameBoxes[i].getAttribute('data-value'))
          //increment movecounter to indicate next player move
          moveCounter++
          //check to see if player win or not.
          if (checkWinner(playerOneMoves)) {
            // if player win. change the banner message and make movecounter undefine.
            message.innerText = 'Player One Wins the Game'
            const winningNumber = winningSeq(playerOneMoves)
            addScoreBoard('player1')
            for (let i = 0; i < winningNumber.length; i++) {
              gameBoxes[winningNumber[i]].style.backgroundColor = 'yellow'
              activePlayer(gameBoxes[winningNumber[i]])
            }
            moveCounter = undefined
            return
          } else if (moveCounter === 9) {
            // if movecounter === 9 the game is a draw.
            message.innerText = 'DRAW GAME'
            return
          }
          //display the next players move
          message.innerHTML = "Player Two's move"
        } else {
          //add a O and change background color to the box that is clicked

          gameBoxes[i].innerHTML = 'X'
          gameBoxes[i].style.backgroundColor = '#dbeafe'
          //keep track of the box that was clicked.
          playerTwoMoves.push(gameBoxes[i].getAttribute('data-value'))
          moveCounter++
          //check to see if player win or not.
          if (checkWinner(playerTwoMoves)) {
            // if player win. change the banner message and make movecounter undefine.
            message.innerText = 'Player Two wins the Game'
            const winningNumber = winningSeq(playerTwoMoves)
            addScoreBoard('player2')
            for (let i = 0; i < winningNumber.length; i++) {
              gameBoxes[winningNumber[i]].style.backgroundColor = 'yellow'
              activePlayer(gameBoxes[winningNumber[i]])
            }
            moveCounter = undefined
            return
          } else if (moveCounter === 9) {
            // if movecounter === 9 the game is a draw.
            message.innerText = 'DRAW GAME'
            return
          }
          message.innerText = "Player One's Move"
        }
      }
    })
  }
}

//invoke the start game function
startGame()

// function to reset the game
const resetGame = () => {
  //clear all boxes reset it back to the original state
  gameBoxes.forEach((box) => {
    box.innerHTML = ''
    box.style.backgroundColor = 'rgb(159, 162, 164)'
    box.classList.remove('shake')
  })
  //return the message back to original message.
  message.innerText = 'Player One Goes First'
  //reset player move tracker to 0
  playerOneMoves.length = 0
  playerTwoMoves.length = 0
  moveCounter = 0
  //invoke game again.
  startGame()
}
// link reset function to PlayAgain btn.
playAgain.addEventListener('click', resetGame)

// check for winner
const checkWinner = (playerMoves) => {
  //tic tac toe winning Sequence
  const winSeq = [
    ['1', '2', '0'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ]
  // checking for player move again winning sequence.
  let winNumOne = ''
  let winNumTwo = ''
  let winNumThree = ''
  for (let i = 0; i < winSeq.length; i++) {
    //loop through all possible winning sequence.
    let checkSeq = winSeq[i]
    winNumOne = checkSeq[0]
    winNumTwo = checkSeq[1]
    winNumThree = checkSeq[2]
    //return true if a player matched one of the winning sequence.
    if (
      playerMoves.includes(winNumOne) &&
      playerMoves.includes(winNumTwo) &&
      playerMoves.includes(winNumThree)
    ) {
      return true
    }
  }
}

const winningSeq = (playerMoves) => {
  const winSeq = [
    ['1', '2', '0'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ]
  let winNumOne = ''
  let winNumTwo = ''
  let winNumThree = ''
  for (let i = 0; i < winSeq.length; i++) {
    let checkSeq = winSeq[i]
    winNumOne = checkSeq[0]
    winNumTwo = checkSeq[1]
    winNumThree = checkSeq[2]

    if (
      playerMoves.includes(winNumOne) &&
      playerMoves.includes(winNumTwo) &&
      playerMoves.includes(winNumThree)
    ) {
      return checkSeq
    }
  }
}

const a = ['0', '2', '1']

// const drawGame = (moves) => {
//   if(moves === 9)
// }
const activePlayer = (player) => {
  player.classList.add('shake')
}

const addScoreBoard = (player) => {
  const li = document.createElement('li')
  li.innerText = `${player} win`
  scoreList.appendChild(li)
}

// const boxColorChange = (box) => {
//   box.style.backgroundColor = 'red'
// }

// const randomPlay = (player, sign, num) => {
//   let second = 5

//   const timed = setInterval(() => {
//     second -= 1
//     player.innerHTML = second
//     for (let i = 0; i < boxesLength; i++) {
//       gameBoxes[i].addEventListener('click', () => {
//         // clearInterval(timed)
//         second = 5
//         player.innerHTML = `Player${num}`
//       })
//       for (let i = 0; i < gameBoxes.length; i++) {
//         if (gameBoxes[i].innerHTML === '') {
//           gameBoxes[i].innerHTML = sign
//           player.innerHTML = `Player${num}`
//           if (moveCounter % 2 === 0) {
//             playerOneMoves.push(gameBoxes[i].getAttribute('data-value'))
//           } else {
//             playerTwoMoves.push(gameBoxes[i].getAttribute('data-value'))
//           }
//           second = 5
//           moveCounter++
//           return
//         }
//       }
//     }
//   }, 1000)
// }

// for (let i = 0; i < boxesLength; i++) {
//   gameBoxes[i].addEventListener('click', randomPlay)
// }
