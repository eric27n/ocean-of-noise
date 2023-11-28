const SongHeader = ({
  imageSrc,
  albumName,
  songName,
  artistName,
  releaseDate,
}) => {
  return (
    <div className="container-fluid bg-dark text-white p-5">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-end">
          <img
            src={imageSrc}
            alt="Album Cover"
            style={{ maxWidth: "500px", width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center">
          <h5 style={{ fontSize: "1.5em" }}>Track on {albumName}</h5>
          <h2 style={{ fontSize: "3.5em" }}>{songName}</h2>
          <h4 style={{ fontSize: "2.4em" }}>{artistName}</h4>
          <p style={{ fontSize: "1.5em" }}>Released {releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SongHeader;
