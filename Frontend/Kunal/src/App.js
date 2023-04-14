import "./App.css";
import DoctorSignup from "./Component/DoctorSignUp";
import Login from "./Component/Login";
import PatientSignUp from "./Component/PatientSignUp";
import LandingPage from "./Component/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let v = "kunal";
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/doctor" element={<DoctorSignup />} />
          <Route path="/signup/patient" element={<PatientSignUp />} />
        </Routes>
      </Router>
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <DoctorSignup /> */}
      {/* <PatientSignUp /> */}
    </>
  );
}

export default App;
