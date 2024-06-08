import { useState } from "react";
import Board from "./Board";
// function to display list of past moves
export default function Game() {
  const [xNext, setXNext] = useState(true);
  // "Array(9).fill(null)" is within [] brackets to make an array of a single item which is an array of 9 nulls - in order to produce this(history):
  //   [
  //     // Before first move
  //     [null, null, null, null, null, null, null, null, null],
  //     // After first move
  //     [null, null, null, null, 'X', null, null, null, null],
  //     // After second move
  //     [null, null, null, null, 'X', null, null, null, 'O'],
  //     // ...
  //   ]
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // render the squares for the current move by reading the history array of the previous move (i.e. -1 before current index)
  const currentSquares = history[history.length - 1];
  // function called by board component to update the game
  // pass in nextSquares - from Board component
  function handlePlay(nextSquares) {
    // ... - spread operator = Arrays: Copying, combining, and spreading elements as arguments || Objects: Copying and merging properties || Functions: Spreading array elements as individual arguments
    setHistory([...history, nextSquares]); // creates a new array containing items from history and also items from nextSquares
    // example: if history is [[null,null,null], ["X",null,null]] and nextSquares is ["X",null,"O"], then the new [...history, nextSquares] array will be [[null,null,null], ["X",null,null], ["X",null,"O"]]
    setXNext(!xNext); // toggle xNext like Board used to
  }
  function jumpTo(nextMove) {
    // TODO
  }
  // .map - transform one array into another
  const moves = history.map((squares, move) => {
    // Here 'map' is used to transform "history" of moves into react elements representing buttons on the screen - call the "jumpTo" function to jump past moves when the button is clicked
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to GAME START";
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  // additional "div"s are to make room for the game information, e.g. history.
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
