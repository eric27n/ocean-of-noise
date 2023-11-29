import React, { useEffect, useState } from "react";
import oceanGif from "../../assets/retroOcean.gif";

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
    // <div className="container">
    //   <div className="row d-flex flex-column">
    //     <div className="col d-flex justify-content-center">
    //       <h1>Ocean of Noise</h1>
    //     </div>
    //     <div className="col d-flex justify-content-center">
    //       <h4>Sign in to search for a song!</h4>
    //     </div>
    //     <div className="col d-flex justify-content-center">
    //       <button
    //         className="pa2 br3 grow b--none bg-lightest-blue ma3 button-external"
    //         onClick={handleLoginClick}
    //       >
    //         Spotify Sign In
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      // style={{
      //   backgroundImage: `url(${oceanGif})`, // Set the GIF as background
      //   backgroundSize: "cover", // Adjust to your needs
      //   backgroundPosition: "center center", // Adjust to your needs
      //   animation: "animateBackground 10s linear infinite", // Animation
      // }}
      style={{
        backgroundImage: "linear-gradient(to bottom, #6696F2, #FFFFFF)", // Inline style for gradient
      }}
    >
      <div className="text-center">
        <h1 className="fw-bold mb-4 display-3">Ocean of Noise</h1>
        <h2 className="mb-4">Sign in to search for a song!</h2>
        <button
          className="btn btn-dark btn-lg pa2 br3 grow b--none bg-lightest-blue ma3 button-external"
          onClick={handleLoginClick}
        >
          Spotify Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
