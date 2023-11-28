import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Category = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey, event) => {
    // Set the selected item when an option is selected
    setSelectedItem(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedItem || "Input"}{" "}
        {/* Display selected item or 'Input' if none selected */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Song">Song</Dropdown.Item>
        <Dropdown.Item eventKey="Artist">Artist</Dropdown.Item>
        <Dropdown.Item eventKey="Album">Album</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Category;
