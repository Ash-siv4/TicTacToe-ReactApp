import { useState } from "react";
import Square from "./Square";
// declare a function called 'Square()', later renamed to 'Board()'
export default function Board() {
  // create a state variable called "squares" which is updated using "setSquares"
  // state variable is declared as an array
  // the array is set to a length of "9" and each element is initially set to "null"
  //entries into the array correspond to the values in each square of the board, e.g:['O',null,'X','X','X','O','O',null,null]
  const [squares, setSquares] = useState(Array(9).fill(null));
  // boolean state to track which player goes next, 'X' or 'O'
  const [xIsNext, setXIsNext] = useState(true);
  // define handleClick function in the Board instead - updates the 'squares' array regarding the board's state
  //JS closure example: inner function (handleClick) can access variables & functions defined in a outer function (like setSquares/squares)
  function handleclick(i) {
    // check if the Square has a value already first to avoid overwriting it (without this, you can click on a square multiple times and it will alternate between X and O in the same square)
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); // creates a copy of the 'squares' array and calls it 'nextSquares' - this is done for immutability, the original array's data is unchanged and a copied array is mutated instead, allowing for different versions of the data to be kept (useful for time-travel features, e.g. history)
    if (xIsNext) {
      // if(true) -> set square as X, else set square at O
      nextSquares[i] = "X"; // updates the copied array and assigns 'X' to the first(i) index - hardcoded to the upper-left square only because of the [0] so change to [i] and pass in 'i' as a function parameter
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); // call 'setSquares' to say the state has changed and the BOARD and SQUARE components re-render
    setXIsNext(!xIsNext); //to alternate the state variable 'xIsNext' between true and false, representing turns - ! for not since variable initialised to true
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
    <>
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
