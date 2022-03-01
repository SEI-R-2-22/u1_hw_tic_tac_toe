// Global Variables Here
const cells = document.querySelectorAll('.board-game div')
const player1Score = document.querySelector('.player1 .point')
const player2Score = document.querySelector('.player2 .point')
const tie = document.querySelector('.tie .point')
const notification = document.querySelector('.notification')
const playAgain = document.querySelector('.play-again')
const resetButton = document.querySelector('.reset')
const gameModeButton = document.querySelector('.game-mode')


//Construct the first player object
const player1 = {
    sign: 'X',
    score: 0,
    lastClicked: 0,
    isWiner : false,
}

//Construct the second player object
const player2 = {
    sign: 'O',
    score: 0,
    lastClicked: 0,
    isWiner : false,
}

//Construct a computer object
const computer = {
    sign: 'O',
    score: 0,
    lastClicked: 0,
    isWiner : false,
}

let isTie = false
let turn = 1
let user1 = 'Player 1'
let user2 = 'Computer'
let gameMode = 1
const delayInMilliseconds = 1000
let winLine = []

//Create board game as an array: 3x3
let boardGame = Array(3).fill().map(() => Array(3))

//ask for player name
const askUserName = (gameMode) => {
    if (gameMode === 1) {
        user1 = prompt('Name of player 1: ')
        document.querySelector('.player1 p').innerText = user1
        user2 = 'Computer'
    } else {
        user1 = prompt('Name of player 1: ')
        document.querySelector('.player1 p').innerText = user1
        user2 = prompt('Name of player 2: ')
        document.querySelector('.player2 p').innerText = user2
    }
}



//Initialize the value of the board to null
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
        boardGame[i][j] = null
    }
}

////////////////////////////////
// Functions For Game Logic Here
const checkWinner = (player) => {
    const sign = player.sign
    console.log(sign + player)
    //check if player wins by row
    if (boardGame[0][0] === sign && boardGame[0][1] === sign && boardGame[0][2] === sign) {
        player.isWiner = true
        winLine = [1,2,3]
    } else if (boardGame[1][0] === sign && boardGame[1][1] === sign && boardGame[1][2] === sign) {
        player.isWiner = true
        winLine = [4,5,6]
    } else if (boardGame[2][0] === sign && boardGame[2][1] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
        winLine = [7,8,9]
    }
    //check if player wins by column
    if (boardGame[0][0] === sign && boardGame[1][0] === sign && boardGame[2][0] === sign) {
        player.isWiner = true
        winLine = [1,4,7]
    } else if (boardGame[0][1] === sign && boardGame[1][1] === sign && boardGame[2][1] === sign) {
        player.isWiner = true
        winLine = [2,5,8]
    } else if (boardGame[0][2] === sign && boardGame[1][2] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
        winLine = [3,6,9]
    }
    //check if player wins by diagonal line
    if (boardGame[0][0] === sign && boardGame[1][1] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
        winLine = [1,5,9]
    } else if (boardGame[0][2] === sign && boardGame[1][1] === sign && boardGame[2][0] === sign) {
        player.isWiner = true
        winLine = [3,5,7]
    } 
    if (player.isWiner) {
        player.score++
    }
    console.log(player.isWiner)
    return player.isWiner
}
//The straight will be colorred with red
const colorWinLine = () => {
    for(let i = 0; i<winLine.length; i++){
        cells[winLine[i] - 1].classList.toggle('colorred')
    }
}
//Reset color of board game
const removeColorOfBoard = () => {
    for (let i =0; i<cells.length; i++) {
        cells[i].classList.remove('colorred')
    }
}
//Update score on score panel of player
const updateScore = (player) => {
    if (turn === 1) {
        player1Score.innerText = player.score.toString()
    }
    else {
        player2Score.innerText = player.score.toString()
    }
}

