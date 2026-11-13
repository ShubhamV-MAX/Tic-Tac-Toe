# Tic Tac Toe

A simple two-player Tic Tac Toe game that runs in the browser. It is built with plain HTML, CSS, and JavaScript, so it needs no libraries, frameworks, or build tools.

## Features

- Two players take turns on the same device: Player X goes first, then Player O.
- A clicked box shows the player's symbol and is disabled so it cannot be clicked again.
- The game checks all 8 winning combinations (3 rows, 3 columns, 2 diagonals) after every move.
- When a player wins, an alert pops up, a winner message appears at the top of the page, and the whole board is locked.
- A **New Game** button clears the board and the winner message so you can play again.
- Responsive board size: the board and boxes are sized with `vh` and `vmin` units, so they scale with the browser window.

## Project Structure

```
tic-tac-toe/
├── index.html   # Page structure: heading, New Game button, and the 3x3 board
├── style.css    # Colours, layout, and board styling
├── script.js    # Game logic: turns, win checking, and starting a new game
└── README.md    # Project documentation
```

## How to Run

1. Download or clone the project and keep all three files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Start playing. No installation or server is required.

## How to Play

1. Player **X** clicks any empty box to place an X.
2. Player **O** then clicks any other empty box to place an O.
3. Players keep alternating turns.
4. The first player to get three matching symbols in a row, column, or diagonal wins.
5. Click **New Game** to clear the board and start again.

## How It Works

### HTML (`index.html`)
- An `<h1>` heading shows the game title. The script adds a second, empty `<h1>` inside it to display the winner message.
- The `New Game` button sits above the board.
- `#gameBoard` holds nine `<button class="box">` elements, one for each cell.

### CSS (`style.css`)
- Removes default margins and padding, and centres the page text.
- Uses a dark blue and yellow colour theme (`#023047`, `#0a195f`, `#ffb703`).
- `#gameBoard` is a flex container with wrapping, so nine boxes of `18vmin` fit into a 3x3 grid.
- Boxes have rounded corners and a soft shadow.

### JavaScript (`script.js`)
| Part | Purpose |
|------|---------|
| `winningPatterns` | Array of the 8 winning index combinations, such as `[0, 1, 2]` and `[0, 4, 8]`. |
| `user` | Boolean flag that tracks the turn: `true` means X, `false` means O. |
| Box click listener | Writes X or O into the clicked box, disables it, flips the turn, and calls `checkWinner()`. |
| `checkWinner()` | Loops through each winning pattern; if all three boxes are filled and equal, it announces the winner and disables the board. |
| `newGame` listener | Clears every box, re-enables all boxes, and empties the winner message. |

## Known Limitations and Ideas for Improvement

- **No draw detection:** if all nine boxes are filled with no winner, the game gives no message.
- **Turn is not reset:** after clicking New Game, the next player is whoever would have played next, not always X.
- **Undeclared variable:** `win` in `checkWinner()` is used without `let` or `const`, which works in normal scripts but would fail in strict mode.
- **Alert pop-up:** the `alert()` blocks the page; a message on the page alone would be smoother.
- **Possible extras:** score tracking, a single-player mode against the computer, and highlighting the winning boxes.

## Technologies Used

- HTML5
- CSS3 (Flexbox, viewport units)
- JavaScript (ES6: arrow functions, `let`/`const`, template literals)

## License

This project is free to use for learning and personal projects.
