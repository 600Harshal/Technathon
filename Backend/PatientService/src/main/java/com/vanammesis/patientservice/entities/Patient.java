package com.vanammesis.patientservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


import java.util.List;

@AllArgsConstructor
@Entity(name = "patients")
@NoArgsConstructor
public class Patient {

    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long patientId;

    @Column(name = "patient_email")
    private String patientEmail;

    @Column(name = "patient_name")
    private String patientName;
    @Column(name = "patient_password")
    private String patientPassword;

    @OneToMany(cascade = CascadeType.ALL)
    private List<PatientDetails> patientDetails;

    @ManyToMany
    @JoinTable(
            name = "patient_doctor",
            joinColumns = @JoinColumn(name = "patient_id"),
            inverseJoinColumns = @JoinColumn(name = "doctor_id"))
    @Column(name = "doctor_list")
    private List<Doctor> doctorList;

    public long getPatientId() {
        return patientId;
    }

    public void setPatientId(long patientId) {
        this.patientId = patientId;
    }

    public String getPatientEmail() {
        return patientEmail;
    }

    public void setPatientEmail(String patientEmail) {
        this.patientEmail = patientEmail;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientPassword() {
        return patientPassword;
    }

    public void setPatientPassword(String patientPassword) {
        this.patientPassword = patientPassword;
    }

    public List<PatientDetails> getPatientDetails() {
        return patientDetails;
    }

    public void setPatientDetails(List<PatientDetails> patientDetails) {
        this.patientDetails = patientDetails;
    }

    public List<Doctor> getDoctorList() {
        return doctorList;
    }

    public void setDoctorList(List<Doctor> doctorList) {
        this.doctorList = doctorList;
    }
}
