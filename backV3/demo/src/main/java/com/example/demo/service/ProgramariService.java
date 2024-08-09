package com.example.demo.service;

import com.example.demo.dtos.ProgramareResponseDto;
import com.example.demo.model.Programari;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public interface ProgramariService {
    String saveProgramare(Programari programare);
    ProgramareResponseDto update(Programari programareUpdate);
    String  delete(Programari programare);
    List<Programari> getProgramariByWeek(LocalDate startWeek);
}
