import { useEffect, useState } from "react";

export const useGetUserById = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/users/" + id, {
        method: "GET",
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    getUserById,
    user,
  };
};

/*

    BaseService
    UserService
        load
        getUserById
        loadUser
*/
