import React from "react";
import { Routes, Route } from "react-router-dom";

import _ from "underscore";

import { navItems } from "../Config/navigation.config";
import Template from "./Template/Template";

import "./Body.scss";

function objToRoute(obj) {
  return (
    <Route key={obj.link} path={obj.link} element={<Template el={obj} />} />
  );
}

function Body(props) {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        {_.map(navItems, (e) => objToRoute(e))}
      </Routes>
    </div>
  );
}

export default Body;
