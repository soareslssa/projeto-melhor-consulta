package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@Data
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String codigo;
    private String paciente;
    @OneToOne
    private Medico medico;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ESP_ID", referencedColumnName = "ID")
    private Especialidade especialidade;
    private Date dtConsulta;
    private boolean situacao;
    private Double valor;
}
