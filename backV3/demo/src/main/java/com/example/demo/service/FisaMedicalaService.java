package com.example.demo.service;


import com.example.demo.dtos.*;
import com.example.demo.dtos.FiseMedicaleResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Medic;
import com.example.demo.model.Programari;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Component
public interface FisaMedicalaService {
    List<Programari> findProgramariCurente(LocalDateTime data);
    String saveFisaMedicala(FisaMedicalaDto fisaMedicalaDto);
    FiseMedicaleResponseDTO findAllByCnp(long cnp);
    FisaMedicalaResponseDto update(FisaMedicala fisaMedicala);
}
