import React, { useUser } from "../hooks/useUser";

export const AuthButton = () => {
  const { isLoggedIn, login, logout } = useUser();

  return (
    <div className="auth-button-container">
      {isLoggedIn ? (
        <button className="auth-button" onClick={logout}>
          ログアウト
        </button>
      ) : (
        <button className="auth-button" onClick={login}>
          ログイン
        </button>
      )}
    </div>
  );
};
