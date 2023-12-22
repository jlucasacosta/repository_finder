import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import User from "../User";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <User />
      <div className={style.links}>
        <Link
          onClick={() => {
            featuredRepositories(true);
          }}
          to={"/"}
        >
          Home
        </Link>
        <Link to={"/starred"}>Starred</Link>
      </div>
    </nav>
  );
};

export default Navigation;
