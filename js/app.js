////////////////////////////////
// Global Variables Here

const cbox1 = document.querySelector('#box1');
const cbox2 = document.querySelector('#box2');
const cbox3 = document.querySelector('#box3');
const cbox4 = document.querySelector('#box4');
const cbox5 = document.querySelector('#box5');
const cbox6 = document.querySelector('#box6');
const cbox7 = document.querySelector('#box7');
const cbox8 = document.querySelector('#box8');
const cbox9 = document.querySelector('#box9');

let turn = "player";

let choices = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];
console.log(choices.length);
let winlog = [];

let winner = null;

const playerX = {
    score: 0
};

const playerO = {
    score: 0
};

let against = "human";

////////////////////////////////
// Functions For Game Logic Here



const printArray = () => {
    for(i=0;i<choices.length;i++){
        console.log(choices[i]);
    }
}

const updateScore = function(){
    const x = document.querySelector(".scorelog").children[1].children[0].children[0];
    const o = document.querySelector(".scorelog").children[1].children[0].children[1];

    x.innerText = playerX.score;
    o.innerText = playerO.score;
}

const reset = function(){
    choices = ["box1","box2","box3","box4","box5","box6","box7","box8","box9"];
    turn = "player";
    winner = null;
    cbox1.children[0].innerText = "";
    cbox2.children[0].innerText = "";
    cbox3.children[0].innerText = "";
    cbox4.children[0].innerText = "";
    cbox5.children[0].innerText = "";
    cbox6.children[0].innerText = "";
    cbox7.children[0].innerText = "";
    cbox8.children[0].innerText = "";
    cbox9.children[0].innerText = "";
}

const playerChoose = function(boxnumber) {

    if(winner === null && against === "human"){
        if(choices.includes(boxnumber)){
            
            printArray();
            console.log("hello");
            changeText(boxnumber);
            choices.splice(choices.indexOf(boxnumber),1);
                checkGameStatus();
                checkWinner();
        }else{
        console.log("choices don't include boxnumber");
        }
    }else if(against === "computer" && winner === null){
        printArray();
        console.log("hello");
        changeText(boxnumber);
        choices.splice(choices.indexOf(boxnumber),1);
            checkGameStatus();
            checkWinner();
            setTimeout(computerChoice, 1000);
    }
    
    // if choice is present
    // array pops out choice
    // else do nothing
}

const computerChoice = function(){
    if(turn === "computer" && against === "computer" && winner === null){
        const x = Math.ceil(Math.random() * choices.length) -1;
        console.log("oxoxo "+x);
        const choice = choices[x];
        console.log("xxxxx " + choice);
        changeText(choice);
        choices.splice(choices.indexOf(choice),1);
        checkGameStatus();
        checkWinner();
        
    }else{
        console.log("computerchoice else");
    }
    
}

const changeText = function(boxnumber){
    box = "#" + boxnumber;
    printArray();
    console.log(box); 
    if(winner === null){
        if(turn === "player"){
            document.querySelector(box).children[0].innerText = "X";
            
            document.querySelector('#turns').innerText = "TURN: Player O !"
            turn = "computer";
        }else if(turn === "computer"){
            document.querySelector(box).children[0].innerText = "O";
        
            document.querySelector('#turns').innerText = "TURN: Player X !"
            turn = "player";
        }
    }else{
        console.log("winner detected. Game Over!");
    }
}

const checkWinner = function(){
    if(winner === "X"){
        document.querySelector('#turns').innerText = "X Wins!";
        const newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode("X Won"));
        document.querySelector('.scorelog').children[2].appendChild(newItem);
        playerX.score++;
        updateScore();
    }else if(winner === "O"){
        document.querySelector('#turns').innerText = "O Wins!";
        const newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode("O Won"));
        document.querySelector('.scorelog').children[2].appendChild(newItem);
        playerO.score++;
        updateScore();
    }else if(winner === "T"){
        document.querySelector('#turns').innerText = "It' a Tie!";
        const newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode("It's Tied"));
        document.querySelector('.scorelog').children[2].appendChild(newItem);
    }else{
        console.log("checkWinner: game continues");
    }
}

