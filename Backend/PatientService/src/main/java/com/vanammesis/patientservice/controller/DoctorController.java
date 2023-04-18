package com.vanammesis.patientservice.controller;

import com.vanammesis.patientservice.entities.Doctor;
import com.vanammesis.patientservice.external.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api-patients/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/by-email/{email}")
    private Doctor getDoctorByEmail(@PathVariable String email){
        return doctorService.getDoctorByEmail(email);
    }
}
