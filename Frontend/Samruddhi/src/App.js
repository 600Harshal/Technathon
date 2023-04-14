import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consult from "./components/Consult";
import NewConsultation from "./components/NewConsultation";
import PatientDashboard from "./components/PatientDashboard";
import DoctorList from "./components/DoctorList";
import Header from "./components/Header";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/consult" element={<Consult />} />
          <Route path="/NewConsultation" element={<NewConsultation />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/DoctorList" element={<DoctorList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
