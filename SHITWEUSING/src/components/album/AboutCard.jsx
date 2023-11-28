import React from "react";

const AboutCard = ({ name, description }) => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body" style={{ fontSize: "1.4rem" }}>
        <h5 className="card-title" style={{ fontSize: "1.1em" }}>
          About {name}
        </h5>
        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
        <p className="card-text">{description}</p>
        <a href="#" className="card-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
