package com.vanamnesis.doctor_service.controller;

import com.vanamnesis.doctor_service.entity.Doctor;
import com.vanamnesis.doctor_service.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api-doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping("/getDoctor/{email}")
    public Doctor findDoctorByEmail(@PathVariable String email){
        Doctor doctor = doctorService.getDoctorByEmail(email);
        return doctor;
    }

    @PostMapping("/doctorSignUp")
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return doctorService.saveDoctor(doctor);
    }


    @PutMapping("/updateDoctor")
    public Doctor updateDoctor(@RequestBody Doctor doctor){
        return doctorService.updateDoctor(doctor);
    }

    @DeleteMapping("/deleteDoctor/{email}")
    public String deleteDoctor(@PathVariable String email){
        return doctorService.deleteDoctor(email);
    }

}
