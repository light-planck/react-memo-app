import { useContext } from "react";
import { UserContext } from "../components/UserProvider";

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext === null)
    throw new Error("useUser must be used wrapped a UserProvider.");

  const { isLoggedIn, login, logout } = userContext;
  return { isLoggedIn, login, logout };
};
