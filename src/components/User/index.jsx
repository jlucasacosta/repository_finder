import React, { useState, useEffect } from "react";
import Style from "./user.module.css";
import { FaPen, FaCheck } from "react-icons/fa6";

const User = () => {
  const [username, setUsername] = useState("Usuario");
  const [changeName, setChangeName] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000");
      const data = await response.json();
      if (data.userProfile && data.userProfile.username) {
        setUsername(data.userProfile.username);
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = () => {
    setChangeName(true);
    setNewUsername(username);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch("http://localhost:4000/updateProfile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newUsername }),
      });

      if (response.status === 204) {
        setUsername(newUsername);
        setChangeName(false);
      } else {
        const data = await response.json();
        if (data.message === "Nombre actualizado correctamente") {
          setUsername(newUsername);
          setChangeName(false);
        }
      }
    } catch (error) {
      console.error("Error al actualizar el nombre de usuario:", error);
    }
  };

  return (
    <div className={Style.container}>
      {changeName ? (
        <div className={Style.container}>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <button onClick={handleSaveClick}>
            <FaCheck />
          </button>
        </div>
      ) : (
        <div className={Style.container}>
          <p>{`${username}`}</p>
          <button onClick={handleEditClick}>
            <FaPen />
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
