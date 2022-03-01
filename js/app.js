////////////////////////////////
//  Global Variables Here



////////////////////////////////
// Functions For Game Logic Here
const tiles = document.querySelectorAll(".tile");
const PLAYER_X = 'Cat';
const PLAYER_O = 'Dog';
let turn = PLAYER_X;


const gridState = Array(tiles.length);
gridState.fill(null);

//Elements 

const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOver = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

tiles.forEach(tile=>tile.addEventListener("click",tileClick) );


function tileClick(event){
    if(gameOverArea.classList.contains("visible")){
      return;  
    }
    const tile = event.target; 
    const tileNumber = tile.dataset.index;
    if(tile.innerText != ""){
        return;
    }
    if(turn === PLAYER_X){
        tile.innerText =PLAYER_X;
        gridState[tileNumber - 1] = PLAYER_X;
        turn= PLAYER_O;
        
    }
    else{
        tile.innerText =PLAYER_O;
        gridState[tileNumber - 1] = PLAYER_O;
        turn= PLAYER_X;
        
    }
    checkWinner();
     }
function checkWinner(){
    
    for(const winningCombination of winningCombinations){

const {combo, strikeClass} = winningCombination;
 
const tileValue1 = gridState[combo[0]-1];
const tileValue2 = gridState[combo[1]-1];
const tileValue3 = gridState[combo[2]-1];

if(tileValue1 != null &&  
    tileValue1 === tileValue2 && 
    tileValue1 ===tileValue3
    ){
    strike.classList.add(strikeClass)
    gameOverScreen(tileValue1);
    return; 
    }
}
const allTilesFilledIn = gridState.every((tile) => tile !== null);
    if(allTileFilledIn){
        gameOverScreen(null);

    }

}

function gameOverScreen(winnerText){
    let text = 'Draw!'
    if(winnerText != null){
        text = `Winner is ${winnerText}!`;
}
gameOverArea.className = "visible";
gameOverText.innerText = text;
}

function startNewGame (){
strike.className = "strike";
gameOverArea.className = "hidden";
gridState.fill(null);
tiles.forEach((tile) => (tile.innerText = ""));
turn = PLAYER_X;

}



const winningCombinations = [
{combo: [1,2,3], strikeClass: "strike-row-1"},
{combo: [4,5,6], strikeClass: "strike-row-2"},
{combo: [7,8,9], strikeClass: "strike-row-3"},
 
{combo: [1,4,7], strikeClass: "strike-column-1"},
{combo: [2,5,8], strikeClass: "strike-column-2"},
{combo: [3,6,9], strikeClass: "strike-column-3"},

{combo: [1,5,9], strikeClass: "strike-diagonal-1"},
{combo: [3,5,7], strikeClass: "strike-diagonal-2"},


];



////////////////////////////////
// Event Listeners Here

const meow = new Audio('http://d21c.com/ljesun/sounds/meow_short.wav')
const catButton = document.querySelector('.cat')

catButton.addEventListener('click', (e) => {
  meow.play()
})

const bark = new Audio('http://www.zimba.kaeregaard.dk/lyd/bark_h.wav')
const dogButton = document.querySelector('.dog')

dogButton.addEventListener('click', (e) => {
  bark.play()
})
 

 
////////////////////////////////
