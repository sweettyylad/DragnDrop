import React from "react";
import { Link, useLocation } from "react-router-dom";

import _ from "underscore";

import { navItems } from "../../Config/navigation.config";

function objToLink(obj, active = false) {
  return (
    <Link
      key={obj.link}
      className={
        "aside-menu__item" + (active ? " aside-menu__item_selected" : "")
      }
      to={obj.link}
    >
      {obj.menu_title}
    </Link>
  );
}

function Menu(props) {
  let location = useLocation();

  return (
    <div className="aside-menu">
      {_.map(navItems, (e) => {
        return objToLink(e, location.pathname === e.link);
      })}
    </div>
  );
}

export default Menu;
