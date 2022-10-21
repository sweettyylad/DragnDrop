import React from "react";

import _ from "underscore";

import { lib } from "../../../../../Config/library.config";

function SelectionItem(obj, addItem) {
  let addItemGener = addItem(obj);
  function test() {
    addItemGener();
  }
  return (
    <div className="board-selection-item" key={obj.name} onClick={test}>
      <div className="board-selection-item__name">{obj.title}</div>
      <div className="board-selection-item__image">{obj.image}</div>
    </div>
  );
}

function SelectionList(props) {
  return (
    <div className="board-selection">
      {_.map(lib, (item) => SelectionItem(item, props.addItem))}
    </div>
  );
}

export default SelectionList;
