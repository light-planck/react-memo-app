import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const isLoggedIn = userId !== null;

  return (
    <UserContext.Provider value={{ isLoggedIn, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext === null)
    throw new Error("useUser must be used wrapped a UserProvider.");

  const { isLoggedIn, setUserId } = userContext;
  return { isLoggedIn, setUserId };
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
