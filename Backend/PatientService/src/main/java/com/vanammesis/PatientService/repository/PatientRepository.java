package com.vanammesis.PatientService.repository;

import com.vanammesis.PatientService.entities.Patients;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patients,Long> {
}
