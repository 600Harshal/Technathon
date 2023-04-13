package com.vanamnesis.doctor_service.service.impl;

import com.vanamnesis.doctor_service.entity.Doctor;
import com.vanamnesis.doctor_service.repository.DoctorRepository;
import com.vanamnesis.doctor_service.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor saveDoctor(Doctor doctor) {
        if(doctorRepository.findByEmail(doctor.getEmail()) != null)
            throw new RuntimeException("Doctor is already present");
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor getDoctorByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }

    @Override
    public Doctor updateDoctor(Doctor doctor) {
        Doctor prevDoctor = doctorRepository.findByEmail(doctor.getEmail());
        if(prevDoctor == null)
            throw new RuntimeException("Invalid doctor details!");
        doctor.setId(prevDoctor.getId());
        return doctorRepository.save(doctor);
    }

    @Override
    public String deleteDoctor(String email) {
        Doctor doctor = doctorRepository.findByEmail(email);
        if(doctor == null)
            throw new RuntimeException("Invalid doctor details");
        long id = doctor.getId();
        doctorRepository.deleteById(id);
        return "Doctor with email "+ email + " is deleted!";
    }
}
