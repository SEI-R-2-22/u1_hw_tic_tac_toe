// Global Variables Here
const boxes = document.querySelectorAll(".box")
const playerX = 'X'
const playerO = 'O'
let turn = playerX // first player
// Gameboard
const boardState = Array(boxes.length) // constructs an array of all the ".box" elements
boardState.fill(null)// sets all values in array to null using fill method
// Other html elements
let turnMessage = document.getElementById("which-turn")
const strike = document.getElementById("strike")
const gameOverArea = document.getElementById("game-over-area")
const gameOverText = document.getElementById("game-over-text")
const playAgain = document.getElementById("play-again")
// Objects for striking through winning combinations
const winningCombinations = [
    {combo: [1,2,3], strikeClass: 'strike-row-1'}, //Each object contains two keys and values
    {combo: [4,5,6], strikeClass: 'strike-row-2'},
    {combo: [7,8,9], strikeClass: 'strike-row-3'},

    {combo: [1,4,7], strikeClass: 'strike-column-1'},
    {combo: [2,5,8], strikeClass: 'strike-column-2'},
    {combo: [3,6,9], strikeClass: 'strike-column-3'},

    {combo: [1,5,9], strikeClass: 'strike-diagonal-1'},
    {combo: [3,5,7], strikeClass: 'strike-diagonal-2'}
]
////////////////////////////////
// Functions For Game Logic Here

// Game Start
if(boardState.fill(null)) {
    turnMessage.innerText = "X goes first!" // if board is empty, X turn is displayed
    }
// Checks to see if gameOverArea is active (visible)
let boxClick = (event) => {
    if(gameOverArea.classList.contains("visible")) {
        return
    }
// References which box was clicked (event.target)
    const box = event.target
    const boxNumber = box.dataset.index // stores data regarding selected box number
    if(box.innerText != "") { // checks text to see if box is not empty
        return // if box has an X or O the method exits
    }
// Players turn functions
    if (turn === playerX) {
        box.innerText = playerX // adds X string to box
        boardState[boxNumber - 1] = playerX // boardState array containing boxes numbered 1-9 so minus 1 to access index and places an X */
        turn = playerO // changes turn
        turnMessage.innerText = "It's O's turn!"
    } else { // same as above only parameters changed to O
        box.innerText = playerO
        boardState[boxNumber-1] = playerO
        turn = playerX
        turnMessage.innerText = "It's X's turn!"
    }
  // Calls the checkWinner function
  //
    checkWinner()
}
//  Function to check for winner
const checkWinner = () => {
        for(const winningCombination of winningCombinations){ // For Of statement creates a variable and loops through an array 
        const combo = winningCombination.combo //applies key of object-combo to combo variable
        const strikeClass = winningCombination.strikeClass //applies key of object-strikeClass to variable
    // Below extracts winning combo values from the boardState array and stores them in a new variable
    // boardState indexes start with 0, so each winning combo parameter needs to subtract 1 to match index
        const boxValue1 = boardState[combo[0] - 1]
        const boxValue2 = boardState[combo[1] - 1]
        const boxValue3 = boardState[combo[2] - 1]
        // All box values are default "null"
        if(boxValue1 != null && 
            boxValue1 === boxValue2 && 
            boxValue1 === boxValue3){  // If all 3 box values are = then there's a winner
            strike.classList.add(strikeClass) // Adds strike object value to winning combo
            gameOverScreen(boxValue1) // all box values have to match so adding any boxValue should work
            return // without this return, if there's a winner when all boxes are full, gameOverScreen would still produce a draw
        }
    }
    //Game is a draw when all boxes are filled (!= null)
    const drawGame = boardState.every((box)=> box != null)
    if (drawGame) {
        gameOverScreen(null)
    }
}
//

const gameOverScreen = (winnerText) => {
    let text = 'Draw!' // Assigns draw by default
    if(winnerText != null) { // null is assigned when all boxes filled (draw), so "if not draw"
        text = `${winnerText} wins!` // if not draw, X or O wins
    }
    gameOverArea.className = "visible" // changes class from hidden to visible after game ends 
    gameOverText.innerText = text //assigns winner text to gameOverText
    turnMessage.className = "hidden" // hides 'whose-turn' prompt when game ends
}
// After game ends, below creates new game
const startNewGame = () => {
    strike.className = "strike" // clears the class and puts it back to strike
    gameOverArea.className = "hidden" // hides gameover panel again
    turnMessage.className = "visible" // makes turn prompt visible again
    turnMessage.innerText = "X do your thing!" // creates a starter turn prompt
    boardState.fill(null) // clears boxes
    boxes.forEach((box) => (box.innerText = "")) //
    turn = playerX // designates starting player
    //
}

// 

////////////////////////////////
// Event Listeners Here
// Click function; assigns X and O to boxes
boxes.forEach((box) => box.addEventListener("click", boxClick))
// Button for replay
playAgain.addEventListener("click", startNewGame)
////////////////////////////////