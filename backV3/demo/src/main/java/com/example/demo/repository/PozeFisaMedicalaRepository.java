package com.example.demo.repository;

import com.example.demo.model.PozeFisaMedicala;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PozeFisaMedicalaRepository extends CrudRepository<PozeFisaMedicala,Long> {
    PozeFisaMedicala findPozeFisaMedicalaByIdFisaMedicala(Long idFisaMedicala);
    PozeFisaMedicala findPozeFisaMedicalaById(Long id);
}
