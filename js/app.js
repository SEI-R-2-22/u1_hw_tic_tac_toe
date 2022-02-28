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

function hideMenuButtons() {
  let sG = document.getElementById('hideable')
  sG.style.display = 'none'
}
function showMenuButtons() {
  let sG = document.getElementById('hideable')
  sG.style.display = 'block'
}

function startGame() {
  clearBoard()
  hasGameStarted = true
  hideMenuButtons()

  UpdateGameMessage('' + WhoseTurn() + "'s turn")
  startTimer()
}

function playerCount() {
  isTwoPlayer = !isTwoPlayer
  let pS = document.getElementById('playerSelection')
  pS.innerHTML =
    'Click to Choose Number of Players: ' +
    (isTwoPlayer ? 'Human vs Human' : 'Human vs Machine')
}

function userCellSelection(spaceValue) {
  if (WhoseTurn() === 'O' && !isTwoPlayer) {
    console.log("it is the cpu's turn")
  } else {
    ticTacToeBoard(spaceValue)
  }
}

function ticTacToeBoard(spaceValue) {
  let tempBoardVal = document.getElementsByClassName('space' + spaceValue)[0]
    .innerHTML
  if (hasGameStarted && tempBoardVal === '') {
    document.getElementsByClassName('space' + spaceValue)[0].innerHTML =
      WhoseTurn()
    CheckForWinner()
  } else if (hasGameStarted && tempBoardVal != '') {
    UpdateGameMessage('' + WhoseTurn() + ' please choose an empty cell')
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
    if (WhoseTurn() === 'O') {
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
      AutoPlay()
    } else {
      document.getElementById('gameTimer').innerHTML = countDownTime
    }

    countDownTime -= 1
  }, 1000)
}
function stopTimer() {
  clearInterval(timer)
  document.getElementById('gameTimer').innerHTML = 'ready?'
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
  document.getElementById('gameTimer').innerHTML = 'Game Over'
  recordResults(winner)

  showMenuButtons()
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
    let key = i + 1
    let boardVal = document.getElementsByClassName('space' + key)[0].innerHTML
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

  //console.log(
  //  boardData[winningLine[0]] +
  //    ', ' +
  //    boardData[winningLine[1]] +
  //    ', ' +
  //    boardData[winningLine[2]]
  //)
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

function AutoPlay() {
  let emptyCell = findRandomEmptyCell()

  if (emptyCell === 0) {
    console.log('no empty cells. Auto Play broken')
  } else {
    ticTacToeBoard(emptyCell)
  }
}

function cpuPlay() {
  cpuThinkingTimer()
}

function cpuThinkingTimer() {
  stopTimer()
  let thinkingTime = 1

  timer = setInterval(function () {
    if (thinkingTime < 0) {
      clearInterval(timer)
      AutoPlay()
    } else {
      document.getElementById('gameTimer').innerHTML = 'Thinking...'
    }

    thinkingTime -= 1
  }, 1000)
}

function findRandomEmptyCell() {
  let spaceValue = 0
  let emptyCells = []
  for (let i = 0; i < 9; i++) {
    let key = i + 1
    let boardVal = document.getElementsByClassName('space' + key)[0].innerHTML

    if (boardVal === '') {
      // cell is empty
      emptyCells.push(key)
    }

    if (emptyCells.length > 0) {
      let randomCell = Math.floor(Math.random() * emptyCells.length)
      spaceValue = emptyCells[randomCell]
    }
  }

  return spaceValue
}

//function for CPU 'thinking' timer

//function for time out cell selection
////////////////////////////////
// Event Listeners Here

////////////////////////////////
