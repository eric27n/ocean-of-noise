import SongHeader from "../components/song/SongHeader";
import Recommendations from "../components/song/Recommendations";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const CLIENT_ID = "503844f932bf48a98b244d1a202d63f7";
const CLIENT_SECRET = "ab3b3ba3dfac470b8419d7c94f0fe98d";

const Song = () => {
  const { songId } = useParams();
  const [songData, setSongData] = useState(null);
  const [accessToken, setAccessToken] = useState(""); // Add state for access token

  // Function to fetch access token
  const fetchAccessToken = async () => {
    const authParameters = {
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

    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authParameters
    );
    const data = await response.json();
    setAccessToken(data.access_token);
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      axios
        .get(`https://api.spotify.com/v1/tracks/${songId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setSongData(response.data);
        })
        .catch((error) => console.error("Error fetching song data:", error));
    }
  }, [songId, accessToken]);

  if (!songData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <SongHeader
        imageSrc={songData.album.images[0].url}
        songName={songData.name}
        trackNumber={songData.track_number}
        albumName={songData.album.name}
        artistName={songData.artists.map((artist) => artist.name).join(", ")}
        releaseDate={songData.album.release_date}
      />
      <Recommendations />
    </>
  );
};

export default Song;
