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

//array of winning scenarios
let winningLines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

////////////////////////////////
// Functions For Game Logic Here
function startGame() {
  clearBoard()
  hasGameStarted = true
  //TODO change hide show button to function
  let sG = document.getElementById('hideable')
  sG.style.display = 'none'
  UpdateGameMessage('' + WhoseTurn() + "'s turn")
  startTimer()
}

function playerCount() {
  //TODO add cpu logic
  isTwoPlayer = !isTwoPlayer
  let pS = document.getElementById('playerSelection')
  pS.innerHTML =
    'Click to Choose Number of Players: ' +
    (isTwoPlayer ? '1p v 2p' : '1p v Cpu')
}
function ticTacToeBoard(spaceValue) {
  //TODO add 'error' message if user picks occupied cell
  let tempBoardVal = document.getElementsByClassName('space' + spaceValue)[0]
    .innerHTML
  if (hasGameStarted && tempBoardVal === '') {
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
  if (isTwoPlayer) {
    startTimer()
  } else {
    if (WhoseTurn() == 'O') {
      cpuPlay()
    } else {
      startTimer()
    }
  }
}

function UpdateGameMessage(message) {
  let gM = document.getElementById('gameMessage')
  gM.innerHTML = message
}

function startTimer() {
  stopTimer()

  let countDownTime = 10

  timer = setInterval(function () {
    //console.log(countDownTime)

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
  if (checkBoardForMatches()) {
    //win condition
    GameOver(whoWon)
    console.log('game is done')
  } else if (isBoardFull()) {
    GameOver('D')
    console.log('game is done')
  } else {
    NextPlayer()
    console.log('no winner yet')
  }
}

function GameOver(winner) {
  stopTimer()
  recordResults(winner)

  let sG = document.getElementById('hideable')
  sG.style.display = 'block'
}

function recordResults(winner) {
  if (winner === 'X') {
    ScoreX++
    UpdateGameMessage(winner + ' is the winner')
    console.log('somebody won')
  } else if (winner === 'O') {
    ScoreO++
    UpdateGameMessage(winner + ' is the winner')
    console.log('somebody won')
  } else {
    ScoreD++
    UpdateGameMessage('Tie Game')
    console.log('tie game')
  }
  document.getElementById(
    'scoreBoard'
  ).innerHTML = `X: ${ScoreX} \n O: ${ScoreO} \n D: ${ScoreD}`
}

function clearBoard() {
  for (let i = 0; i < 9; i++) {
    var key = i + 1
    document.getElementsByClassName('space' + key)[0].innerHTML = ''
  }
}

function checkBoardForMatches() {
  let result = false
  let winner = 'D'

  let boardData = getBoardData()

  winningLines.forEach(function (wLine) {
    let tempWin = isWinner(boardData, wLine)
    if (tempWin != '') {
      winner = tempWin
      result = true
    }
  })

  if (result) {
    whoWon = winner
  }
  return result
}

function getBoardData() {
  let boardDict = []

  for (let i = 0; i < 9; i++) {
    var key = i + 1
    var boardVal = document.getElementsByClassName('space' + key)[0].innerHTML
    //console.log('val: ' + boardVal)
    boardDict[key] = boardVal
  }

  return boardDict
}

function isWinner(boardData, winningLine) {
  let result =
    boardData[winningLine[0]] === boardData[winningLine[1]] &&
    boardData[winningLine[0]] === boardData[winningLine[2]] &&
    boardData[winningLine[1]] === boardData[winningLine[2]] &&
    (boardData[winningLine[0]] != '' ||
      boardData[winningLine[1]] != '' ||
      boardData[winningLine[2]] != '')

  console.log(
    boardData[winningLine[0]] +
      ', ' +
      boardData[winningLine[1]] +
      ', ' +
      boardData[winningLine[2]]
  )
  if (result) return boardData[winningLine[0]]
  else return ''
}

function isBoardFull() {
  let result = true
  for (let i = 0; i < 9; i++) {
    var key = i + 1
    var boardVal = document.getElementsByClassName('space' + key)[0].innerHTML

    if (boardVal === '') {
      result = false
    }
  }

  return result
}

//TODO CPU functions for single player game

function AutoPlay() {
  stopTimer()
}

function cpuPlay() {
  stopTimer()
}
//function for find empty cell

//function for CPU 'thinking' timer

//function for time out cell selection
////////////////////////////////
// Event Listeners Here

////////////////////////////////
