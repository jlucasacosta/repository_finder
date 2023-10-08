import React from "react";
import { FaLink } from "react-icons/fa6";
import style from './repoSelected.module.css'

const RepoSelected = ({repo}) => {
  return (
    <div>
      {repo && (
        <div className={style.repoSelected}>
          <div className={style.repoInfo}>
            <div className={style.repoAbout}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </div>
            <div className={style.repoStars}>
              <span>Stars</span>
              <h2>{repo.stargazers_count}</h2>
            </div>
          </div>
          <div className={style.anotherRepoInfo}>
            <span className={style.repoLink}>
              <a href={repo.html_url}>
                <FaLink />
              </a>
            </span>
            <div className={style.repoTopicContainer}>
              {repo.topics.map((topic) => (
                <span key={topic} className={style.repoTopic}>{topic}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoSelected;
