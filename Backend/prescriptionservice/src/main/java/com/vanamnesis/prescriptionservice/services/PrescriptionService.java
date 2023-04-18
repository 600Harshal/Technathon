package com.vanamnesis.prescriptionservice.services;
import com.vanamnesis.prescriptionservice.entity.Prescription;
import com.vanamnesis.prescriptionservice.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;


    public Prescription savePrescription(Prescription prescription){
        prescription.setPatientDoctorId(1);
        prescription.setCreationDate(LocalDate.now());
        return prescriptionRepository.save(prescription);
    }

    public Prescription getPrescriptionById(long prescriptionId){
        return prescriptionRepository.findById(prescriptionId).orElseThrow(
                ()->{
                    throw new RuntimeException("Prescription with id does not exist");
                }
        );
    }

    public Prescription getPrescriptionByPatientDoctorId(long patientDoctorId){
        return prescriptionRepository.findPrescriptionByPatientDoctorId(patientDoctorId);
    }
}
