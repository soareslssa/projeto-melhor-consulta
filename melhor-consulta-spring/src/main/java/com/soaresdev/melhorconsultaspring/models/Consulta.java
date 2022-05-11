package com.soaresdev.melhorconsultaspring.models;

import com.soaresdev.melhorconsultaspring.dominio.DominioSituacaoConsulta;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@Data
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToOne
    private Paciente paciente;
    @OneToOne
    private Medico medico;
    @ManyToOne
    private GradeConsulta gradeConsulta;
    private Date horarioConsulta;
    private Date dtMarcacao;
    private String situacao;


}
