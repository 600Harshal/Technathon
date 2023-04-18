import React from "react";

const PatientDashboard = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand ml-3" href="/">
            V-anamnesis
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/Consult">
                 Book Appointment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/DoctorList">
                  Doctors Near me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="jumbotron jumbotron-fluid" >
        <div class="container ">
          <h1 class="display-4">Hello, Aryan Sigh</h1>
          <p class="lead">
            Track your health condition now
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="card ml-3" style={{ width: "22rem", height: "23rem" }}>
            <div class="card-body"style={{ width: "22rem", height: "23rem" }}>
              <h5 class="card-title">My Details</h5>
              <p class="card-text">
                <table class="table"className="table table-bordered border-danger">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-danger">
                      <th scope="row">Role</th>
                      <td>Patient</td>
                    </tr>
                    <tr>
                      <th scope="row">Patient ID</th>
                      <td>1245</td>
                    </tr>
                    <tr class="table-danger">
                      <th scope="row">Age</th>
                      <td>25</td>
                    </tr>
                    <tr>
                      <th scope="row">Birthdate</th>
                      <td>14-08-1997</td>
                    </tr>
                  
                  </tbody>
                </table>
              </p>
              <a href="/" class="btn btn-danger">
                Active
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card ml-3" style={{ width: "22rem", height: "23rem" }}>
            <div class="card-body"style={{ width: "22rem", height: "23rem" }}>
              <h5 class="card-title mb-2">Medical Records</h5>
              <p class="card-text">
                <table class="table"className="table table-bordered border-danger">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Name</th>
                      <th scope="col">Result</th>
                      <th scope="col">Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-danger">
                      <th scope="row">16-04-2023</th>
                      <td>TSH Serum</td>
                      <td>3.164</td>
                      <td>ulU/mL</td>
                    </tr>
                    <tr>
                      <th scope="row">15-04-2023</th>
                      <td>Hemoglobin</td>
                      <td>12.4</td>
                      <td>g/dL</td>
                    </tr>
                    <tr class="table-danger">
                      <th scope="row">13-04-2023</th>
                      <td>MCHC</td>
                      <td>32.6</td>
                      <td>g/dL</td>
                    </tr>
                
                   
                  </tbody>
                </table>
              </p>
              <a href="/" class="btn btn-danger">
               Browse All
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style={{ width: "45rem", height: "23rem" }}>
            <div class="card-body">
              <h5 class="card-title">Prescription History</h5>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PatientDashboard;
