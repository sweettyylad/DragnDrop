import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div className="aside-main">
      <div className="aside-main__link">
        <Link to="/">
          <h2>HSYST</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
