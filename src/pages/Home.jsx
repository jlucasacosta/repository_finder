import React from "react";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import ShowData from "../components/ShowData";
import FeaturedRepositories from "../components/FeaturedRepositories";
import { useAppContext } from "../context/AppContext";
import style from "../styles/home.module.css";
import "../styles/global.css";

const Home = () => {
  const { featuredRepositories } = useAppContext();

  return (
    <main className={style.homeContainer}>

      <section className={style.homeContent}>
        <nav>
          <Navigation />
        </nav>
        <article className={style.form}>
          <div className={style.title}>
            <h1>GitHub repositories finder</h1>
          </div>
          <SearchForm />
        </article>
        <article className={style.reposContainer}>
          <ShowData />
        </article>
      </section>
      <footer>
        {featuredRepositories && (
          <div className={style.homeFeaturedRepositories}>
            <h2 className={style.homeFeaturedRepositoriesTitle}>
              Featured repositories
            </h2>
            <FeaturedRepositories />
          </div>
        )}
      </footer>
    </main>
  );
};

export default Home;
