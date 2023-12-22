import React, { useEffect, useRef } from "react";
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
    setHistorial,
    historial,
    setShowHistorial,
    showHistorial,
  } = useAppContext();

  const inputRef = useRef(null);

  const showHistorialModal = () => {
    setShowHistorial(true);
  };

  const hideHistorialModal = () => {
    setShowHistorial(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const input = form.get("search");
    setSearch(input);
    setFeaturedRepositories(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        hideHistorialModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  /* Fetch search form */

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:4000/search/${search}`);

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();

        if (!data || !data.repositorios || data.repositorios.length === 0) {
          setRepos([]);
          setFoundData(true);
        } else {
          setRepos(data.repositorios);
          setFoundData(false);
          setHistorial(data.historial);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setRepos([]);
        setFoundData(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (search) {
      fetchData();
    }
  }, [search, setIsLoading, setRepos, setFoundData]);

  return (
    <div>
      <form action="" onSubmit={handleSearch} className={style.form}>
        <input
          type="text"
          placeholder="Search users or repositories"
          name="search"
          onFocus={showHistorialModal}
          ref={inputRef}
        />
        <button type="submit" onSubmit={handleSearch}>
          Search
        </button>
      </form>
      {showHistorial && historial && (
        <div className={style.historial}>
          {historial
            .slice(0, 10)
            .reverse()
            .map((item) => (
              <div key={item.repo} className={style.item}>
                {item.repo}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
