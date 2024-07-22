package com.example.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FisaMedicalaDto {

    private String hba1C;
    private String durata;

    private long glicemie;
    private long uree;
    private long creatinina;
    private long erfg;
    private long hta;
    private long neuropatie;
    private long nefropatie;
    private long ci;
    private long avc;
    private long ima;
    private long hipercolesterolomie;

    private long hipertrigliceridemie;
    private String tratamentDiabetInPrezent;


    private String detaliiFundDeOchi;
    private String alteModalitatiOculare;
    private boolean acuitateVizualaOD;
    private boolean acuitateVizualaOS;
    private boolean rubeozaIrianaOD;
    private boolean rubeozaIrianaOS;

    private boolean retinopatieDiabeticaNeproliferativaUsoaraOD;
    private boolean retinopatieDiabeticaNeproliferativaUsoaraOS;
    private boolean retinopatieDiabeticaNeproliferativaMedieOD;
    private boolean retinopatieDiabeticaNeproliferativaMedieOS;
    private boolean retinopatieDiabeticaNeproliferativaSeveraOD;
    private boolean retinopatieDiabeticaNeproliferativaSeveraOS;
    private boolean retinopatieDiabeticaProliferativaOD;

    private boolean retinopatieDiabeticaProliferativaOS;

    private boolean edemMacularClinicSemnificativOD;
    private boolean edemMacularClinicSemnificativOS;

    private boolean comparativCuUltimaExaminareLaFelOD;
    private boolean comparativCuUltimaExaminareLaFelOS;

    private boolean comparativCuUltimaExaminareMaiBineOS;
    private boolean comparativCuUltimaExaminareMaiBineOD;
    private boolean comparativCuUltimaExaminareMaiRauOD;
    private boolean comparativCuUltimaExaminareMaiRauOS;
    private boolean comparativCuUltimaExaminareNuSeCunoasteOD;
    private boolean comparativCuUltimaExaminareNuSeCunoasteOS;

    private boolean injectieOS;
    private boolean injectieOD;
    private boolean laserOD;
    private boolean laserOS;
    private String diagnosticOD;
    private String diagnosticOS;

    private String recomandari;
    private String urmatorulControl;
    private LocalDate data;
    private String MedicExaminator;
}
