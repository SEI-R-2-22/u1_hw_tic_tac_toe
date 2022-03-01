
// have to switch between X and O
// need variable called turns starting off at 0
// using some math operator use js logic to decide wether or not our turn is even or odd
// if turn modulo2 =0 then it's player x if turn modulo1 = 0 (can use if statement)
//
// const playerX = 'X'
// const playerO = 'O'
// const boxes = document.querySelectorAll('.box')
// const resetbutton = document.querySelector('reset')
// let board = ['', '', '', '', '', '', '', '']
// let currentPlayer = playerX

// let userAction = (x, i) =>{
//     if (turns === playerX){
//         x.innerText=turns
//         turns=+1
//     }
//     else if(turns === playerO){
//         x.innerText=turns    
//         turns=+1
//     }
// }

// for(let i = 0; i<boxes.length; i++){
//     boxes[i].addEventListener('click', () => {
//         userAction()
//      } )}




let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            alert(currentPlayer + " has won")
        }
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "") return
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})