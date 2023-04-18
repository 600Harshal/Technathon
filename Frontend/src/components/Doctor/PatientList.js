import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import DoctorAppBar from "./DoctorAppBar";
import "./PatientList.css";

// import PatientDetails from "./PatientDetails.js";

function PatientList() {
  const [names, setNames] = useState([
    {
      id: uuidv4(),
      first_name: "John",
      last_name: "Wick",
      age: 26,
      gender: "Male",
      contact: 1234512345,
    },
    {
      id: uuidv4(),
      first_name: "Jane",
      last_name: "Frost",
      age: 23,
      gender: "Female",
      contact: 2342342342,
    },
    {
      id: uuidv4(),
      first_name: "Bob",
      last_name: "Marley",
      age: 45,
      gender: "Male",
      contact: 4545454545,
    },
  ]);

  const navigate = useNavigate();

  function handleButtonClick(id) {
    const selectedPatient = names.find((name) => name.id === id);
    navigate(`/details/${id}`, { state: { patient: selectedPatient } });
  }

  return (
    <div>
      <DoctorAppBar />
      <div style={{ marginTop: '50px', padding: '20px', marginRight: '15px' }}>
      <ul>
        {names.map((name, index) => (
          <li className="pListItem" key={name.id}>
            <span id="serial">{index + 1}. </span>
            <span id="first_name">{name.first_name}</span>
            <span id="last_name">{name.last_name}</span>
            <span id="age">{name.age}</span>
            <span id="contact">{name.contact}</span>
            <button onClick={() => handleButtonClick(name.id)}>Show</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default PatientList;
