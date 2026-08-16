import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("User")) || [],
  );
  const [loggedIn, setLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("loggedIn")) || [],
  );

  return (
    <Auth.Provider value={{ users, setUsers, loggedIn, setLoggedIn }}>
      {children}
    </Auth.Provider>
  );
};
