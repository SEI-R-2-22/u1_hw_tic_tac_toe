// Global Variables Here
let grid =document.querySelectorAll('.box')
 let currentPlayer ='x'
const btn1 = document.querySelector('.game')
let gameActive = true;
let gameState = ['','','','','','','','','']
const winningCombos= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [2,5,8],

]
const winMessage = ()=> `player${currentPlayer} has won!`;
const draw = () => `cats eyes!`;
const currentPlayerTurn = () => `its ${currentPlayer}'s turn`;

// let winner = ""


function startGame(){

////////////////////////////////
// Functions For Game Logic Here

// 

// if (currentPlayer === 'x'){
// prompt = currentPlayerTurn
// }else (currentPlayer !='x')
//  prompt = "let someone else have a turn.";
// }




////////////////////////////////
// Event Listeners Here

///reload/new game button dont press if you want to go for rounds
btn1.addEventListener('click', ()=>{
 if (btn1.innerText ==='Press for New Game'){
            btn1.innerText= 'Restarting';
            }if (btn1.innerText ==='Restarting'){
                window.location.reload();
             } 
 });
        
btn1.addEventListener('click',startGame)   


for(let i=0;i<grid.length; i++){
    grid[i].addEventListener('click', ()=>{
        if(currentPlayer==='x'){
            console.log(grid[i])
            grid[i].innerText='x'
            currentPlayer='o'}else{
                grid[i].innerText='o'
                currentPlayer="x"
            } 
   
} )
    
}    
      }  
   
    function winningcondition(){
        let roundwon = false;
        for (let i = 0; i <= 7; i++){
            const winningCombos = winningCombos[i];
            let a = gameState[winningCombos[0]];
            let b = gameState[winningCombos[1]];
            let c = gameState[winningCombos[2]];
            if (a === '' || b ==='' || c ===''){
                continue;
            } if (a === b && b === c){
                roundwon = true;
                break
            }if (roundwon){
        winMessage.innerText = winMessage();
        gameActive = false;
    
        }
    

     
    }
}
let roundDraw = !gameState.includes('');
if (roundDraw){
    draw.innerText = draw();
    gameActive=false;
    
}



//check for win conditions
// let currentPlayer ='x'
// for()
startGame()
////////////////////////////////** *