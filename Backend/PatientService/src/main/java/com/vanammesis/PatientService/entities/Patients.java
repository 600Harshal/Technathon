package com.vanammesis.PatientService.entities;


import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "patients")
@Schema(name="PatientEntity", description="Entity class for patients ")
public class Patients {

    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long patientId;

    @Column(name = "patient_name")
    private int patientName;

    @Column(name = "patient_email")
    private int patientEmail;

    @Column(name = "patient_password")
    private int patientPassword;


}
