import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null });
  const isLoggedIn = user.id !== null;
  const login = () => setUser({ id: 1 });
  const logout = () => setUser({ id: null });

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
