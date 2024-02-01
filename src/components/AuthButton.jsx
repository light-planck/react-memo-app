import React, { useUser } from "../hooks/useUser";

export const AuthButton = () => {
  const { isLoggedIn, setUserId } = useUser();

  const handleLogout = () => {
    setUserId(null);
  };

  const handleLogin = () => {
    setUserId("user1");
  };

  return (
    <div className="auth-button-container">
      {isLoggedIn ? (
        <button className="auth-button" onClick={handleLogout}>
          ログアウト
        </button>
      ) : (
        <button className="auth-button" onClick={handleLogin}>
          ログイン
        </button>
      )}
    </div>
  );
};
