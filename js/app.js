// Global Variables Here
const cells = document.querySelectorAll('.board-game div')
const player = {
    sign: '',
    score: 0,
    lastClicked: 0,
    isTurn : true,
    isWiner : false,
}
const player1 = {
    sign: 'X',
    score: 0,
    lastClicked: 0,
    isTurn : true,
    isWiner : false,
}

const player2 = {
    sign: 'O',
    score: 0,
    lastClicked: 0,
    isTurn : false,
    isWiner : false,
}



let tie = 0
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

//get location of clicl event
const getLocation = ()  => {
    if (turn === 1){
        player1.lastClicked = parseInt(cells[i].dataset.location)
        console.log(player1.lastClicked + " player1")
        while (!updateBoardGame(player1)) { 
            if (isBoardFull) {
                break
            }           
        }
        updateHtml(player1)
        //check if player1 win
        turn = 2
    } else {
        player2.lastClicked = parseInt(cells[i].dataset.location)
        console.log(player2.lastClicked + " player2")
        while (!updateBoardGame(player2)) { 
            if (isBoardFull) {
                break
            }             
        }
        updateHtml(player2)
        //check if player1 win
        turn = 1
    }
    
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
                    break
                }           
            }
            updateHtml(player1)
            //check if player1 win
            turn = 2
        } else {
            player2.lastClicked = parseInt(cells[i].dataset.location)
            console.log(player2.lastClicked + " player2")
            while (!updateBoardGame(player2)) {       
                if (isBoardFull) {
                    break
                }     
            }
            
            updateHtml(player2)
            //check if player1 win
            turn = 1
        }
    })
}



////////////////////////////////
