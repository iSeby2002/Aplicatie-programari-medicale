package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "poze_fisa_medicala")
public class PozeFisaMedicala {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long idFisaMedicala;
    @Lob
    private Blob pozaOD;
    @Lob
    private Blob pozaOS;

    @Override
    public String toString() {
        return "PozeFisaMedicala{" +
                "id=" + id +
                ", idFisaMedicala=" + idFisaMedicala +
                ", pozaOD=" + pozaOD +
                ", pozaOS=" + pozaOS +
                '}';
    }
}
