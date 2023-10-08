import React, { useEffect, useState } from "react";
import style from "./searchForm.module.css";
import { useAppContext } from "../../context/AppContext";

const SearchForm = ({ setIsLoading, setFeaturedRepositories }) => {
  const [search, setSearch] = useState("");
  const { setRepos } = useAppContext()

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const input = form.get("search");
    setSearch(input);
    setFeaturedRepositories(false);
  };

  useEffect(() => {
    if (search.length > 0) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/repositories?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data.items), setIsLoading(false); 
        });
    } else if (search.length === 0) {
      setFeaturedRepositories(true)
      setIsLoading(false);
      setRepos([]);
    }
  }, [search]);

  return (
    <form action="" onSubmit={handleSearch} className={style.form}>
      <input
        type="text"
        placeholder="Search users or repositories"
        name="search"
      />
      <button type="submit" onSubmit={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
