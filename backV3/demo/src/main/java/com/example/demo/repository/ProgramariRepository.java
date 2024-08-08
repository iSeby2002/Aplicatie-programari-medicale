package com.example.demo.repository;

import com.example.demo.model.Pacient;
import com.example.demo.model.Programari;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ProgramariRepository extends CrudRepository<Programari, Long> {
    @Query("SELECT p FROM Programari p WHERE p.startTime >= :startOfDay")
    List<Programari> findAllByDate(@Param("startOfDay") LocalDateTime startOfDay);
    Programari findProgramariById(long id);
    Programari findProgramariByStartTime (LocalDateTime startTime);
    List<Programari> findAllByPacientAndStartTimeBetween(Pacient pacient, LocalDateTime startTimeStart, LocalDateTime startTimeEnd);


}
