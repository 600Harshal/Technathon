package com.vanamnesis.prescriptionservice.repository;

import com.vanamnesis.prescriptionservice.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

    public Prescription findPrescriptionByPatientDoctorId(long patientDoctorId);
}
