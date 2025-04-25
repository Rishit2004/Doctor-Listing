  // src/App.js
  import React, { useState, useEffect } from "react";
  import SearchBar from "./SearchBar.js";
  import FilterPanel from "./FilterPanel.js";
  import DoctorList from "./DoctorList.js";
  import "./App.css"; // Import your styles

  const App = () => {
    const [doctors, setDoctors] = useState([]); // List of all doctors
    const [consultationMode, setConsultationMode] = useState("all"); // Consultation type filter
    const [specialties, setSpecialties] = useState([]); // List of selected specialties
    const [sortBy, setSortBy] = useState("fees"); // Sorting criteria (fees or experience)
    const [searchQuery, setSearchQuery] = useState(""); // Search query for doctor names
    const [filteredDoctors, setFilteredDoctors] = useState([]); // The filtered list of doctors

    // Fetch doctors data from API on initial render
    useEffect(() => {
      const fetchDoctors = async () => {
        const response = await fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
        const data = await response.json();
        setDoctors(data); // Set the doctors data
      };
      fetchDoctors();
    }, []);

    // Apply filtering logic and update filteredDoctors
    const applyFilters = () => {
      let result = doctors;

      // Apply filtering based on consultation mode
      if (consultationMode !== "all") {
        console.log("Filtering by consultation mode:", consultationMode); // Debugging log
        result = result.filter((doctor) =>
          (consultationMode === "video" && doctor.video_consult) ||
          (consultationMode === "clinic" && doctor.in_clinic)
        );
      }

      // Apply filtering based on specialties (multiple selections allowed)
      if (specialties.length > 0) {
        console.log("Filtering by specialties:", specialties); // Debugging log
        result = result.filter((doctor) => {
          const doctorSpecialties = doctor.specialties || [];
          return doctorSpecialties.some((spec) => specialties.includes(spec.name));
        });
      }

      // Apply search filter for doctor names
      if (searchQuery) {
        console.log("Filtering by search query:", searchQuery); // Debugging log
        result = result.filter((doctor) => doctor.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      // Sorting doctors based on selected criteria
      if (sortBy === "fees") {
        console.log("Sorting by fees"); // Debugging log
        result = result.sort((a, b) => parseInt(a.fees.slice(1)) - parseInt(b.fees.slice(1))); // Fees sorted from low to high
      }
      if (sortBy === "experience") {
        console.log("Sorting by experience"); // Debugging log
        result = result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience)); // Experience sorted from high to low
      }

      // Set the filtered list of doctors
      console.log("Filtered Doctors:", result); // Debugging log
      setFilteredDoctors(result);
    };

    // Recompute filteredDoctors whenever any filter state changes
    useEffect(() => {
      applyFilters(); // Recalculate filtered list whenever any filter or search query changes
    }, [doctors, consultationMode, specialties, searchQuery, sortBy]); // Dependencies to trigger filter recalculation

    return (
      <div className="container">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterPanel
          consultationMode={consultationMode}
          specialties={specialties}
          setConsultationMode={setConsultationMode}
          setSpecialties={setSpecialties}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <DoctorList doctors={filteredDoctors} />
      </div>
    );
  };

  export default App;
