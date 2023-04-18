import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDetails.css";
import PrescriptionPage from "./PrescriptionPage";
import { useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PatientDetails(props) {
  const navigate = useNavigate();

  const location = useLocation();
  const patient = location.state?.patient;

  function handleButtonClick(id) {
    navigate(`/prescription/${id}`);
  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345, p: 1 }}>
            <CardMedia
              component="img"
              height="190"
              image="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination-illustration_23-2148859982.jpg?size=626&ext=jpg&ga=GA1.2.971300904.1661420606&semt=ais"
              alt="green iguana"
            />
            <CardContent sx={{ p: 1 }}>
              {patient ? (
                <div>
                  <Typography variant="h5" sx={{ mb: 1 }} style={{fontWeight:"bold"}}>
                    {patient.first_name} {patient.last_name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                  <span style={{fontWeight:"bold"}}>Age:</span> {patient.age}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                  <span style={{fontWeight:"bold"}}>Gender:</span> {patient.gender}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                  <span style={{fontWeight:"bold"}}>Contact:</span> {patient.contact}
                  </Typography>
                </div>
              ) : (
                <Typography variant="body1">No patient selected</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <PrescriptionPage />
      </Grid>
    </>
  );
}

export default PatientDetails;
