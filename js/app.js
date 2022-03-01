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
let counter = 0
let winnerX = true
let winnerO = true




////////////////////////////////
// Functions For Game Logic Here


let replayX = () => {
    let restartX = prompt('X won! Do you want to play again? Y/N')
    if (restartX === 'Y') {
        location.reload()
    } else if (restartX ==='N') {
        alert('Good game!')
        location.reload()
    } else {
        alert ('That is not a valid answer!')
        location.reload()
    }
}

let replayO = () => {
    let restartO = prompt('O won! Do you want to play again? Y/N')
    if (restartO === 'Y') {
        location.reload()
    } else if (restartO ==='N') {
        alert('Good game!')
        location.reload()
    } else {
        alert ('That is not a valid answer!')
        location.reload()
    }
}

let replayTie = () => {
    let restartTie = prompt('It\'s a tie! Do you want to play again? Y/N')
    if (restartTie === 'Y') {
        location.reload()
    } else if (restartTie ==='N') {
        alert('Good game!')
        location.reload()
    } else {
        alert ('That is not a valid answer!')
        location.reload()
    }
}

let winCondX = () => {
    replayX()
    winnerX = false
}

let winCondO = () => {
    replayO()
    winnerO = false
}

let winX = () => {
    if (tl.innerHTML === 'X' && tm.innerHTML === 'X' && tr.innerHTML === 'X') {
        winCondX()
    } else if (ml.innerHTML === 'X' && mm.innerHTML === 'X' && mr.innerHTML === 'X') {
        winCondX()
    } else if (bl.innerHTML === 'X' && bm.innerHTML === 'X' && br.innerHTML === 'X') {
        winCondX()
    } else if (tl.innerHTML === 'X' && ml.innerHTML === 'X' && bl.innerHTML === 'X') {
        winCondX()
    } else if (tm.innerHTML === 'X' && mm.innerHTML === 'X' && bm.innerHTML === 'X') {
        winCondX()
    } else if (tr.innerHTML === 'X' && mr.innerHTML === 'X' && br.innerHTML === 'X') {
        winCondX()
    } else if (tl.innerHTML === 'X' && mm.innerHTML === 'X' && br.innerHTML === 'X') {
        winCondX()
    } else if (bl.innerHTML === 'X' && mm.innerHTML === 'X' && tr.innerHTML === 'X') {
        winCondX()
    }
}
 
let winO = () => {
    if (tl.innerHTML === 'O' && tm.innerHTML === 'O' && tr.innerHTML === 'O') {
    winCondO()
    } else if (ml.innerHTML === 'O' && mm.innerHTML === 'O' && mr.innerHTML === 'O') {
        winCondO()
    } else if (bl.innerHTML === 'O' && bm.innerHTML === 'O' && br.innerHTML === 'O') {
        winCondO()
    } else if (tl.innerHTML === 'O' && ml.innerHTML === 'O' && bl.innerHTML === 'O') {
        winCondO()
    } else if (tm.innerHTML === 'O' && mm.innerHTML === 'O' && bm.innerHTML === 'O') {
        winCondO()
    } else if (tr.innerHTML === 'O' && mr.innerHTML === 'O' && br.innerHTML === 'O') {
        winCondO()
    } else if (tl.innerHTML === 'O' && mm.innerHTML === 'O' && br.innerHTML === 'O') {
        winCondO()
    } else if (bl.innerHTML === 'O' && mm.innerHTML === 'O' && tr.innerHTML === 'O') {
        winCondO()
    }
}

let draw = () => {
    if (counter === 9 && winnerX === true && winnerO === true) {
        replayTie()
    }
}

////////////////////////////////
// Event Listeners Here



let start = () => {
    message.innerText = 'O goes first!'

    for (let i = 0; i < play.length; i++) {
        play[i].innerHTML = ''
        player = 1
        play[i].addEventListener('click', () => {
            counter += 1
            player *= -1
            if ( player === 1) {
                play[i].innerHTML = 'X'
                message.innerHTML = "O's turn"
                winX()
                draw()
            } else if ( player === -1) {
                play[i].innerHTML = 'O'
                message.innerHTML = "X's turn"
                winO()
                draw()
            } 
        }, {once : true})
    }
}

start();



////////////////////////////////
