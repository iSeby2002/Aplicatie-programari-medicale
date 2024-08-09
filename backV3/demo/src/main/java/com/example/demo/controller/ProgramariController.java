package com.example.demo.controller;

import com.example.demo.dtos.IntervalDTO;
import com.example.demo.dtos.ProgramareResponseDto;
import com.example.demo.model.Programari;
import com.example.demo.service.ProgramariService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/programari")
public class ProgramariController {

    private final ProgramariService programariService;

    @Autowired
    public ProgramariController(ProgramariService programariService){
        this.programariService=programariService;
    }

    @PostMapping("/programare")
    public ResponseEntity<?> programare(@RequestBody Programari programare) {
        String mesaj = programariService.saveProgramare(programare);
        if(mesaj.equals("Programare reușită") ||
                mesaj.equals("Avertizare! Pacientul are deja o programare în această săptămână.")) {
            return new ResponseEntity<>(mesaj, HttpStatus.OK);
        }
        return new ResponseEntity<>(mesaj, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/updateProgramare")
    public ResponseEntity<ProgramareResponseDto> updateProgramare(@RequestBody Programari programareUpdate) {
        ProgramareResponseDto responseDto = programariService.update(programareUpdate);

        if (responseDto.getMesaj().equals("Nu există programarea selectat!")) {
            return new ResponseEntity<>(responseDto, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteProgramare(@RequestBody Programari programareDelete) {
        String responseMessage = programariService.delete(programareDelete);

        if (responseMessage.equals("Nu există programarea selectată!")) {
            return ResponseEntity.status(404).body(responseMessage);
        } else {
            return ResponseEntity.ok(responseMessage);
        }
    }

    @PostMapping("/getProgramariByWeek")
    public ResponseEntity<List<Programari>> getProgramariByWeek(@RequestBody LocalDate startWeek) {
        List<Programari> programari = programariService.getProgramariByWeek(startWeek);
        return new ResponseEntity<>(programari, HttpStatus.OK);
    }

    @GetMapping("/getInterval")
    public ResponseEntity<IntervalDTO> getInterval(){
        IntervalDTO i = new IntervalDTO();
        i.setStartHour(10); // ora de start a intervalului programari
        i.setEndHour(12); // ora de sfarsit a intervalului programari
        i.setLength(15); // lungimea in minute solturilor de programare
        return new ResponseEntity<>(i, HttpStatus.OK);
    }
}
