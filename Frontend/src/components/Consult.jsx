import React from "react";
import Navbar from "./Navbar";

const Consult = () => {
  return (
    <div>
      <div class="jumbotron">
        <img
          src="/assets/bg.png"
          class="d-block w-100"
          alt="Background"
          height="530px"
        />
        <figcaption>
          <h1 class="display-4">Avoid travelling!</h1>
          <hr class="my-4" />
          <h5>
            Audio/Video Consultation, Private Consultation from Verified Doctors
          </h5>
          <p class="lead">
            <a class="btn btn-primary btn-lg mt-3" href="/NewConsultation" role="button">
              Book Your Appointment Now
            </a>
          </p>
        </figcaption>
      </div>
    </div>
  );
};

export default Consult;
