package com.example.demo.dtos;

import com.example.demo.model.FisaMedicala;
import lombok.Data;

import java.util.List;

@Data
public class FiseMedicaleResponseDTO {
    private List<FisaMedicala> fiseMedicale;
    private String mesaj;
}
