import React, { useState, useEffect } from 'react';

const FilterPanel = ({ setConsultationMode, setSpecialties, setSortBy, consultationMode, specialties, sortBy }) => {
  const handleConsultationChange = (e) => {
    setConsultationMode(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    const { value, checked } = e.target;
    setSpecialties((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleClearFilters = () => {
    setSpecialties([]);
    setConsultationMode('all');
    setSortBy('fees');
  };

  useEffect(() => {
    // Sync the initial filter states to reflect if any of the filters are selected or changed
    setConsultationMode(consultationMode);
    setSpecialties(specialties);
    setSortBy(sortBy);
  }, [consultationMode, specialties, sortBy, setConsultationMode, setSpecialties, setSortBy]);

  return (
    <div className="filter-panel">
      <h4>Filters</h4>

      <label>Consultation Mode</label>
      <select value={consultationMode} onChange={handleConsultationChange}>
        <option value="all">All</option>
        <option value="video">Video Consultation</option>
        <option value="in-clinic">In-clinic Consultation</option>
      </select>

      <label>Specialties</label>
      <div>
        <input
          type="checkbox"
          value="Dentist"
          checked={specialties.includes("Dentist")}
          onChange={handleSpecialtyChange}
        />{" "}
        Dentist
        <input
          type="checkbox"
          value="Neurologist"
          checked={specialties.includes("Neurologist")}
          onChange={handleSpecialtyChange}
        />{" "}
        Neurologist
        <input
          type="checkbox"
          value="Gynaecologist"
          checked={specialties.includes("Gynaecologist")}
          onChange={handleSpecialtyChange}
        />{" "}
        Gynaecologist
      </div>

      <label>Sort By</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="fees">Fees (Low to High)</option>
        <option value="experience">Experience (Most Experience First)</option>
      </select>

      <button className="clear-button" onClick={handleClearFilters}>
        Clear All
      </button>
    </div>
  );
};

export default FilterPanel;

/**/