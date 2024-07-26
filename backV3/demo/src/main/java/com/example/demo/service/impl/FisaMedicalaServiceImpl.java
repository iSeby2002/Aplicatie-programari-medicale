package com.example.demo.service.impl;

import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Programari;
import com.example.demo.repository.FisaMedicalaRepository;
import com.example.demo.repository.ProgramariRepository;
import com.example.demo.service.FisaMedicalaService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class FisaMedicalaServiceImpl implements FisaMedicalaService {
    private final ProgramariRepository programariRepository;
    private final FisaMedicalaRepository fisaMedicalaRepository;

    public FisaMedicalaServiceImpl(ProgramariRepository programariRepository, FisaMedicalaRepository fisaMedicalaRepository) {
        this.programariRepository = programariRepository;
        this.fisaMedicalaRepository = fisaMedicalaRepository;
    }

    @Override
    public List<Programari> findProgramariCurente() {
        LocalDate dataCurenta=LocalDate.now();
        /*Iterable<Programari> allProgramari= programariRepository.findAll();
        List<Programari> programariCurente= StreamSupport.stream(allProgramari.spliterator(),false)
                .filter(programari->programari.getStartTime().toLocalDate().equals(dataCurenta)).collect(Collectors.toList());
        return programariCurente;*/
        LocalDateTime startOfDay = dataCurenta.atStartOfDay();
        LocalDateTime endOfDay = dataCurenta.plusDays(1).atStartOfDay().minusSeconds(1);

        return programariRepository.findAllByDate(startOfDay, endOfDay);

    }

    @Override
    public String saveFisaMedicala(FisaMedicala fisaMedicala) {

        fisaMedicalaRepository.save(fisaMedicala);
        return "Salvare cu succes";
    }
}
