package com.example.demo.controller;

import com.example.demo.dtos.DataProgramareDTO;
import com.example.demo.dtos.ProgramareResponseDto;
import com.example.demo.model.Programari;
import com.example.demo.service.ProgramariService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
//    @PostMapping("/generate-slots")
//    public ResponseEntity<Void> generateSlots() {
//        slotProgramariService.generareSloturiSaptamanale();
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }


   /* @PostMapping("/book")
    public ResponseEntity<?> bookAppointment(@RequestBody Programari programari) {
        try {
            Programari saveProgramare = programariService.saveProgramare(programari);
            return new ResponseEntity<>(saveProgramare, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }*/
//   @PostMapping("/book")
//   public ResponseEntity<?> bookAppointment(@RequestBody Programari programari) {
//       try {
//           // Verifică dacă slotul este valid și disponibil
//           Optional<SlotProgramari> optionalSlot = slotProgramariService.findById(programari.getSlot().getId());
//
//           if (optionalSlot.isPresent()) {
//               SlotProgramari slot = optionalSlot.get();
//               if (slot.isAvailable()) {
//                   slot.setAvailable(false);
//                   programari.setSlot(slot);
//                   slotProgramariService.save(slot);
//
//                   // Setează startTime și endTime în funcție de slot
//                   programari.setStartTime(slot.getStartTime());
//                   programari.setEndTime(slot.getEndTime());
//
//                   Programari saveProgramare = programariService.saveProgramare(programari);
//                   return new ResponseEntity<>(saveProgramare, HttpStatus.CREATED);
//               } else {
//                   return new ResponseEntity<>("Slotul nu este disponibil.", HttpStatus.BAD_REQUEST);
//               }
//           } else {
//               return new ResponseEntity<>("Slotul nu există.", HttpStatus.BAD_REQUEST);
//           }
//       } catch (Exception e) {
//           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//       }
//   }


    @PostMapping("/programare")
    public ResponseEntity<?> programare(@RequestBody Programari programare) {
       String mesaj = programariService.saveProgramare(programare);
       if(mesaj.equals("Programare reușită")) {
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

}
