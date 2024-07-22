package com.example.demo.service.impl;


import com.example.demo.dtos.LoginDto;
import com.example.demo.dtos.RegisterDto;
import com.example.demo.model.Medic;
import com.example.demo.repository.MedicRepository;
import com.example.demo.service.MedicService;
import org.springframework.stereotype.Service;


@Service
public class MedicServiceImpl implements MedicService {

    private final MedicRepository medicRepository;

    public MedicServiceImpl(MedicRepository medicRepository){
        this.medicRepository = medicRepository;
    }

    @Override
    public Medic logIn(LoginDto loginDto) {
        Medic a = medicRepository.findFirstByEmail(loginDto.getEmail());
        if(loginDto.getPassword() == a.getPassword())
            return a;
        else
            return null;
    }

    @Override
    public Medic register(RegisterDto registerDto) {
        Medic medic = Medic.builder()
                .nume(registerDto.getNume())
                .prenume(registerDto.getPrenume())
                .email(registerDto.getEmail())
                .password(registerDto.getPassword())
                .phoneNumber(registerDto.getPhoneNumber())
                .role(registerDto.getRole()).build();

        medicRepository.save(medic);
        return medic;
    }

}
