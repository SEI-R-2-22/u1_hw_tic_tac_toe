const xPlayer = "X"
const oPlayer = "O"

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const boxElement = document.querySelectorAll('.box')
const gameboardElement = document.getElementsById('gameboard')
const restartButton = document.getElementById('restartButton')
let oPlayerTurn = true 


startGame ()

restartButton.addEventListener('click', startGame)

function startGame() {
    oPlayerTurn = true 
    boxElement.forEach(box => {
        box.classList.remove(oPlayer)
        box.classList.remove(xPlayer)
        box.removeEventListener('click', handleBoxClick)
        box.addEventListener('Click', handleBoxClick, {once: true})
    })
}

function handleBoxClick(e) {
    const box = e.target
    const currentCharacter = oPlayer ? oPlayer : xPlayer 
    placemark(box, currentCharacter)
    if (checkWin(currentCharacter)) {
        endGame(false)
    }
    else if (Draw()) {
        endgame(true)
    }
    else{
        swapturns()
    }
}

for (let i = 0; i < 9; i++) {
    box[i].addEventListener('click', () =>{
        if (player % 2 === 0){
            box[i].innerText = "X"
            changePlayer()
        }else if (player % 2 === 1){
            box[i].innerText = "O"
            changePlayer()
        };
        const index
    })
}

function draw() {
    return [...boxElement].every(box => {
        return box.classList.contains(oPlayer) || box.classList.contains(xPlayer)
    })
}

function placemark(box, currentCharacter) {
    box.classList.add(currentCharacter)
}

function switchTurn() {
    oPlayer = !xPlayer
}