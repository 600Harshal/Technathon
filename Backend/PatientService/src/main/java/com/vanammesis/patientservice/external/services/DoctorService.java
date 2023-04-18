package com.vanammesis.patientservice.external.services;

import com.vanammesis.patientservice.entities.Doctor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "DOCTOR-SERVICE")
public interface DoctorService {

    @GetMapping("/api-doctor/{email}")
    public Doctor getDoctorByEmail(@PathVariable String email);

}
