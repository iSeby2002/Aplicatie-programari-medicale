package com.example.demo.controller;

import com.example.demo.dtos.FisaMedicalaDTO;
import com.example.demo.dtos.FisaMedicalaResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.PozeFisaMedicala;
import com.example.demo.model.Programari;
import com.example.demo.service.FisaMedicalaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
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
    public ResponseEntity<FisaMedicalaDTO> saveFisaMedicala(@RequestBody FisaMedicala fisaMedicala){
        FisaMedicalaDTO fisaMedicalaDTO = fisaMedicalaService.saveFisaMedicala(fisaMedicala);
        return new ResponseEntity<>(fisaMedicalaDTO, HttpStatus.OK);
    }

    @PostMapping("/savePozaODInFisaMedicala")
    public ResponseEntity<String> savePozaODInFisaMedicala(@RequestPart("idFisa") String idFisa,
                                                           @RequestPart("pozaOD") MultipartFile pozaOD) throws IOException, SQLException {
        if(!pozaOD.isEmpty()){
            byte[] bytesOD = pozaOD.getBytes();
            Blob blobOD = new javax.sql.rowset.serial.SerialBlob(bytesOD);

            String msg = fisaMedicalaService.savePozaODInFisaMedicala(Long.valueOf(idFisa), blobOD);
            return new ResponseEntity<>(msg,HttpStatus.OK);
        }

        return new ResponseEntity<>("Eroare",HttpStatus.OK);
    }

    @GetMapping("/{id}/downloadPozaOD")
    public ResponseEntity<byte[]> downloadPozaOD(@PathVariable Long id) throws SQLException {
        PozeFisaMedicala entity = fisaMedicalaService.findPozeFisaMedicalaByIdFisaMedicala(id);
        if(entity == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }else{
            if(entity.getPozaOD() == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }else {
                byte[] imageBytes = null;
                imageBytes = entity.getPozaOD().getBytes(1, (int) entity.getPozaOD().length());
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
            }
        }
    }

    @PostMapping("/savePozaOSInFisaMedicala")
    public ResponseEntity<String> savePozaOSInFisaMedicala(@RequestPart("idFisa") String idFisa,
                                                           @RequestPart("pozaOS") MultipartFile pozaOS) throws IOException, SQLException {
        if(!pozaOS.isEmpty()){
            byte[] bytesOS = pozaOS.getBytes();
            Blob blobOS = new javax.sql.rowset.serial.SerialBlob(bytesOS);

            String msg = fisaMedicalaService.savePozaOSInFisaMedicala(Long.valueOf(idFisa), blobOS);
            return new ResponseEntity<>(msg,HttpStatus.OK);
        }

        return new ResponseEntity<>("Eroare",HttpStatus.OK);
    }

    @GetMapping("/{id}/downloadPozaOS")
    public ResponseEntity<byte[]> downloadPozaOS(@PathVariable Long id) throws SQLException {
        PozeFisaMedicala entity = fisaMedicalaService.findPozeFisaMedicalaByIdFisaMedicala(id);
        if(entity == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }else{
            if(entity.getPozaOS() == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }else {
                byte[] imageBytes = null;
                imageBytes = entity.getPozaOS().getBytes(1, (int) entity.getPozaOS().length());
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
            }
        }
    }

    @GetMapping("/getRaportFise")
    public ResponseEntity<FisaMedicalaResponseDTO> getRaportFise(){
        FisaMedicalaResponseDTO fisaMedicalaResponseDTO = fisaMedicalaService.findAll();
        return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.OK);
    }

    @PostMapping("/getRaportFiseByCNP")
    public ResponseEntity<FisaMedicalaResponseDTO> getRaportFise(@RequestBody Long cnp){
        FisaMedicalaResponseDTO fisaMedicalaResponseDTO = fisaMedicalaService.findAllByCnp(cnp);
        if(fisaMedicalaResponseDTO.getMesaj().equals("Nu există fișă medicală pentru acest CNP!")) {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(fisaMedicalaResponseDTO, HttpStatus.OK);
        }
    }

    @PostMapping("/getFisaMedicalaByProgramare")
    public ResponseEntity<FisaMedicala> getFisaMedicalaByProgramare(@RequestBody Programari programare) {
        FisaMedicala fisaMedicala = fisaMedicalaService.findFisaMedicalaByProgramare(programare);
        return new ResponseEntity<>(fisaMedicala, HttpStatus.OK);
    }
}
