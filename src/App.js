// declare a function called 'Square()'
// export - JS keyword: allows access to the function outside of this file
// default - JS keyword: lets other files know that this is the main function in this file
export default function Square() {
  // return - JS keyword: what value will be returned to the caller of the function
  //  <button> - JSX element (JS code + HTML tags)
  //  className="square" - button property (prop) for CSS styling
  // X - text displayed in the button
  return <button className="square">X</button>;
}
