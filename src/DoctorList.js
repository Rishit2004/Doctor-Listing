import React, { useState, useEffect } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [consultationMode, setConsultationMode] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Fetching doctors data
  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedSpecialties, consultationMode, sortOption]);

  // Fetch doctors data from the API
  const fetchDoctors = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/doctors'); // Replace with actual API endpoint
      const data = await response.json();
      setDoctors(data);
      setFilteredDoctors(data); // Initialize with all doctors
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  // Apply filters to the doctors list
  const applyFilters = () => {
    let filteredList = [...doctors];

    if (selectedSpecialties.length > 0) {
      filteredList = filteredList.filter(doctor =>
        selectedSpecialties.some(specialty => doctor.specialties.includes(specialty))
      );
    }

    if (consultationMode) {
      filteredList = filteredList.filter(doctor => doctor.consultationMode === consultationMode);
    }

    if (sortOption) {
      if (sortOption === "sort-fees") {
        filteredList = filteredList.sort((a, b) => a.fee - b.fee);
      } else if (sortOption === "sort-experience") {
        filteredList = filteredList.sort((a, b) => b.experience - a.experience);
      }
    }

    setFilteredDoctors(filteredList);
  };

  // Handle specialty filter changes
  const handleSpecialtyChange = (event) => {
    const value = event.target.value;
    setSelectedSpecialties(prevState =>
      prevState.includes(value)
        ? prevState.filter(specialty => specialty !== value)
        : [...prevState, value]
    );
  };

  // Handle consultation mode change
  const handleConsultationModeChange = (event) => {
    setConsultationMode(event.target.value);
  };

  // Handle sorting option change
  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className="filters">
        {/* Specialties Filter */}
        <div className="filter-header">
          <h3 data-testid="filter-header-speciality">Speciality</h3>
          <div>
            <label>
              <input
                type="checkbox"
                value="General Physician"
                onChange={handleSpecialtyChange}
                data-testid="filter-specialty-General-Physician"
              />
              General Physician
            </label>
            <label>
              <input
                type="checkbox"
                value="Dentist"
                onChange={handleSpecialtyChange}
                data-testid="filter-specialty-Dentist"
              />
              Dentist
            </label>
            {/* Add other specialty checkboxes similarly */}
          </div>
        </div>

        {/* Consultation Mode Filter */}
        <div className="filter-header">
          <h3 data-testid="filter-header-moc">Consultation Mode</h3>
          <label>
            <input
              type="radio"
              value="Video Consult"
              checked={consultationMode === "Video Consult"}
              onChange={handleConsultationModeChange}
              data-testid="filter-video-consult"
            />
            Video Consult
          </label>
          <label>
            <input
              type="radio"
              value="In Clinic"
              checked={consultationMode === "In Clinic"}
              onChange={handleConsultationModeChange}
              data-testid="filter-in-clinic"
            />
            In Clinic
          </label>
        </div>

        {/* Sorting Filter */}
        <div className="filter-header">
          <h3 data-testid="filter-header-sort">Sort</h3>
          <select onChange={handleSortOptionChange} value={sortOption}>
            <option value="">Select Sort Option</option>
            <option value="sort-fees" data-testid="sort-fees">Sort by Fees</option>
            <option value="sort-experience" data-testid="sort-experience">Sort by Experience</option>
          </select>
        </div>
      </div>

      {/* Doctors List */}
      <div className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <div className="doctor-card" data-testid="doctor-card" key={doctor.id}>
            <h4 className="doctor-name" data-testid="doctor-name">{doctor.name}</h4>
            <p className="doctor-specialty" data-testid="doctor-specialty">{doctor.specialties.join(", ")}</p>
            <p className="doctor-experience" data-testid="doctor-experience">{doctor.experience} years of experience</p>
            <p className="doctor-fee" data-testid="doctor-fee">${doctor.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
