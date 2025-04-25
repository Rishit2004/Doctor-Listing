import React from 'react';

const DoctorCard = ({ doctor }) => {
  // Check if doctor data exists to avoid errors while rendering
  if (!doctor || !doctor.photo || !doctor.name || !doctor.experience || !doctor.clinic) {
    return null; // Prevent rendering if required data is missing
  }

  return (
    <div className="card">
      {/* Doctor's photo with alt text for accessibility */}
      <img
        src={doctor.photo}
        alt={`${doctor.name}'s photo`}
        className="doctor-photo"
        loading="lazy" // Improve performance by lazy-loading images
      />
      <div className="card-content">
        <h2>{doctor.name}</h2>
        <p>{doctor.experience} years of experience</p> {/* Displaying the experience */}
        <p>{doctor.clinic.name}</p> {/* Displaying clinic name */}
        <p className="fees">Fees: {doctor.fees}</p>
        <button className="book-btn" aria-label={`Book an appointment with Dr. ${doctor.name}`}>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;

/**/