package com.example.demo.dtos;

import com.example.demo.model.FisaMedicala;
import lombok.Data;

@Data
public class FisaMedicalaResponseDTO {
    private FisaMedicala fiseMedicale;
    private String mesaj;
}
