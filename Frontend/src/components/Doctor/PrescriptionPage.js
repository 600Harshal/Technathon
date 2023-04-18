import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./PrescriptionPage.css";

function PrescriptionPage(props) {
  const [prescriptions, setPrescriptions] = useState([]);
  const handleInputChange = (event, index, property) => {
    const newPrescriptions = [...prescriptions];

    newPrescriptions[index][property] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setPrescriptions(newPrescriptions);
  };

  const handleAddRow = () => {
    setPrescriptions([
      ...prescriptions,
      { name: "", time: "", dosage: "", instructions: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const newPrescriptions = [...prescriptions];
    newPrescriptions.splice(index, 1);
    setPrescriptions(newPrescriptions);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Here you can perform any logic to save the prescription names, such as sending them to an API or storing them in local state.

    console.log(prescriptions);

    setPrescriptions([]);
  };

  return (
    <div>
                <h3 className="text-center">Prescription:</h3>
      <form onSubmit={handleSubmit} className="prescription-form">
        {prescriptions.map((prescription, index) => (
          <div key={index} className="prescription-row">
            <label className="prescription-label">
              Medication {index + 1}:
              <input
                type="text"
                value={prescription.name}
                onChange={(event) => handleInputChange(event, index, "name")}
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              Time :
              <input
                type="text"
                value={prescription.time}
                onChange={(event) => handleInputChange(event, index, "time")}
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              Dosage :
              <input
                type="text"
                placeholder="Medicine Dosage"
                value={prescription.dosage}
                onChange={(event) => handleInputChange(event, index, "dosage")}
                className="prescription-input"
              />
            </label>

            <label className="prescription-label">
              Instructions :
              <input
                type="text"
                placeholder="Before/After Meal"
                value={prescription.instructions}
                onChange={(event) =>
                  handleInputChange(event, index, "instructions")
                }
                className="prescription-input"
              />
            </label>

            <button type="button" onClick={() => handleRemoveRow(index)}>
              Remove Prescription
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddRow}>
          Add Prescription
        </button>
        <button type="submit">Submit</button>
      </form>
             {" "}
    </div>
  );
}

export default PrescriptionPage;
	