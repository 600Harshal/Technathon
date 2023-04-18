package com.vanamnesis.prescriptionservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "prescription")
public class Prescription {

    @Id
    @Column(name = "prescription_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescriptionId;

    @Column(name = "patient_doctor_id")
    private long patientDoctorId;

    @Column(name = "instructions")
    private String instructions;

    @Column(name = "medication")
    private List<Medication> medication;

    @Column(name = "creation_date")
    private LocalDate creationDate;
}
