// function Header() {
//   return (
//     <>
//       {/* <div class="container-fluid">
//         <img src="src\assets\album_blond.jpg" class="img-thumbnail"></img>;
//         <div class="container-fluid">
//           <h3>Content Type</h3>
//           <h1>Name</h1>;<h2>More Info</h2>
//           <h3>Release Date</h3>
//         </div>
//       </div> */}
//       <div className="card mb-3">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src="src\assets\album_blond.jpg"
//               className="img-fluid rounded-start"
//               alt="..."
//             ></img>
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h3 class="card-subtitle">Content Type</h3>
//               <h1 className="card-title">Name</h1>
//               <h2 class="card-subtitle">More Info</h2>
//               <h3 class="card-subtitle">Release Date</h3>
//               {/* <p className="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React from "react";

// function AlbumHeader({
//   imageSrc,
//   contentType,
//   albumName,
//   artistName,
//   releaseDate,
// }) {
//   return (
//     <div className="container-fluid px-0" style={{ backgroundColor: "black" }}>
//       <div className="row no-gutters">
//         <div className="col-md-4 px-0">
//           <img
//             src={imageSrc}
//             alt="Album Cover"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//         <div className="col-md-8 d-flex">
//           <div className="text-white p-3 w-100 d-flex flex-column justify-content-center">
//             <h2>{contentType}</h2>
//             <h1>{albumName}</h1>
//             <h3>{artistName}</h3>
//             <p>{releaseDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AlbumHeader;

// const AlbumHeader = ({
//   imageSrc,
//   contentType,
//   albumName,
//   artistName,
//   releaseDate,
// }) => {
//   return (
//     <div className="container-fluid bg-black text-white p-3">
//       <div className="row">
//         <div className="col-md-4">
//           <img
//             src={imageSrc}
//             alt="Album Art"
//             className="img-fluid"
//             style={{
//               maxWidth: "500px",
//               maxHeight: "500px",
//               width: "auto",
//               height: "auto",
//             }}
//           />
//         </div>
//         <div className="col-md-8">
//           <div className="text-white p-3 w-100 d-flex flex-column justify-content-center">
//             <h4>{contentType}</h4>
//             <h1>{albumName}</h1>
//             <h3>{artistName}</h3>
//             <p>Released {releaseDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlbumHeader;

const AlbumHeader = ({
  imageSrc,
  contentType,
  albumName,
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
          <h5 style={{ fontSize: "1.5em" }}>{contentType}</h5>
          <h2 style={{ fontSize: "3.5em" }}>{albumName}</h2>
          <h4 style={{ fontSize: "2.4em" }}>{artistName}</h4>
          <p style={{ fontSize: "1.5em" }}>Released {releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumHeader;
