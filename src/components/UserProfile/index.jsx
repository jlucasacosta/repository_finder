import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import style from "./userProfile.module.css";
import UserInfo from "./UserInfo";
import RepoSelected from "./RepoSelected";
import FeaturedRepositoriesUser from "./FeaturedRepositoriesUser";
import UserProfileSkeleton from "./UserProfileSkeleton";

const UserProfile = () => {
  const { repoUrl, isLoading, setIsLoading } = useAppContext();
  const [repo, setRepo] = useState();
  const [userUrl, setUserUrl] = useState();
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchDataSequentially = async () => {
      try {
        /* Fetch del repositorio seleccionado */

        const repoRes = await fetch(repoUrl);
        const repoData = await repoRes.json();
        setRepo(repoData);
        setUserUrl(repoData.owner.url);

        /* Fetch del usuario */

        const userRes = await fetch(userUrl);
        const userData = await userRes.json();
        setUser(userData);

        /* Fetch de todos los repositorios del usuario */

        const reposRes = await fetch(`${userUrl}/repos`);
        const reposData = await reposRes.json();
        const orderedRepos = reposData.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(orderedRepos.slice(0, 4));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataSequentially();
  }, [repoUrl, userUrl]);

  return (
    <main>
      {isLoading ? (
        <UserProfileSkeleton repo={repo} />
      ) : (
        <div className={style.profileContainer}>
          <header className={style.userInfoContainer}>
            <UserInfo user={user} />
          </header>
          <section className={style.repoSelectedContainer}>
            <RepoSelected repo={repo} />
          </section>
          <footer className={style.featuredReposContainer}>
            <h2 className={style.featuredReposTitle}>Featured Repositories</h2>
            <FeaturedRepositoriesUser repos={repos} />
          </footer>
        </div>
      )}
    </main>
  );
};

export default UserProfile;
