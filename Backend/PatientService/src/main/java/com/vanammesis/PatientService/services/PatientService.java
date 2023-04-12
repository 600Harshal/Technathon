package com.vanammesis.PatientService.services;

import com.vanammesis.PatientService.responses.PatientResponse;

import java.util.List;

public interface PatientService {

    public PatientResponse createNewPatient(PatientResponse patientResponse);

    public List<PatientResponse> getAllPatients();

    public PatientResponse getPatientById(long patientId);

    public String deletePatientById(long patientId);
}
