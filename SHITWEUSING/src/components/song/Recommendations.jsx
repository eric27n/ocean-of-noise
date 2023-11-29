import SquareCard from "../SquareCard";

const Recommendations = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4 mb-3 ms-1">
          <h2 className="fw-semibold">
            Based on your Spotify history you may like...
          </h2>
        </div>
        <div className="row mx-2 row-cols-4">
          <SquareCard
            image="src\assets\album_blond.jpg"
            name="Frank Ocean"
            margin="m-2"
          />
          <SquareCard
            image="src\assets\album_blond.jpg"
            name="Frank Ocean"
            margin="m-2"
          />
          <SquareCard
            image="src\assets\album_blond.jpg"
            name="Frank Ocean"
            margin="m-2"
          />
          <SquareCard
            image="src\assets\album_blond.jpg"
            name="Frank Ocean"
            margin="m-2"
          />
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
