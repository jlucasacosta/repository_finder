import React, { useState } from "react";
import style from "./repo.module.css";
import { useAppContext } from "../../../context/AppContext";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Repo = ({ isStarred, setIsStarred }) => {
  const {setRepoUrl, repos } = useAppContext()

  return (
    <div className={style.reposContainer}>
      {repos.map((repo) => (
        <div key={repo.name} className={style.repoContainer}>
          <div className={style.repoContent}>
            <div className={style.repoInfoContainer}>
              <img
                src={repo.owner.avatar_url}
                alt={`Avatar of ${repo.owner.login}`}
                className={style.userImage}
              />
              <div className={style.repoInfo}>
                <span>{repo.owner.login}</span>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
              </div>
            </div>
            <div className={style.repoStars}>
              <span>stars</span>
              <h2>{repo.stargazers_count}</h2>
            </div>
          </div>
          <div className={style.buttons}>
            <button
              className={`${style.button} ${style.buttonStar}`}
              onClick={() => {
                if (isStarred === false) {
                  setIsStarred(true);
                } else if (isStarred === true) {
                  setIsStarred(false);
                }
              }}
            >
              {isStarred === true ? (
                <FaRegStar className={style.buttonIcon} />
              ) : (
                <FaStar className={style.buttonIcon} />
              )}
            </button>
            <Link
              to={`/profile?name=${repo.owner.login}`}
              className={`${style.button} ${style.buttonLink}`}
              onClick={() => {
                setRepoUrl(repo.url)
              }}
            >
              <FaArrowRightLong className={style.buttonIcon} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repo;
