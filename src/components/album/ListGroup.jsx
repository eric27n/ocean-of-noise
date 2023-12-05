import { useState } from "react";

// interface Props {
//   // input passed to a component, similar to function args, immutable, cause a re-render
//   items: string[];
//   heading: string;
//   // (item: string) => void
//   onSelectItem: (item: string) => void;
// }

function ListGroup({ items, heading, onSelectItem }) {
  // Hook: a function that allows you to tap into built-in features in React
  const [selectedIndex, setSelectedIndex] = useState(-1); // data managed by a component, similar to local variables, mutable, cause a re-render
  // arr[0]; // variable (selectedIndex)
  // arr[1]; //updater function

  // Event handler
  const handleClick = (event) => console.log(event);
  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active fw-semibold"
                : "list-group-item fw-semibold"
            }
            style={{ fontSize: "1.5em" }}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
