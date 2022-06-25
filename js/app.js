////////////////////////////////
// Global Variables Here
const sq = document.querySelectorAll('.sq');
let isPlayerTurn = true;
//add random turn at start of game
//Score
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
const boardTracker = [{spot:0, mark:''},{spot:1, mark:''},{spot:2, mark:''},{spot:3, mark:''},{spot:4,mark:''},{spot:5,mark:''},{spot:6,mark:''},{spot:7,mark:''},{spot:8,mark:''}];

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
  } else if ((boardTracker[0].mark === 'O' && boardTracker[1].mark === 'O' && boardTracker[2].mark === 'O') || (boardTracker[3].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[5].mark === 'O') 
    || (boardTracker[6].mark === 'O' && boardTracker[7].mark === 'O' && boardTracker[8].mark === 'O') ||
    (boardTracker[0].mark === 'O' && boardTracker[3].mark === 'O' && boardTracker[6].mark === 'O') || (boardTracker[1].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[7].mark === 'O') 
    || (boardTracker[2].mark === 'O' && boardTracker[5].mark === 'O' && boardTracker[8].mark === 'O') || (boardTracker[0].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[7].mark === 'O') 
    || (boardTracker[2].mark === 'O' && boardTracker[4].mark === 'O' && boardTracker[6].mark === 'O') ) {
  alert(`Computer Wins`)
  } else if ((boardTracker[0].mark !== '' && boardTracker[1].mark !== '' && boardTracker[2].mark !== '' && boardTracker[3].mark !== '' && boardTracker[4].mark !== '' && boardTracker[5].mark !== '') 
    && (boardTracker[6].mark !== '' && boardTracker[7].mark !== '' && boardTracker[8].mark !== '') ) {
  alert(`The Game is a Tie`)}
  else{
  }
}


////////////////////////////////
// Event Listeners Here


//Attaching eventListeners & running mark Functions
sq.forEach ( s => 
  s.addEventListener('click', () => {
    let location = s.getAttribute('id');
    if(parseInt(s.getAttribute('data-increment')) !== 1 && isPlayerTurn){
      markBoxX(location)
      document.querySelector(`#${location}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      let obj = {
        spot: parseInt(location.charAt(2))-1,
        mark: 'X'
      }
      boardTracker.splice(parseInt(location.charAt(2))-1, 1, obj)
      console.log(boardTracker)
      winnerCheck();
      } else {
          if(parseInt(s.getAttribute('data-increment')) !== 1 && !isPlayerTurn){
            markBoxO(location)
            document.querySelector(`#${location}`).setAttribute('data-increment', 1)
            isPlayerTurn = !isPlayerTurn
            let obj = {
              spot: parseInt(location.charAt(2))-1,
              mark: 'O'
            }
            boardTracker.splice(parseInt(location.charAt(2))-1, 1, obj)
            console.log(boardTracker)
            winnerCheck();
            }
          }
        }
  )
)


////////////////////////////////

// const balls = document.querySelectorAll('.js-ball');
// const scoreDisplay = document.querySelector('.score')
// const levelWinner = document.querySelector('.level-winner');
// let score = 0

// let ballscore = balls[0].getAttribute('data-increment')


// balls.forEach( b => 

//   b.addEventListener('click', () => {
//     let ballscore = b.getAttribute('data-increment')
//     score += parseInt(ballscore);
//     scoreDisplay.innerText = score
//   if (score >=100) {
//     levelWinner.style.opacity = 1
//   }
//   })
// )