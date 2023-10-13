import React from "react";
import style from "./UserProfileSkeleton.module.css";

const UserProfileSkeleton = ({ repo }) => {
  return (
    <div className={style.container}>
      <header className={style.userInfoContainer}>
        <div className={style.image}></div>
        <div className={style.userInfo}>
          <div className={style.principalInfo}>
            <div className={style.realName}></div>
            <div className={style.loginName}></div>
            <div className={style.bio}></div>
            <div className={style.location}></div>
          </div>
          <div>
            <div className={style.followersWord}></div>
            <div className={style.followersNumber}></div>
          </div>
        </div>
      </header>

      <section className={style.repoSelectedContainer}>
        <div className={style.repoInfoContainer}>
          <div className={style.repoInfo}>
            <div className={style.repoName}></div>
            <div className={style.repoBio}></div>
          </div>
          <div className={style.repoStarsContainer}>
            <div className={style.starsWord}></div>
            <div className={style.starsNumber}></div>
          </div>
        </div>
        <div className={style.anotherInfoContainer}>
          <div className={style.icons}>
            <div className={style.icon}></div>
            <div className={style.icon}></div>
          </div>
          <div className={style.topic}></div>
        </div>
      </section>

      <footer className={style.featuredRepositoriesContainer}>
        <div className={style.subtitle}></div>
        <div className={style.featuredReposContainer}>
          <div className={style.featuredRepoContainer}>
            <div className={style.featuredRepoInfo}>
              <div className={style.creatorNameRepo}></div>
              <div className={style.titleRepo}></div>
              <div className={style.bioRepo}></div>
            </div>
            <div className={style.anotherInfoRepo}>
              <div className={style.repoStars}></div>
              <div className={style.repoLink}></div>
            </div>
          </div>
          <div className={style.featuredRepoContainer}>
            <div className={style.featuredRepoInfo}>
              <div className={style.creatorNameRepo}></div>
              <div className={style.titleRepo}></div>
              <div className={style.bioRepo}></div>
            </div>
            <div className={style.anotherInfoRepo}>
              <div className={style.repoStars}></div>
              <div className={style.repoLink}></div>
            </div>
          </div>
          <div className={style.featuredRepoContainer}>
            <div className={style.featuredRepoInfo}>
              <div className={style.creatorNameRepo}></div>
              <div className={style.titleRepo}></div>
              <div className={style.bioRepo}></div>
            </div>
            <div className={style.anotherInfoRepo}>
              <div className={style.repoStars}></div>
              <div className={style.repoLink}></div>
            </div>
          </div>
          <div className={style.featuredRepoContainer}>
            <div className={style.featuredRepoInfo}>
              <div className={style.creatorNameRepo}></div>
              <div className={style.titleRepo}></div>
              <div className={style.bioRepo}></div>
            </div>
            <div className={style.anotherInfoRepo}>
              <div className={style.repoStars}></div>
              <div className={style.repoLink}></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfileSkeleton;
