package com.vanammesis.PatientService.controller;

import com.vanammesis.PatientService.responses.PatientResponse;
import com.vanammesis.PatientService.services.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-patients")
public class PatientController {

    @Autowired
    private PatientServiceImpl patientService;

    @PostMapping()
    public PatientResponse createNewPatient(@RequestBody PatientResponse patientResponse){
        return patientService.createNewPatient(patientResponse);
    }

    @GetMapping()
    public List<PatientResponse> getAllPatient(){
        return patientService.getAllPatients();
    }

    @GetMapping("/{patientId}")
    public PatientResponse getPatientById(@PathVariable("patientId") long patientId){
        return patientService.getPatientById(patientId);
    }

    @DeleteMapping("/delete/{patientId}")
    public String deletePatientById(@PathVariable("patientId") long patientId){
        return patientService.deletePatientById(patientId);
    }
}
