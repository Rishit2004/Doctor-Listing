import React from "react";

const FilterPanel = ({ consultationMode, setConsultationMode, specialties, setSpecialties, sortBy, setSortBy }) => {
  const handleConsultationModeChange = (event) => {
    setConsultationMode(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    const specialty = event.target.value;
    setSpecialties(prevSpecialties => 
      prevSpecialties.includes(specialty) ? prevSpecialties.filter(s => s !== specialty) : [...prevSpecialties, specialty]
    );
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <h3>Filters</h3>
      <div className="filter-group">
        <label>Consultation Mode</label>
        <select value={consultationMode} onChange={handleConsultationModeChange}>
          <option value="video">Video Consultation</option>
          <option value="inclinic">In-clinic Consultation</option>
          <option value="all">All</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Specialties</label>
        <div>
          <input type="checkbox" value="Dentist" onChange={handleSpecialtyChange} /> Dentist
          <input type="checkbox" value="Neurologist" onChange={handleSpecialtyChange} /> Neurologist
          <input type="checkbox" value="Gynaecologist" onChange={handleSpecialtyChange} /> Gynaecologist
          {/* Add more specialties as needed */}
        </div>
      </div>

      <div className="filter-group">
        <label>Sort By</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="fees">Fees (Low to High)</option>
          <option value="experience">Experience (Most Experience First)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
