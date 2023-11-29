// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <div className="App">
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src="/vite.svg" className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://reactjs.org" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </div>
// //   )
// // }

// // export default App

// import Album from "./pages/Album";
// import Song from "./pages/Song";
// import Landing from "./pages/Landing";
// //import Recommendations from "./landing/Recommendations";
// import SearchResults from "./pages/SearchResults";
// import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';

// const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
// const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

// function App() {
//   const [searchInput, setSearchInput] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
//     }

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token))
//   }, []);

//   async function search() {
//     console.log("Search for:", searchInput);
//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     try {
//       // Fetch artist ID
//       var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
//         .then(response => response.json())
//         .then(data=>console.log(data))
//         // .then(data => data.artists.items[0].id);

//       console.log("Artist ID is " + artistID);

//       // Fetch albums
//       var returnedAlbums  = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=20', searchParameters)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setAlbums(data.items);
//         });
//     } catch (error) {
//       console.error("Error during search:", error);
//     }
//   }
//   console.log(albums);

//   return (
//     <div>
//       <Container>
//         <InputGroup className="mb-3" size="lg">
//           <FormControl
//             placeholder="Search For Artist"
//             type="input"
//             onKeyPress={event => {
//               if (event.key == "Enter") {
//                 console.log("Pressed enter")
//               }
//             }}
//             onChange={event => setSearchInput(event.target.value)}
//             />
//             <Button onClick={() => {console.log("Clicked Search")}}>
//               Search
//             </Button>
//         </InputGroup>
//       </Container>

//       <Container>
//         <Row className="mx-2 row row-cols-4">
//           {/* <Card>
//                 <Card.Body>
//                   <Card.Title>Album</Card.Title>
//                 </Card.Body>
//           </Card> */}
//           {albums.map((album, i) => {
//             console.log(album);
//             return (
//               <Card key={i}>
//                 <Card.Body>
//                   <Card.Title>Album</Card.Title>
//                 </Card.Body>
//               </Card>
//             )
//           })}
//         </Row>
//       </Container>
//       {/* <Landing /> */}
//       {/* <Album/> */}
//       {/* <Song/> */}
//       {/* <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" /> */}
//       {/* <Song /> */}
//       {/* <SearchResults /> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Landing from "./pages/Landing";
// import Login from "./components/landing/Login";

// const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
// const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

// function App() {
//   const [searchInput, setSearchInput] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     var authParameters = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
//     }

//     fetch('https://accounts.spotify.com/api/token', authParameters)
//       .then(result => result.json())
//       .then(data => setAccessToken(data.access_token))
//   }, []);

//   async function search() {
//     console.log("Search for:", searchInput);
//     var searchParameters = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + accessToken
//       }
//     };

//     try {
//       // Fetch artist ID
//       var response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters);
//       var data = await response.json();
//       console.log(data);

//       var artistID = data.artists.items[0].id;
//       console.log("Artist ID is " + artistID);

//       // Fetch albums
//       var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=20', searchParameters)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setAlbums(data.items);
//         });
//     } catch (error) {
//       console.error("Error during search:", error);
//     }
//   }

//   return (
//     <div>
//       {!accessToken ? (
//       <Login />
//       ) : (
//       <Landing />
//       )}
//     </div>
//   );
// }

// export default App;

// import Album from "./pages/Album";
// import Song from "./pages/Song";
// import Landing from "./pages/Landing";
// import Recommendations from "./components/song/Recommendations";
// import SearchResults from "./pages/SearchResults";

// function App() {
//   return (
//     <div>
//       <Landing />
//       {/* <Album/> */}
//       {/* <Song/> */}
//       {/* <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" /> */}
//       {/* <Song /> */}
//       {/* <SearchResults /> */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Login from "./components/landing/Login";
import Search from "./components/landing/Search";

const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch access token only if logged in
      var authParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "grant_type=client_credentials&client_id=" +
          CLIENT_ID +
          "&client_secret=" +
          CLIENT_SECRET,
      };

      fetch("https://accounts.spotify.com/api/token", authParameters)
        .then((result) => result.json())
        .then((data) => setAccessToken(data.access_token))
        .catch((error) => console.error("Error fetching access token:", error));
    }
  }, [isLoggedIn]);

  // async function search() {
  //   console.log("Search for:", searchInput);
  //   var searchParameters = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + accessToken
  //     }
  //   };

  //   try {
  //     // Fetch artist ID
  //     var response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters);
  //     var data = await response.json();
  //     console.log(data);

  //     var artistID = data.artists.items[0].id;
  //     console.log("Artist ID is " + artistID);

  //     // Fetch albums
  //     var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=20', searchParameters)
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //         setAlbums(data.items);
  //       });
  //   } catch (error) {
  //     console.error("Error during search:", error);
  //   }
  // }

  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: "linear-gradient(to bottom, #6696F2, #FFFFFF)",
      }}
    >
      {!isLoggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Search />}
    </div>
  );
}

export default App;
