import React, { useState, useEffect } from "react";
import Menu from "./Menu.jsx";
import { fetchData } from "../commons/apis.js";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
}

/**
 * HeaderLogo
 */
export function HeaderLogo() {
  return (
    <div>
      <Link to="/" className="header__logo">
        <img className="header__logo__img" src="./img/logo.png" alt="logo" />
        <h1 className="header__logo__title">Jang Hyunsu</h1>
      </Link>
    </div>
  );
}
/**
 * HeaderMenu
 */
export function HeaderMenu() {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const getFetchData = async () => {
      const url = "/data/menu.json";
      const result = await fetchData(url);
      await setMenuList(result);
    };
    getFetchData();
  }, []);

  return (
    <div>
      <nav>
        <ul className="header__menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Menu path={menu.path} name={menu.name} />
            </li>
          ))}
        </ul>
      </nav>
      <button
        id="menu_toggle"
        className="header__toggle"
        aria-label="navigation menu toggle"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
