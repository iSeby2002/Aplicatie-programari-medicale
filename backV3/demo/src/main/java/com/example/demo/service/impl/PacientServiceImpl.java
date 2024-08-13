package com.example.demo.service.impl;

import com.example.demo.dtos.PacientDto;
import com.example.demo.model.Pacient;
import com.example.demo.repository.PacientRepository;
import com.example.demo.service.PacientService;
import org.springframework.stereotype.Service;

@Service
public class PacientServiceImpl implements PacientService {

    private final PacientRepository pacientRepository;

    public PacientServiceImpl(PacientRepository pacientRepository) {
        this.pacientRepository = pacientRepository;
    }

    @Override
    public Pacient registerPacient(PacientDto pacientDto) {
        Pacient pacient = Pacient.builder()
                .numePrenume(pacientDto.getNumePrenume())
                .cnp(pacientDto.getCnp())
                .build();
        return pacientRepository.save(pacient);
    }

    @Override
    public void deletePacient(Long id) {
        if (pacientRepository.existsById(id)) {
            Pacient pacient = pacientRepository.findPacientById(id);
            if (pacient != null) {
                pacientRepository.delete(pacient);
            } else {
                throw new RuntimeException("Pacientul cu nrCrt " + id + " nu a fost găsit");
            }
        } else {
            throw new RuntimeException("Pacientul cu nrCrt " + id + " nu a fost găsit");
        }
    }

    @Override
    public Pacient updatePacient(Long nrCrt, PacientDto pacientDto) {
        if (pacientRepository.existsById(nrCrt)) {
            Pacient pacient = pacientRepository.findPacientById(nrCrt);
            if (pacient != null) {
                pacient.setNumePrenume(pacientDto.getNumePrenume());
                pacient.setCnp(pacientDto.getCnp());
                return pacientRepository.save(pacient);
            } else {
                throw new RuntimeException("Pacientul cu nrCrt " + nrCrt + " nu a fost găsit");
            }
        } else {
            throw new RuntimeException("Pacientul cu nrCrt " + nrCrt + " nu a fost găsit");
        }
    }

    public Pacient findPacientByCnp(Long cnp){
        Pacient pacientCautat = pacientRepository.findPacientByCnp(cnp);
        //System.out.println( pacientCautat.toString());
        if(pacientCautat!=null){
            return pacientCautat;
        }
        return null;
    }
}