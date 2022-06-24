////////////////////////////////
// Global Variables Here
// Populate X
const sq = document.querySelectorAll('.sq');
let isPlayerTurn = true;
//add random turn at start of game
//Score
// const playerScore = "";
// const cpuScore = "";
// const tieScore = "";


////////////////////////////////
// Functions For Game Logic Here
const markBoxX = (location) => {
  let boxX = document.createElement('span');
  boxX.innerText = 'X';
  //style X bigger for the whole box
  document.querySelector(`#${location}`).appendChild(boxX);
  console.log(boxX)
}
const markBoxO = (location) => {
  let boxO = document.createElement('span');
  boxO.innerText = 'O';
  //style O bigger for the whole box
  document.querySelector(`#${location}`).appendChild(boxO);
  console.log(boxO)
}
//Put X or O into the sq div using append

////////////////////////////////
// Event Listeners Here

//Attaching eventListeners & running mark Functions
sq.forEach ( s => 
  s.addEventListener('click', () => {
    let location = s.getAttribute('id');
    console.log(s.getAttribute('data-increment'))
    if(parseInt(s.getAttribute('data-increment')) !== 1 && isPlayerTurn){
      markBoxX(location)
      document.querySelector(`#${location}`).setAttribute('data-increment', 1)
      isPlayerTurn = !isPlayerTurn
      console.log(isPlayerTurn)
      } else {
          if(parseInt(s.getAttribute('data-increment')) !== 1 && !isPlayerTurn){
            markBoxO(location)
            document.querySelector(`#${location}`).setAttribute('data-increment', 1)
            isPlayerTurn = !isPlayerTurn
            console.log(isPlayerTurn)
          }
  }
 } )
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