import "../index.css";
import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <i class="ri-search-eye-line"></i>
        <input
          type="text"
          name="searchIn"
          id="searchIn"
          placeholder="Search for Advice or Id Eg: 23,89"
        />
      </div>
    );
  }
}

export default Search;
