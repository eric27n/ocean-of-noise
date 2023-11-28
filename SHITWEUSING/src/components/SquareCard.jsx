// import React from "react";
// import Card from "react-bootstrap/Card";

function SquareCard({ image, name }) {
  return (
    <div className="card text-bg-dark" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
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
