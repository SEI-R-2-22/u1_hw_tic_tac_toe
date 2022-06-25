////////////////////////////////
// Global Variables Here
const sq = document.querySelectorAll('.sq');
let isPlayerTurn = true;
//add random turn at start of game
//Scoreboard variables
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
const boardTracker = [{spot:0, mark:''},{spot:1, mark:''},{spot:2, mark:''},{spot:3, mark:''},{spot:4,mark:''},{spot:5,mark:''},{spot:6,mark:''},{spot:7,mark:''},{spot:8,mark:''}];
//reset button
const btn = document.getElementById('btn');

////////////////////////////////
// Functions For Game Logic Here
// function marking box with an X
const markBoxX = (location) => {
  let boxX = document.createElement('span');
  boxX.innerText = 'X';
  //style X bigger for the whole box
  document.querySelector(`#${location}`).appendChild(boxX);
};
// function marking box with an O
const markBoxO = (location) => {
  let boxO = document.createElement('span');
  boxO.innerText = 'O';
  //style O bigger for the whole box
  document.querySelector(`#${location}`).appendChild(boxO);
}
//check to see who's the winner
const winnerCheck = () => {
if(
  (boardTracker[0].mark === 'X' && boardTracker[1].mark === 'X' && boardTracker[2].mark === 'X') || (boardTracker[3].mark === 'X' && boardTracker[4].mark === 'X' && boardTracker[5].mark === 'X') 
  || (boardTracker[6].mark === 'X' && boardTracker[7].mark === 'X' && boardTracker[8].mark === 'X') ||
  (boardTracker[0].mark === 'X' && boardTracker[3].mark === 'X' && boardTracker[6].mark === 'X') || (boardTracker[1].mark === 'X' && boardTracker[4].mark === 'X' && boardTracker[7].mark === 'X') 
  || (boardTracker[2].mark === 'X' && boardTracker[5].mark === 'X' && boardTracker[8].mark === 'X') || (boardTracker[0].mark === 'X' && boardTracker[4].mark === 'X' && boardTracker[7].mark === 'X') 
  || (boardTracker[2].mark === 'X' && boardTracker[4].mark === 'X' && boardTracker[6].mark === 'X') 
  ){
  alert(`Player Wins`)
  playerScore++
  console.log(playerScore)
  document.getElementById('pscore').innerText = playerScore
  restart()
  } else if ((boardTracker[0].mark === 'O' && boardTracker[1].mark === 'O' && boardTracker[2].mark === 'O') || (boardTracker[3].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[5].mark === 'O') 
    || (boardTracker[6].mark === 'O' && boardTracker[7].mark === 'O' && boardTracker[8].mark === 'O') ||
    (boardTracker[0].mark === 'O' && boardTracker[3].mark === 'O' && boardTracker[6].mark === 'O') || (boardTracker[1].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[7].mark === 'O') 
    || (boardTracker[2].mark === 'O' && boardTracker[5].mark === 'O' && boardTracker[8].mark === 'O') || (boardTracker[0].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[7].mark === 'O') 
    || (boardTracker[2].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[6].mark === 'O') ) {
  alert(`Computer Wins`)
  cpuScore++
  document.getElementById('cscore').innerHTML = cpuScore
  restart()
  } else if ((boardTracker[0].mark !== '' && boardTracker[1].mark !== '' && boardTracker[2].mark !== '' && boardTracker[3].mark !== '' && boardTracker[4].mark !== '' && boardTracker[5].mark !== '') 
    && (boardTracker[6].mark !== '' && boardTracker[7].mark !== '' && boardTracker[8].mark !== '') ) {
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
    let obj = {
      spot: `${i}`,
      mark: ''
    };
    boardTracker.splice(`${i}`, 1, obj)
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
    let obj = {
      spot: `${i}`,
      mark: ''
    };
    boardTracker.splice(`${i}`, 1, obj)
    playerScore = 0;
    cpuScore = 0;
    tieScore = 0;
    document.getElementById('pscore').innerText = playerScore
    document.getElementById('cscore').innerText = cpuScore
    document.getElementById('tscore').innerText = tieScore
    document.getElementById(`sq${i}`).style.backgroundColor = ''
  }
  firstPlayer();
  turnSign();
  smartAI();
}
//Not smart AI function
const smartAI = () => {
  if(!isPlayerTurn){
    let aiChoice = Math.round(Math.random()*8)
    if(parseInt(document.querySelector(`#sq${aiChoice}`).getAttribute('data-increment')) !== 1){
      markBoxO(`sq${aiChoice}`)
      document.querySelector(`#sq${aiChoice}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      let obj = {
        spot: parseInt(aiChoice),
        mark: 'O'
      }
      boardTracker.splice(aiChoice, 1, obj)
      console.log( document.getElementById(`sq${aiChoice}`).style.backgroundColor)
      document.getElementById(`sq${aiChoice}`).style.backgroundColor = 'yellow'
      console.log(boardTracker)
      winnerCheck();
      } else {
        smartAI();
      }
  }
}

////////////////////////////////
// Event Listeners Here
sq.

//Attaching eventListeners & running mark Functions
sq.forEach ( s => 
  s.addEventListener('click', () => {
    let location = s.getAttribute('id');
    if(parseInt(s.getAttribute('data-increment')) !== 1 && isPlayerTurn){
      markBoxX(location)
      document.querySelector(`#${location}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      let obj = {
        spot: parseInt(location.charAt(2)),
        mark: 'X'
      }
      boardTracker.splice(parseInt(location.charAt(2)), 1, obj)
      document.getElementById(location).style.backgroundColor = 'blue'
      console.log(boardTracker)
      winnerCheck();
      smartAI();
      } else {
          // if(parseInt(s.getAttribute('data-increment')) !== 1 && !isPlayerTurn){
          //   markBoxO(location)
          //   document.querySelector(`#${location}`).setAttribute('data-increment', 1)
          //   isPlayerTurn = !isPlayerTurn
          //   let obj = {
          //     spot: parseInt(location.charAt(2)),
          //     mark: 'O'
          //   }
          //   boardTracker.splice(parseInt(location.charAt(2)), 1, obj)
          //   document.getElementById(location).style.backgroundColor = 'yellow'
          //   console.log(boardTracker)
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