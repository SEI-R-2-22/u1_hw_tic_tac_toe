// Global Variables Here
let score = 0;

const selectPiece = array ["gamePieceX", "gamePieceO"];

let firstPlayerRandom = math.floor(math.random() * selectPiece.length);

const userA = document.querySelector("gamePieceX");

const userB = document.querySelector("gamePieceO");

const gridBox = document.querySelector("grid");

document.getElementsByClassName("grid").onclick = function() {myDomEvent()}

const userA = () => {
  document.getElementById("img").toggleAttribute;
}

const clickButton = document.getElementsByClassName("button");




////////////////////////////////
// Functions For Game Logic Here

const userA = document.querySelector("gamePieceX");
if (userA = firstPlayerRandom) {
  console.log(`Player One's Piece: ${selectPiece[0]}`);
} else {
  console.log(`Player One's Piece: ${selectPiece[1]}`);
}

const userB = document.querySelector("gamePieceO");
if (firstPlayerRandom = userB) {
  console.log(`Player One's Piece: ${selectPiece[1]}`);
} else {
  console.log(`Player One's Piece: ${selectPiece[0]}`);
}

for (let i = 0; i < score.length; i++) {
  mouse[i].addEventListener('click', function) {
  score += 1;
  scoreDisplay.innerText = score;
  if (score >= 2) {
    console.log(Congratulations you won!);
  }
  }

function myDomEvent() {
  document.getElementsByClassName("grid").innerHTML = 
}

for (let i =0; i < clickButton.length, i++) {
  if 
}


////////////////////////////////
// Event Listeners Here
// mouse.addEventListener = ('click', myFunction();


clicker.addEventListener("click", () => { document.getElementsByClassName("grid");
)
}
