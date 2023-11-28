import axios from 'axios';
import Recommendation from './Recommendation';

import React, { useEffect, useState } from 'react';

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function Login() {
  const client_id = '503844f932bf48a98b244d1a202d63f7';
  const redirect_uri = 'http://localhost:3000';
  const auth_endpoint = 'https://accounts.spotify.com/authorize';
  const response_type = 'token'; // Assuming you want the implicit grant flow
  const scope = 'user-read-private user-read-email user-top-read'; // Replace 'your_scopes' with the necessary scopes for your application
  const state = generateRandomString(16);

  const authUrl = `${auth_endpoint}?` +
    `response_type=${response_type}&` +
    `client_id=${client_id}&` +
    `scope=${scope}&` +
    `redirect_uri=${redirect_uri}&` +
    `state=${state}`;

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const newToken = hash.substring(1).split('&').find(param => param.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', newToken);
      setToken(newToken);
    } else {
      // Check for token in localStorage on component mount
      const storedToken = window.localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const handleLoginClick = () => {
    // Redirect the user to the Spotify authorization URL
    window.location.href = authUrl;
  };

  const handleLogoutClick = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }
  
  return (
    <div>
    {!token ? (
      <button className="pa2 br3 grow b--none bg-lightest-blue ma3 button-external" onClick={handleLoginClick}>
        Login to Spotify
      </button>
    ) : (
      <div>
        <button className="pa2 br3 grow b--none bg-lightest-blue ma3 button-external" onClick={handleLogoutClick}>
          Logout
        </button>
        <Recommendation accessToken={token} />
      </div>
    )}
  </div>
  );
}

export default Login;

// import React, { useEffect, useState } from 'react';
// import Recommendation from './Recommendation';

// function generateRandomString(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters.charAt(randomIndex);
//   }
//   return result;
// }


// function Login() {
//   const client_id = '503844f932bf48a98b244d1a202d63f7';
//   const redirect_uri = 'http://localhost:3000';
//   const auth_endpoint = 'https://accounts.spotify.com/authorize';
//   const response_type = 'token';
//   const scope = 'user-read-private user-read-email';
//   const state = generateRandomString(16);

//   const authUrl = `${auth_endpoint}?` +
//     `response_type=${response_type}&` +
//     `client_id=${client_id}&` +
//     `scope=${scope}&` +
//     `redirect_uri=${redirect_uri}&` +
//     `state=${state}`;

//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const hash = window.location.hash;

//     if (hash) {
//       const newToken = hash.substring(1).split('&').find(param => param.startsWith('access_token')).split('=')[1];
//       window.location.hash = '';
//       window.localStorage.setItem('token', newToken);
//       setToken(newToken);
//     } else {
//       const storedToken = window.localStorage.getItem('token');
//       if (storedToken) {
//         setToken(storedToken);
//       }
//     }
//   }, []);

//   const handleLoginClick = () => {
//     window.location.href = authUrl;
//   };

//   return (
//     <div>
//       { !token ? (
//         <button className="pa2 br3 grow b--none bg-lightest-blue ma3 button-external" onClick={handleLoginClick}>
//           Login to Spotify
//         </button>
//       ) : (
//         <Recommendation />
//       )}
//     </div>
//   );  
// }

// export default Login;

