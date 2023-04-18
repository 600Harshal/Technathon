package com.vanammesis.patientservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "doctor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "doctor_name")
    private String doctorName;

    @Column(name = "hospital_name")
    private String hospitalName;

    @Column(name = "license_no")
    private String licenseNo;

    @Column(name = "doctor_email")
    private String doctorEmail;

    @Column(name = "doctor_password")
    private String doctorPassword;

    @Column(name = "doctor_gender")
    private String doctorGender;
}
