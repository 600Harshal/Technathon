package com.vanammesis.PatientService.responses;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PatientResponse{

    private long patientId;


    private int patientName;

    private int patientEmail;

    private int patientPassword;


}