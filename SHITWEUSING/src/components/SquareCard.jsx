// function SquareCard({ image, name, margin }) {
//   return (
//     <div className={`card text-bg-dark ${margin}`} style={{ width: "18rem" }}>
//       <img
//         src={image}
//         className="card-img-top mt-3"
//         alt={name}
//         style={{ aspectRatio: "1 / 1" }}
//       />
//       <div className="card-body text-center">
//         <p className="card-text fw-bold" style={{ fontSize: "1.25rem" }}>
//           {name}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SquareCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function SquareCard({ image, name, margin, songId }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/song/${songId}`); // Navigates to the song detail page
  };

  return (
    <div className={`card text-bg-dark ${margin}`} style={{ width: "18rem" }} onClick={handleClick}>
      <img
        src={image}
        className="card-img-top mt-3"
        alt={name}
        style={{ aspectRatio: "1 / 1" }}
      />
      <div className="card-body text-center">
        <p className="card-text fw-bold" style={{ fontSize: "1.25rem" }}>
          {name}
        </p>
      </div>
    </div>
  );
}

export default SquareCard;