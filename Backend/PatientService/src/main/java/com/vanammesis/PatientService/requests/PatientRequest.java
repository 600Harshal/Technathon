package com.vanammesis.PatientService.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.io.Serializable;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PatientRequest implements Serializable {

    private long patientId;

    @NotEmpty( message = "patient name should not be null")
    private int patientName;

    @NotEmpty( message = "patient email should not be null")
    private int patientEmail;

    @NotEmpty( message = "patient password should not be null")
    private int patientPassword;


}