package com.example.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PacientDto {

    private String nume;
    private String prenume;
    private long cnp;
    private String diabetZaharat;
    private LocalDate dataDiagnosticului;

}
