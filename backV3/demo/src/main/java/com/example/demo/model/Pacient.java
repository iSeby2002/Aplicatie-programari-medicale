package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Pacient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numePrenume;
    private long cnp;

    @Override
    public String toString() {
        return "Pacient{" +
                "id=" + id +
                ", numePrenume='" + numePrenume + '\'' +
                ", cnp=" + cnp +
                '}';
    }
}
