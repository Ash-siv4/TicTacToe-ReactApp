import Square from "./UI_components/Square";

// declare a function called 'Square()', later renamed to 'Board()'
export default function Board() {
  return (
    // components can only return a single JSX element
    // to return multiple JSX elements, they need to be wrapped in Fragments: <> and </>
    // create rows with <div>'s, set className to the 'board-row' attribute defined in the styles.css file
    // Must assign the prop a 'value' when the child component is called
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
