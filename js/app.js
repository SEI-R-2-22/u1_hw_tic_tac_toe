// Global Variables Here
let ticTacToe = [0,0,0,0,0,0,0,0,0]
let player1Score = 0
let player2Score = 0
let drawScore = 0
let rounds = 0
let whoStarts = 1
let player1Turn = true
let square = document.querySelectorAll('.game-square')



////////////////////////////////
// Functions For Game Logic Here
const hideButton = () => {
    let button = document.querySelector('.btn')
    button.style.opacity = 0
}

const insertXO = (position) => {
    if(player1Turn){
        document.getElementById(`sq${position}`).innerText = 'x'
        rounds++
        ticTacToe[position-1] = 1
        document.querySelector('.message').innerText = `Player 2's Turn`
        player1Turn = false
    }else if(!player1Turn){
        document.getElementById(`sq${position}`).innerText = 'o'
        rounds++
        ticTacToe[position-1] = 2
        document.querySelector('.message').innerText = `Player 1's Turn`
        player1Turn = true
    }
}

const playAgain = () => {
    if(whoStarts === 1)
    {
        whoStarts = 2
        document.querySelector('.message').innerText = `Player ${whoStarts} starts`
        player1Turn = false
    }else if(whoStarts === 2){
        whoStarts = 1
        document.querySelector('.message').innerText = `Player ${whoStarts} starts`
        player1Turn = true
    }
    hideButton()
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
        winCases() 
    })
}

document.querySelector('.btn').addEventListener('click', () => {
    for(let i = 0; i <= ticTacToe.length; i++){
        document.getElementById(`sq${i+1}`).innerText = ''
        square[i].setAttribute('clicked', 'false')
        playAgain()
    }
})

////////////////////////////////
