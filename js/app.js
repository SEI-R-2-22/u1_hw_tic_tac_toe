// Global Variables Here
const ticTacToe = () => {
  let squares = document.querySelectorAll('.square')

  const selectionArray = [
    '<img src="./resources/X.png" alt="X">',
    '<img src="./resources/O.png" alt="O">',
    '<img src="./resources/X.png" alt="X">',
    '<img src="./resources/O.png" alt="O">',
    '<img src="./resources/X.png" alt="X">',
    '<img src="./resources/O.png" alt="O">',
    '<img src="./resources/X.png" alt="X">',
    '<img src="./resources/O.png" alt="O">',
    '<img src="./resources/X.png" alt="X">'
  ]
  let storeClick = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ]

  let winner = undefined
  const arena = []
  let scoreX = []
  let scoreO = []

  ////////////////////////////////
  // Functions For Game Logic Here

  let scorePush = (winner) => {
    if (winner === '<img src="./resources/X.png" alt="X">') {
      scoreX.push('<img src="./resources/X.png" alt="X">')
      scoreTally(winner)
    } else if (winner === '<img src="./resources/O.png" alt="O">') {
      scoreO.push('<img src="./resources/O.png" alt="O">')
      scoreTally(winner)
    }
  }

  let scoreTally = (winner) => {
    if (winner === '<img src="./resources/X.png" alt="X">') {
      for (let i = 0; i < scoreX.length; i++) {
        let scoreList = document.getElementById('scoreX')
        let newScore = document.createElement('li')

        newScore.setAttribute('class', 'tallied')
        newScore.innerHTML = '<img src="./resources/X.png" alt="X">'
        scoreList.appendChild(newScore)
      }
    } else if (winner === '<img src="./resources/O.png" alt="O">') {
      for (let i = 0; i < scoreO.length; i++) {
        let scoreList = document.getElementById('scoreO')
        let newScore = document.createElement('li')

        newScore.setAttribute('class', 'tallied')
        newScore.innerHTML = '<img src="./resources/O.png" alt="O">'
        scoreList.appendChild(newScore)
      }
    }
  }

  let turnAnnouncement = () => {
    let announcement = document.querySelector('.turnAnnouncement')
    announcement.innerText = `Its player's ${
      selectionArray.length % 2 ? 'Xs' : 'Os'
    } turn to play`
  }

  turnAnnouncement()

  let winnerAnnouncement = (winner) => {
    let announcement = document.querySelector('.winnerAnnouncement')
    announcement.innerHTML = `${winner} has won!`
  }

  let catsGame = () => {
    if (selectionArray.length === 0 && !winner) {
      let announcement = document.querySelector('.winnerAnnouncement')
      announcement.innerText = 'Cats Game!'
    }
  }

  const winEval = (position) => {
    switch (position) {
      case 0:
        if (arena[0] === arena[1] && arena[0] === arena[2]) {
          winner = arena[0]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[0] === arena[3] && arena[0] === arena[6]) {
          winner = arena[0]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[0] === arena[4] && arena[0] === arena[8]) {
          winner = arena[0]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 1:
        if (arena[1] === arena[0] && arena[1] === arena[2]) {
          winner = arena[1]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[1] === arena[4] && arena[1] === arena[7]) {
          winner = arena[1]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 2:
        if (arena[2] === arena[0] && arena[2] === arena[1]) {
          winner = arena[2]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[2] === arena[5] && arena[2] === arena[8]) {
          winner = arena[2]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[2] === arena[4] && arena[2] === arena[6]) {
          winner = arena[2]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 3:
        if (arena[3] === arena[0] && arena[3] === arena[6]) {
          winner = arena[3]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[3] === arena[4] && arena[3] === arena[5]) {
          winner = arena[3]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 4:
        if (arena[4] === arena[1] && arena[4] === arena[7]) {
          winner = arena[4]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[4] === arena[3] && arena[4] === arena[5]) {
          winner = arena[4]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[4] === arena[0] && arena[4] === arena[8]) {
          winner = arena[4]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[4] === arena[2] && arena[4] === arena[6]) {
          winner = arena[4]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 5:
        if (arena[5] === arena[2] && arena[5] === arena[8]) {
          winner = arena[5]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[5] === arena[3] && arena[5] === arena[4]) {
          winner = arena[5]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 6:
        if (arena[6] === arena[0] && arena[6] === arena[3]) {
          winner = arena[6]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[6] === arena[4] && arena[6] === arena[2]) {
          winner = arena[6]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[6] === arena[7] && arena[6] === arena[8]) {
          winner = arena[6]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 7:
        if (arena[7] === arena[1] && arena[7] === arena[4]) {
          winner = arena[7]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[7] === arena[6] && arena[7] === arena[8]) {
          winner = arena[7]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
      case 8:
        if (arena[8] === arena[2] && arena[8] === arena[5]) {
          winner = arena[8]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[8] === arena[6] && arena[8] === arena[7]) {
          winner = arena[8]
          winnerAnnouncement(winner)
          scorePush(winner)
        } else if (arena[8] === arena[0] && arena[8] === arena[4]) {
          winner = arena[8]
          winnerAnnouncement(winner)
          scorePush(winner)
        }
        break
    }
  }

  ////////////////////////////////
  // Event Listeners Here

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
      if (!winner) {
        let position = parseInt(squares[i].getAttribute('sqr-position'))

        if (!storeClick[position]) {
          let selection = selectionArray.pop()
          squares[i].innerHTML = selection
          arena[position] = selection
          storeClick[position] = 'Marked'

          winEval(position)
          turnAnnouncement()
          catsGame()
        }
      }
    })
  }
}
////////////////////////////////
ticTacToe()

let resetButton = document.querySelector('.resetButton')
resetButton.addEventListener('click', () => {
  let board = document.getElementsByClassName('square')
  for (let i = 0; i < board.length; i++) {
    board[i].innerText = ''
  }

  let announcement = document.getElementsByClassName('winnerAnnouncement')
  announcement[0].innerText = ''

  ticTacToe()
})
