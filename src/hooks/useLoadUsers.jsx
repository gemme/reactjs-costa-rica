import { useState, useEffect } from "react";

// use
//useState
//useEffect
//useLoadUsers

export const useLoadUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    error,
    loadUsers,
  };
};
