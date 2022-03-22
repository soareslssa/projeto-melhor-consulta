package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Especialidade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;
    private String nome;

    public Especialidade(String nome) {
        this.nome = nome;
    }

    public Especialidade() {

    }
}
