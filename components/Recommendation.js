// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Recommendation = ({ accessToken }) => {
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     const getRecommendations = async () => {
//       try {
//         // Predefined list of genres
//         const seedGenres = ['pop', 'classic korean pop', 'korean pop', 'k-pop', 'k-pop girl group', 'k-pop boy group', 'dance pop',
//          'urban contemporary', 'anime', 'anime score', 'japanese classical', 'japanese soundtrack', 'orchestral soundtrack', 
//          'korean r&b', 'canadian rock', 'pop rock', 'school ensemble', 'korean instrumental', 'rap'];
    
//         // Make the API request using seedGenres
//         const response = await axios.get('https://api.spotify.com/v1/recommendations', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             seed_genres: seedGenres.join(','), // Pass the genres as a comma-separated string
//           },
//         });
    
//         // Extract and set recommended tracks
//         setRecommendations(response.data.tracks);
//       } catch (error) {
//         console.error('Error fetching Spotify recommendations:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };
    

//     // Call getRecommendations when accessToken is available
//     if (accessToken) {
//       getRecommendations();
//     }
//   }, [accessToken]);

//   return (
//     <div>
//       <h2 className="f1">Recs</h2>
//       <ul>
//         {recommendations.map((track) => (
//           <li key={track.id}>{track.name} by {track.artists[0].name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Recommendation = ({ accessToken }) => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [userGenres, setUserGenres] = useState([]);

//   useEffect(() => {
//     const getTopArtists = async () => {
//       try {
//         // Make the API request to get the user's top artists
//         const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         // Extract genres from the user's top artists
//         const genres = response.data.items.flatMap(artist => artist.genres);
        
//         // Deduplicate genres and set the state
//         setUserGenres([...new Set(genres)]);
//       } catch (error) {
//         console.error('Error fetching top artists:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     const getRecommendations = async () => {
//       try {
//         // Make the API request using userGenres
//         const response = await axios.get('https://api.spotify.com/v1/recommendations', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             seed_genres: userGenres.join(','), // Pass the genres as a comma-separated string
//           },
//         });

//         // Extract and set recommended tracks
//         setRecommendations(response.data.tracks);
//       } catch (error) {
//         console.error('Error fetching Spotify recommendations:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     // Call getTopArtists when accessToken is available
//     if (accessToken) {
//       getTopArtists();
//     }
//   }, [accessToken, userGenres]);

//   return (
//     <div>
//       <h2 className="f1">Recs</h2>
//       <p>User's Recommended Genres: {userGenres.join(', ')}</p>
//       <ul>
//         {recommendations.map((track) => (
//           <li key={track.id}>{track.name} by {track.artists[0].name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Recommendation = ({ accessToken }) => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [userGenres, setUserGenres] = useState([]);

//   useEffect(() => {
//     const getTopArtists = async () => {
//       try {
//         // Make the API request to get the user's top artists
//         const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         // Extract genres from the user's top artists
//         const genres = response.data.items.flatMap(artist => artist.genres);
        
//         // Deduplicate genres and set the state
//         setUserGenres([...new Set(genres)]);
//       } catch (error) {
//         console.error('Error fetching top artists:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     const getRecommendations = async () => {
//       try {
//         // Make the API request using userGenres
//         const response = await axios.get('https://api.spotify.com/v1/recommendations', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             seed_genres: userGenres.join(',').split(',') // Pass the genres as a comma-separated string
//           },
//         });

//         // Extract and set recommended tracks
//         setRecommendations(response.data.tracks);
//       } catch (error) {
//         console.error('Error fetching Spotify recommendations:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     // Call getTopArtists and getRecommendations when accessToken is available
//     if (accessToken) {
//       getTopArtists();
//       getRecommendations();
//     }
//   }, [accessToken, userGenres]);

//   return (
//     <div>
//       <h2 className="f1">Recs</h2>
//       <p>User's Recommended Genres: {userGenres.join(', ')}</p>
//       <ul>
//         {recommendations.map((track) => (
//           <li key={track.id}>{track.name} by {track.artists[0].name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Recommendation = ({ accessToken }) => {
//   const [userGenres, setUserGenres] = useState([]);
//   const [genreRecommendations, setGenreRecommendations] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make the API request to get the user's top artists
//         const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`
//           }
//         });

//         // Extract genres from the user's top artists
//         const genres = response.data.items.flatMap(artist => artist.genres);

//         // Deduplicate genres and set the state
//         setUserGenres([...new Set(genres)]);
//       } catch (error) {
//         console.error('Error fetching top artists:', error);
//       }
//     };

//     fetchData();
//   }, [accessToken]);

//   useEffect(() => {
//     const getRecommendations = async () => {
//       console.log("In getRecommendations");
//       try {
//         // Fetch one song recommendation for each genre
//         console.log(userGenres);
//         const genreRecommendationsPromises = userGenres.map(async (genre) => {
//           const response = await axios.get('https://api.spotify.com/v1/recommendations', {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//             params: {
//               seed_genres: genre,
//               limit: 1, // Get only one song per genre
//             },
//           });

//           return {
//             genre: genre,
//             track: response.data.tracks[0], // Get the first track from the recommendations
//           };
//         });

//         // Wait for all genre recommendations to resolve
//         const allGenreRecommendations = await Promise.all(genreRecommendationsPromises);

//         // Create an object with genre as key and track as value
//         const genreRecommendationsObject = {};
//         allGenreRecommendations.forEach(({ genre, track }) => {
//           genreRecommendationsObject[genre] = track;
//         });

//         // Set the state with the genre recommendations
//         setGenreRecommendations(genreRecommendationsObject);
//       } catch (error) {
//         console.error('Error fetching Spotify recommendations:', error);
//       }
//     };

//     // Call getRecommendations when accessToken and userGenres are available
//     if (accessToken && userGenres.length > 0) {
//       getRecommendations();
//     }
//   }, [accessToken, userGenres]);

//   return (
//     <div>
//       <h2 className="f1">User's Recommended Genres: {userGenres.join(', ')}</h2>
//       <ul>
//         {Object.entries(genreRecommendations).map(([genre, track]) => (
//           <li key={genre}>{track.name} by (Genre: {genre})</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Recommendation = ({ accessToken }) => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [userGenres, setUserGenres] = useState([]);

//   useEffect(() => {
//     const getTopArtists = async () => {
//       try {
//         // Make the API request to get the user's top artists
//         const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         // Extract genres from the user's top artists
//         const genres = response.data.items.flatMap(artist => artist.genres);
        
//         // Deduplicate genres and set the state
//         setUserGenres([...new Set(genres)]);
//       } catch (error) {
//         console.error('Error fetching top artists:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     const getRecommendations = async () => {
//       try {
//         // Make the API request using userGenres
//         const response = await axios.get('https://api.spotify.com/v1/recommendations', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//           params: {
//             seed_genres: userGenres.join(','), // Pass the genres as a comma-separated string
//           },
//         });

//         // Extract and set recommended tracks
//         setRecommendations(response.data.tracks);
//       } catch (error) {
//         console.error('Error fetching Spotify recommendations:', error);
//         if (error.response) {
//           console.error('Response status:', error.response.status);
//           console.error('Response data:', error.response.data);
//         }
//       }
//     };

//     // Call getTopArtists and getRecommendations when accessToken is available
//     if (accessToken) {
//       getTopArtists();
//       getRecommendations();
//     }
//   }, [accessToken, userGenres]);

//   return (
//     <div>
//       <h2 className="f1">Recs</h2>
//       <p>User's Recommended Genres: {userGenres.join(', ')}</p>
//       <ul>
//         {recommendations.map((track) => (
//           <li key={track.id}>{track.name} by {track.artists[0].name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendation = ({ accessToken }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        // Predefined list of genres
        const seedGenres = ['pop', 'k-pop', 'orchestral soundtrack'];
    
        // Fetch one song recommendation for each genre
        const genreRecommendationsPromises = seedGenres.map(async (genre) => {
          const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              seed_genres: genre,
              limit: 1, // Get only one song per genre
            },
          });

          return response.data.tracks[0]; // Get the first track from the recommendations
        });

        // Wait for all genre recommendations to resolve
        const allGenreRecommendations = await Promise.all(genreRecommendationsPromises);

        // Set the state with the genre recommendations
        setRecommendations(allGenreRecommendations);
      } catch (error) {
        console.error('Error fetching Spotify recommendations:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
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
          <li key={track.id}>{track.name} by {track.artists[0].name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;


