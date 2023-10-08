import React from "react";
import { useAppContext } from "../context/AppContext";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import styleStarred from "../styles/starred.module.css";
import style from "./../components/ShowData/Repo/repo.module.css";

const Starred = () => {
  const {
    setRepoUrl,
    repos,
    setStarredRepo,
    starredRepo,
    setStarredRepos,
    starredRepos,
    handleStarredRepo,
  } = useAppContext();

  return (
    <main className={styleStarred.starredContainer}>
      <header>
        <nav className={styleStarred.navigation}>
          <Navigation />
        </nav>
        <h1 className={styleStarred.title}>Starred Repositories</h1>
      </header>
      <section className={styleStarred.starredRepositories}>
        <div className={style.reposContainer}>
          {starredRepos.map((repo) => (
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
      </section>
    </main>
  );
};

export default Starred;
