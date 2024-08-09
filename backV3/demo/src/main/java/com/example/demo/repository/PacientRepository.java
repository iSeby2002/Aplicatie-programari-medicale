package com.example.demo.repository;

import com.example.demo.model.Pacient;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PacientRepository extends CrudRepository<Pacient,Long> {
    Pacient findPacientById(Long id);
    boolean existsById(Long id);

    Pacient findPacientByCnp(Long cnp);

    @Query("SELECT p FROM Pacient p ORDER BY p.id DESC")
    List<Pacient> findLastPacient(Pageable pageable);
}
