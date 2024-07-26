package com.example.demo.service;


import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Programari;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
public interface FisaMedicalaService {
    List<Programari> findProgramariCurente();
    String saveFisaMedicala(FisaMedicala fisaMedicala);
}
