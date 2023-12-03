// import React, { useState } from "react";
// import Login from "./Login";
// import Category from "./Category";
// //import './style.css';
// // import Scroll from "./Scroll";
// // import SearchList from "./SearchList";

// function Search({ details }) {
//   const [searchField, setSearchField] = useState("");
//   const [searchShow, setSearchShow] = useState(true);

//   //   const filteredPersons = details.filter((person) => {
//   //     return (
//   //       person.name.toLowerCase().includes(searchField.toLowerCase()) ||
//   //       person.email.toLowerCase().includes(searchField.toLowerCase())
//   //     );
//   //   });

//   const handleChange = (e) => {
//     setSearchField(e.target.value);
//     if (e.target.value === "") {
//       setSearchShow(false);
//     } else {
//       setSearchShow(true);
//     }
//   };
//   const handleSearch = () => {
//     // Perform any actions you want with the searchField value
//     console.log("Search button pressed. Search value:", searchField);
//   };

//   // function searchList() {
//   // 	if (searchShow) {
//   //   	return (
//   //   		<Scroll>
//   //   			<SearchList filteredPersons={filteredPersons} />
//   //   		</Scroll>
//   //   	);
//   //   }
//   //   return null;
//   // }

//   return (
//     <section className="garamond">
//       <Login />
//       <div className="navy georgia ma0 grow">
//         <h2 className="f1">Ocean of Noise</h2>
//       </div>
//       <div className="pa2">
//         <input
//           className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
//           type="search"
//           placeholder="Enter a song, artist, or album!"
//           onChange={handleChange}
//         />
//         <button className="pa3 bg-light-blue br3 grow" onClick={handleSearch}>
//           Search
//         </button>
//         <Category />
//       </div>
//     </section>
//   );
// }

// export default Search;

// // import React, { useState } from "react";
// // import Login from "./Login";
// // import Category from "./Category";

// // function Search({ details }) {
// //   const [searchField, setSearchField] = useState("");
// //   const [searchShow, setSearchShow] = useState(true);

// //   const handleChange = (e) => {
// //     setSearchField(e.target.value);
// //     if (e.target.value === "") {
// //       setSearchShow(false);
// //     } else {
// //       setSearchShow(true);
// //     }
// //   };

// //   const handleSearch = () => {
// //     // Perform any actions you want with the searchField value
// //     console.log("Search button pressed. Search value:", searchField);
// //   };

// //   return (
// //     <section className="garamond">
// //       <Login />
// //       <div className="navy georgia ma0 grow">
// //         <h2 className="f1">Ocean of Noise</h2>
// //       </div>
// //       <div className="pa2">
// //         <input
// //           className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
// //           type="search"
// //           placeholder="Enter a song, artist, or album!"
// //           onChange={handleChange}
// //         />
// //         <button className="pa3 bg-light-blue br3 grow" onClick={handleSearch}>
// //           Search
// //         </button>
// //         <Category />
// //       </div>
// //     </section>
// //   );
// // }

// // export default Search;

// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import SquareCard from "../SquareCard";
// import Recommendations from "../song/Recommendations";
// import MyComponent from "../song/MyComponent";

// const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
// const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

// function Search() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const initialQuery = searchParams.get("query") || "";
//   const [searchInput, setSearchInput] = useState("");
//   const [accessToken, setAccessToken] = useState("");
//   // const [albums, setAlbums] = useState([]);
//   const [tracks, setTracks] = useState([]);
//   const [showSong, setShowSong] = useState(false);
//   const [selectedTrack, setSelectedTrack] = useState(null);

//   useEffect(() => {
//     const fetchToken = async () => {
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

//       try {
//         const result = await fetch(
//           "https://accounts.spotify.com/api/token",
//           authParameters
//         );
//         const data = await result.json();
//         setAccessToken(data.access_token);
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//       }
//     };

//     fetchToken();
//   }, []);

//   // useEffect(() => {
//   //   const query = searchParams.get("query");
//   //   if (query !== null && accessToken) {
//   //     setSearchInput(query); // Synchronize state with URL query
//   //     search(query); // Perform search
//   //   }
//   // }, [searchParams, accessToken]);

//   // useEffect(() => {
//   //   const query = searchParams.get("query");
//   //   if (query && accessToken) {
//   //     search(query); // Perform search when query parameters change
//   //   }
//   // }, [searchParams, accessToken]); // React to changes in searchParams and accessToken

//   useEffect(() => {
//     const query = searchParams.get("query");
//     if (query && query !== searchInput && accessToken) {
//       setSearchInput(query); // Update the search input
//       search(query); // Perform the search
//     }
//   }, [searchParams, accessToken]); // React to changes in searchParams and accessToken

