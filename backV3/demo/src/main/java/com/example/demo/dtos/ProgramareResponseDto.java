package com.example.demo.dtos;

import com.example.demo.model.Programari;
import lombok.Data;

@Data
public class ProgramareResponseDto {
    private Programari programare;
    private String mesaj;
}
