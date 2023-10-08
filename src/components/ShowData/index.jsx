import React from "react";
import Repo from "./Repo";
import style from "./showData.module.css";
import { useAppContext } from "../../context/AppContext";

const ShowData = ({ isLoading, isStarred, setIsStarred }) => {
  const { repos } = useAppContext();

  return (
    <div className={style.showDataContainer}>
      {repos !== undefined &&
        (isLoading ? (
          <div className={style.skeletonContainer}>
            <div className={style.skeleton}></div>
            <div className={style.skeleton}></div>
            <div className={style.skeleton}></div>
            <div className={style.skeleton}></div>
            <div className={style.skeleton}></div>
          </div>
        ) : (
          <Repo isStarred={isStarred} setIsStarred={setIsStarred} />
        ))}
    </div>
  );
};

export default ShowData;
