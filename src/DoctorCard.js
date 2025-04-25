import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card">
      <img src={doctor.photo} alt={`${doctor.name}'s photo`} className="doctor-photo" />
      <div className="card-content">
        <h2>{doctor.name}</h2>
        <p>{doctor.experience}</p> {/* Displaying the experience */}
        <p>{doctor.clinic.name}</p> {/* Displaying clinic name */}
        <p className="fees">Fees: {doctor.fees}</p>
        <button className="book-btn">Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
