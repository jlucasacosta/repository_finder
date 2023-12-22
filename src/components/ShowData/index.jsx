import React, {useEffect} from "react";
import Repo from "./Repo";
import style from "./showData.module.css";
import { useAppContext } from "../../context/AppContext";

const ShowData = () => {
  const {
    repos,
    foundData,
    setFoundData,
    search,
    isLoading,
    featuredRepositories,
    historial,
  } = useAppContext();

  useEffect(() => {
    if (featuredRepositories === true) {
      setFoundData(false);
    }
  }, [featuredRepositories, setFoundData]);

  return (
    <div className={style.showDataContainer}>
      {search === undefined ? null : (
        <div>
          {repos !== undefined ? (
            isLoading ? (
              <div className={style.skeletonContainer}>
                <div className={style.skeleton}></div>
                <div className={style.skeleton}></div>
                <div className={style.skeleton}></div>
                <div className={style.skeleton}></div>
                <div className={style.skeleton}></div>
              </div>
            ) : foundData === true ? (
              <div className={style.notFound}>
                <span>Repositories not found</span>
              </div>
            ) : (
              <Repo />
            )
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ShowData;
