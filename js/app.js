// Global Variables Here
let gridCubes = document.querySelectorAll('.grid');
const nameDisplay = document.querySelector('.nameDisplay');
const oWinMsg = document.getElementById('owin-msg');
const xWinMsg = document.getElementById('xwin-msg');
const gridContainer = document.getElementById('grid-container');
const playAgain = document.getElementById('play-btn');

const playBtn = document.querySelector('button');
const xsTurn = document.getElementById('xMsg');
const osTurn = document.getElementById('oMsg');
const drawMsg = document.getElementById('draw-msg')

const userArr = ['', '', '', '', '', '', '', '', '', '']
const winArr = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let win
let counter = 0;

let userChoice = 'X'

let userName = prompt(`Hello! What is your name?`)
nameDisplay.innerText = `Hi ${userName}! Let's play!`
if (userName === null) {
    nameDisplay.innerText = `Let's Play!`
}




////////////////////////////////
// Functions For Game Logic Here
const playGame = () => {
xsTurn.style.visibility = 'visible'
     gridCubes.forEach((cube) => {
        cube.addEventListener('click', (e) => {
            counter += 1
            cube.innerText = userChoice;
            userArr[parseInt(e.target.id)] = userChoice;
            userArr.push(userChoice)
           if (userChoice === 'X') {
            userChoice = 'O'
            winningResults()
           
            xsTurn.style.visibility = 'hidden'
            osTurn.style.visibility = 'visible'
            if (win === true) {
                xsTurn.style.visibility = 'hidden'
                osTurn.style.visibility = 'hidden'
            }
            
        } else {
            userChoice = 'X'
            winningResults()
           
            xsTurn.style.visibility = 'visible'
            osTurn.style.visibility = 'hidden'
            if (win === true) {
                xsTurn.style.visibility = 'hidden'
                osTurn.style.visibility = 'hidden'
            
            }
        }
        }, {once: true})
    })
    }
    


const winningResults = () => {
      if (userArr[0] === 'X' && userArr[1] === 'X' && userArr[2] === 'X') {
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
     } else if (userArr[3] === 'X' && userArr[4] === 'X' && userArr[5] === 'X'){
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
     } else if (userArr[6] === 'X' && userArr[7] === 'X' && userArr[8] === 'X') {
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
      }  else if (userArr[0] === 'X' && userArr[3] === 'X' && userArr[6] === 'X') {
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
     } else if (userArr[1] === 'X' && userArr[4] === 'X' && userArr[7] === 'X'){
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
     } else if (userArr[2] === 'X' && userArr[5] === 'X' && userArr[8] === 'X') {
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
    } else if (userArr[0] === 'X' && userArr[4] === 'X' && userArr[8] === 'X'){
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
    } else if (userArr[2] === 'X' && userArr[4] === 'X' && userArr[6] === 'X') {
        win = true;
        xWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
    } else if (userArr[0] === 'O' && userArr[1] === 'O' && userArr[2] === 'O') {
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[3] === 'O' && userArr[4] === 'O' && userArr[5] === 'O'){
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[6] === 'O' && userArr[7] === 'O' && userArr[8] === 'O') {
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        }  else if (userArr[0] === 'O' && userArr[3] === 'O' && userArr[6] === 'O') {
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[1] === 'O' && userArr[4] === 'O' && userArr[7] === 'O'){
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[2] === 'O' && userArr[5] === 'O' && userArr[8] === 'O') {
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('X won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[0] === 'O' && userArr[4] === 'O' && userArr[8] === 'O'){
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (userArr[2] === 'O' && userArr[4] === 'O' && userArr[6] === 'O') {
            win = true;
            oWinMsg.style.visibility = 'visible';
        const replay = prompt('O won! Play again? y/n')
        if (replay === 'y') {
            location.reload()
        }
        } else if (win !== true && counter === 9) {
                xsTurn.style.visibility = 'hidden'
                osTurn.style.visibility = 'hidden'
                const announceDraw = prompt('It is a draw! Play again? y/n')
                if (announceDraw === 'y') {
                    location.reload()
                drawMsg.style.visibility = 'visible'
        }
    }
        }
          
       
  

  playGame()

    playBtn.addEventListener('click', (e) => { 
        window.location.reload(true)})
    

