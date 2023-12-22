import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import style from "./../ShowData/Repo/repo.module.css";

const StarredRepositories = ({ starredRepos }) => {
  const [starRepoUrl, setStarRepoUrl] = useState([]);

  const fetchData = async () => {
    try {
      const promises = starredRepos.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error en la solicitud para ${url}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`La respuesta no es JSON para ${url}`);
        }
        return response.json();
      });
      const results = await Promise.all(promises);
      setStarRepoUrl(results);
    } catch (error) {
      console.error("Error en el fetch", error);
    }
  };

  const deleteStarredRepo = async (repoId) => {
    try {
      const response = await fetch(`http://localhost:4000/starred/${repoId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el repositorio starred");
      }

      fetchData();
    } catch (error) {
      console.error("Error al eliminar el repositorio starred", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.reposContainer}>
      {starRepoUrl.map((repo) => (
        <div key={repo.id} className={style.repoContainer}>
          <div className={style.repoContent}>
            <div className={style.repoInfoContainer}>
              <img
                src={repo.owner?.avatar_url || ""}
                alt={`Avatar of ${repo.owner?.login || ""}`}
                className={style.userImage}
              />
              <div className={style.repoInfo}>
                <span>{repo.owner?.login || ""}</span>
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
            <button className={`${style.button} ${style.buttonStar}`} onClick={deleteStarredRepo}>
              {starRepoUrl.some((r) => r.id === repo.id) ? (
                <FaStar className={style.buttonIcon} />
              ) : (
                <FaRegStar className={style.buttonIcon} />
              )}
            </button>
            <Link
              to={`/profile?name=${repo.owner?.login || ""}`}
              className={`${style.button} ${style.buttonLink}`}
            >
              <FaArrowRightLong className={style.buttonIcon} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarredRepositories;
