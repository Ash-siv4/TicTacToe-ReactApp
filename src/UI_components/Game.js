import { useState } from "react";
import Board from "./Board";
// function to display list of past moves
export default function Game() {
  // track which step of the game is currently displayed by numbering them, starting from 0 (since game begins with X and currentMove=0 at game start, all even numbers imply it is 'X's turn next)
  const [currentMove, setCurrentMove] = useState(0);
  // ------------------------------------------------
  // boolean state to check if it's playerXs turn next
  //   const [xNext, setXNext] = useState(true);
  //this state is redundant and can be replaced with a variable. Best practice is to avoid redundant states to reduce bugs and increase readability. replace with following:
  const xNext = currentMove % 2 === 0;
  // ------------------------------------------------

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
  // ------------------------------------------------
  // render the squares for the current move by reading the history array of the previous move (i.e. -1 before current index - always the final move)
  //   const currentSquares = history[history.length - 1];
  // ------------------------------------------------
  // to show any step in the game’s history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred
  const currentSquares = history[currentMove];
  // function called by board component to update the game
  // pass in nextSquares - from Board component
  function handlePlay(nextSquares) {
    // If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point. Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history. Each time a move is made, you need to update currentMove to point to the latest history entry:
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // ------------------------------------------------
    // ... - spread operator = Arrays: Copying, combining, and spreading elements as arguments || Objects: Copying and merging properties || Functions: Spreading array elements as individual arguments
    // setHistory([...history, nextSquares]); // creates a new array containing items from history and also items from nextSquares
    // // example: if history is [[null,null,null], ["X",null,null]] and nextSquares is ["X",null,"O"], then the new [...history, nextSquares] array will be [[null,null,null], ["X",null,null], ["X",null,"O"]]
    // setXNext(!xNext); // toggle xNext like Board used to
    // ------------------------------------------------
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove); //update currentMove state
    //no longer need the xIsNext state declaration or the calls to setXIsNext. Now, there’s no chance for xIsNext to get out of sync with currentMove
    // setXNext(nextMove % 2 == 0); //updates xNext to true if nextMove is an even number
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
    // <li> change to <li key={move}> to remove Reacts 'key' error - keys in React are unique identifiers (like name tags) that help React keep track of list items, ensuring updates are efficient and accurate
    return (
      <li key={move}>
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
