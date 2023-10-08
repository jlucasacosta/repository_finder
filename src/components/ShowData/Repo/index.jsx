import React, { useState } from "react";
import style from "./repo.module.css";
import { useAppContext } from "../../../context/AppContext";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Repo = () => {
  const {
    setRepoUrl,
    repos,
    setStarredRepo,
    starredRepo,
    setStarredRepos,
    starredRepos,
    handleStarredRepo
  } = useAppContext();

  

  return (
    <div className={style.reposContainer}>
      {repos.map((repo) => (
        <div key={repo.id} className={style.repoContainer}>
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
                handleStarredRepo(repo);
              }}
            >
              {starredRepos.some((r) => r.id === repo.id) ? (
                <FaStar className={style.buttonIcon} />
              ) : (
                <FaRegStar className={style.buttonIcon} />
              )}
            </button>
            <Link
              to={`/profile?name=${repo.owner.login}`}
              className={`${style.button} ${style.buttonLink}`}
              onClick={() => {
                setRepoUrl(repo.url);
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
