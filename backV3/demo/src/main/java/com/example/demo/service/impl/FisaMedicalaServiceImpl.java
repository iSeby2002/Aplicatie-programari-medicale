package com.example.demo.service.impl;

import com.example.demo.dtos.*;
import com.example.demo.dtos.FisaMedicalaResponseDto;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Pacient;
import com.example.demo.model.Programari;
import com.example.demo.repository.FisaMedicalaRepository;
import com.example.demo.repository.ProgramariRepository;
import com.example.demo.service.FisaMedicalaService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FisaMedicalaServiceImpl implements FisaMedicalaService {
    private final ProgramariRepository programariRepository;
    private final FisaMedicalaRepository fisaMedicalaRepository;

    public FisaMedicalaServiceImpl(ProgramariRepository programariRepository, FisaMedicalaRepository fisaMedicalaRepository) {
        this.programariRepository = programariRepository;
        this.fisaMedicalaRepository = fisaMedicalaRepository;
    }

    @Override
    public List<Programari> findProgramariCurente(LocalDateTime startTime) {
        LocalDateTime timeCurent=startTime;
        /*Iterable<Programari> allProgramari= programariRepository.findAll();
        List<Programari> programariCurente= StreamSupport.stream(allProgramari.spliterator(),false)
                .filter(programari->programari.getStartTime().toLocalDate().equals(dataCurenta)).collect(Collectors.toList());
        return programariCurente;*/
        LocalDateTime startOfDay = timeCurent.toLocalDate().atStartOfDay();

        //Poate trebe si end,vedem

        return programariRepository.findAllByDate(startOfDay);

    }

    @Override
    public String saveFisaMedicala(FisaMedicalaDto fisaMedicalaDto) {
        Programari programari= programariRepository.findProgramariById(fisaMedicalaDto.getIdProgramare());

        FisaMedicala fisaMedicala = FisaMedicala.builder()
                .programari(programari)
                .nrCrt(fisaMedicalaDto.getNrCrt())
                .tipDiabetZaharat(fisaMedicalaDto.getTipDiabetZaharat())
                .diabetZaharat(fisaMedicalaDto.getDiabetZaharat())
                .dataDiagnosticului(fisaMedicalaDto.getDataDiagnosticului())
                .HbA1C(fisaMedicalaDto.getHbA1C())
                .tipHbA1C(fisaMedicalaDto.getTipHbA1C())
                .glicemie(fisaMedicalaDto.getGlicemie())
                .uree(fisaMedicalaDto.getUree())
                .creatinina(fisaMedicalaDto.getCreatinina())
                .eRFG(fisaMedicalaDto.getERFG())
                .hta(fisaMedicalaDto.isHta())
                .neuropatie(fisaMedicalaDto.isNeuropatie())
                .nefropatie(fisaMedicalaDto.isNefropatie())
                .ci(fisaMedicalaDto.isCi())
                .avc(fisaMedicalaDto.isAvc())
                .ima(fisaMedicalaDto.isIma())
                .hipercolesterolomie(fisaMedicalaDto.isHipercolesterolomie())
                .hipertrigliceridemie(fisaMedicalaDto.isHipertrigliceridemie())
                .insulina(fisaMedicalaDto.isInsulina())
                .ado(fisaMedicalaDto.isAdo())
                .dieta(fisaMedicalaDto.isDieta())
                .nimic(fisaMedicalaDto.isNimic())
                .detaliiFundDeOchi(fisaMedicalaDto.getDetaliiFundDeOchi())
                .alteModalitatiOculare(fisaMedicalaDto.getAlteModalitatiOculare())
                .acuitateVizualaOD(fisaMedicalaDto.getAcuitateVizualaOD())
                .acuitateVizualaOS(fisaMedicalaDto.getAcuitateVizualaOS())
                .rubeozaIrianaOD(fisaMedicalaDto.isRubeozaIrianaOD())
                .rubeozaIrianaOS(fisaMedicalaDto.isRubeozaIrianaOS())
                .faraRetinopatieDiabeticaOD(fisaMedicalaDto.isFaraRetinopatieDiabeticaOD())
                .faraRetinopatieDiabeticaOS(fisaMedicalaDto.isFaraRetinopatieDiabeticaOS())
                .retinopatieDiabeticaNeproliferativaUsoaraOD(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaUsoaraOD())
                .retinopatieDiabeticaNeproliferativaUsoaraOS(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaUsoaraOS())
                .retinopatieDiabeticaNeproliferativaMedieOD(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaMedieOD())
                .retinopatieDiabeticaNeproliferativaMedieOS(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaMedieOS())
                .retinopatieDiabeticaNeproliferativaSeveraOD(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaSeveraOD())
                .retinopatieDiabeticaNeproliferativaSeveraOS(fisaMedicalaDto.isRetinopatieDiabeticaNeproliferativaSeveraOS())
                .retinopatieDiabeticaProliferativaOD(fisaMedicalaDto.isRetinopatieDiabeticaProliferativaOD())
                .retinopatieDiabeticaProliferativaOS(fisaMedicalaDto.isRetinopatieDiabeticaProliferativaOS())
                .edemMacularClinicSemnificativOD(fisaMedicalaDto.isEdemMacularClinicSemnificativOD())
                .edemMacularClinicSemnificativOS(fisaMedicalaDto.isEdemMacularClinicSemnificativOS())
                .comparativCuUltimaExaminareLaFelOD(fisaMedicalaDto.isComparativCuUltimaExaminareLaFelOD())
                .comparativCuUltimaExaminareLaFelOS(fisaMedicalaDto.isComparativCuUltimaExaminareLaFelOS())
                .comparativCuUltimaExaminareMaiBineOS(fisaMedicalaDto.isComparativCuUltimaExaminareMaiBineOS())
                .comparativCuUltimaExaminareMaiBineOD(fisaMedicalaDto.isComparativCuUltimaExaminareMaiBineOD())
                .comparativCuUltimaExaminareMaiRauOD(fisaMedicalaDto.isComparativCuUltimaExaminareMaiRauOD())
                .comparativCuUltimaExaminareMaiRauOS(fisaMedicalaDto.isComparativCuUltimaExaminareMaiRauOS())
                .comparativCuUltimaExaminareNuSeCunoasteOD(fisaMedicalaDto.isComparativCuUltimaExaminareNuSeCunoasteOD())
                .comparativCuUltimaExaminareNuSeCunoasteOS(fisaMedicalaDto.isComparativCuUltimaExaminareNuSeCunoasteOS())
                .injectieNumarOS(fisaMedicalaDto.getInjectieNumarOS())
                .injectieDozaOS(fisaMedicalaDto.getInjectieDozaOS())
                .injectieNumarOD(fisaMedicalaDto.getInjectieNumarOD())
                .injectieDozaOD(fisaMedicalaDto.getInjectieDozaOD())
                .laserOD(fisaMedicalaDto.getLaserOD())
                .laserOS(fisaMedicalaDto.getLaserOS())
                .diagnosticOD(fisaMedicalaDto.getDiagnosticOD())
                .diagnosticOS(fisaMedicalaDto.getDiagnosticOS())
                .recomandare(fisaMedicalaDto.getRecomandare())
                .recomandareField(fisaMedicalaDto.getRecomandareField())
                .tratament(fisaMedicalaDto.isTratament())
                .tratamentField(fisaMedicalaDto.getTratamentField())
                .peste1An(fisaMedicalaDto.isPeste1An())
                .pesteLuni(fisaMedicalaDto.getPesteLuni())
                .pesteSaptamani(fisaMedicalaDto.getPesteSaptamani())
                .ambulator(fisaMedicalaDto.isAmbulator())
                .ambulatorLaField(fisaMedicalaDto.getAmbulatorLaField())
                .ambulatorInField(fisaMedicalaDto.getAmbulatorInField())
                .data(fisaMedicalaDto.getData())
                .MedicExaminator(fisaMedicalaDto.getMedicExaminator())
                .build();

       // System.out.println(fisaMedicala);

        fisaMedicalaRepository.save(fisaMedicala);
        return "Salvare cu succes";
    }

    public FiseMedicaleResponseDTO findAllByCnp(long cnp){
        FiseMedicaleResponseDTO fisaResponse = new FiseMedicaleResponseDTO();
        if(cnp==0){
            fisaResponse.setFiseMedicale((List<FisaMedicala>) fisaMedicalaRepository.findAll());
            fisaResponse.setMesaj("Succes1!");
        }
        else
        {
            List<FisaMedicala> fiseCautate = fisaMedicalaRepository.findByProgramari_Pacient_Cnp(cnp);
            System.out.println(fiseCautate);
            if(!fiseCautate.isEmpty()){
                fisaResponse.setFiseMedicale(fiseCautate);
                fisaResponse.setMesaj("Succes2!");
            }
            else
            {
                fisaResponse.setFiseMedicale(null);
                fisaResponse.setMesaj("Nu există fișă medicală pentru acest CNP!");
            }
        }


        return fisaResponse;

    }

    @Override
    public FisaMedicalaResponseDto update(FisaMedicala fisaUpdate) {
        FisaMedicalaResponseDto fisaMedicalaResponseDto = new FisaMedicalaResponseDto();
        fisaMedicalaResponseDto.setMesaj("");

        FisaMedicala fisaMedicala = fisaMedicalaRepository.findFisaMedicalaById(fisaUpdate.getId());
        if (fisaMedicala == null) {
            fisaMedicalaResponseDto.setFiseMedicale(null);
            fisaMedicalaResponseDto.setMesaj("Nu există fisa selectat!");
        } else {
            // Setare atribute Box 1
            fisaMedicala.setId(fisaUpdate.getId());
            fisaMedicala.setNrCrt(fisaUpdate.getNrCrt());
            fisaMedicala.setTipDiabetZaharat(fisaUpdate.getTipDiabetZaharat());
            fisaMedicala.setDiabetZaharat(fisaUpdate.getDiabetZaharat());
            fisaMedicala.setDataDiagnosticului(fisaUpdate.getDataDiagnosticului());

// Setare atribute Box 2
            fisaMedicala.setHbA1C(fisaUpdate.getHbA1C());
            fisaMedicala.setTipHbA1C(fisaUpdate.getTipHbA1C());
            fisaMedicala.setGlicemie(fisaUpdate.getGlicemie());
            fisaMedicala.setUree(fisaUpdate.getUree());
            fisaMedicala.setCreatinina(fisaUpdate.getCreatinina());
            fisaMedicala.setERFG(fisaUpdate.getERFG());
            fisaMedicala.setHta(fisaUpdate.isHta());
            fisaMedicala.setNeuropatie(fisaUpdate.isNeuropatie());
            fisaMedicala.setNefropatie(fisaUpdate.isNefropatie());
            fisaMedicala.setCi(fisaUpdate.isCi());
            fisaMedicala.setAvc(fisaUpdate.isAvc());
            fisaMedicala.setIma(fisaUpdate.isIma());
            fisaMedicala.setHipercolesterolomie(fisaUpdate.isHipercolesterolomie());
            fisaMedicala.setHipertrigliceridemie(fisaUpdate.isHipertrigliceridemie());
            fisaMedicala.setInsulina(fisaUpdate.isInsulina());
            fisaMedicala.setAdo(fisaUpdate.isAdo());
            fisaMedicala.setDieta(fisaUpdate.isDieta());
            fisaMedicala.setNimic(fisaUpdate.isNimic());

// Setare atribute Box 3
            fisaMedicala.setDetaliiFundDeOchi(fisaUpdate.getDetaliiFundDeOchi());
            fisaMedicala.setAlteModalitatiOculare(fisaUpdate.getAlteModalitatiOculare());
            fisaMedicala.setAcuitateVizualaOD(fisaUpdate.getAcuitateVizualaOD());
            fisaMedicala.setAcuitateVizualaOS(fisaUpdate.getAcuitateVizualaOS());
            fisaMedicala.setRubeozaIrianaOD(fisaUpdate.isRubeozaIrianaOD());
            fisaMedicala.setRubeozaIrianaOS(fisaUpdate.isRubeozaIrianaOS());
            fisaMedicala.setFaraRetinopatieDiabeticaOD(fisaUpdate.isFaraRetinopatieDiabeticaOD());
            fisaMedicala.setFaraRetinopatieDiabeticaOS(fisaUpdate.isFaraRetinopatieDiabeticaOS());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaUsoaraOD(fisaUpdate.isRetinopatieDiabeticaNeproliferativaUsoaraOD());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaUsoaraOS(fisaUpdate.isRetinopatieDiabeticaNeproliferativaUsoaraOS());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaMedieOD(fisaUpdate.isRetinopatieDiabeticaNeproliferativaMedieOD());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaMedieOS(fisaUpdate.isRetinopatieDiabeticaNeproliferativaMedieOS());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaSeveraOD(fisaUpdate.isRetinopatieDiabeticaNeproliferativaSeveraOD());
            fisaMedicala.setRetinopatieDiabeticaNeproliferativaSeveraOS(fisaUpdate.isRetinopatieDiabeticaNeproliferativaSeveraOS());
            fisaMedicala.setRetinopatieDiabeticaProliferativaOD(fisaUpdate.isRetinopatieDiabeticaProliferativaOD());
            fisaMedicala.setRetinopatieDiabeticaProliferativaOS(fisaUpdate.isRetinopatieDiabeticaProliferativaOS());
            fisaMedicala.setEdemMacularClinicSemnificativOD(fisaUpdate.isEdemMacularClinicSemnificativOD());
            fisaMedicala.setEdemMacularClinicSemnificativOS(fisaUpdate.isEdemMacularClinicSemnificativOS());
            fisaMedicala.setComparativCuUltimaExaminareLaFelOD(fisaUpdate.isComparativCuUltimaExaminareLaFelOD());
            fisaMedicala.setComparativCuUltimaExaminareLaFelOS(fisaUpdate.isComparativCuUltimaExaminareLaFelOS());
            fisaMedicala.setComparativCuUltimaExaminareMaiBineOD(fisaUpdate.isComparativCuUltimaExaminareMaiBineOD());
            fisaMedicala.setComparativCuUltimaExaminareMaiBineOS(fisaUpdate.isComparativCuUltimaExaminareMaiBineOS());
            fisaMedicala.setComparativCuUltimaExaminareMaiRauOD(fisaUpdate.isComparativCuUltimaExaminareMaiRauOD());
            fisaMedicala.setComparativCuUltimaExaminareMaiRauOS(fisaUpdate.isComparativCuUltimaExaminareMaiRauOS());
            fisaMedicala.setComparativCuUltimaExaminareNuSeCunoasteOD(fisaUpdate.isComparativCuUltimaExaminareNuSeCunoasteOD());
            fisaMedicala.setComparativCuUltimaExaminareNuSeCunoasteOS(fisaUpdate.isComparativCuUltimaExaminareNuSeCunoasteOS());

// Setare atribute Box 4
            fisaMedicala.setInjectieNumarOS(fisaUpdate.getInjectieNumarOS());
            fisaMedicala.setInjectieDozaOS(fisaUpdate.getInjectieDozaOS());
            fisaMedicala.setInjectieNumarOD(fisaUpdate.getInjectieNumarOD());
            fisaMedicala.setInjectieDozaOD(fisaUpdate.getInjectieDozaOD());
            fisaMedicala.setLaserOD(fisaUpdate.getLaserOD());
            fisaMedicala.setLaserOS(fisaUpdate.getLaserOS());

// Setare atribute Box 5
            fisaMedicala.setDiagnosticOD(fisaUpdate.getDiagnosticOD());
            fisaMedicala.setDiagnosticOS(fisaUpdate.getDiagnosticOS());

// Setare atribute Box 6
            fisaMedicala.setRecomandare(fisaUpdate.getRecomandare());
            fisaMedicala.setRecomandareField(fisaUpdate.getRecomandareField());
            fisaMedicala.setTratament(fisaUpdate.isTratament());
            fisaMedicala.setTratamentField(fisaUpdate.getTratamentField());
            fisaMedicala.setPeste1An(fisaUpdate.isPeste1An());
            fisaMedicala.setPesteLuni(fisaUpdate.getPesteLuni());
            fisaMedicala.setPesteSaptamani(fisaUpdate.getPesteSaptamani());
            fisaMedicala.setAmbulator(fisaUpdate.isAmbulator());
            fisaMedicala.setAmbulatorLaField(fisaUpdate.getAmbulatorLaField());
            fisaMedicala.setAmbulatorInField(fisaUpdate.getAmbulatorInField());

// Setare alte atribute
            fisaMedicala.setData(fisaUpdate.getData());
            fisaMedicala.setMedicExaminator(fisaUpdate.getMedicExaminator());

            fisaMedicalaRepository.save(fisaMedicala);
            fisaMedicalaResponseDto.setFiseMedicale(fisaMedicala);
            fisaMedicalaResponseDto.setMesaj("Update realizat cu succes!");
            }
        return fisaMedicalaResponseDto;
    }
}
