package com.example.demo.service.impl;

import com.example.demo.dtos.FisaMedicalaDto;
import com.example.demo.dtos.FisaMedicalaResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Programari;
import com.example.demo.repository.FisaMedicalaRepository;
import com.example.demo.repository.ProgramariRepository;
import com.example.demo.service.FisaMedicalaService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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

    public FisaMedicalaResponseDTO findAllByCnp(long cnp){
        FisaMedicalaResponseDTO fisaResponse = new FisaMedicalaResponseDTO();
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
}
