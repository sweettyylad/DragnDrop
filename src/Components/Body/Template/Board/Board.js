import React, { useEffect, useState } from "react";

import BoardController from "./Controller/BoardController";

import "./Board.scss";

function Board(props) {
  return (
    <div className="body-content__inner">
      <BoardController />
    </div>
  );
}

export default Board;
