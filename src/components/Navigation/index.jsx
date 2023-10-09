import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import style from "./nav.module.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className={style.nav}>
      <div>
        {window.location.href === "/profile" ? (
          <button onClick={() => navigate(-1)} className={style.goBack}>
            <FaArrowLeftLong />
          </button>
        ) : null}
      </div>
      <div className={style.menu}>
        <Link to={"/"}>Home</Link>
        <Link to={"/starred"}>Starred</Link>
      </div>
    </nav>
  );
};

export default Navigation;
