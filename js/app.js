// Global Variables Here
const squares = document.querySelectorAll(`.square`)
const markDisplay = document.querySelectorAll(`.square h2`)
let turnTracker = 0 
let gameActive = true;
document.querySelector(`#restart`).addEventListener(`click`, restart)

////////////////////////////////
// Functions For Game Logic Here
function score() {
if (turnTracker % 2 === 0) {
    let score = parseInt(document.querySelector(`.o-score`).textContent)
    score += 1
    document.querySelector(`.o-score`).innerText = `${score}`
}
else if (turnTracker % 2 === 1 && turnTracker !== 9){
    let score = parseInt(document.querySelector(`.x-score`).textContent)
    score += 1
    document.querySelector(`.x-score`).innerText = `${score}`
}
else if (turnTracker === 9) {
    let score = parseInt(document.querySelector(`.d-score`).textContent)
    score += 1
    document.querySelector(`.d-score`).innerText = `${score}`
}
}

function restart() {
    for (let i = 0; i<markDisplay.length; i++) {
    markDisplay[i].innerText = " "}
    gameStart()
    document.querySelector(`#restart`).style.opacity= 0;
    gameActive = true
    turnTracker = 0
}


////////////////////////////////
// Event Listeners Here

function gameStart() {
for (let i = 0; i<squares.length; i++) {
    squares[i].addEventListener(`click`, function countAndMark() {
        turnTracker += 1
        function checkWinState(a, b, c, d, e, f, g, h, i) {
            if (a === b && b === c && a !== " ") {
                document.querySelector(`#who-won`).innerText = `${a} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
        
            else if (d === e && e === f && d !== " ") {
                document.querySelector(`#who-won`).innerText = `${d} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (g === h && h === i && g !== " ") {
                document.querySelector(`#who-won`).innerText = `${g} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (a === d && d === g && a !== " ") {
                document.querySelector(`#who-won`).innerText = `${a} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (b === e && e === h && b !== " ") {
                document.querySelector(`#who-won`).innerText = `${b} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (c === f && f === i && c !== " ") {
                document.querySelector(`#who-won`).innerText = `${c} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (a === e && e === i && a !== " ") {
                document.querySelector(`#who-won`).innerText = `${a} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }
            else if (c === e && e === g && c !== " ") {
                document.querySelector(`#who-won`).innerText = `${c} wins!`
                gameActive = false
                score()
                document.querySelector(`#restart`).style.opacity = 1
            }}
            checkWinState(
                document.querySelector(`#top-left h2`).textContent,
                document.querySelector(`#top-center h2`).textContent,
                document.querySelector(`#top-right h2`).textContent,
                document.querySelector(`#middle-left h2`).textContent,
                document.querySelector(`#middle-center h2`).textContent,
                document.querySelector(`#middle-right h2`).textContent,
                document.querySelector(`#bottom-left h2`).textContent,
                document.querySelector(`#bottom-center h2`).textContent,
                document.querySelector(`#bottom-right h2`).textContent
                ) 
        if (turnTracker % 2 === 0 && gameActive === true) {
            markDisplay[i].innerText = `O`

    }
        else if (turnTracker % 2 === 1 && gameActive === true){
            markDisplay[i].innerText = `X`
        }
        squares[i].removeEventListener(`click`,countAndMark)
        if (turnTracker >= 5 && turnTracker < 9) {
            checkWinState(
                document.querySelector(`#top-left h2`).textContent,
                document.querySelector(`#top-center h2`).textContent,
                document.querySelector(`#top-right h2`).textContent,
                document.querySelector(`#middle-left h2`).textContent,
                document.querySelector(`#middle-center h2`).textContent,
                document.querySelector(`#middle-right h2`).textContent,
                document.querySelector(`#bottom-left h2`).textContent,
                document.querySelector(`#bottom-center h2`).textContent,
                document.querySelector(`#bottom-right h2`).textContent
                ) 
                }


        
        else if (turnTracker === 9 && gameActive === true) {
            document.querySelector(`#who-won`).innerText = `Its a draw!`
            score()
            document.querySelector(`#restart`).style.opacity = 1
        }
})}}

gameStart()



////////////////////////////////
