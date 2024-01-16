import React, { useUser } from "../hooks/useUser";

export const AuthButton = () => {
  const { isLoggedIn, login, logout } = useUser();

  if (isLoggedIn) {
    return <button onClick={logout}>ログアウト</button>;
  }
  return <button onClick={login}>ログイン</button>;
};
