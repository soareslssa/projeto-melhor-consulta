package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Especialidade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;
    private String sigla;
    private String descricao;
    private boolean situacao;
    @ManyToOne
    private Medico medico;

    public Especialidade(String sigla, String descricao, boolean situacao) {
        this.sigla = sigla;
        this.descricao = descricao;
        this.situacao = situacao;
    }

    public Especialidade() {

    }
}
