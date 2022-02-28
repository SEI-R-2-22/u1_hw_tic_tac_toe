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
const sqrClass = document.querySelector('.sqr')



const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 



////////////////////////////////
// Functions For Game Logic Here


//function to change players
let chngPl = () => {
    const X = 0 && 0 === X
    const O = 1 && 1 === O
    let player = X
    if(player = 0){
        1 = 'O'
        0 = 'X'
        player = player + 1;
    }else if(player = 1 ) {
        1 = 'O'
        0 = 'X'
        player = player - 1;
    }else{
        1 = 'O'
        0 = 'X'
        player = 0;
        //default
    }
}
const playGame = () => {
    
}

////////////////////////////////
// Event Listeners Here
const sayHello =() => {
    alert("Button Clicked")
}




for (let i = 0; i < 8; i++) {
    allSqs[i].addEventListener('click', () =>{
        //if(player = )
        
        allSqs[i].innerText = player 
        
    })
}




////////////////////////////////
