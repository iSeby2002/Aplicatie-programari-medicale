package com.example.demo.controller;

import com.example.demo.dtos.*;
import com.example.demo.dtos.FiseMedicaleResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Programari;
import com.example.demo.service.FisaMedicalaService;
import com.example.demo.service.MedicService;
import com.example.demo.service.ProgramariService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/medici/fisaMedicala")

public class FisaMedicalaController {
     //private final MedicService medicService;
     //private final ProgramariService programariService;
     private final FisaMedicalaService fisaMedicalaService;

    public FisaMedicalaController( FisaMedicalaService fisaMedicalaService) {
        //this.medicService = medicService;
        //this.programariService = programariService;
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
    public ResponseEntity<FiseMedicaleResponseDTO> getRaportFise(@RequestBody long cnp){

        FiseMedicaleResponseDTO fisaMedicalaResponseDTO = fisaMedicalaService.findAllByCnp(cnp);
        if(fisaMedicalaResponseDTO.getMesaj().equals("Nu există fișă medicală pentru acest CNP!")) {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.OK);
        }

    }

    @PutMapping("/updateFisaMedicala")
    public ResponseEntity<FisaMedicalaResponseDto> updateFisaMedicala(@RequestBody FisaMedicala fisaMedicalaUpdate) {
        FisaMedicalaResponseDto responseDto = fisaMedicalaService.update(fisaMedicalaUpdate);

        if (responseDto.getMesaj().equals("Nu există fisa selectat!")) {
            return new ResponseEntity<>(responseDto, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        }
    }
}
