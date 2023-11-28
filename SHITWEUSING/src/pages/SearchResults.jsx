import React from "react";
import Results from "../components/searchResults/Results";

const SearchResults = () => {
  const mockResults = Array(20).fill({
    image: "src/assets/album_blond.jpg",
    name: "Frank Ocean",
  });
  return (
    <>
      <Results input="Pink+White" results={mockResults} />
    </>
  );
};

export default SearchResults;
