// Global Variables Here
const cells = document.querySelectorAll('.board-game div')
const player1Score = document.querySelector('.player1')
const player2Score = document.querySelector('.player2')
const tie = document.querySelector('.tie')



const player1 = {
    sign: 'X',
    score: 0,
    lastClicked: 0,
    isWiner : false,
}

const player2 = {
    sign: 'O',
    score: 0,
    lastClicked: 0,
    isWiner : false,
}



let isTie = false
let clickedLocation = 0
let turn = 1
//Create board game as an array: 3x3
let boardGame = Array(3).fill().map(() => Array(3))
//Initialize the value of the board to 0
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
    } else if (boardGame[1][0] === sign && boardGame[1][1] === sign && boardGame[1][2] === sign) {
        player.isWiner = true
    } else if (boardGame[2][0] === sign && boardGame[2][1] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
    }
    //check if player wins by column
    if (boardGame[0][0] === sign && boardGame[1][0] === sign && boardGame[2][0] === sign) {
        player.isWiner = true
    } else if (boardGame[0][1] === sign && boardGame[1][1] === sign && boardGame[2][1] === sign) {
        player.isWiner = true
    } else if (boardGame[0][2] === sign && boardGame[1][2] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
    }
    //check if player wins by diagonal line
    if (boardGame[0][0] === sign && boardGame[1][1] === sign && boardGame[2][2] === sign) {
        player.isWiner = true
    } else if (boardGame[0][2] === sign && boardGame[1][1] === sign && boardGame[2][0] === sign) {
        player.isWiner = true
    } 
    if (player.isWiner) {
        player.score++
    }
    console.log(player.isWiner)
    return player.isWiner
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
//Update Tie panel
const updateTie = () => {
    let numOfTie = parseInt(tie.innerText)
    tie.innerText = (++numOfTie).toString()
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
    turn = 1

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
//update html file 
const updateHtml = (player) => {
    cells[player.lastClicked - 1].innerText = player.sign
}


////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', () => {
        if (turn === 1){
            player1.lastClicked = parseInt(cells[i].dataset.location)
            console.log(player1.lastClicked + " player1")
            while (!updateBoardGame(player1)) {  
                if (isBoardFull) {
                    updateTie()
                    clearBoard()
                    break
                }           
            }
            updateHtml(player1)
            //check if player1 win
            if (checkWinner(player1)) {
                updateScore(player1)
                clearBoard()
            }
        
            turn = 2
        } else {
            player2.lastClicked = parseInt(cells[i].dataset.location)
            console.log(player2.lastClicked + " player2")
            while (!updateBoardGame(player2)) {       
                if (isBoardFull) {
                    updateTie()
                    clearBoard()
                    break
                }     
            }
            
            updateHtml(player2)
            //check if player2 win
            if (checkWinner(player2)) {
                updateScore(player2)
                clearBoard()
            }
            turn = 1
        }
    })
}



////////////////////////////////
