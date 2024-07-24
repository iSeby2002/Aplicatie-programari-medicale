package com.example.demo.service;

import com.example.demo.model.Programari;
import org.springframework.stereotype.Component;

@Component

public interface ProgramariService {
    Programari saveProgramare(Programari programari) throws Exception;
}
