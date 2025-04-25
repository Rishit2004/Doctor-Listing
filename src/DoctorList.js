// src/DoctorList.js
import React from "react";

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.photo} alt={doctor.name} />
          <div className="doctor-details">
            <h3>{doctor.name}</h3>
            {/* Safely check if specialties exist and map over them */}
            <p>
              {doctor.specialties && doctor.specialties.length > 0
                ? doctor.specialties.map((spec) => spec.name).join(", ")
                : "No specialties available"}
            </p>
            <p>{doctor.experience}</p>
            <p>{doctor.fees}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
