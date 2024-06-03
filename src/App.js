import Square from "./UI_components/Square";
// declare a function called 'Square()', later renamed to 'Board()'
export default function Board() {
  return (
    // components can only return a single JSX element
    // to return multiple JSX elements, they need to be wrapped in Fragments: <> and </>
    // create rows with <div>'s, set className to the 'board-row' attribute defined in the styles.css file
    // Must assign the prop a 'value' when the child component is called, e.g: <Square value="1" /> ---> removed when useState is applied instead
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
