import React, { useState } from "react";
import Login from "./Login";
import Category from "./Category";
//import './style.css';
// import Scroll from "./Scroll";
// import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(true);

  //   const filteredPersons = details.filter((person) => {
  //     return (
  //       person.name.toLowerCase().includes(searchField.toLowerCase()) ||
  //       person.email.toLowerCase().includes(searchField.toLowerCase())
  //     );
  //   });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  // function searchList() {
  // 	if (searchShow) {
  //   	return (
  //   		<Scroll>
  //   			<SearchList filteredPersons={filteredPersons} />
  //   		</Scroll>
  //   	);
  //   }
  //   return null;
  // }

  return (
    <section className="garamond">
      <Login />
      <div className="navy georgia ma0 grow">
        <h2 className="f1">Ocean of Noise</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Enter a song, artist, or album!"
          onChange={handleChange}
        />
        <Category />
      </div>
      {/* {searchList()} */}
    </section>
  );
}

export default Search;
