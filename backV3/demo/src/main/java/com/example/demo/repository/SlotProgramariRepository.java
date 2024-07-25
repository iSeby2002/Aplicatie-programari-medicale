package com.example.demo.repository;

import com.example.demo.model.SlotProgramari;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface SlotProgramariRepository extends CrudRepository<SlotProgramari,Long> {

    Optional<SlotProgramari> findByStartTime(LocalDateTime startTime);
}
