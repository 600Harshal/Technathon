package com.vanammesis.patientservice.external.services;

import com.vanammesis.patientservice.entities.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.print.Doc;

@Service
public class DoctorService {

    @Autowired
    private RestTemplate restTemplate;

    public Doctor getDoctorByEmail(String email){
        return restTemplate.getForObject("localhost:8001/api-doctor/getDoctorByEmail/" + email, Doctor.class);
    }

    public Doctor getDoctorById(long doctorId){
        return restTemplate.getForObject("localhost:8001/api-doctor/getDoctor/" + doctorId, Doctor.class);
    }
}