//Reset the score
const resetScore = () => {
    player1Score.innerText = '0'
    player2Score.innerText = '0'
    tie.innerText = '0'
}
//Update Tie panel
const updateTie = () => {
    let numOfTie = parseInt(tie.innerText)
    tie.innerText = (++numOfTie).toString()
    isTie = true
}
//clear the board game
const clearBoard = () => {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            boardGame[i][j] = null
        }
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = ''
    }
    player1.isWiner = false
    player1.lastClicked = 0
    player2.isWiner = false
    player2.lastClicked = 0
    computer.isWiner = false
    computer.lastClicked = 0
    isTie = false
    updateNotification()
    removeColorOfBoard()
}

//Update the board
const updateBoardGame = (player) =>{
    switch(player.lastClicked){
        case 1: 
            if (boardGame[0][0] === null) {
                boardGame[0][0] = player.sign
                return true
            } else return false
            break
        case 2:
            if (boardGame[0][1] === null) {
                boardGame[0][1] = player.sign
                return true
            } else return false
            break
        case 3:
            if (boardGame[0][2] === null) {
                boardGame[0][2] = player.sign
                return true
            } else return false
            break
        case 4:
            if (boardGame[1][0] === null) {
                boardGame[1][0] = player.sign
                return true
            } else return false
            break
        case 5:
            if (boardGame[1][1] === null){
                boardGame[1][1] = player.sign
                return true
            } else return false
            break
        case 6:
            if (boardGame[1][2] === null){
                boardGame[1][2] = player.sign
                return true
            } else return false
            break
        case 7:
            if (boardGame[2][0] === null){
                boardGame[2][0] = player.sign
                return true
            } else return false
            break
        case 8:
            if (boardGame[2][1] === null){
                boardGame[2][1] = player.sign
                return true
            } else return false
            break
        case 9:
            if (boardGame[2][2] === null){
                boardGame[2][2] = player.sign
                return true
            } else return false
            break  
        default: return false         
    }
}

//Check if the board game is full
const isBoardFull = () => {
    let isFull = true
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            if (boardGame[i][j] === null) {
                isFull = false
            }
        }
    }
    return isFull
}

//Check if the board game is empty
const isBoardEmpty = () => {
    let isEmpty = true
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++) {
            if (boardGame[i][j] !== null) {
                isEmpty = false
            }
        }
    }
    return isEmpty
}
//update html file 
const updateHtml = (player) => {
    cells[player.lastClicked - 1].innerText = player.sign
}

//Notification
const updateNotification = () => {
    if (gameMode === 1) {
        if (player1.isWiner) {
            notification.innerText = user1 + ' wins'
        } else if (computer.isWiner) {
            notification.innerText = 'Computer wins'
        } else if (isTie){
            notification.innerText = 'We have a tie'
        } else if (turn === 1){
            notification.innerText = "Your move, " + user1
        } else if (turn === 2){
            notification.innerText = "Your move, " + user2
        }else {
            notification.innerText = "Let's play!"
        }  
    } else {
        if (player1.isWiner) {
            notification.innerText = user1 + ' wins'
        } else if (player2.isWiner) {
            notification.innerText = user2 + ' wins'
        } else if (isTie){
            notification.innerText = 'We have a tie'
        } else if (turn === 1){
            notification.innerText = "Your move, " + user1
        } else if (turn === 2) {
            notification.innerText = "Your move, " + user2
        } else {
            notification.innerText = "Let's play!"
        }
    }
}

//Reset button is used to reload the page
const reset = () => {
    location.reload()
}

//Computer generates a move
const generateAClick = () => {
    return Math.floor(Math.random()*9 + 1)
}

