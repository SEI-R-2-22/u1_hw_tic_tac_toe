// Global Variables Here
let box0 = document.getElementById("box0");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let i = 0;
let playerTurn = true;
let playerArr = ['x', 'o'];
let playerChoice = playerTurn;



let exampleArray = [];
let playerOArr = [];
let playerXArr = [];
// let solutionArray = ["box1", "box2", "box3"];


const winArr = [
  ['box0', 'box1', 'box2'],
  ['box3', 'box4', 'box5'],
  ['box6', 'box7', 'box8'],
  ['box0', 'box3', 'box6'],
  ['box1', 'box4', 'box7'],
  ['box2', 'box5', 'box8'],
  ['box0', 'box4', 'box8'],
  ['box2', 'box4', 'box6'],
];






///NEED TO MAKE:

//A function to restart the game (it might need to clear the boxes as well)- see if a while loop would work for this.

//A function that checks for the winnArr to decide if the game finished.(if statements)

//A function to output who won.(if player won show "would you like to play again? and restart button"

//A function that will check if the game is finished



// function turn(playerArr) {
//   for (i = playerArr[1]; i < 5; i){
//     i *= -1;
//     if (i === -1){
//       alert("test")
//       let playerTurn = 'o';
//       let turnOrder = -1;
//       playerArr = [playerTurn,turnOrder];
//       return playerArr;
//     } else if (i === 1) {
//       alert('test2')
//       let playerTurn = 'x';
//       let turnOrder = 1;
//       let playerArr = [playerTurn,turnOrder];
//       return playerArr;
//     } else {
//       alert("test1")
//     }
//   }
// }



function boxClick(boxChoice){
  if (playerTurn === true){
    boxChoice.innerHTML = "x";
    console.log("You are player X")
  } else {
    boxChoice.innerHTML = "o";
   console.log("You are player O")
 
} 
playerTurn = !playerTurn;
}
  





//  // console.log(playerXturn);
//  exampleArray.push(boxChoice.id)
//  console.log(exampleArray)
//  console.log(boxChoice.innerText)



// const playerX = exampleArray.push(boxChoice.id);
// console.log(playerX)


// function playerWho() {
//   if (playerXturn === true){
//    console.log('something')
   
//   } else {
//     console.log("this is not true")
//   }
// }

// function playerO() {
//   if (playerOturn === false){
 
// }


// function winDec {
//   if (playerXturn === winArr{

//   }
// }



// ----------temp code
// let exampleArray = [];
// let playerOArray = [];
// let solutionArray = ["box1", "box2", "box3"];


// const winArr = {};
// ---------

// const winArray = [
//   ["box1", "box2", "box3"]; ["box4", "box5", "box6"], ["box7", "box8", "box9"], ["box1", "box4", "box7"], ["box2","box8"], ["box3", "box6", "box9"],["box1", "box5", "box9"], ["box3", "box5", "box7"]';
                  
// switch(winnerArrays) {
// case 'horizontal':["box1", "box2", "box3"]; ["box4", "box5", "box6"], ["box7", "box8", "box9"]
// console.log('horizontal win');
// break;
// case 'vertical':["box1", "box4", "box7"], ["box2", "box5", "box8"], ["box3", "box6", "box9"],
// console.log('vertical win');
// break;
//   case 'diagonal': ["box1", "box5", "box9"], ["box3", "box5", "box7"]
// console.log('horizontal win');
// break;
// default:
// console.log('its a tie!');
// }
      
//need to create the list of output string into an array to compare it with winArr but needs to know if it was X or O also



box0.addEventListener("click", function () {
boxClick(box0)}, {once:true});
box1.addEventListener("click", function() {
boxClick(box1)}, {once:true});
box2.addEventListener("click", function() {
boxClick(box2)}, {once:true});
box3.addEventListener("click", function () {
boxClick(box3)}, {once:true});
box4.addEventListener("click", function() {
boxClick(box4)}, {once:true});
box5.addEventListener("click", function() {
boxClick(box5)}, {once:true});
box6.addEventListener("click", function() {
boxClick(box6)}, {once:true});
box7.addEventListener("click", function() {
boxClick(box7)}, {once:true});
box8.addEventListener("click", function() {
boxClick(box8)}, {once:true});
                  
            
                  
                  
                  
                  