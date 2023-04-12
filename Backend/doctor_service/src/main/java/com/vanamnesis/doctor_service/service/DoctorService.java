package com.vanamnesis.doctor_service.service;

import com.vanamnesis.doctor_service.entity.Doctor;
import org.springframework.stereotype.Service;

public interface DoctorService {
    Doctor saveDoctor(Doctor doctor);
    Doctor getDoctorByEmail(String email);
    Doctor updateDoctor(Doctor doctor);
    String deleteDoctor(int id);

}
