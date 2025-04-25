import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Symptoms, Doctors, Specialities, Clinics"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
