////////////////////////////////
// Global Variables Here
const sq = document.querySelectorAll('.sq');
let isFirstGame = true;
let isPlayerTurn = true;
//add random turn at start of game
//Scoreboard variables
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
const boardTracker = ['','','','','','','','',''];
//reset button
const btn = document.getElementById('btn');
// variable when I was trying to create logic around checking rows
// let checkMark = document.getElementsByClassName('R1')

////////////////////////////////
// Functions For Game Logic Here
// function marking box with an X
const markBoxX = (location) => {
  document.getElementById(location).innerHTML = 'X';
  isFirstGame = false;
};
// function marking box with an O
const markBoxO = (location) => {
  document.getElementById(location).innerHTML = 'O'
  isFirstGame = false;
}
// //check to see who's the winner
// const winnerCheck = () => {
//     if((document.querySelectorAll('.R1').innerHTML === 'X' || document.querySelectorAll('.R2').innerHTML === 'X' || document.querySelectorAll('.R3').innerHTML === 'X') || 
//     (document.querySelectorAll('.C1').innerHTML === 'X' || document.querySelectorAll('.C2').innerHTML === 'X' || document.querySelectorAll('.C3').innerHTML === 'X') ||
//     (document.getElementById('sq0').innerHTML === 'X' && document.getElementById('sq4').innerHTML === 'X' && document.getElementById('sq8').innerHTML === 'X') ||
//     (document.getElementById('sq2').innerHTML === 'X' && document.getElementById('sq4').innerHTML === 'X' && document.getElementById('sq6').innerHTML === 'X') 
//   ) {
//     alert(`Player Wins`)
//   playerScore++
//   console.log(playerScore)
//   document.getElementById('pscore').innerText = playerScore
//   restart()
//   } else if (
//     (document.querySelectorAll('.R1').innerHTML === 'O' || document.querySelectorAll('.R2').innerHTML === 'O' || document.querySelectorAll('.R3').innerHTML === 'O') || 
//     (document.querySelectorAll('.C1').innerHTML === 'O' || document.querySelectorAll('.C2').innerHTML === 'O' || document.querySelectorAll('.C3').innerHTML === 'O') ||
//     (document.getElementById('sq0').innerHTML === 'O' && document.getElementById('sq4').innerHTML === 'O' && document.getElementById('sq8').innerHTML === 'O') ||
//     (document.getElementById('sq2').innerHTML === 'O' && document.getElementById('sq4').innerHTML === 'O' && document.getElementById('sq6').innerHTML === 'O') 
//   ){
//     alert(`Computer Wins`)
//     cpuScore++
//     document.getElementById('cscore').innerHTML = cpuScore
//     restart()
//   } else if (
//     checkmark.forEach(c => {
//       if(checkMark[c].innerHTML !== ''){
//         console.log('not clear')
//       } else console.log('clear')}))
//       {
//   //   (document.querySelectorAll('.R1').innerHTML !== '' && document.querySelectorAll('.R2').innerHTML  !== ''&& document.querySelectorAll('.R3').innerHTML  !== '')){
//   // console.log(document.querySelectorAll('.R1').innerHTML)
//     alert(`The Game is a Tie`) 
//   tieScore++
//   document.getElementById('tscore').innerText = tieScore
//   restart()
// } else {
//   turnSign()
// }
// }

//check to see who's the winner
const winnerCheck = () => {
  if(
    (boardTracker[0] === 'X' && boardTracker[1] === 'X' && boardTracker[2] === 'X') || (boardTracker[3] === 'X' && boardTracker[4] === 'X' && boardTracker[5] === 'X') 
    || (boardTracker[6] === 'X' && boardTracker[7] === 'X' && boardTracker[8] === 'X') ||
    (boardTracker[0] === 'X' && boardTracker[3] === 'X' && boardTracker[6] === 'X') || (boardTracker[1] === 'X' && boardTracker[4] === 'X' && boardTracker[7] === 'X') 
    || (boardTracker[2] === 'X' && boardTracker[5] === 'X' && boardTracker[8] === 'X') || (boardTracker[0] === 'X' && boardTracker[4] === 'X' && boardTracker[8] === 'X') 
    || (boardTracker[2] === 'X' && boardTracker[4] === 'X' && boardTracker[6] === 'X') 
    ){
    alert(`Player Wins`)
    playerScore++
    document.getElementById('pscore').innerText = playerScore
    restart()
    } else if ((boardTracker[0] === 'O' && boardTracker[1] === 'O' && boardTracker[2] === 'O') || (boardTracker[3] === 'O' && boardTracker[4] === 'O' && boardTracker[5] === 'O') 
      || (boardTracker[6] === 'O' && boardTracker[7] === 'O' && boardTracker[8] === 'O') ||
      (boardTracker[0] === 'O' && boardTracker[3] === 'O' && boardTracker[6] === 'O') || (boardTracker[1] === 'O' && boardTracker[4] === 'O' && boardTracker[7] === 'O') 
      || (boardTracker[2] === 'O' && boardTracker[5] === 'O' && boardTracker[8] === 'O') || (boardTracker[0] === 'O' && boardTracker[4] === 'O' && boardTracker[8] === 'O') 
      || (boardTracker[2] === 'O' && boardTracker[4] === 'O' && boardTracker[6] === 'O') ) {
    alert(`Computer Wins`)
    cpuScore++
    document.getElementById('cscore').innerHTML = cpuScore
    restart()
    } else if ((boardTracker[0] !== '' && boardTracker[1] !== '' && boardTracker[2] !== '' && boardTracker[3] !== '' && boardTracker[4] !== '' && boardTracker[5] !== '') 
      && (boardTracker[6] !== '' && boardTracker[7] !== '' && boardTracker[8] !== '') ) {
    alert(`The Game is a Tie`) 
    tieScore++
    document.getElementById('tscore').innerText = tieScore
    restart()
    }
    else{
      turnSign()
    }
  }

