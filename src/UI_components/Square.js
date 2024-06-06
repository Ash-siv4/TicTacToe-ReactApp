//CHILD COMPONENTS AUTOMATICALLY RE-RENDER WHEN THE PARENT DOES
import { useState } from "react";
// function - JS keyword: defines a function
// Square - function name
// reuseable component to avoid duplication of code (moved here from App.js)
// export - JS keyword: allows access to the function outside of this file
// default - JS keyword: lets other files know that this is the main function in this file
// {value} - props: property called 'value' which is passed to the child (Square) component from its parent (Board) component ---> late replaced with USESTATE
// PUT {value} AS A PARAMATER TO RECEIVE THE PROP 'value' FROM THE BOARD COMPONENT
// passed down onSquareClick as a prop so it can be used in the child component and the Board can also connect it to a function
export default function Square({ value, onSquareClick }) {
  // useState - special React function for components to be able to "remember" changes
  //   value - stores the value (starts off as "null")
  // setValue - function used to change the value
  // ---------------------------------------------------
  // const [value, setValue] = useState(null); // no longer necessary after LIFTING STATE to the parent component
  // ---------------------------------------------------
  // created a function which when called, prints "clicked!" to the console (ctrl+shift+j)
  // ---------------------------------------------------
  // function handleClick() {
  //   // console.log("clicked!");
  //   // Displays "X" on the browser when button is clicked
  //   setValue("X");
  // }
  // ---------------------------------------------------
  // return - JS keyword: what value will be returned to the caller of the function
  // <button> - JSX element (JS code + HTML tags)
  // className="square" - button property (prop) for CSS styling
  // X - text displayed in the button -> changed to 'value' (props) so must be in {} brackets as it needs to escape into JSX to get the value, not to print a string saying value
  // onClick is used to call any declared function when the button element is clicked
  // *REMOVED onClick={handleClick} FROM BUTTON HTML, replaced the handleClick function with onSquareClick - state is private to a component so can't track the 'squares' from 'Board' here. Need to pass down a function from parent to child so that both can track anything within the function.*
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