//   async function search(query) {
//     console.log("Search for:", query);
//     var searchParameters = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + accessToken,
//       },
//     };

//     try {
//       // Fetch track results
//       var response = await fetch(
//         "https://api.spotify.com/v1/search?q=" + query + "&type=track",
//         searchParameters
//       );
//       var data = await response.json();
//       console.log(data);

//       // Check if there are tracks in the results
//       if (data.tracks && data.tracks.items.length > 0) {
//         setTracks(data.tracks.items);
//       } else {
//         console.log("No tracks found.");
//         setTracks([]); // Clear tracks array if no results
//       }
//     } catch (error) {
//       console.error("Error during search:", error);
//     }
//   }

//   const handleSearchInput = (event) => {
//     setSearchInput(event.target.value);
//   };

//   // const handleSearch = (event) => {
//   //   event.preventDefault();
//   //   setSearchParams({ query: searchInput }); // Update URL query parameter
//   // };

//   // const handleSearch = (event) => {
//   //   event.preventDefault();
//   //   setSearchParams({ query: searchInput }); // Update URL query parameter
//   // };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (searchInput !== searchParams.get("query")) {
//       setSearchParams({ query: searchInput }); // Update URL query parameter only if different
//     } else if (!searchParams.get("query")) {
//       // Perform search directly if there's no query param
//       search(searchInput);
//     }
//   };

//   return (
//     <div>
//       {accessToken ? ( // Check if the user is signed in
//         <div className="container pt-5">
//           <div className="row">
//             <div className="col mx-auto">
//               <InputGroup className="mb-3" size="lg">
//                 <FormControl
//                   style={{ height: "4rem", fontSize: "1.5rem" }}
//                   placeholder="Search For Track"
//                   type="input"
//                   value={searchInput}
//                   onChange={handleSearchInput}
//                   onKeyPress={(event) => {
//                     if (event.key === "Enter") {
//                       console.log("Pressed enter");
//                       // search(); // Trigger search on Enter
//                       handleSearch(event);
//                     }
//                   }}
//                   // onChange={(event) => setSearchInput(event.target.value)}
//                 />
//                 <Button
//                   style={{
//                     backgroundColor: "#000",
//                     color: "#fff",
//                     borderColor: "#000",
//                   }}
//                   onClick={handleSearch}
//                 >
//                   Search
//                 </Button>
//               </InputGroup>
//             </div>
//           </div>

//           <Container>
//             <Row className="mx-2 row row-cols-4">
//               {tracks.map((track, i) => (
//                 <SquareCard
//                   key={i}
//                   image={track.album.images[0].url}
//                   name={track.name}
//                   margin="m-2"
//                   songId={track.id}
//                 />
//               ))}
//             </Row>
//           </Container>
//           <MyComponent />
//           <Recommendations />
//         </div>
//       ) : (
//         <p>Please sign in to access search and cards.</p>
//       )}

//       {showSong && selectedTrack && (
//         <Song
//           imageSrc={selectedTrack.album.images[0].url}
//           songName={selectedTrack.name}
//           albumName={selectedTrack.album.name}
//           artistName={selectedTrack.artists
//             .map((artist) => artist.name)
//             .join(", ")}
//           releaseDate="Jan. 20, 2004" // You might want to get the actual release date from the API
//         />
//       )}
//     </div>
//   );
// }

// export default Search;
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SquareCard from "../SquareCard";
import Recommendations from "../song/Recommendations";
import MyComponent from "../song/MyComponent";
import Navbar from "../Navbar";

const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      var authParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      };

      try {
        const response = await fetch(
          "https://accounts.spotify.com/api/token",
          authParameters
        );
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query && accessToken) {
      performSearch(query);
    }
  }, [searchParams, accessToken]);

  const performSearch = async (query) => {
    console.log("Searching for:", query);
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        searchParameters
      );
      const data = await response.json();
      if (data.tracks && data.tracks.items.length > 0) {
        setTracks(data.tracks.items);
      } else {
        console.log("No tracks found.");
        setTracks([]);
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const handleNavbarSearch = (query) => {
    setSearchParams({ query }); // Update the URL query parameter
    performSearch(query); // Trigger the search
  };

  return (
    <div>
      <Navbar onSearch={handleNavbarSearch} />
      {accessToken ? (
        <div className="container pt-5">
          {/* Display search results */}
          <div className="row mx-2 row row-cols-4">
            {tracks.map((track, i) => (
              <SquareCard
                key={i}
                image={track.album.images[0].url}
                name={track.name}
                margin="m-2"
                songId={track.id}
              />
            ))}
          </div>
          <MyComponent />
          <Recommendations />
        </div>
      ) : (
        <p>Please sign in to access search and cards.</p>
      )}
    </div>
  );
}

export default Search;
