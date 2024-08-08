package com.example.demo.service.impl;

import com.example.demo.dtos.PacientDto;
import com.example.demo.dtos.ProgramareResponseDto;
import com.example.demo.dtos.UpdateResponseDTO;
import com.example.demo.model.Medic;
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

    @Override
    public ProgramareResponseDto update(Programari programareUpdate) {
        ProgramareResponseDto programareResponseDto = new ProgramareResponseDto();
        programareResponseDto.setMesaj("");

        Programari programare = programariRepository.findProgramariByStartTime(programareUpdate.getStartTime());
        if (programare == null) {
            programareResponseDto.setProgramare(null);
            programareResponseDto.setMesaj("Nu există programarea selectat!");
        } else {
            Pacient pacientExistent = pacientService.findPacientByCnp(programareUpdate.getPacient().getCnp());
            if (pacientExistent == null) {
                PacientDto pacientDto = new PacientDto();
                pacientDto.setCnp(programareUpdate.getPacient().getCnp());
                pacientDto.setNumePrenume(programareUpdate.getPacient().getNumePrenume());
                Pacient registerPacient = pacientService.registerPacient(pacientDto);
                programare.setPacient(registerPacient);
                programariRepository.save(programare);
                programareResponseDto.setProgramare(programare);
                programareResponseDto.setMesaj("Update și register realizat cu succes!");
            }
            else {
                //System.out.println("Pacient id" + pacientExistent.getId());
                programare.setPacient(pacientExistent);
                System.out.println("Pacient id:"+programare.getPacient().getId());
                programariRepository.save(programare);
                programareResponseDto.setProgramare(programare);
                programareResponseDto.setMesaj("Update realizat cu succes!");
            }

        }
        return programareResponseDto;
    }

    @Override
    public String delete(Programari programareDelete) {
        Programari programare= programariRepository.findProgramariByStartTime(programareDelete.getStartTime());
        if(programare == null){
            return "Nu există programarea selectată!";
        }else {
            programariRepository.delete(programare);
            return "Ștergere reușită!";
        }
    }
}
