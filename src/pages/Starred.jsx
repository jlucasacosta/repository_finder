import React from "react";
import { useAppContext } from "../context/AppContext";
import Navigation from "../components/Navigation";
import styleStarred from "../styles/starred.module.css";
import StarredRepositories from "../components/StarredRepositories";

const Starred = () => {
  const {
    starredRepos,
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
        {starredRepos.length === 0 ? (
          <span>No starred Repositories :{"("}</span>
        ) : (
          <StarredRepositories />
        )}
      </section>
    </main>
  );
};

export default Starred;