const computerMove = () => {
    let isBoardUpdated
            do {                
                computer.lastClicked = generateAClick()
                console.log(computer.lastClicked + "computer")
                if (isBoardUpdated = updateBoardGame(computer)) {                    
                    updateHtml(computer)
                    if (checkWinner(computer)) {
                        updateScore(computer)                         
                        updateNotification()
                        colorWinLine()
                    } else if (isBoardFull()) {
                        updateTie()                          
                        updateNotification()
                    }
                    turn = 1
                    updateNotification()
                } else if (isBoardFull()) {
                    updateTie()           
                    updateNotification()
                } 
            } while (!isBoardUpdated)
}
//Update the board game, check if the player win and update player's score if game mode is 1 person
const playGame1P = (Element) => {
    
    if (player1.isWiner || computer.isWiner || isTie) {
        return
    } else {
        if (isBoardEmpty && turn === 2) {
            // computerMove()
            setTimeout(computerMove, delayInMilliseconds)
        } else if (turn === 1){
            player1.lastClicked = parseInt(Element.dataset.location)
            console.log(player1.lastClicked + " player1")
            if (updateBoardGame(player1)) {                    
                updateHtml(player1)
                if (checkWinner(player1)) {
                    updateScore(player1) 
                    updateNotification()
                    colorWinLine()               
                } else if (isBoardFull()) {
                    updateTie()                 
                    updateNotification()
                }
                turn = 2
                updateNotification()
            } else if (isBoardFull()) {
                updateTie()           
                updateNotification()
            } 
            //Check if there is a win
            if (!(player1.isWiner || computer.isWiner || isTie) ) {
                //Computer's move
                // computerMove()
                setTimeout(computerMove, delayInMilliseconds)
            }
        } 
    }
}

//Update the board game, check if the player win and update player's score if game mode is 2 people
const playGame2P = (Element) => {
    if (player1.isWiner || player2.isWiner || isTie) {
        return
    } else {
        if (turn === 1){
            player1.lastClicked = parseInt(Element.dataset.location)
            console.log(player1.lastClicked + " player1")
            if (updateBoardGame(player1)) {                    
                updateHtml(player1)
                if (checkWinner(player1)) {
                    updateScore(player1) 
                    updateNotification()
                    colorWinLine()               
                } else if (isBoardFull()) {
                    updateTie()                 
                    updateNotification()
                }
                turn = 2
                updateNotification()
            } else if (isBoardFull()) {
                updateTie()           
                updateNotification()
            }            
        } else if (turn === 2) {
            player2.lastClicked = parseInt(Element.dataset.location)
            console.log(player2.lastClicked + " player2")
            if (updateBoardGame(player2)) {                    
                updateHtml(player2)
                if (checkWinner(player2)) {
                    updateScore(player2)                         
                    updateNotification()
                    colorWinLine()
                } else if (isBoardFull()) {
                    updateTie()                          
                    updateNotification()
                }
                turn = 1
                updateNotification()
            } else if (isBoardFull()) {
                updateTie()                    
                updateNotification()
            }
        }
    }
}
//When the board game is clicked, playGame() function will be activate
//Depending of game mode, it will call playgame1P or playGame2P
const playGame = (Element) => {
    if (gameMode === 2) {
        playGame2P(Element)
    } else {
        playGame1P(Element)
    }
}

////////////////////////////////
// Event Listeners Here

//Add event listener to the board game
const addEvents = () => {
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click', playGame.bind(null, cells[i]))
    }
    
}


//Add event listener to the play-aagain button
playAgain.addEventListener('click', clearBoard)

//Add event listerner to the reset button
resetButton.addEventListener('click', reset)

//Add event listener to the game-mode button
gameModeButton.addEventListener('click', () => {
    if (isBoardEmpty()) {
        if (gameMode === 1) {
            gameMode = 2
            gameModeButton.innerText = '2P'
            document.querySelector('.player2 p').innerText = 'Player 2:'
            askUserName(gameMode)
        } else {
            gameMode = 1
            gameModeButton.innerText = '1P'
            document.querySelector('.player2 p').innerText = 'Computer :'   
            askUserName(gameMode)                   
        }
        
    } else {
        return
    }
})

//Game starts from here
addEvents()
askUserName(gameMode)

////////////////////////////////
