package com.vanammesis.PatientService.services;

import com.vanammesis.PatientService.entities.Patients;
import com.vanammesis.PatientService.repository.PatientRepository;
import com.vanammesis.PatientService.responses.PatientResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PatientServiceImpl implements PatientService{

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PatientResponse createNewPatient(PatientResponse patientResponse) {
        Patients patients = modelMapper.map(patientResponse, Patients.class);
        return modelMapper.map(patientRepository.save(patients), PatientResponse.class);
    }

    @Override
    public List<PatientResponse> getAllPatients() {
       return modelMapper.map(patientRepository.findAll(), ArrayList.class);
    }

    @Override
    public PatientResponse getPatientById(long patientId) {
        return modelMapper.map(patientRepository.findById(patientId),PatientResponse.class);
    }

    @Override
    public String deletePatientById(long patientId) {
        patientRepository.deleteById(patientId);
        Optional<Patients> byId = patientRepository.findById(patientId);

        return "Patient with id: " + patientId + "has been deleted.";
    }
}
