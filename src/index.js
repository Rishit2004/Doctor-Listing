import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your custom CSS styles (optional)
import DoctorList from './DoctorList'; // Import the DoctorList component

ReactDOM.render(
  <React.StrictMode>
    <DoctorList />
  </React.StrictMode>,
  document.getElementById('root')
);
