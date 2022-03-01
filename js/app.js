// Global Variables Here
const lot = document.querySelectorAll('.lot');
let whosTurn = document.querySelector('.whosTurn');
const player = 'x'; 
const player2 = 'o';
const noSelection = null;
let playerTurn = !true;
let gameOver = !true
const winnerx = "X is the winner";
const winnero = "O is the winner";
const xTurn = "It is X's turn";
const oTurn = "It is O's turn";
let playerX = [];
let playerO = [];
let xScore = 0;
let oScore = 0;
let winnerDisplay = document.querySelector('.Results')
let x = document.querySelector('#xWinScore');
let o = document.querySelector('#oWinScore');
let play = document.querySelector('.playAgain');

// enter winner scernio 
//     const ...let. = [1 2 3]
const winningScenario = [
    ['lot1','lot2','lot3'], 
    ['lot4','lot5','lot6'],
    ['lot7','lot8','lot9'],
    ['lot1','lot4','lot7'],
    ['lot2','lot5','lot8'],
    ['lot3','lot6','lot9'],
    ['lot1','lot5','lot9'],
    ['lot3','lot5','lot7'],
]




////////////////////////////////
// Functions For Game Logic Here
//  document.addEventListener('click')
function checkForWin() {
    let tiles = document.querySelectorAll('.lot')
    // console.log(tiles[0].innerText) 
    if (tiles[0].innerText === 'x' && tiles[1].innerText === 'x' && tiles[2].innerText === 'x'
    ) {
        console.log(winnerDisplay)
        winnerDisplay.innerText = winnerx;
        gameOver = !gameOver
        scoreChange()
        playagain()

    } else if (tiles[3].innerText === 'x' && tiles[4].innerText === 'x' && tiles[5].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[6].innerText === 'x' && tiles[7].innerText === 'x' && tiles[8].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[0].innerText === 'x' && tiles[3].innerText === 'x' && tiles[6].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[1].innerText === 'x' && tiles[4].innerText === 'x' && tiles[7].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[2].innerText === 'x' && tiles[5].innerText === 'x' && tiles[8].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[0].innerText === 'x' && tiles[4].innerText === 'x' && tiles[8].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } else if (tiles[2].innerText === 'x' && tiles[4].innerText === 'x' && tiles[6].innerText === 'x'
    ) {
        winnerDisplay.innerText = winnerx;
        scoreChange()
        playagain()
    } 
    else if (tiles[0].innerText === 'o' && tiles[1].innerText === 'o' && tiles[2].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[3].innerText === 'o' && tiles[4].innerText === 'o' && tiles[5].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[6].innerText === 'o' && tiles[7].innerText === 'o' && tiles[8].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[0].innerText === 'o' && tiles[3].innerText === 'o' && tiles[6].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[1].innerText === 'o' && tiles[4].innerText === 'o' && tiles[7].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[2].innerText === 'o' && tiles[5].innerText === 'o' && tiles[8].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[0].innerText === 'o' && tiles[4].innerText === 'o' && tiles[8].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    } else if (tiles[2].innerText === 'o' && tiles[4].innerText === 'o' && tiles[6].innerText === 'o'
    ) {
        winnerDisplay.innerText = winnero;
        scoreChange()
        playagain()
    }  
    
}
function scoreChange() {
     let score = document.querySelector('.Results')
    if (score.innerText >= winnerx) {
        xScore = xScore + xScore; 
        x.innerText = xScore
        
        
    } else if (score.innerText <= winnero) {
        oScore = oScore = oScore;
        o.innerText = oScore
        
    } 
} 
function playagain() { 
    let tiles = document.querySelectorAll('.lot')
    // if (gameOver === true) {
        
    
        lot.forEach(lot => {
        lot.addEventListener('click', function (noPlay) {
        lot.innerHTML = noSelection;
        alert('game over (play again)')   
           
                
            
        })
             }) 
            // } else {
            //     gameOver = !gameOver
            // }
    play.addEventListener('click', function () {
        lot[0].innerHTML = noSelection;
        lot[1].innerHTML = noSelection;
        lot[2].innerHTML = noSelection;
        lot[3].innerHTML = noSelection;
        lot[4].innerHTML = noSelection;
        lot[5].innerHTML = noSelection;
        lot[6].innerHTML = noSelection;
        lot[7].innerHTML = noSelection;
        lot[8].innerHTML = noSelection;
        winnerDisplay.innerText = noSelection;
        
    })
    //   ,{ once: true})
    
        
   
    
}



////////////////////////////////
// Event Listeners Here
lot.forEach(lot => {
    lot.addEventListener('click', function () {
       
        // selectArray.push(lot.classList[1])
        
    if (playerTurn === true) {
        lot.innerHTML = player2;
        playerO.push(lot.classList[1]);
        whosTurn.innerText = oTurn;
        checkForWin()
        
       
    

    }else { 
        lot.innerHTML = player
        playerX.push(lot.classList[1]);
        whosTurn.innerText = xTurn;
        checkForWin()
    } 
    playerTurn = !playerTurn;

  
    },{ once: true});

    
    
 
        
  
    
});






////////////////////////////////
