// Global Variables Here

//Grabbing HTML objects
const tiles = document.querySelectorAll('.box')
let moonMove = Array.from(document.getElementsByClassName('inactive')) //available moves for computer
let moon = Array.from(document.querySelectorAll('.moon'))
let star = Array.from(document.querySelectorAll('.star'))


//Empty player array for win check
let playerChoice = []

//Empty computer arrays
let computerChoice = [] //stores object picked
let computerArr = [] //stores index of computer picks for win check

//Game Status
let pWin = null
let cWin = null
let draw = null
let tie = null

//Turn counters
let turnCount = 0
let counter = document.getElementById('turn-count')

//Win Conditions
const winCombo1 = [0, 1, 2].toString();
const winCombo2 = [3, 4, 5].toString();
const winCombo3 = [6, 7, 8].toString();
const winCombo4 = [0, 3, 6].toString();
const winCombo5 = [1, 4, 7].toString();
const winCombo6 = [2, 5, 8].toString();
const winCombo7 = [0, 4, 8].toString();
const winCombo8 = [2, 4, 6].toString();

// ONGOING BUGS:
// 1. Computer won't stop picking player occupied spots
// 2. Game end messages display multiple times for some reason
// 3. Gotta figure out better method for tie conditions...

//Aside: I kept the console.logs but commented them out so I could continue to troubleshoot later

////////////////////////////////
// Functions For Game Logic Here
    
//Player Move
for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', () => {
        turnCount = turnCount + 1
        counter.innerText = turnCount
        // console.log(turnCount)
    if (star[i].classList.contains('avail')) {
        star[i].classList.add('player')
        star[i].classList.add('occupied')
        star[i].classList.remove('avail')
        star[i].style.opacity = 1
        playerChoice.push(i)
        // console.log('player picked ' + playerChoice)
            
    }
    gameDraw()
    computerMove()
    })
}


//Computer Move
const computerMove = () => {
    let diceRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
        if (diceRoll.classList.contains('occupied')) {
            let reRoll = moonMove[Math.floor(Math.random() * moonMove.length)]
            reRoll.classList.remove('inactive')
            reRoll.classList.add('computer')
            reRoll.classList.add('occupied')
            computerChoice.push(reRoll)
            reRoll.style.opacity = 1
            checkComputerConditions();
        } else {
            diceRoll.classList.remove('inactive')
            diceRoll.classList.add('computer')
            diceRoll.classList.add('occupied')
            computerChoice.push(diceRoll)
            diceRoll.style.opacity = 1
            checkComputerConditions();
        } 
}


             


//Create computer choice array
let checkComputerConditions = () => {
    for (let i = 0; i < moonMove.length; i++) {
        if (moon[i].classList.contains('computer')) { //push pieces marked computer into another array
            computerArr.push(i)
            // console.log('computer picked ' + computerArr)
        }
    }
}


//Flag occupied spaces
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', () => {
        tiles[i].children[0].classList.add('occupied') //attempts to prevent computer from picking it
        tiles[i].children[0].classList.remove('inactive') //alters class to remove it from available computer move array            
    })
  
}




//Player Win Check
document.addEventListener('click', () => {
    for (let i = 0; i < playerChoice.length; i++) {
        if (playerChoice.length > 2) {
            let playerBoard = playerChoice.toString();
                if (playerBoard.includes(winCombo1) || playerBoard.includes(winCombo2) || playerBoard.includes(winCombo3) || playerBoard.includes(winCombo4) || playerBoard.includes(winCombo5) || playerBoard.includes(winCombo6) || playerBoard.includes(winCombo7) || playerBoard.includes(winCombo8)) {
                    pWin = true
                    // console.log('player win')
                    
                }   

        }  
    }
    winMessage()
})


//Computer Win Check
document.addEventListener('click', () => {
    for (let i = 0; i < computerArr.length; i++) {
        if (computerArr.length > 2) {
            let computerBoard = computerArr.toString();
                if (computerBoard.includes(winCombo1) || computerBoard.includes(winCombo2) || computerBoard.includes(winCombo3) || computerBoard.includes(winCombo4) || computerBoard.includes(winCombo5) || computerBoard.includes(winCombo6) || computerBoard.includes(winCombo7) || computerBoard.includes(winCombo8)) {
                    cWin = true
                    // console.log('computer win')
                    
                }
        
        } 
    }
    winMessage()     
}) 


//Draw Check
let gameDraw = () =>{  
    if (playerChoice.length === 6) {
        draw = true
        
    }
            
}


//Win Messages (I put them separately because they kept repeating themselves if I put them in the Win Check logic)
const winMessage = () => {
    if (pWin === true) {
        alert('Player wins! Press ok to play again')
        resetBoard()
    } else if (cWin === true) {
        alert('Computer wins! Press ok to play again')
        resetBoard()
    } else if (pWin === true && cWin === true) {
        alert(`It's a tie! Press ok to play again`)
        resetBoard()
    } else if (draw === true) {
        alert('Draw. Press ok to play again')
        resetBoard()
    }

}

//Reset Button
const resetBoard = () => {
    for (let i = 0; i < moon.length; i++) {
        moon[i].classList.remove('occupied')
        moon[i].classList.remove('computer')
        moon[i].style.opacity = 0
        moon[i].classList.add('inactive')
    }
    for (let i = 0; i < star.length; i++) {
        star[i].classList.remove('occupied')
        star[i].classList.remove('player')
        star[i].style.opacity = 0
        star[i].classList.add('avail')
    }
    playerChoice = []
    computerChoice = []
    computerArr = []
    pWin = null
    cWin = null
    draw = null
    tie = null
    turnCount = 0
}

    

////////////////////////////////
// Event Listeners Here



















// FAILED CODE - saving for later when I improve the game


// let checkMoves = () => {
//     for (let i = 0; i < moonMove.length; i++) {
//         if (moonMove[i].classList.contains('occupied')) {
//             moonMove.splice(i, 1)
            
            
//         }
//     }
//     console.log(moonMove)
//     computerMove()
// }



// for (let i = 0; i < computerChoice.length; i++) {
//     gameBoard[i].addEventListener('click', () => {
//         console.log(clicked)
//         drawCompBoard.indexOf(computerChoice[i])
//             compArray.push(drawCompBoard)
//             console.log(indexOf(computerChoice[i]))
    
//         drawPlayerBoard.indexOf(playerChoice[i])
//             playerArray.push(drawPlayerBoard)
//             console.log(playerArray)
//     })
// }



// const computerMark = () => {
//     document.getElementsByClassName('computer').style.opacity = 1
// }
    


////////////////////////////////
// document.addEventListener('click', let = computerMove = () => {
//     Math.floor(Math.random() * activeTiles.length)
//     computerChoice.push(gameBoard[i])
//     tiles[i].classList.remove('inactive')
//     moon[i].style.opacity = 1
//     console.log('computer picked')
// },
// false
// )
// const computerMove = () => {
//     Math.floor(Math.random() * activeTiles.length)
//     computerChoice.push(gameBoard[i])
//     tiles[i].classList.remove('inactive')
//     moon[i].style.opacity = 1
//     console.log('computer picked')
// }


// Math.floor(Math.random() * 9)
// computerChoice.push(gameBoard[i])
// tiles[i].classList.remove('inactive')
// moon[i].style.opacity = 1
// console.log(computerChoice)
// console.log(availTiles)