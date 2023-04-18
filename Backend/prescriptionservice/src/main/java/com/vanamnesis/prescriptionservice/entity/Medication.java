package com.vanamnesis.prescriptionservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Medication {

    private Long id;

    private String medicineName;

    private long numberOfDays;

    private String dosage;

    private String timing;

    private String beforeAfter;

}
