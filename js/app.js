// Global Variables Here

//game tools
let hasGameStarted = false
let isTwoPlayer = true

//Variables for Whose turn it is
let turnIndex = 0
let whosTurnIsIt = []
whosTurnIsIt[0] = 'X'
whosTurnIsIt[1] = 'O'

// Variables for timer
let timer = null

//variables for scoring
let ScoreX = 0
let ScoreO = 0
let ScoreD = 0
let whoWon = ''
////////////////////////////////
// Functions For Game Logic Here
function startGame() {
  hasGameStarted = true
  let sg = document.getElementById('hideable')
  sg.style.display = 'none'
  UpdateGameMessage('' + WhoseTurn() + "'s turn")
  startTimer()
}

function playerCount() {
  isTwoPlayer = !isTwoPlayer
  let pS = document.getElementById('playerSelection')
  pS.innerHTML =
    'Click to Choose Number of Players: ' +
    (isTwoPlayer ? '1p v 2p' : '1p v Cpu')
}
function ticTacToeBoard(spaceValue) {
  //TODO no repeats
  if (hasGameStarted) {
    document.getElementsByClassName('space' + spaceValue)[0].innerHTML =
      WhoseTurn()
    CheckForWinner()
  }
}

function WhoseTurn() {
  return whosTurnIsIt[turnIndex]
}

function NextPlayer() {
  turnIndex += 1
  turnIndex %= whosTurnIsIt.length
  UpdateGameMessage('' + WhoseTurn() + "'s turn")
  startTimer()
}

function UpdateGameMessage(message) {
  let gM = document.getElementById('gameMessage')
  gM.innerHTML = message
}

function startTimer() {
  stopTimer()
  let countDownTime = 10

  timer = setInterval(function () {
    console.log(countDownTime)

    if (countDownTime < 0) {
      clearInterval(timer)
      UpdateGameMessage("Time's Up!")
      //TODO:
      //AutoPlay()
    } else {
      document.getElementById('gameTimer').innerHTML = countDownTime
    }

    countDownTime -= 1
  }, 1000)
}
function stopTimer() {
  clearInterval(timer)
  document.getElementById('gameTimer').innerHTML = ''
}

function CheckForWinner() {
  console.log('checking winner')
  if (checkBoardForWinners()) {
    //win condition
    GameOver()
    console.log('somebody one')
  } else {
    NextPlayer()
    console.log('no winner yet')
  }
}

function GameOver() {}
function checkBoardForWinners() {
  let result = false
  let winner = 'D'
  //TODO:
  //game logic
  if (result) {
    whoWon = winner
  }
  return result
}
////////////////////////////////
// Event Listeners Here

////////////////////////////////