//displays player/cpu turn
const turnSign = () => {
  if(isPlayerTurn){
    document.getElementById('pop2').style.opacity = 0
    document.getElementById('pop1').style.opacity = 1
  } else {
    document.getElementById('pop1').style.opacity = 0
    document.getElementById('pop2').style.opacity = 1
  }
}
//randomly chooses who goes first
const firstPlayer = () => {
  if (Math.round(Math.random()) === 0) {
    isPlayerTurn = true;
  } else {
    isPlayerTurn = false;
  }
};
//restart function
const restart = () => {
  for (let i = 0; i < 9; i++) {
    document.querySelector(`#sq${i}`).setAttribute('data-increment', 0)
    document.querySelector(`#sq${i}`).innerText = ''
    boardTracker.splice(`${i}`, 1, '')
    document.getElementById(`sq${i}`).style.backgroundColor = ''
  }
  firstPlayer()
  turnSign()
  smartAI()
}
//reset function
const reset = () => {
  for (let i = 0; i < 9; i++) {
    document.querySelector(`#sq${i}`).setAttribute('data-increment', 0)
    document.querySelector(`#sq${i}`).innerText = ''
    boardTracker.splice(`${i}`, 1, '')
    playerScore = 0;
    cpuScore = 0;
    tieScore = 0;
    document.getElementById('pscore').innerText = playerScore
    document.getElementById('cscore').innerText = cpuScore
    document.getElementById('tscore').innerText = tieScore
    document.getElementById(`sq${i}`).style.backgroundColor = ''
  }
  if(isFirstGame){
    firstPlayer();
    turnSign();
    smartAI();
  } else{
  alert(`Game was reset. Have fun!`)
  firstPlayer();
  turnSign();
  smartAI();
}}
//Not smart AI function
const smartAI = () => {
  if(!isPlayerTurn){
    let aiChoice = Math.round(Math.random()*8)
    if(parseInt(document.querySelector(`#sq${aiChoice}`).getAttribute('data-increment')) !== 1){
      markBoxO(`sq${aiChoice}`)
      document.getElementById(`sq${aiChoice}`).style.backgroundColor = 'yellow'
      document.querySelector(`#sq${aiChoice}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      boardTracker.splice(aiChoice, 1, 'O')
      winnerCheck();
      } else {
        smartAI();
      }
  }
}

//delay function idea from https://www.educba.com/javascript-delay/
const delay = () => {
  setTimeout(function(){
    smartAI()
  }, Math.round(Math.random()*2*(1000)));
}

////////////////////////////////
// Event Listeners Here

//Attaching eventListeners & running mark Functions
sq.forEach ( s => 
  s.addEventListener('click', () => {
    let location = s.getAttribute('id');
    if(parseInt(s.getAttribute('data-increment')) !== 1 && isPlayerTurn){
      markBoxX(location)
      document.getElementById(location).style.backgroundColor = 'blue'      
      document.querySelector(`#${location}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      boardTracker.splice(parseInt(location.charAt(2)), 1, 'X')
      winnerCheck();
      delay()
      } else {
        // Original play against a 2nd player code
          // if(parseInt(s.getAttribute('data-increment')) !== 1 && !isPlayerTurn){
          //   markBoxO(location)
          //   document.getElementById(location).style.backgroundColor = 'yellow'
          //   document.querySelector(`#${location}`).setAttribute('data-increment', 1)
          //   isPlayerTurn = !isPlayerTurn
          //   boardTracker.splice(parseInt(location.charAt(2)), 1, 'O'')
          //   winnerCheck();
            }
          }
        
  )
)

let prompt = confirm(`Would you like to play a game of Tic Tac Toe?`)
if (prompt) {
  reset()
}
btn.addEventListener('click', reset)
////////////////////////////////