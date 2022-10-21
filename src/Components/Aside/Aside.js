import React from "react";

import Menu from "./Menu/Menu";
import Main from "./Main/Main";

import "./Aside.scss";

function Aside(props) {
  return (
    <div className="aside">
      <Main />
      <Menu />
    </div>
  );
}

export default Aside;
