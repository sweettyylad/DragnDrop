import Help from "../Body/Template/Help/Help";
import Settings from "../Body/Template/Settings/Settings";
import Library from "../Body/Template/Library/Library";
import Board from "../Body/Template/Board/Board";

import * as Icon from "react-feather";

export const navItems = [
  {
    menu_title: (
      <>
        <Icon.BookOpen />
        <span>Библиотека компонентов</span>
      </>
    ),
    title: "Библиотека компонентов",
    link: "/lib",
    el: <Library />,
    childs: [],
  },
  {
    menu_title: (
      <>
        <Icon.Grid />
        <span>Доска</span>
      </>
    ),
    title: "Доска",
    link: "/board",
    el: <Board />,
    childs: [],
  },
  {
    menu_title: (
      <>
        <Icon.Settings />
        <span>Настройки</span>
      </>
    ),
    title: "Настройки",
    link: "/settings",
    el: <Settings />,
    childs: [],
  },
  {
    menu_title: (
      <>
        <Icon.HelpCircle />
        <span>Помощь</span>
      </>
    ),
    title: "Помощь",
    link: "/help",
    el: <Help />,
    childs: [],
  },
];
