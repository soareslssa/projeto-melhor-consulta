package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Especialidade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;
    private String descricao;
    @ManyToOne
    private Medico medico;
    private boolean situacao;

    public Especialidade(String descricao, Medico medico, boolean situacao) {
        this.descricao = descricao;
        this.medico = medico;
        this.situacao = situacao;
    }

    public Especialidade() {

    }
}
