// Global Variables Here

let sZer = document.querySelector('#sq0')
let sOne = document.querySelector('#sq1')
let sTwo = document.querySelector('#sq2')
let sThr = document.querySelector('#sq3')
let sFou = document.querySelector('#sq4')
let sFiv = document.querySelector('#sq5')
let sSix = document.querySelector('#sq6')
let sSev = document.querySelector('#sq7')
let sEig = document.querySelector('#sq8')
const allSqs = [sZer, sOne, sTwo, sThr, sFou, sFiv, sSix, sSev, sEig];
const resetB = document.querySelector('#reset')

let player = 0;
let xSqOwned = [];
let oSqOwned = [];
let winMessage = document.querySelector('#winMessage')

const winCombo = [
    //horozontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //verticle
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6]
]; 
//store each winning combo in a variable then variables in an array
const a = winCombo[0]
const b = winCombo[1]
const c = winCombo[2]
const d = winCombo[3]
const e = winCombo[4]
const f = winCombo[5]
const g = winCombo[6]
const h = winCombo[7]
const arrWin = [a, b, c, d, e ,f, g, h];




////////////////////////////////
// Functions For Game Logic Here

///FUNCTION TO RELOAD WITHOUT REFRESHING PAGE
function reload() {
    reload = location.reload();
}

// function ind (index){
//     allSqs[i].onclick = function () {
//         alert(index)
//     }
// }

// findBoxNum = () => {
//     const index = indexOf(allSqs[i])
// }

///FUNCTION TO CHANGE PLAYERS
changePl = () => {
    if (player % 2 == 0){
        player++;
    }else if (player % 2 == 1){
        player++;
    }else {
        player = null;
    }
}

///FUNCTION TO CHECK THE WINNER OF THE GAME
const checkWinner = () => {
    for(let i = 0; i < 8; i++){
        if(xSqOwned[i] == arrWin[i] && xSqOwned.length === 3){
            alert('X wins')
        }else if(oSqOwned[i] == arrWin[i] && oSqOwned.length === 3){
            alert('O wins')
        }else if(xSqOwned || oSqOwned !== arrWin[i]){
            alert('tie')
        }
    }
    
    


    // for(let q = 0; q <= xSqOwned.length; q++){
    //     for(let w = 0; w < 3; w++){
    //         if($.inArray(xSqOwned[q], winCombo[w]) !== -1){
    //             console.log(oSqOwned.length, xSqOwned.length)
    //         }
    //     }
    // }
    // for(let k = 0; k <= xSqOwned.length; k++){
    //     for(let j = 0; j < 3; j++){
    //         if($.inArray(xSqOwned[k], winCombo[j]) !== -1){
    //             console.log('win')
    //         }
    //     }
    // }
    // for(let z = 0; z < winCombo.length; z++){
    //     if (xSqOwned.indexOf(winCombo[z][0]) > -1
    //     && xSqOwned.indexOf(winCombo[z][1]) > -1
    //     && xSqOwned.indexOf(winCombo[z][2]) > -1) {
    //         alert{' xwin'}
    //         // x won!
    //         break;
    //     }else if (oSqOwned.indexOf(winCombo[z][0]) > -1
    //     && oSqOwned.indexOf(winCombo[z][1]) > -1
    //     && oSqOwned.indexOf(winCombo[z][2]) > -1) {
    //         alert{'o win'}
    //         // o won!
    //         break;
    //     } 
    // }
    
    // if(xSqOwned[i] == winCombo === true){
    //     winMessage.innerText = '"X" has Won!!'
    //     alert('Winner!')
    // }else if(oSqOwned == winCombo === true){
    //     winMessage.innerText = '"O" has Won!!'
    //     alert('Winner!')
    // } //else {
    //     winMessage.innerText = `Cat's Game!`
    //     alert('Tie!')
    // }
}

////////////////////////////////
// Event Listeners Here

/////SETS UP EVENT LISTENERS FOR THE BOARD AND LISTENS FOR SPECIFIC SQUARE
//CLICKS, THEN STYLES THE INNERTXT TO APPROPRAITE PLAYERS CHOICE, THEN
//CALL CHANGE PLAYER FUNCTION, THEN REMOVE THE EVENT LISTENER

for (let i = 0; i < 9; i++) {

    allSqs[i].addEventListener('click', () =>{
        const index = ['.sqr'].indexOf('.sqr')
        if (player % 2 === 0){
            allSqs[i].innerText = 'X' 
            xSqOwned.push(index)
            changePl()
            
        }else if (player % 2 === 1){
            allSqs[i].innerText = 'O'
            oSqOwned.push(index)
            changePl()
            
        };
        
        
            
    })
    
}

//EVENT LISTENER TO THE RESET BUTTION 
resetB.addEventListener('click',reload, false);




////////////////////////////////
