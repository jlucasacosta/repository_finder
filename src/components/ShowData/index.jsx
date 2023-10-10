import React from "react";
import Repo from "./Repo";
import style from "./showData.module.css";
import { useAppContext } from "../../context/AppContext";

const ShowData = ({ isLoading }) => {
  const { repos, foundData } = useAppContext();

  return (
    <div className={style.showDataContainer}>
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
            <span>No repositories found</span>
          </div>
        ) : (
          <Repo />
        )
      ) : null}
    </div>
  );
};

export default ShowData;
