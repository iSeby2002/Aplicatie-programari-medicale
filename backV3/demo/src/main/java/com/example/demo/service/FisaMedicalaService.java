package com.example.demo.service;

import com.example.demo.dtos.FisaMedicalaDTO;
import com.example.demo.dtos.FisaMedicalaResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.PozeFisaMedicala;
import com.example.demo.model.Programari;
import org.springframework.stereotype.Component;

import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.List;

@Component
public interface FisaMedicalaService {
    List<Programari> findProgramariCurente(LocalDateTime data);
    FisaMedicalaDTO saveFisaMedicala(FisaMedicala fisaMedicala);
    String savePozaODInFisaMedicala(Long idFisa, Blob blobOD);
    String savePozaOSInFisaMedicala(Long idFisa, Blob blobOS);
    FisaMedicalaResponseDTO findAll();
    FisaMedicalaResponseDTO findAllByCnp(Long cnp);
    FisaMedicala findFisaMedicalaByProgramare(Programari programare);
    PozeFisaMedicala findPozeFisaMedicalaByIdFisaMedicala(Long id);
}
