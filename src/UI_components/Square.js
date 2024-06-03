// reuseable component to avoid duplication of code (moved here from App.js)
// export - JS keyword: allows access to the function outside of this file
// default - JS keyword: lets other files know that this is the main function in this file
// {value} - props: property called 'value' which is passed to the child (Square) component from its parent (Board) component
export default function Square({ value }) {
  // return - JS keyword: what value will be returned to the caller of the function
  //  <button> - JSX element (JS code + HTML tags)
  //  className="square" - button property (prop) for CSS styling
  // X - text displayed in the button -> changed to 'value' (props) so must be in {} brackets as it needs to escape into JSX to get the value, not to print a string saying value
  return <button className="square">{value}</button>;
}
