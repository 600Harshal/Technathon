import React from "react";
import data from "./dataSource.json";
import {
  GridComponent

} from "@syncfusion/ej2-react-grids";
import "./Style.css";

const PatientDashboard = () => {
  return (
    <div style={{ margin: "10%", marginTop: "5%", color: "black" }}>
      <GridComponent dataSource={data}></GridComponent>
    </div>
  );
};

export default PatientDashboard;
