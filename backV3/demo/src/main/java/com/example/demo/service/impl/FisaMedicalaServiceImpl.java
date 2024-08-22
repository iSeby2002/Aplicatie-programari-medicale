package com.example.demo.service.impl;

import com.example.demo.dtos.FisaMedicalaResponseDTO;
import com.example.demo.model.FisaMedicala;
import com.example.demo.model.Pacient;
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
        LocalDateTime timeCurent = startTime;
        LocalDateTime startOfDay = timeCurent.toLocalDate().atStartOfDay();
        return programariRepository.findAllByDate(startOfDay);
    }

    @Override
    public String saveFisaMedicala(FisaMedicala fisaMedicala) {
        FisaMedicala fisaMedicalaExistenta =fisaMedicalaRepository.findFisaMedicalaByProgramari(fisaMedicala.getProgramari());
        if(fisaMedicalaExistenta!=null){
            fisaMedicalaExistenta.setProgramari(fisaMedicala.getProgramari());
            fisaMedicalaExistenta.setNrCrt(fisaMedicala.getNrCrt());
            fisaMedicalaExistenta.setTip1DiabetZaharat(fisaMedicala.getTip1DiabetZaharat());
            fisaMedicalaExistenta.setTip2DiabetZaharat(fisaMedicala.getTip2DiabetZaharat());
            fisaMedicalaExistenta.setDataDiagnosticului(fisaMedicala.getDataDiagnosticului());
            fisaMedicalaExistenta.setHbA1C(fisaMedicala.getHbA1C());
            fisaMedicalaExistenta.setMaiMic6Luni(fisaMedicala.getMaiMic6Luni());
            fisaMedicalaExistenta.setMaiMare6Luni(fisaMedicala.getMaiMare6Luni());
            fisaMedicalaExistenta.setGlicemie(fisaMedicala.getGlicemie());
            fisaMedicalaExistenta.setUree(fisaMedicala.getUree());
            fisaMedicalaExistenta.setCreatinina(fisaMedicala.getCreatinina());
            fisaMedicalaExistenta.setERFG(fisaMedicala.getERFG());
            fisaMedicalaExistenta.setHta(fisaMedicala.getHta());
            fisaMedicalaExistenta.setNeuropatie(fisaMedicala.getNeuropatie());
            fisaMedicalaExistenta.setNefropatie(fisaMedicala.getNefropatie());
            fisaMedicalaExistenta.setCi(fisaMedicala.getCi());
            fisaMedicalaExistenta.setAvc(fisaMedicala.getAvc());
            fisaMedicalaExistenta.setIma(fisaMedicala.getIma());
            fisaMedicalaExistenta.setHipercolesterolemie(fisaMedicala.getHipercolesterolemie());
            fisaMedicalaExistenta.setHipertrigliceridemie(fisaMedicala.getHipertrigliceridemie());
            fisaMedicalaExistenta.setInsulina(fisaMedicala.getInsulina());
            fisaMedicalaExistenta.setAdo(fisaMedicala.getAdo());
            fisaMedicalaExistenta.setDieta(fisaMedicala.getDieta());
            fisaMedicalaExistenta.setNimic(fisaMedicala.getNimic());
            fisaMedicalaExistenta.setAcuitateVizualaOD(fisaMedicala.getAcuitateVizualaOD());
            fisaMedicalaExistenta.setAcuitateVizualaOS(fisaMedicala.getAcuitateVizualaOS());
            fisaMedicalaExistenta.setRubeozaIrianaOD(fisaMedicala.getRubeozaIrianaOD());
            fisaMedicalaExistenta.setRubeozaIrianaOS(fisaMedicala.getRubeozaIrianaOS());
            fisaMedicalaExistenta.setFaraRetinopatieDiabeticaOD(fisaMedicala.getFaraRetinopatieDiabeticaOD());
            fisaMedicalaExistenta.setFaraRetinopatieDiabeticaOS(fisaMedicala.getFaraRetinopatieDiabeticaOS());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaUsoaraOD(fisaMedicala.getRetinopatieDiabeticaNeproliferativaUsoaraOD());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaUsoaraOS(fisaMedicala.getRetinopatieDiabeticaNeproliferativaUsoaraOS());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaModerataOD(fisaMedicala.getRetinopatieDiabeticaNeproliferativaModerataOD());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaModerataOS(fisaMedicala.getRetinopatieDiabeticaNeproliferativaModerataOS());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaSeveraOD(fisaMedicala.getRetinopatieDiabeticaNeproliferativaSeveraOD());
            fisaMedicalaExistenta.setRetinopatieDiabeticaNeproliferativaSeveraOS(fisaMedicala.getRetinopatieDiabeticaNeproliferativaSeveraOS());
            fisaMedicalaExistenta.setRetinopatieDiabeticaProliferativaOD(fisaMedicala.getRetinopatieDiabeticaProliferativaOD());
            fisaMedicalaExistenta.setRetinopatieDiabeticaProliferativaOS(fisaMedicala.getRetinopatieDiabeticaProliferativaOS());
            fisaMedicalaExistenta.setEdemMacularClinicSemnificativOD(fisaMedicala.getEdemMacularClinicSemnificativOD());
            fisaMedicalaExistenta.setEdemMacularClinicSemnificativOS(fisaMedicala.getEdemMacularClinicSemnificativOS());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareLaFelOD(fisaMedicala.getComparativCuUltimaExaminareLaFelOD());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareLaFelOS(fisaMedicala.getComparativCuUltimaExaminareLaFelOS());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareMaiBineOD(fisaMedicala.getComparativCuUltimaExaminareMaiBineOD());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareMaiBineOS(fisaMedicala.getComparativCuUltimaExaminareMaiBineOS());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareMaiRauOD(fisaMedicala.getComparativCuUltimaExaminareMaiRauOD());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareMaiRauOS(fisaMedicala.getComparativCuUltimaExaminareMaiRauOS());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareNuSeCunoasteOD(fisaMedicala.getComparativCuUltimaExaminareNuSeCunoasteOD());
            fisaMedicalaExistenta.setComparativCuUltimaExaminareNuSeCunoasteOS(fisaMedicala.getComparativCuUltimaExaminareNuSeCunoasteOS());
            fisaMedicalaExistenta.setDetaliiFundDeOchi(fisaMedicala.getDetaliiFundDeOchi());
            fisaMedicalaExistenta.setAlteModalitatiOculare(fisaMedicala.getAlteModalitatiOculare());
            fisaMedicalaExistenta.setInjectieNumarOD(fisaMedicala.getInjectieNumarOD());
            fisaMedicalaExistenta.setInjectieDozaOD(fisaMedicala.getInjectieDozaOD());
            fisaMedicalaExistenta.setInjectieNumarOS(fisaMedicala.getInjectieNumarOS());
            fisaMedicalaExistenta.setInjectieDozaOS(fisaMedicala.getInjectieDozaOS());
            fisaMedicalaExistenta.setLaserOD(fisaMedicala.getLaserOD());
            fisaMedicalaExistenta.setLaserOS(fisaMedicala.getLaserOS());
            fisaMedicalaExistenta.setDiagnosticOD(fisaMedicala.getDiagnosticOD());
            fisaMedicalaExistenta.setDiagnosticOS(fisaMedicala.getDiagnosticOS());
            fisaMedicalaExistenta.setDoarMonitorizare(fisaMedicala.getDoarMonitorizare());
            fisaMedicalaExistenta.setExaminareSuplimentara(fisaMedicala.getExaminareSuplimentara());
            fisaMedicalaExistenta.setExaminareSuplimentaraField(fisaMedicala.getExaminareSuplimentaraField());
            fisaMedicalaExistenta.setTratament(fisaMedicala.getTratament());
            fisaMedicalaExistenta.setTratamentField(fisaMedicala.getTratamentField());
            fisaMedicalaExistenta.setPeste1An(fisaMedicala.getPeste1An());
            fisaMedicalaExistenta.setPesteLuni(fisaMedicala.getPesteLuni());
            fisaMedicalaExistenta.setPesteSaptamani(fisaMedicala.getPesteSaptamani());
            fisaMedicalaExistenta.setAmbulator(fisaMedicala.getAmbulator());
            fisaMedicalaExistenta.setAmbulatorLaField(fisaMedicala.getAmbulatorLaField());
            fisaMedicalaExistenta.setAmbulatorInField(fisaMedicala.getAmbulatorInField());
            fisaMedicalaExistenta.setData(fisaMedicala.getData());
            fisaMedicalaExistenta.setMedicExaminator(fisaMedicala.getMedicExaminator());
            fisaMedicalaRepository.save(fisaMedicalaExistenta);
        }else {
            fisaMedicalaRepository.save(fisaMedicala);
        }
        return "Salvare cu succes";
    }

    @Override
    public FisaMedicalaResponseDTO findAll() {
        FisaMedicalaResponseDTO fisaResponse = new FisaMedicalaResponseDTO();
        fisaResponse.setFiseMedicale((List<FisaMedicala>) fisaMedicalaRepository.findAll());
        fisaResponse.setMesaj("Succes!");
        return fisaResponse;
    }

    @Override
    public FisaMedicalaResponseDTO findAllByCnp(Long cnp){
        FisaMedicalaResponseDTO fisaResponse = new FisaMedicalaResponseDTO();
        List<FisaMedicala> fiseCautate = fisaMedicalaRepository.findByProgramari_Pacient_Cnp(cnp);
        if(!fiseCautate.isEmpty()){
            fisaResponse.setFiseMedicale(fiseCautate);
            fisaResponse.setMesaj("Succes!");
        } else {
            fisaResponse.setFiseMedicale(null);
            fisaResponse.setMesaj("Nu există fișă medicală pentru acest CNP!");
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
    public FisaMedicala findFisaMedicalaByProgramare(Programari programare) {
        Programari programareExistenta = programariRepository.findProgramariByStartTime(programare.getStartTime());
        FisaMedicala fisaMedicala = fisaMedicalaRepository.findFisaMedicalaByProgramari(programareExistenta);
        if(fisaMedicala == null){
            fisaMedicala = new FisaMedicala();
            fisaMedicala.setProgramari(programareExistenta);
        }
        return fisaMedicala;
    }
}
