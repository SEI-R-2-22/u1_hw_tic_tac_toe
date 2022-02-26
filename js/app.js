////////////////////////////////
// Global Variables Here
let player = document.getElementById('label-player')
// let user = prompt('What\'s your name?')

let gameboard = []
// let cell


////////////////////////////////
// Functions For Game Logic Here

// set user
// player.innerHTML = user

// make board
for (i=0; i<9; i++) {
    let cell = document.getElementById(`gc${i}`)
    gameboard.push(cell)
}


////////////////////////////////
// Event Listeners Here

// add click even to gameboard cells
for (i=0; i<gameboard.length; i++){  
    // cell = gameboard[i]
    let logClick = (Event) => {
        // console.log(`clicked ${Event.target.id}`)
        Event.target.innerHTML = `X`
    }
    gameboard[i].addEventListener('click', logClick)
}

////////////////////////////////
console.log(gameboard)