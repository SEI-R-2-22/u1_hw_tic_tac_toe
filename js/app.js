// Global Variables Here
let ticTacToe = [0,0,0,0,0,0,0,0,0]
let computerMoves = [1,2,3,4,5,6,7,8,9]
let player1Score = 0
let player2Score = 0
let aiScore = 0
let drawScore = 0
let rounds = 0
let whoStarts = 1
let player1Turn = true
let isPlayer2Playing = true
let square = document.querySelectorAll('.game-square')

////////////////////////////////
// Functions For Game Logic Here
const hideButton = () => {
    let button = document.querySelector('.btn')
    button.style.opacity = 0
}

const insertXO = (position) => {
    // Player 1 will place the X vs Player 2
    if(player1Turn && isPlayer2Playing){
        document.getElementById(`sq${position}`).innerText = 'x'
        rounds++
        ticTacToe[position-1] = 1
        document.querySelector('.message').innerText = `Player 2's Turn`
        player1Turn = false
        if(rounds >= 4){winCases()}
    // Player 1 will place the X vs the Computer
    }else if(player1Turn && !isPlayer2Playing){
        let currentComputerIndex = computerMoves.findIndex(computerMove => computerMove == position)
        computerMoves.splice(currentComputerIndex, 1)
        document.getElementById(`sq${position}`).innerText = 'x'
        rounds++
        ticTacToe[position-1] = 1
        document.querySelector('.message').innerText = `Computer's Turn`
        player1Turn = false
        if(rounds >= 4){winCases()}
        setTimeout(randomClick, 500)
    // Player 2 will place O vs Player 1
    }else if(!player1Turn && isPlayer2Playing){
        document.getElementById(`sq${position}`).innerText = 'o'
        rounds++
        ticTacToe[position-1] = 2
        document.querySelector('.message').innerText = `Player 1's Turn`
        player1Turn = true
        if(rounds >= 4){winCases()}
    // Computer will place O vs Player 1 
    }else if(!player1Turn && !isPlayer2Playing){
        document.getElementById(`sq${position}`).innerText = 'o' 
        rounds++
        ticTacToe[position-1] = 2
        document.querySelector('.message').innerText = `Player 1's Turn`
        player1Turn = true
        if(rounds >= 4){winCases()}
    }
}

const playAgain = () => {
    if(whoStarts === 1 && isPlayer2Playing){
        whoStarts = 2
        document.querySelector('.message').innerText = `Player ${whoStarts} starts`
        player1Turn = false
    }else if(whoStarts === 2 && isPlayer2Playing){
        whoStarts = 1
        document.querySelector('.message').innerText = `Player ${whoStarts} starts`
        player1Turn = true
    }else if(!isPlayer2Playing){
        computerMoves = [1,2,3,4,5,6,7,8,9]
        whoStarts = 1   
        player1Turn = true
        document.querySelector('.message').innerText = `Player ${whoStarts} starts`
    }

    hideButton()

    for(let i = 0; i <= ticTacToe.length; i++){
        document.getElementById(`sq${i+1}`).innerText = ''
        square[i].setAttribute('clicked', 'false')
    }
}

const randomClick = () => {
    let randomIndex = Math.floor(Math.random()*computerMoves.length)
    let position = computerMoves[randomIndex]
    computerMoves.splice(randomIndex, 1)

    if(document.getElementById(`sq${position}`).getAttribute('clicked') == `false`){
        insertXO(position)
    }
} 

const resetGame = () => {
    ticTacToe = [0,0,0,0,0,0,0,0,0]
    rounds = 0
}

const showButton = () => {
    let button = document.querySelector('.btn')
    button.style.opacity = 1
}

