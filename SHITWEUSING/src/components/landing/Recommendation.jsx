import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendation = ({ accessToken }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        // Predefined list of genres
        const seedGenres = ["pop", "k-pop", "orchestral soundtrack"];

        // Fetch one song recommendation for each genre
        const genreRecommendationsPromises = seedGenres.map(async (genre) => {
          const response = await axios.get(
            "https://api.spotify.com/v1/recommendations",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              params: {
                seed_genres: genre,
                limit: 1, // Get only one song per genre
              },
            }
          );

          return response.data.tracks[0]; // Get the first track from the recommendations
        });

        // Wait for all genre recommendations to resolve
        const allGenreRecommendations = await Promise.all(
          genreRecommendationsPromises
        );

        // Set the state with the genre recommendations
        setRecommendations(allGenreRecommendations);
      } catch (error) {
        console.error("Error fetching Spotify recommendations:", error);
        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);
        }
      }
    };

    // Call getRecommendations when accessToken is available
    if (accessToken) {
      getRecommendations();
    }
  }, [accessToken]);

  return (
    <div>
      <h2 className="f1">Recs</h2>
      <ul>
        {recommendations.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
