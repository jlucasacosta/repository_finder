import React, { useEffect } from "react";
import style from "./searchForm.module.css";
import { useAppContext } from "../../context/AppContext";

const SearchForm = () => {
  const {
    setRepos,
    setFoundData,
    search,
    setSearch,
    setFeaturedRepositories,
    setIsLoading,
  } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const input = form.get("search");
    setSearch(input);
    setFeaturedRepositories(false);
  };

  /* Fetch search form */

  useEffect(() => {
    const fetchData = async () => {
      if (search.length > 0) {
        setIsLoading(true);
        try {
          const response = await fetch(`https://api.github.com/search/repositories?q=${search}`);
          const data = await response.json();
          
          if (!data || data.items.length === 0) {
            setRepos([]);
            setIsLoading(false);
            setFoundData(true);
          } else {
            setRepos(data.items);
            setIsLoading(false);
            setFoundData(false);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      } else if (search.length === 0) {
        setFeaturedRepositories(true);
        setIsLoading(false);
        setRepos([]);
      }
    };
  
    fetchData();
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
