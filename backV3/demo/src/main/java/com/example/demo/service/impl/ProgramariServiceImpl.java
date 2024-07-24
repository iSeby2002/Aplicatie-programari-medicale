package com.example.demo.service.impl;

import com.example.demo.model.Programari;
import com.example.demo.model.SlotProgramari;
import com.example.demo.repository.PacientRepository;
import com.example.demo.repository.ProgramariRepository;
import com.example.demo.repository.SlotProgramariRepository;
import com.example.demo.service.ProgramariService;
import com.example.demo.service.SlotProgramariService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service

public class ProgramariServiceImpl implements ProgramariService{
    private final ProgramariRepository programariRepository;
    private final SlotProgramariService slotProgramariService;


    @Autowired
    public ProgramariServiceImpl(ProgramariRepository programariRepository, SlotProgramariService slotProgramariService) {
        this.programariRepository = programariRepository;
        this.slotProgramariService = slotProgramariService;
    }
   /* @Override
    public Programari saveProgramare(Programari programari) throws Exception {
        LocalDateTime startTime = programari.getSlot().getStartTime();
        Optional<SlotProgramari> optionalSlot = slotProgramariService.findByStartTime(startTime);

        if (optionalSlot.isPresent()) {
            SlotProgramari slot = optionalSlot.get();
            if (slot.isAvailable()) {
                slot.setAvailable(false);
                programari.setSlot(slot);
                slotProgramariService.save(slot);
                return programariRepository.save(programari);
            } else {
                throw new Exception("Ora aleasa nu e disponibila");
            }
        } else {
            throw new Exception("Ora aleasa nu e disponibila");
        }
    }*/
   @Override
   public Programari saveProgramare(Programari programari) throws Exception {
       return programariRepository.save(programari);
   }


}
