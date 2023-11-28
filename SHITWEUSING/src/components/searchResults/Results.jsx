import SquareCard from "../SquareCard";

function Results({ input, results }) {
  return (
    <div className="container">
      <div className="row mt-4 mb-3 ms-1">
        {/* need to grab searchField */}
        <h2 className="fw-semibold">Search Results for "{input}"</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {results.slice(0, 20).map((result, index) => (
          <div className="col" key={index}>
            <SquareCard image={result.image} name={result.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
