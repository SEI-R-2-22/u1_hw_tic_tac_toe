# Tic Tac Toe

![Tic Tac Toe](https://vuejsexamples.com/content/images/2017/03/Tic-Tac-Toe.gif)

## Overview
This week we have been learning about writing functions, working with loops, and writing conditionals. We also learned about HTML, CSS, and the DOM. We will be making a Tic Tac Toe game using all of these concepts. Remember to plan out your project before actually coding it out, since you'll want to think carefully about what functions and event listeners you'll need to pass data properly.

## Objectives
- Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
- Use best practices when writing code, DRY (Do Not Repeat Yourself) code is always a better option
- Create a portfolio worthy project with your own personal style

## What You'll Be Building
Feel free to implement your own style or theme when building your game, it might be something you want to put on a portfolio showing off your skills!
- [Live Demo](https://playtictactoe.org/)

## Getting Started

- Fork and clone this repository.
- Run `open index.html` to open your game in the browser.
  - `cmd + option + i` or `ctrl + shift + i` to **open your dev tools** in your browser.
- You'll be working in the `index.html` file, `app.js` in the `js` folder, and `style.css` in the `css` folder.


## Setting Up the Game Board
Think about what you'll want your game to look like along with how you'll want to display instructions and game information for players. Let's take a look at the `index.html` file.

- Here is one way you could set it up with your HTML and CSS:
#### HTML
```html
<div class="game-board">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```
#### CSS
```css
.game-board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 0 auto;
}
```

## Global Variables
Your game will need to respond to events from players, track the state of the game as it progresses, and have the necessary logic to determine if a player has won or if the game is a tie. You'll be working in `app.js` to build your game logic.

- Examples of how these global variables might be set up below:
```js
const gameActive = false;
const currentPlayer = "X";
const gameState = ["","","","","","","","","",];
const winCombos = [
  [0, 1, 2],  // winning rows
 	[3, 4, 5],				
 	[6, 7, 8], 
 	[0, 3, 6],  // winning columns
 	[1, 4, 7],				
 	[2, 5, 8],
 	[0, 4, 8],  //winning diagonals
 	[2, 4, 6]
  ];
```

## Functions and Event Listeners
Our game will need several things to happen when a player clicks on a space in the Game Board. We'll need to write functions to and attach some of them to event listeners to allow for our game to work properly.

- We'll need to target all of the cells and fire a callback function when one is clicked.
- Example below:
```js
document.querySelectorAll('.cell').forEach(function(cell) {
  cell.addEventListener('click', someCallbackFunction);
})
```


## Requirements
- A user should be able to click on different squares to make a move.
- Every click will alternate between marking an `X` and `O`
- Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
- A cell should not be able to be replayed once marked.
- You should not be able to click remaining empty cells after the game is over.
- Add a reset button that will clear the contents of the board.
- Display a message to indicate which turn is about to be played.
- Detect draw conditions (ties/cat's game) 
- Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
  - Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

**Have Fun** - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

## Bonuses

- Implement your reset button without refreshing the whole page
- Track player's wins over time
- Add a simple AI to support one player vs computer mode. In this case, "simple" just means having the computer pick a random empty square.
- Make your computer seem more human by adding a short time delay between your turn and the computer's turn.
- Style it up! Get creative, or even make a theme!

## Submission Guidelines
- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-11-8/template_pull_request)

## Resources
- [JavaScript DOM Lesson](https://github.com/SEI-R-11-8/u1_lesson_intro_to_dom)
- [Events Lesson](https://github.com/SEI-R-11-8/u1_lesson_js_events)
- [JavaScript Arrays Lesson](https://github.com/SEI-R-11-8/u1_lesson_js_arrays)
- [CSS Flex and Grid Lesson](https://github.com/SEI-R-11-8/u1_lesson_flex_grid)
- [JavaScript Scope Lesson](https://github.com/SEI-R-11-8/u1_lesson_js_scope)
- [JavaScript Functions Lesson](https://github.com/SEI-R-11-8/u1_lesson_js_functions)
