// Global Variables Here
const lot = document.querySelectorAll('.lot');
// const results = documnet.querySelectorAll('.results');
const player = 'x'; 
const player2 = 'o';
let playerTurn = !true;
const winner = "winner"
let playerX = [];
let playerO = []




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



////////////////////////////////
// Event Listeners Here
lot.forEach(lot => {
    lot.addEventListener('click', function selection() {
       
        // selectArray.push(lot.classList[1])
        
    if (playerTurn === true) {
        lot.innerHTML = player2;
        playerO.push(lot.classList[1])
        console.log(playerO)
        if (playerO === ) {
            console.log('winner')
        }
        


    }else { 
        lot.innerHTML = player
        playerX.push(lot.classList[1])
        console.log(playerX)
    } 
    playerTurn = !playerTurn;

  
    },{ once: true});

    
    
 
        
  
    
});






////////////////////////////////
