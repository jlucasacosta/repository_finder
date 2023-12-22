import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import style from "./repo.module.css";

const Repo = () => {
  const { setRepoUrl, repos, setRepos, starredRepos } =
    useAppContext();
  const [isStarred, setIsStarred] = useState({});

  const handleStarRepo = async (repo) => {
    try {
      const response = await fetch(`http://localhost:4000/starred/${repo.id}`, {
        method: "POST",
      });

      if (response.ok) {
        const updatedStarredRepos = await response.json();
        setIsStarred((prev) => ({ ...prev, [repo.id]: true }));
      } else {
        console.error("Error al marcar el repositorio como favorito");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/starred`);
      const data = await response.json();
      const starredMap = {};
      data.repositorios.forEach((repo) => {
        starredMap[repo.id] = true;
      });
      setIsStarred(starredMap);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isStarred]);

  return (
    <div className={style.reposContainer}>
      {repos.map((repo) => (
        <div key={repo.id} className={style.repoContainer}>
          <div className={style.repoContent}>
            <div className={style.repoInfoContainer}>
              <img
                src={repo.avatar_url}
                alt={`Avatar of ${repo.login}`}
                className={style.userImage}
              />
              <div className={style.repoInfo}>
                <span>{repo.login}</span>
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
                handleStarRepo(repo);
              }}
            >
              {starredRepos.some((r) => r.id === repo.id) ? (
                <FaStar className={style.buttonIcon} />
              ) : (
                <FaRegStar className={style.buttonIcon} />
              )}
            </button>
            <Link
              to={`/profile?name=${repo.login}`}
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
