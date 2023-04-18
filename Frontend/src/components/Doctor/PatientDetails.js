import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDetails.css";
import PrescriptionPage from "./PrescriptionPage";
import { useLocation } from "react-router-dom";

function PatientDetails(props) {
  const navigate = useNavigate();

  const location = useLocation();
  const patient = location.state?.patient;

  function handleButtonClick(id) {
    navigate(`/prescription/${id}`);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            {patient ? (
              <div>
                <h2>
                  {patient.first_name} {patient.last_name}
                </h2>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>Contact: {patient.contact}</p>
              </div>
            ) : (
              <p>No patient selected</p>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={9}>
        <PrescriptionPage />
      </Grid>
    </Grid>
  );
}

export default PatientDetails;
