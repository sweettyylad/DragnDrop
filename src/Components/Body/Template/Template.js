import React from "react";

function Template(props) {
  return (
    <div className="body-content">
      <h1>{props.el.title}</h1>
      {props.el.el}
    </div>
  );
}

export default Template;
