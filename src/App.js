import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }


  return (
  
    <div className="container">
      <h1>Select an option:</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select an option--</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="pharma">Pharmacist</option>
      </select>
      {selectedOption && <p>You selected {selectedOption}.</p>}
	  
    </div>
	
	
  );
}

export default App;
