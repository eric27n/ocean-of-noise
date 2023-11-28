import React, { useEffect, useState } from "react";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function Login({ onLogin }) {
  const client_id = "503844f932bf48a98b244d1a202d63f7";
  const redirect_uri = "http://localhost:5173";
  const auth_endpoint = "https://accounts.spotify.com/authorize";
  const response_type = "token";
  const scope = "user-read-private user-read-email user-top-read";
  const state = generateRandomString(16);

  const authUrl =
    `${auth_endpoint}?` +
    `response_type=${response_type}&` +
    `client_id=${client_id}&` +
    `scope=${scope}&` +
    `redirect_uri=${redirect_uri}&` +
    `state=${state}`;

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const newToken = hash
        .substring(1)
        .split("&")
        .find((param) => param.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", newToken);
      setToken(newToken);

      // Call onLogin when the token is set
      if (onLogin) {
        onLogin();
      }
    } else {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, [onLogin]);

  const handleLoginClick = () => {
    window.location.href = authUrl;
  };

  return (
    <div>
      <button
        className="pa2 br3 grow b--none bg-lightest-blue ma3 button-external"
        onClick={handleLoginClick}
      >
        Login to Spotify
      </button>
    </div>
  );
}

export default Login;
