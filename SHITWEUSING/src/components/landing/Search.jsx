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

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import SquareCard from "../SquareCard";
import Recommendations from "../song/Recommendations";

const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  // const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [showSong, setShowSong] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
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
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    console.log("Search for:", searchInput);
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      // Fetch track results
      var response = await fetch(
        "https://api.spotify.com/v1/search?q=" + searchInput + "&type=track",
        searchParameters
      );
      var data = await response.json();
      console.log(data);

      // Check if there are tracks in the results
      if (data.tracks && data.tracks.items.length > 0) {
        setTracks(data.tracks.items);
      } else {
        console.log("No tracks found.");
        setTracks([]); // Clear tracks array if no results
      }
      // // Fetch artist ID
      // var response = await fetch(
      //   "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      //   searchParameters
      // );
      // var data = await response.json();
      // console.log(data);

      // var artistID = data.artists.items[0].id;
      // console.log("Artist ID is " + artistID);

      // // Fetch albums
      // var returnedAlbums = await fetch(
      //   "https://api.spotify.com/v1/artists/" +
      //     artistID +
      //     "/albums" +
      //     "?include_groups=album&market=US&limit=20",
      //   searchParameters
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     setAlbums(data.items);
      //   });
    } catch (error) {
      console.error("Error during search:", error);
    }
  }

  return (
    <div>
      {accessToken ? ( // Check if the user is signed in
        <div className="container pt-5">
          <div className="row">
            <div className="col mx-auto">
              <InputGroup className="mb-3" size="lg">
                <FormControl
                  style={{ height: "4rem", fontSize: "1.5rem" }}
                  placeholder="Search For Track"
                  type="input"
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      console.log("Pressed enter");
                      search(); // Trigger search on Enter
                    }
                  }}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <Button
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderColor: "#000",
                  }}
                  onClick={() => {
                    console.log("Clicked Search");
                    search();
                  }}
                >
                  Search
                </Button>
              </InputGroup>
            </div>
          </div>

          <Container>
            <Row className="mx-2 row row-cols-4">
              {tracks.map((track, i) => (
                <SquareCard
                  key={i}
                  image={track.album.images[0].url}
                  name={track.name}
                  onClick={() => handleCardClick(track)}
                  to={`/song/${track.id}`}
                  margin="m-2"
                />
              ))}
            </Row>
          </Container>
          <Recommendations />
        </div>
      ) : (
        <p>Please sign in to access search and cards.</p>
      )}

      {showSong && selectedTrack && (
        <Song
          imageSrc={selectedTrack.album.images[0].url}
          songName={selectedTrack.name}
          albumName={selectedTrack.album.name}
          artistName={selectedTrack.artists
            .map((artist) => artist.name)
            .join(", ")}
          releaseDate="Jan. 20, 2004" // You might want to get the actual release date from the API
        />
      )}
      {/* <div className="container pt-5">
        <div className="row">
          <div className="col mx-auto">
            <InputGroup className="mb-3" size="lg">
              <FormControl
                style={{ height: "4rem", fontSize: "1.5rem" }}
                placeholder="Search for a song!"
                type="input"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    console.log("Pressed enter");
                    search(); // Trigger search on Enter
                  }
                }}
                onChange={(event) => setSearchInput(event.target.value)}
              />
              <Button
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderColor: "#000",
                }}
                onClick={() => {
                  console.log("Clicked Search");
                  search();
                }}
              >
                Search
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>

      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            console.log(album);
            return (
              <SquareCard
                key={i}
                image={album.images[0].url}
                name={album.name}
                margin="m-2"
              />
            );
          })}
        </Row>
      </Container> */}
    </div>
  );
}

export default Search;
