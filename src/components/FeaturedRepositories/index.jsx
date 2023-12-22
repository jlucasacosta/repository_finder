import React, { useEffect, useState } from "react";
import FeatureRepo from "./FeatureRepo";
import style from "./featuredRepositories.module.css";

const FeaturedRepositories = () => {
  const [featuredRepositories, setFeaturedRepositorie] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/");
    const res = await data.json();
    setFeaturedRepositorie(res.featuredRepos)
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={style.featuredRepositories} key={'Featured repositories'}>
      {featuredRepositories.map((featuredRepo) => (
        <FeatureRepo
          creatorName={featuredRepo.creatorName}
          repositoryDescription={featuredRepo.repositoryDescription}
          repositoryStars={featuredRepo.repositoryStars}
          repositoryTitle={featuredRepo.repositoryTitle}
          repositoryUrl={featuredRepo.repositoryUrl}
          key={featuredRepo.repositoryTitle}
        />
      ))}
    </div>
  );
};

export default FeaturedRepositories;
