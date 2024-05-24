import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ path, name }) {
  return (
    <Link to={path} className="header__menu__item">
      {name}
    </Link>
  );
}
