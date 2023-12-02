// import React, { useState, useEffect } from "react";
// import Landing from "./pages/Landing";
// import Login from "./components/landing/Login";
// import Search from "./components/landing/Search";

// const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
// const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

// function App() {
//   const [searchInput, setSearchInput] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   const [albums, setAlbums] = useState([]);
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     if (isLoggedIn) {
//       // Fetch access token only if logged in
//       var authParameters = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body:
//           "grant_type=client_credentials&client_id=" +
//           CLIENT_ID +
//           "&client_secret=" +
//           CLIENT_SECRET,
//       };

//       fetch("https://accounts.spotify.com/api/token", authParameters)
//         .then((result) => result.json())
//         .then((data) => setAccessToken(data.access_token))
//         .catch((error) => console.error("Error fetching access token:", error));
//     }
//   }, [isLoggedIn]);

//   return (
//     <div
//       className="container-fluid vh-100"
//       style={{
//         backgroundImage: "linear-gradient(to bottom, #6696F2, #FFFFFF)",
//       }}
//     >
//       {!isLoggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Search />}
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/landing/Login";
import Search from "./components/landing/Search";
import Song from "./pages/Song";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <div
        className="container-fluid vh-100 p-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, #6696F2, #FFFFFF)",
        }}
      >
        {!isLoggedIn ? (
          <Login onLogin={() => setLoggedIn(true)} />
        ) : (
          <Routes>
            <Route path="/" element={<Navigate replace to="/search" />} />
            <Route path="/search" element={<Search />} />
            <Route path="/song/:songId" element={<Song />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
