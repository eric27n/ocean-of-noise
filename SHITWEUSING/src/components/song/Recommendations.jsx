import SquareCard from "../SquareCard";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  const getArtists = (track) => {
    return track.artists.map((artist) => artist.name).join(", ");
  };

  useEffect(() => {
    // Make an API request to your backend using Axios
    axios
      .get("http://localhost:5000/api/kexp") // Use the correct endpoint URL
      .then((response) => {
        // Assuming the response data is an array of JSON strings
        const parsedRecommendations = response.data.data.map((recommendation) =>
          JSON.parse(recommendation)
        );
        console.log(parsedRecommendations);
        setRecommendations(parsedRecommendations);
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-4 mb-3 ms-1">
          <h2 className="fw-semibold">
            Based on your Spotify history you may like...
          </h2>
        </div>
        <div className="row mx-2 row-cols-4">
          {recommendations.map((track, index) => (
            <SquareCard
              key={index}
              image={track.album.images[0].url} // Update with the actual image URL
              name={`${getArtists(track)} - "${track.name}"`} // Update with the actual track name
              margin="m-2"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;

// import SquareCard from "../SquareCard";

// const Recommendations = () => {
//   return (
//     <>
//       <div className="container-lg">
//         <div className="row mt-4 mb-3 ms-1">
//           <h2 className="fw-semibold">You may also like...</h2>
//         </div>
//         <div className="row row-cols-lg-4 row-cols-sm-2 d-flex justify-content-center">
//           <div className="col-3 d-flex justify-content-center">
//             <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" />
//           </div>
//           <div className="col-3 d-flex justify-content-center">
//             <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" />
//           </div>
//           <div className="col-3 d-flex justify-content-center">
//             <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" />
//           </div>
//           <div className="col-3 d-flex justify-content-center">
//             <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Recommendations;
