package com.example.demo.service.impl;

import com.example.demo.dtos.PacientDto;
import com.example.demo.model.Pacient;
import com.example.demo.model.Programari;
import com.example.demo.repository.ProgramariRepository;
import com.example.demo.service.PacientService;
import com.example.demo.service.ProgramariService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Service

public class ProgramariServiceImpl implements ProgramariService{
    private final ProgramariRepository programariRepository;
    private final PacientService pacientService;


    @Autowired
    public ProgramariServiceImpl(ProgramariRepository programariRepository, PacientService pacientService) {
        this.programariRepository = programariRepository;
        this.pacientService = pacientService;
    }

    @Override
    public String saveProgramare(Programari programare) {
//                System.out.println(programareDTO.getNumeSiPrenume() + " " + programareDTO.getCnp() + " " +
//                programareDTO.getTipDiabetZaharat() + " " + programareDTO.getDiabetZaharat() + " " +
//                programareDTO.getDataDiagnosticului() + " " + programareDTO.getDataProgramarii() + " " +
//                programareDTO.getOraProgramarii());

        PacientDto pacientDto = PacientDto.builder()
                .numePrenume(programare.getPacient().getNumePrenume())
                .cnp(programare.getPacient().getCnp())
                .build();
        Pacient pacientCautat = pacientService.findPacientByCnp(programare.getPacient().getCnp());
        if (pacientCautat==null) {
            Pacient savedPacient = pacientService.registerPacient(pacientDto);
        Programari savedProgramare = Programari.builder()
                .pacient(savedPacient)
                .startTime(programare.getStartTime())
                .build();
        programariRepository.save(savedProgramare);
        }else
        {
            // Verifică dacă există deja o programare în aceeași săptămână
            LocalDateTime startTime = programare.getStartTime();
            LocalDate startOfWeek = startTime.toLocalDate().with(java.time.DayOfWeek.MONDAY);
            LocalDate endOfWeek = startOfWeek.plusDays(6);

            List<Programari> programariInAceeasiSaptamana = programariRepository.findAllByPacientAndStartTimeBetween(
                    pacientCautat, startOfWeek.atStartOfDay(), endOfWeek.atTime(23, 59));

            if (!programariInAceeasiSaptamana.isEmpty()) {
                Programari savedProgramare = Programari.builder()
                        .pacient(pacientCautat)
                        .startTime(programare.getStartTime())
                        .build();
                programariRepository.save(savedProgramare);
                return "Avertizare! Pacientul are deja o programare în această săptămână.";
            }
        }

        return "Programare reușită";
    }
}
