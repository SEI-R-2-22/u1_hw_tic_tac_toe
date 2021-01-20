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
- Run `npm install` to install dependencies.
  - `npm start` - start BrowserSync server
  - `cmd + option + i` or `ctrl + shift + i` to **open your dev tools** in your browser.
- You'll be working in the `index.html` file, `app.js` in the `js` folder, and `style.css` in the `css` folder.
- Before you even start working with JavaScript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), and at minimum a reset button. Using `id` and `class` on clickable elements will help you wire this up in JavaScript afterwards.
- The JavaScript portion will be next
  - Select elements and attach functions via event listeners
  - You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an `X` or an `O`


## Setting Up the Game Board
Think about what you'll want your game to look like along with how you'll want to display instructions and game information for players. Let's take a look at the `index.html` file.
- First off, we'll want to replace the original title that currently says "Hello Front-End" with something more Tic Tac Toe specific
- Tic Tac Toe has 9 spaces where either player will be able to make a move, so a reasonable way of implementing that in code would be with 9 divs inside of a container div.
- A good way of setting up your board would be setting its display to either flex or grid.
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
- You'll need to decide how large you'll want your Game Board to be along with how your `X`'s and `O`'s display and the overall design of your website.

## Global Variables
Your game will need to respond to events from players, track the state of the game as it progresses, and have the necessary logic to determine if a player has won or if the game is a tie. You'll be working in `app.js` to build your game logic.
- Start with necessary global variables you'll need for your game logic to function properly at the top of `app.js`.
  - A variable containing all possible win conditions. This can be accomplished with an array containing nested arrays of all possible wins.
  - Another important necessary variable would be one for tracking the state of the current player. Our game needs to know whether or not an `X` or `O` is being played.
  - We'll also need a variable to record the moves that have been made by our players to record the game state as it progresses and compare it with our win conditions to see if a player has won or not. An array might be a good option for recording moves.
  - If a player has won, we'll need a way of stopping the game from progressing any further. A boolean might be a good way of accomplishing this.
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

Let's think about what might be going on here.
- How might the `gameState` array be related to the `winCombos` array?
- How might the `gameState` array record moves with `currentPlayer`?

## Functions and Event Listeners
Our game will need several things to happen when a player clicks on a space in the Game Board. We'll need to write functions to and attach some of them to event listeners to allow for our game to work properly.
- A good place to start would be at the very bottom of our file in `app.js` with an event listener.
- We'll need to target all of the cells and fire a callback function when one is clicked.
- Example below:
```js
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', someCallbackFunction));
```
- What should happen when a player clicks on a cell?
- A good place to start would be to build several functions that each accomplish an individual process in the overall game and callback to each other to track the game state and check for win conditions.
- This will allow for more legible code as you build out your game logic.
- A few good places to start might be:
  - A function that starts the game. What needs to happen when a game is started?
  - A function that handles what happens when a cell is clicked.
  - A function that handles the game state of a cell that has been played.
  - A function that handles changing the state of `currentPlayer`.
  - A function that checks for win conditions .
- Make sure to be clear with your naming conventions, as this will help you with understanding what is happening in each function.
- Also be sure that your functions are in `scope` and that you pass data with `arguments` where it is needed between functions.

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
- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-1-25/Pull-Request-Template)

## Resources
- [JavaScript DOM Lesson](https://github.com/SEI-R-1-25/u1_lesson_js_dom)
- [Events and Callbacks Lesson](https://github.com/SEI-R-1-25/u1_lesson_js_events_callbacks)
- [JavaScript Arrays Lesson](https://github.com/SEI-R-1-25/u1_lesson_js_arrays)
- [CSS Flex and Grid Lesson](https://github.com/SEI-R-1-25/u1_lesson_flex_grid)
- [JavaScript Scope Lesson](https://github.com/SEI-R-1-25/u1_lesson_js_scope)
- [JavaScript Functions Lesson](https://github.com/SEI-R-1-25/u1_lesson_js_functions)
