import { useState } from "react";

export const useAuthentication = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const signIn = async (username, password) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
      });
      const data = await response.json();
      setToken("");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    token,
    error,
    loading,
    signIn,
    signOut,
  };
};