const checkGameStatus = () => {
    
        if(cbox1.children[0].innerText=== "X" && 
    cbox2.children[0].innerText=== "X" &&
    cbox3.children[0].innerText === "X"){
        console.log("100: Player X won!");
        winner = "X";
        winlog.push("X Won!");

    }
    else if(cbox1.children[0].innerText === "X" && 
    cbox4.children[0].innerText === "X" &&
    cbox7.children[0].innerText === "X" ){
        console.log("105: Player X won!");
        winner = "X";
        winlog.push("X Won!");

    }else if(cbox1.children[0].innerText === "X" && 
    cbox5.children[0].innerText === "X" &&
    cbox9.children[0].innerText === "X" ){
        console.log("105: Player X won!");
        winner = "X"; 
        winlog.push("X Won!");
   
    }else if(cbox2.children[0].innerText=== "X" && 
    cbox5.children[0].innerText === "X" &&
    cbox8.children[0].innerText === "X" ){
        console.log("109: Player X won!");
        winner = "X";
        winlog.push("X Won!");
 
    }else if(cbox3.children[0].innerText === "X" && 
    cbox6.children[0].innerText === "X" &&
    cbox9.children[0].innerText === "X" ){
        console.log("113: Player X won!");
        winner = "X";
        winlog.push("X Won!");
            
    }else if(cbox3.children[0].innerText === "X" && 
    cbox5.children[0].innerText === "X" &&
    cbox7.children[0].innerText === "X" ){
        console.log("117: Player X won!");
        winner = "X";
        winlog.push("X Won!");

    }else if(cbox4.children[0].innerText === "X" && 
    cbox5.children[0].innerText === "X" &&
    cbox6.children[0].innerText === "X" ){
        console.log("125: Player X won!");
        winner = "X";
        winlog.push("X Won!");

    }else if(cbox9.children[0].innerText=== "X" && 
    cbox7.children[0].innerText === "X" &&
    cbox8.children[0].innerText === "X" ){
        console.log("129: Player X won!");
        winner = "X";
        winlog.push("X Won!");
       
    } else if(cbox1.children[0].innerText=== "O" && 
    cbox2.children[0].innerText=== "O" &&
    cbox3.children[0].innerText === "O"){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");
 
    }
    else if(cbox1.children[0].innerText === "O" && 
    cbox4.children[0].innerText === "O" &&
    cbox7.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");
 
    }else if(cbox1.children[0].innerText === "O" && 
    cbox5.children[0].innerText === "O" &&
    cbox9.children[0].innerText === "O" ){
        console.log("105: Player O won!");
        winner = "O"; 
        winlog.push("O Won!");

    }else if(cbox2.children[0].innerText=== "O" && 
    cbox5.children[0].innerText === "O" &&
    cbox8.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");

    }else if(cbox3.children[0].innerText === "O" && 
    cbox6.children[0].innerText === "O" &&
    cbox9.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");
 
    }else if(cbox3.children[0].innerText === "O" && 
    cbox5.children[0].innerText === "O" &&
    cbox7.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");

    }else if(cbox4.children[0].innerText === "O" && 
    cbox5.children[0].innerText === "O" &&
    cbox6.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");

    }else if(cbox9.children[0].innerText=== "O" && 
    cbox7.children[0].innerText === "O" &&
    cbox8.children[0].innerText === "O" ){
        console.log("Player O won!");
        winner = "O";
        winlog.push("O Won!");

    }else if(winner !== "X" && winner !== "O" && choices.length === 0){
        console.log("it's a tie!");
        winner = "T";
        winlog.push("You Tied!");

    }
}

////////////////////////////////
// Event Listeners Here
document.querySelector('#box1').addEventListener('click', function(){
    
    playerChoose(this.id);
});

document.querySelector('#box2').addEventListener('click', function(){
  
    playerChoose(this.id);
});
document.querySelector('#box3').addEventListener('click', function(){
    playerChoose(this.id);
  
});
document.querySelector('#box4').addEventListener('click', function(){
    playerChoose(this.id);

});
document.querySelector('#box5').addEventListener('click', function(){
    playerChoose(this.id);
  
});
document.querySelector('#box6').addEventListener('click', function(){
    playerChoose(this.id);
    
});
document.querySelector('#box7').addEventListener('click', function(){
    playerChoose(this.id);
 
});
document.querySelector('#box8').addEventListener('click', function(){
    playerChoose(this.id);
    
});
document.querySelector('#box9').addEventListener('click', function(){
    playerChoose(this.id);
   
});
document.querySelector(".control-panel").children[0].children[0].addEventListener('click', function(){
    reset();
});
document.querySelector(".control-panel").children[1].children[0].addEventListener('click', function(){
    if(against === "human"){
        against = "computer";
        this.innerText = "Human";
        computerChoice();
    }else if(against === "computer"){
        against = "human";
        this.innerText = "Computer";
    }
});

////////////////////////////////
