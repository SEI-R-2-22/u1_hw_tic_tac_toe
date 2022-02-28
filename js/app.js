// Global Variables Here

const player1 = 'x';
const player2 = 'o';
const row1 = 
let player1turn = true;
let player2turn = false;
let currentPlayer = 'x';
let currentGame = [];


const btn = document.querySelector('#btn')
let winMessage = document.querySelector('.win-message')
let column1 = document.querySelector('.column1')
let column2 = document.querySelector('.column2')
let row = document.querySelector('.row')

const waysToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


////////////////////////////////
// Functions For Game Logic Here

const winGame = () => `Play ${player1} has won!`
const tieGame = () => `It's a tie`
const currentPlayerMessage = () => `It's ${player1}'s turn.`
const setNextTurn = () => {
    console.log('it is the next person\'s turn');
    if (currentPlayer === 'x') {
        return currentPlayer = 'o'
    }
        currentPlayer = 'x'
}

const checkForWin = () => {
    // add logic to determine whether the game is won
    // check the currentGame state array against your win conditions


}

// startGame()

document.addEventListener('click', (e) => {
    if (e.target.id == "d1" || e.target.id == 'd2' || e.target.id == "d3" || e.target.id == "d4" || e.target.id == "d5" || e.target.id == "d6" || e.target.id == "d7" || e.target.id == "d8" || e.target.id == "d9") {
        e.target.innerText = currentPlayer;
        setNextTurn()
        
        // console.log('hello')
    } 

    // console.log(e.target.children)

    // console.log(e.target.innerText)
    }
)

// document.addEventListener('c', )


////////////////////////////////
// Event Listeners Here

// for (let i=0; i > grid.length; i++) {
//     grid.addEventListener('click', () => {
//         grid.opacity = 1
//     }
// }

btn.addEventListener('click', () => {
    document.location.reload(true);
})

// btn.addEventListener('click', start)




////////////////////////////////
