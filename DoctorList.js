import React from 'react';
import DoctorCard from './DoctorCard'; // Import the DoctorCard component

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-card-container">
      {doctors && doctors.length > 0 ? (
        doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} /> // Pass each doctor to the DoctorCard component
        ))
      ) : (
        <p>No doctors available</p> // Show message if no doctors are available
      )}
    </div>
  );
};

export default DoctorList;
