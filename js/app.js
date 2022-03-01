////////////////////////////////
// Global Variables Here
const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

////////////////////////////////
// Functions For Game Logic Here

document.addEventListener('click', event => {
    const target = event.target
    const isLocation = target.classList.contains('location')
    const isDisabled = target.classList.contains('disabled')
    if (isLocation && !isDisabled) {
        const locationValue = target.dataset.value
        game.xTurn === true
            ? game.xState.push(locationValue)
            : game.oState.push(locationValue)
        target.classList.add('disabled')
        target.classList.add(game.xTurn ? 'x' : 'o')
        game.xTurn = !game.xTurn
        if (!document.querySelectorAll('.location:not(.disabled)').length) {
            document.querySelector('.game-over').classList.add('visible')
            document.querySelector('.game-over-text').textContent = 'Draw!'
        }
        game.winningStates.forEach(winningState => {
            const xWins = winningState.every(state => game.xState.includes(state))
            const oWins = winningState.every(state => game.oState.includes(state))
            if (xWins || oWins) {
                document.querySelectorAll('.location').forEach(location => location.classList.add('disabled'))
                document.querySelector('.game-over').classList.add('visible')
                document.querySelector('.game-over-text').textContent = xWins
                    ? 'X wins!'
                    : 'O wins!'
            }
        })
    }
})

document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible')
    document.querySelectorAll('.location').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
    })
    game.xTurn = true
    game.xState = []
    game.oState = []
})

////////////////////////////////
// Event Listeners Here


////////////////////////////////