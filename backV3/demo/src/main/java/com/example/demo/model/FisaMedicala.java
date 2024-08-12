package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "fisa_medicala")
public class FisaMedicala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "programare_id")
    private Programari programari;

    //Box1
    private Long nrCrt;
    private Boolean tip1DiabetZaharat;
    private Boolean tip2DiabetZaharat;
    private LocalDate dataDiagnosticului;

    //box2
    private Double hbA1C;
    private Boolean maiMic6Luni;
    private Boolean maiMare6Luni;
    private Double glicemie;
    private Double uree;
    private Double creatinina;
    private Double eRFG;
    private Boolean hta;
    private Boolean neuropatie;
    private Boolean nefropatie;
    private Boolean ci;
    private Boolean avc;
    private Boolean ima;
    private Boolean hipercolesterolemie;
    private Boolean hipertrigliceridemie;
    private Boolean insulina;
    private Boolean ado;
    private Boolean dieta;
    private Boolean nimic;

    //box3
    private String acuitateVizualaOD;
    private String acuitateVizualaOS;
    private Boolean rubeozaIrianaOD;
    private Boolean rubeozaIrianaOS;
    private Boolean faraRetinopatieDiabeticaOD;
    private Boolean faraRetinopatieDiabeticaOS;
    private Boolean retinopatieDiabeticaNeproliferativaUsoaraOD;
    private Boolean retinopatieDiabeticaNeproliferativaUsoaraOS;
    private Boolean retinopatieDiabeticaNeproliferativaModerataOD;
    private Boolean retinopatieDiabeticaNeproliferativaModerataOS;
    private Boolean retinopatieDiabeticaNeproliferativaSeveraOD;
    private Boolean retinopatieDiabeticaNeproliferativaSeveraOS;
    private Boolean retinopatieDiabeticaProliferativaOD;
    private Boolean retinopatieDiabeticaProliferativaOS;
    private Boolean edemMacularClinicSemnificativOD;
    private Boolean edemMacularClinicSemnificativOS;
    private Boolean comparativCuUltimaExaminareLaFelOD;
    private Boolean comparativCuUltimaExaminareLaFelOS;
    private Boolean comparativCuUltimaExaminareMaiBineOD;
    private Boolean comparativCuUltimaExaminareMaiBineOS;
    private Boolean comparativCuUltimaExaminareMaiRauOD;
    private Boolean comparativCuUltimaExaminareMaiRauOS;
    private Boolean comparativCuUltimaExaminareNuSeCunoasteOD;
    private Boolean comparativCuUltimaExaminareNuSeCunoasteOS;
    private String detaliiFundDeOchi;
    private String alteModalitatiOculare;

    //box4
    private Long injectieNumarOD;
    private String injectieDozaOD;
    private Long injectieNumarOS;
    private String injectieDozaOS;
    private Boolean laserOD;
    private Boolean laserOS;

    //box5
    private String diagnosticOD;
    private String diagnosticOS;

    //box6
    private Boolean doarMonitorizare;
    private Boolean examinareSuplimentara;
    private String examinareSuplimentaraField;
    private Boolean tratament;
    private String tratamentField;
    private Boolean peste1An;
    private Integer pesteLuni;
    private Integer pesteSaptamani;
    private Boolean ambulator;
    private String ambulatorLaField;
    private LocalDate ambulatorInField;

    //last box
    private LocalDate data;
    private String medicExaminator;
}
