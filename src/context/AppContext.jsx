import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [userUrl, setUserUrl] = useState("");
  const [repos, setRepos] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [starredRepo, setStarredRepo] = useState(false);
  const [foundData, setFoundData] = useState(false);
  const [search, setSearch] = useState("");
  const [featuredRepositories, setFeaturedRepositories] = useState(true);

  useEffect(() => {
    const storedStarredRepos = JSON.parse(
      localStorage.getItem("starredRepos") || "[]"
    );
    setStarredRepos(storedStarredRepos);
  }, []);

  const handleDeleteSearch = () => {
    setSearch('');
  };

  const handleStarredRepo = (repo) => {
    const repoIndex = starredRepos.findIndex((r) => r.id === repo.id);

    if (repoIndex === -1) {
      const newStarredRepos = [...starredRepos, repo];
      setStarredRepos(newStarredRepos);

      localStorage.setItem("starredRepos", JSON.stringify(newStarredRepos));
    } else {
      const newStarredRepos = [...starredRepos];
      newStarredRepos.splice(repoIndex, 1);
      setStarredRepos(newStarredRepos);

      localStorage.setItem("starredRepos", JSON.stringify(newStarredRepos));
    }
  };

  return (
    <AppContext.Provider
      value={{
        userUrl,
        setUserUrl,
        repos,
        setRepos,
        repoUrl,
        setRepoUrl,
        starredRepos,
        setStarredRepos,
        starredRepo,
        setStarredRepo,
        handleStarredRepo,
        foundData,
        setFoundData,
        search,
        setSearch,
        handleDeleteSearch,
        featuredRepositories,
        setFeaturedRepositories
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
