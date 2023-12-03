// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate(`/search?query=${encodeURIComponent(searchInput)}`);
//   };

//   return (
//     <nav className="navbar px-5 py-3">
//       <a
//         className="navbar-brand mb-0 h1"
//         href="#"
//         style={{ fontSize: "1.5em" }}
//       >
//         Ocean of Noise
//       </a>
//       {/* <input
//         type="text"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//         onKeyPress={(event) => {
//           if (event.key === "Enter") {
//             handleSearch();
//           }
//         }}
//       />
//       <button onClick={handleSearch}>Search</button> */}

//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search for a song!"
//           aria-label="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") {
//               handleSearch();
//             }
//           }}
//         />
//         <button
//           className="btn"
//           type="submit"
//           onClick={handleSearch}
//           style={{
//             backgroundColor: "#000",
//             color: "#fff",
//             borderColor: "#000",
//           }}
//         >
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     navigate(`/search?query=${encodeURIComponent(searchInput)}`);
//   };

//   return (
//     <nav className="navbar px-5 py-3">
//       <a
//         className="navbar-brand mb-0 h1"
//         href="#"
//         style={{ fontSize: "1.5em" }}
//       >
//         Ocean of Noise
//       </a>

//       <form className="d-flex" role="search" onSubmit={handleSearch}>
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search for a song!"
//           aria-label="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") {
//               handleSearch(event);
//             }
//           }}
//         />
//         <button
//           className="btn"
//           type="submit"
//           style={{
//             backgroundColor: "#000",
//             color: "#fff",
//             borderColor: "#000",
//           }}
//         >
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    if (location.pathname === "/search") {
      // If on the search page, invoke the onSearch callback
      onSearch && onSearch(searchInput);
    } else {
      // Otherwise, navigate to the search page with the query
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <nav className="navbar px-5 py-3">
      <a
        className="navbar-brand mb-0 h1"
        href="#"
        style={{ fontSize: "1.5em" }}
      >
        Ocean of Noise
      </a>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for a song!"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderColor: "#000",
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
