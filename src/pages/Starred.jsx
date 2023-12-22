import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import styleStarred from "../styles/starred.module.css";
import StarredRepositories from "../components/StarredRepositories";

const Starred = () => {
  const [starredRepos, setStarredRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/starred/`);

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        setStarredRepos(
          data.repositorios.map((repo) => {
            return repo.html_url;
          })
        );
      } catch (error) {
        console.error("Error en el fetch", error);
        setStarredRepos([]);
      }
    };

    fetchData();
  }, []);


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
          <StarredRepositories starredRepos={starredRepos} />
        )}
      </section>
    </main>
  );
};

export default Starred;
