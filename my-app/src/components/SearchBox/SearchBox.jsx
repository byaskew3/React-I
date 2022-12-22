import React from "react";
import './SearchBox.css'

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Pokemon"
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox
