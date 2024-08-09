package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "fisa_medicala")
public class FisaMedicala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //Box1
    @ManyToOne
    @JoinColumn(name = "programare_id")
    private Programari programari;
    private long nrCrt;
    private String tipDiabetZaharat;
    private String diabetZaharat;
    private LocalDate dataDiagnosticului;
    //box2
    private double HbA1C;
    private String tipHbA1C;//luni

    private double glicemie;
    private double uree;
    private double creatinina;
    private double eRFG;
    private boolean hta;
    private boolean neuropatie;
    private boolean nefropatie;
    private boolean ci;
    private boolean avc;
    private boolean ima;
    private boolean hipercolesterolomie;

    private boolean hipertrigliceridemie;
    private boolean insulina;
    private boolean ado;
    private boolean dieta;
    private boolean nimic;

    //box3
    private String detaliiFundDeOchi;
    private String alteModalitatiOculare;
    private double acuitateVizualaOD;
    private double acuitateVizualaOS;
    private boolean rubeozaIrianaOD;
    private boolean rubeozaIrianaOS;

    private boolean faraRetinopatieDiabeticaOD;
    private boolean faraRetinopatieDiabeticaOS;

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

    //box4
    private double injectieNumarOS;
    private double injectieDozaOS;
    private double injectieNumarOD;
    private double injectieDozaOD;
    private String laserOD;
    private String laserOS;
    //box5
    private String diagnosticOD;
    private String diagnosticOS;
    //box6
    private String recomandare;
    private String recomandareField;
    private boolean tratament;
    private String tratamentField;

    private boolean peste1An;
    private double pesteLuni;
    private double pesteSaptamani;

    private boolean ambulator;
    private String ambulatorLaField;
    private String ambulatorInField;

    private LocalDate data;
    private String MedicExaminator;

    @Override
    public String toString() {
        return "FisaMedicala{" +
                "id=" + id +
                ", programari=" + programari +
                ", nrCrt=" + nrCrt +
                ", tipDiabetZaharat='" + tipDiabetZaharat + '\'' +
                ", diabetZaharat='" + diabetZaharat + '\'' +
                ", dataDiagnosticului=" + dataDiagnosticului +
                ", HbA1C=" + HbA1C +
                ", tipHbA1C='" + tipHbA1C + '\'' +
                ", glicemie=" + glicemie +
                ", uree=" + uree +
                ", creatinina=" + creatinina +
                ", eRFG=" + eRFG +
                ", hta=" + hta +
                ", neuropatie=" + neuropatie +
                ", nefropatie=" + nefropatie +
                ", ci=" + ci +
                ", avc=" + avc +
                ", ima=" + ima +
                ", hipercolesterolomie=" + hipercolesterolomie +
                ", hipertrigliceridemie=" + hipertrigliceridemie +
                ", insulina=" + insulina +
                ", ado=" + ado +
                ", dieta=" + dieta +
                ", nimic=" + nimic +
                ", detaliiFundDeOchi='" + detaliiFundDeOchi + '\'' +
                ", alteModalitatiOculare='" + alteModalitatiOculare + '\'' +
                ", acuitateVizualaOD=" + acuitateVizualaOD +
                ", acuitateVizualaOS=" + acuitateVizualaOS +
                ", rubeozaIrianaOD=" + rubeozaIrianaOD +
                ", rubeozaIrianaOS=" + rubeozaIrianaOS +
                ", faraRetinopatieDiabeticaOD=" + faraRetinopatieDiabeticaOD +
                ", faraRetinopatieDiabeticaOS=" + faraRetinopatieDiabeticaOS +
                ", retinopatieDiabeticaNeproliferativaUsoaraOD=" + retinopatieDiabeticaNeproliferativaUsoaraOD +
                ", retinopatieDiabeticaNeproliferativaUsoaraOS=" + retinopatieDiabeticaNeproliferativaUsoaraOS +
                ", retinopatieDiabeticaNeproliferativaMedieOD=" + retinopatieDiabeticaNeproliferativaMedieOD +
                ", retinopatieDiabeticaNeproliferativaMedieOS=" + retinopatieDiabeticaNeproliferativaMedieOS +
                ", retinopatieDiabeticaNeproliferativaSeveraOD=" + retinopatieDiabeticaNeproliferativaSeveraOD +
                ", retinopatieDiabeticaNeproliferativaSeveraOS=" + retinopatieDiabeticaNeproliferativaSeveraOS +
                ", retinopatieDiabeticaProliferativaOD=" + retinopatieDiabeticaProliferativaOD +
                ", retinopatieDiabeticaProliferativaOS=" + retinopatieDiabeticaProliferativaOS +
                ", edemMacularClinicSemnificativOD=" + edemMacularClinicSemnificativOD +
                ", edemMacularClinicSemnificativOS=" + edemMacularClinicSemnificativOS +
                ", comparativCuUltimaExaminareLaFelOD=" + comparativCuUltimaExaminareLaFelOD +
                ", comparativCuUltimaExaminareLaFelOS=" + comparativCuUltimaExaminareLaFelOS +
                ", comparativCuUltimaExaminareMaiBineOS=" + comparativCuUltimaExaminareMaiBineOS +
                ", comparativCuUltimaExaminareMaiBineOD=" + comparativCuUltimaExaminareMaiBineOD +
                ", comparativCuUltimaExaminareMaiRauOD=" + comparativCuUltimaExaminareMaiRauOD +
                ", comparativCuUltimaExaminareMaiRauOS=" + comparativCuUltimaExaminareMaiRauOS +
                ", comparativCuUltimaExaminareNuSeCunoasteOD=" + comparativCuUltimaExaminareNuSeCunoasteOD +
                ", comparativCuUltimaExaminareNuSeCunoasteOS=" + comparativCuUltimaExaminareNuSeCunoasteOS +
                ", injectieNumarOS=" + injectieNumarOS +
                ", injectieDozaOS=" + injectieDozaOS +
                ", injectieNumarOD=" + injectieNumarOD +
                ", injectieDozaOD=" + injectieDozaOD +
                ", laserOD='" + laserOD + '\'' +
                ", laserOS='" + laserOS + '\'' +
                ", diagnosticOD='" + diagnosticOD + '\'' +
                ", diagnosticOS='" + diagnosticOS + '\'' +
                ", recomandare='" + recomandare + '\'' +
                ", recomandareField='" + recomandareField + '\'' +
                ", tratament=" + tratament +
                ", tratamentField='" + tratamentField + '\'' +
                ", peste1An=" + peste1An +
                ", pesteLuni=" + pesteLuni +
                ", pesteSaptamani=" + pesteSaptamani +
                ", ambulator=" + ambulator +
                ", ambulatorLaField='" + ambulatorLaField + '\'' +
                ", ambulatorInField='" + ambulatorInField + '\'' +
                ", data=" + data +
                ", MedicExaminator='" + MedicExaminator + '\'' +
                '}';
    }
}
