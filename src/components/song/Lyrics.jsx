function Lyrics({ text }) {
  // Split the lyrics text by newline characters
  const lines = text.split("\n");

  return (
    <div>
      {lines.map((line, index) => (
        // Render each line, and use a <br> tag for line breaks
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Lyrics;
