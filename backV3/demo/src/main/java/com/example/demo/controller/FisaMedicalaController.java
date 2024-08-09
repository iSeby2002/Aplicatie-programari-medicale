package com.example.demo.controller;

import com.example.demo.dtos.FisaMedicalaDto;
import com.example.demo.dtos.FisaMedicalaResponseDTO;
import com.example.demo.model.Programari;
import com.example.demo.service.FisaMedicalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/medici/fisaMedicala")
public class FisaMedicalaController {

    private final FisaMedicalaService fisaMedicalaService;

    @Autowired
    public FisaMedicalaController( FisaMedicalaService fisaMedicalaService) {
        this.fisaMedicalaService = fisaMedicalaService;
    }

    @PostMapping("/getProgramariCurente")
    public ResponseEntity<List<Programari>> getProgramariCurente(@RequestBody LocalDateTime data) {
        List<Programari> programari = fisaMedicalaService.findProgramariCurente(data);
        return new ResponseEntity<>(programari, HttpStatus.OK);
    }

    @PostMapping("/saveFisaMedicala")
    public ResponseEntity<String> saveFisaMedicala(@RequestBody FisaMedicalaDto fisaMedicalaDto){
        String msg = fisaMedicalaService.saveFisaMedicala(fisaMedicalaDto);
        return new ResponseEntity<>(msg,HttpStatus.OK);
    }

    @PostMapping("/getRaportFise")
    public ResponseEntity<FisaMedicalaResponseDTO> getRaportFise(@RequestBody long cnp){
        FisaMedicalaResponseDTO fisaMedicalaResponseDTO = fisaMedicalaService.findAllByCnp(cnp);
        if(fisaMedicalaResponseDTO.getMesaj().equals("Nu există fișă medicală pentru acest CNP!")) {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.OK);
        }
    }
}
