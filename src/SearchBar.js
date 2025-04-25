import React, { useState, useEffect } from "react";
import { debounce } from "lodash"; // Install lodash for debouncing

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  // Debounce function to avoid frequent state updates on every keystroke
  const debouncedSearch = debounce((value) => {
    setSearchQuery(value);
  }, 500); // Debounced by 500ms delay

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value); // Call debounced search
  };

  // Update inputValue whenever the searchQuery prop changes
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Symptoms, Doctors, Specialities, Clinics"
        value={inputValue}
        onChange={handleSearchChange}
        aria-label="Search for doctors, specialties, or symptoms"
      />
    </div>
  );
};

export default SearchBar;

/**/