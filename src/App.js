// declare a function called 'Square()'
// export - JS keyword: allows access to the function outside of this file
// default - JS keyword: lets other files know that this is the main function in this file
export default function Square() {
  // return - JS keyword: what value will be returned to the caller of the function
  //  <button> - JSX element (JS code + HTML tags)
  //  className="square" - button property (prop) for CSS styling
  // X - text displayed in the button
  return (
    // components can only return a single JSX element
    // to return multiple JSX elements, they need to be wrapped in Fragments: <> and </>
    <>
    <button className="square">1</button>
    <button className="square">2</button>
    <button className="square">3</button>
    <button className="square">4</button>
    <button className="square">5</button>
    <button className="square">6</button>
    <button className="square">7</button>
    <button className="square">8</button>
    <button className="square">9</button>
    </>
);
}
