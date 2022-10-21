import React, { useRef, useState } from "react";

import _ from "underscore";

import SelectionList from "./SelectionList/SelectionList";

function BoardController(props) {
  const board = useRef(null);
  const [items, setItems] = useState([]);

  function addItemToBoard(item) {
    let counter = 0;
    return function () {
      setItems([...items, { ...item, key: counter++ }]);
      console.log(counter);
    };
  }

  return (
    <div className="board">
      <SelectionList addItem={addItemToBoard} />
      <div className="board-worker" ref={board}>
        {_.map(items, (item, index) => {
          return (
            <div
              className="board-worker__item"
              style={{
                width: parseInt(item.sizeX),
                height: parseInt(item.sizeY),
              }}
              key={`${item.name}${index}`}
            >
              {item.image}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BoardController;
