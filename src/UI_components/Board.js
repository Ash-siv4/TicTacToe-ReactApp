import { useState } from "react";
import Square from "./Square";
// declare a function called 'Square()', later renamed to 'Board()'
// passed in props to Board which will be called from Game and a new onPlay function
export default function Board({ xIsNext, squares, onPlay }) {
  // create a state variable called "squares" which is updated using "setSquares"
  // state variable is declared as an array
  // the array is set to a length of "9" and each element is initially set to "null"
  //entries into the array correspond to the values in each square of the board, e.g:['O',null,'X','X','X','O','O',null,null]
  // --------------------------------------------------
  //   const [squares, setSquares] = useState(Array(9).fill(null)); // remove after lifting state to the GAME component to implement HISTORY feature
  // --------------------------------------------------
  // boolean state to track which player goes next, 'X' or 'O'
  // --------------------------------------------------
  //   const [xIsNext, setXIsNext] = useState(true); // remove after lifting state to the GAME component to implement HISTORY feature
  // --------------------------------------------------
  // define handleClick function in the Board instead - updates the 'squares' array regarding the board's state
  //JS closure example: inner function (handleClick) can access variables & functions defined in a outer function (like setSquares/squares)
  function handleclick(i) {
    // check if the Square has a value already first to avoid overwriting it (without this, you can click on a square multiple times and it will alternate between X and O in the same square)
    if (squares[i] || calculateWinner(squares)) {
      // the || calculateWinner(squares) checks if a player has won after checking if the user clicked a square that has a value in it already which in both cases would cause a return to stop the execution of the rest of the function
      return;
    }
    const nextSquares = squares.slice(); // creates a copy of the 'squares' array and calls it 'nextSquares' - this is done for immutability, the original array's data is unchanged and a copied array is mutated instead, allowing for different versions of the data to be kept (useful for time-travel features, e.g. history)
    if (xIsNext) {
      // if(true) -> set square as X, else set square at O
      nextSquares[i] = "X"; // updates the copied array and assigns 'X' to the first(i) index - hardcoded to the upper-left square only because of the [0] so change to [i] and pass in 'i' as a function parameter
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares); //replaced setSquares and setXIsNext with a call to the onPlay function
    // ------------------------------------------------
    // setSquares(nextSquares); // call 'setSquares' to say the state has changed and the BOARD and SQUARE components re-render
    // setXIsNext(!xIsNext); //to alternate the state variable 'xIsNext' between true and false, representing turns - ! for not since variable initialised to true
    // ------------------------------------------------
  }
  // assign output of calculateWinner function to 'winner' variable
  const winner = calculateWinner(squares);
  let status; // declare status variable to display info to players
  // conditional to check if 'winner' has a value of 'X', 'O' or null
  if (winner) {
    // update status to below if winner='X' or 'O'
    status = "Winner: " + winner;
  } else {
    // update status to below if winner=null
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    // components can only return a single JSX element
    // to return multiple JSX elements, they need to be wrapped in Fragments: <> and </>
    // create rows with <div>'s, set className to the 'board-row' attribute defined in the styles.css file
    // Must assign the prop a 'value' when the child component is called, e.g: <Square value="1" /> ---> removed when useState is applied instead
    // NOTE:
    // onSquareClick={handleclick(0)} - infinite loop as the function is called too early and keeps rerendering the board
    // vs.
    // onSquareClick={() => handleclick(0)} - waits for the user to click the square and then calls the function so no infinite loop
    // STATUS div to display value stored in the variable, needs a {} as it is a JS variable the data is extracted from
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  // possible "win" scenarios: vertically(3 options), horizontally(3 options), diagonally(2 options)
  const lines = [
    //a,b, c
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    // gets the values of the squares at each of the 'lines' array locations and sets them as a,b,c respectively
    const [a, b, c] = lines[i];
    // check if a= X or O then see if b and c are equal to a to make sure there is 3 of the same in a row
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
