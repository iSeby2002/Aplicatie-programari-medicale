package com.example.demo.service;

import com.example.demo.dtos.PacientDto;
import com.example.demo.model.Pacient;
import com.example.demo.model.SlotProgramari;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface SlotProgramariService  {
    void generareSloturiSaptamanale();
    Iterable<SlotProgramari> findAll();

    Optional<SlotProgramari> findById(Long id);

    Optional<SlotProgramari> findByStartTime(LocalDateTime startTime);
    SlotProgramari save(SlotProgramari slotProgramari);
}
