import React from "react";

const AlbumCredits = ({ label, artwork }) => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-header fw-semibold" style={{ fontSize: "1.4rem" }}>
        Album Credits
      </div>
      <div className="card-body" style={{ fontSize: "1.4rem" }}>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Label</th>
              <td>{label}</td>
            </tr>
            <tr>
              <th scope="row">Artwork</th>
              <td>{artwork}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlbumCredits;
