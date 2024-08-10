package com.example.demo.dtos;

import com.example.demo.model.FisaMedicala;
import lombok.Data;

import java.util.List;

@Data
public class FisaMedicalaResponseDto {
    private FisaMedicala fiseMedicale;
    private String mesaj;
}