const winCases = () => {
    if(
        (ticTacToe[0] == 1 && ticTacToe[1] == 1 && ticTacToe[2] == 1) ||
        (ticTacToe[3] == 1 && ticTacToe[4] == 1 && ticTacToe[5] == 1) ||
        (ticTacToe[6] == 1 && ticTacToe[7] == 1 && ticTacToe[8] == 1) ||
        (ticTacToe[0] == 1 && ticTacToe[3] == 1 && ticTacToe[6] == 1) ||
        (ticTacToe[1] == 1 && ticTacToe[4] == 1 && ticTacToe[7] == 1) ||
        (ticTacToe[2] == 1 && ticTacToe[5] == 1 && ticTacToe[8] == 1) ||
        (ticTacToe[0] == 1 && ticTacToe[4] == 1 && ticTacToe[8] == 1) ||
        (ticTacToe[2] == 1 && ticTacToe[4] == 1 && ticTacToe[6] == 1)){
            document.querySelector('.message').innerText = `Player 1 Wins!`
            player1Score++
            document.querySelector(`#p1Score`).innerText = player1Score
            for(let i = 0; i < ticTacToe.length; i++){
                if(square[i].getAttribute('clicked') == 'false'){
                    square[i].setAttribute('clicked', 'true')
                }
            }
            resetGame()
            showButton()
    }else if(
        (ticTacToe[0] == 2 && ticTacToe[1] == 2 && ticTacToe[2] == 2) ||
        (ticTacToe[3] == 2 && ticTacToe[4] == 2 && ticTacToe[5] == 2) ||
        (ticTacToe[6] == 2 && ticTacToe[7] == 2 && ticTacToe[8] == 2) ||
        (ticTacToe[0] == 2 && ticTacToe[3] == 2 && ticTacToe[6] == 2) ||
        (ticTacToe[1] == 2 && ticTacToe[4] == 2 && ticTacToe[7] == 2) ||
        (ticTacToe[2] == 2 && ticTacToe[5] == 2 && ticTacToe[8] == 2) ||
        (ticTacToe[0] == 2 && ticTacToe[4] == 2 && ticTacToe[8] == 2) ||
        (ticTacToe[2] == 2 && ticTacToe[4] == 2 && ticTacToe[6] == 2)){
            if(isPlayer2Playing){
                document.querySelector('.message').innerText = `Player 2 Wins!`
                player2Score++
                document.querySelector(`#p2Score`).innerText = player2Score
                for(let i = 0; i < ticTacToe.length; i++){
                    if(square[i].getAttribute('clicked') == 'false'){
                        square[i].setAttribute('clicked', 'true')
                    }
                }
                resetGame()
                showButton()
            }else{
                document.querySelector('.message').innerText = `A.I. Wins!`
                aiScore++
                document.querySelector(`#p2Score`).innerText = aiScore
                for(let i = 0; i < ticTacToe.length; i++){
                    if(square[i].getAttribute('clicked') == 'false'){
                        square[i].setAttribute('clicked', 'true')
                    }
                }
                resetGame()
                showButton()
            }
    }else if(rounds === 9){
        document.querySelector('.message').innerText = `Draw`
        drawScore++
        document.querySelector(`#drawScore`).innerText = drawScore
        resetGame()
        showButton()
    }
}

////////////////////////////////
// Event Listeners Here

for(let i = 0; i < square.length; i++){
    square[i].addEventListener('click', () => {
        let position = square[i].getAttribute('position')
        if(square[i].getAttribute('clicked') == `false`){
            insertXO(position)
            square[i].setAttribute(`clicked`, 'true')
        }
    })
    
}

document.querySelector('.btn').addEventListener('click', () => {
    playAgain()
    resetGame()
})

document.querySelector('#player2Btn').addEventListener('click', () => {
    if(!isPlayer2Playing){
        isPlayer2Playing = true
        player1Score = 0
        player2Score = 0
        whoStarts = 1
        document.querySelector(`#player2`).innerText = `Paley 2: `
        document.querySelector(`#p1Score`).innerText = player1Score
        document.querySelector(`#p2Score`).innerText = player2Score
        resetGame()
        playAgain()
    }
})

document.querySelector('#aiBtn').addEventListener('click', () => {
    if(isPlayer2Playing){ 
        computerMoves = [1,2,3,4,5,6,7,8,9]   
        player1Turn = true
        isPlayer2Playing = false
        player1Score = 0
        aiScore = 0
        whoStarts = 1
        document.querySelector(`#p1Score`).innerText = player1Score
        document.querySelector(`#player2`).innerText = `A.I.: `
        document.querySelector(`#p2Score`).innerText = 0
        document.querySelector('.message').innerText = `Player 1's Turn`
        resetGame()
        playAgain()
    }
})

////////////////////////////////
