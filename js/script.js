// target all the HTML tags needed
const message = document.querySelector('#banner')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const playAgain = document.querySelector('#againText')
const gameBoxes = document.querySelectorAll('.gamebox')
const scoreList = document.querySelector('#scoreList')

//selection btw player 2 or AI
let ai = 0
player2.addEventListener('click', () => {
  if (ai % 2 === 0) {
    player2.innerHTML = 'Player2'
    player2.style.backgroundColor = 'white'
    ai++
  } else {
    player2.innerHTML = 'AI'
    player2.style.backgroundColor = 'grey'
    ai++
  }
})

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
          winner(playerOneMoves, 'Player1')
          //display the next players move
          message.innerHTML = "Player Two's move"

          //Check to see if AI is selected, if it is, AI will play
          if (player2.innerHTML === 'AI') {
            randomPlay()
          }
        } else if (moveCounter % 2 != 0 && player2.innerHTML === 'Player2') {
          //add a O and change background color to the box that is clicked

          gameBoxes[i].innerHTML = 'X'
          gameBoxes[i].style.backgroundColor = '#dbeafe'
          //keep track of the box that was clicked.
          playerTwoMoves.push(gameBoxes[i].getAttribute('data-value'))
          moveCounter++
          //check to see if player win or not.
          winner(playerTwoMoves, 'Player2')
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
  message.innerText = 'Select Player 2 Option'
  player2.innerHTML = 'Player2/AI'
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

const winner = (playerMove, player) => {
  if (checkWinner(playerMove)) {
    // if player win. change the banner message and make movecounter undefine.
    message.innerText = 'Player Two wins the Game'
    const winningNumber = winningSeq(playerMove)
    addScoreBoard(player)
    for (let i = 0; i < winningNumber.length; i++) {
      gameBoxes[winningNumber[i]].style.backgroundColor = 'yellow'
      activePlayer(gameBoxes[winningNumber[i]])
    }
    moveCounter = undefined
    return
  } else if (moveCounter === 9) {
    // if movecounter === 9 the game is a draw.
    message.innerText = 'DRAW GAME'
    addScoreBoard('Draw Game')
    return
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

const activePlayer = (player) => {
  player.classList.add('shake')
}

//list out score on the screen
const addScoreBoard = (player) => {
  const li = document.createElement('li')
  if (player !== 'Draw Game') {
    li.innerText = `${player} Wins`
  } else {
    li.innerText = 'Draw Game'
  }
  scoreList.appendChild(li)
}

//introduce AI placing the game as 2nd player.
const randomPlay = () => {
  let second = Math.floor(Math.random() * 5)

  const timed = setInterval(() => {
    second -= 1
    player2.innerHTML = `AI time ${second}`
    if (second <= 0) {
      makeMove('X')
      second = Math.floor(Math.random() * 5)
      player2.innerHTML = 'AI'
      clearInterval(timed)
      if (checkWinner(playerTwoMoves)) {
        // if player win. change the banner message and make movecounter undefine.
        message.innerText = 'Player Two wins the Game'
        const winningNumber = winningSeq(playerTwoMoves)
        addScoreBoard('AI')
        for (let i = 0; i < winningNumber.length; i++) {
          gameBoxes[winningNumber[i]].style.backgroundColor = 'yellow'
          activePlayer(gameBoxes[winningNumber[i]])
        }
        moveCounter = undefined
        return
      } else if (moveCounter === 9) {
        // if movecounter === 9 the game is a draw.
        message.innerText = 'DRAW GAME'
        addScoreBoard('Draw Game')
        return
      }
    }
  }, 1000)
}

const makeMove = (sign) => {
  for (let i = 0; i < boxesLength; i++) {
    if (gameBoxes[i].innerHTML === '') {
      gameBoxes[i].innerHTML = sign
      gameBoxes[i].style.backgroundColor = '#dbeafe'
      playerTwoMoves.push(gameBoxes[i].getAttribute('data-value'))
      moveCounter++
      return
    }
  }
}
