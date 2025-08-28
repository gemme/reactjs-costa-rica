import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <UserContext value={{ username, setUsername, token, setToken }}>
      {children}
    </UserContext>
  );
};

// como accedemos al estado global
// como compartimos ese estado
