package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class GradeConsulta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;
    @OneToOne
    private Medico medico;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ESP_ID", referencedColumnName = "ID")
    private Especialidade especialidade;
    private Date criadoEm;
    private boolean situacao;
    private Double valor;
    @OneToMany
    private List<Consulta> consultas;
}
