// Global Variables Here
let play = document.querySelectorAll('.square')
let player = 1
let message = document.querySelector('#message')
let tl = document.querySelector('.tl')
let tm = document.querySelector('.tm')
let tr = document.querySelector('.tr')
let ml = document.querySelector('.ml')
let mm = document.querySelector('.mm')
let mr = document.querySelector('.mr')
let bl = document.querySelector('.bl')
let bm = document.querySelector('.bm')
let br = document.querySelector('.br')
let winCond1 = [tl, tm, tr]
let winCond2 = [ml, mm, mr]
let winCond3 = [bl, bm, br]
let winCond4 = [tl, ml, bl]
let winCond5 = [tm, mm, bm]
let winCond6 = [tr, mr, br]
let winCond7 = [tl, mm, br]
let winCond8 = [bl, mm, tr]
let winCondition = [winCond1, winCond2, winCond3, winCond4, winCond5, winCond6, winCond7, winCond8]



////////////////////////////////
// Functions For Game Logic Here

let win = () => {
    if (winCond1.length.ATTRIBUTE_NODE === 2) {
        console.log('merp')
    } else if (tl === tm && tr) {
        console.log('O wins')
    }
 }


////////////////////////////////
// Event Listeners Here

message.innerText = 'O goes first!'

const start = () => {
    for (let i = 0; i < play.length; i++) {
        play[i].addEventListener('click', () => {
            player *= -1
            if ( player === 1) {
                play[i].innerHTML = 'X'
                message.innerHTML = "O's turn"
                win()
            } else if ( player === -1) {
                play[i].innerHTML = 'O'
                play[i] = 'O'
                message.innerHTML = "X's turn"
                win()
            }
        }, {once : true})


    }

}



start();


////////////////////////////////
