package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Medico{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nomeSocial;
    private String nome;
    private String sobrenome;
    private String cpf;
    private String email;
    private String celular;
    private String sexo;
    private Date dtNascimento;
    private String logradouro;
    private String nroLogradouro;
    private String cep;
    private String cidade;
    private String estado;
    private String cnpj;
    private String crm;
    private Date dtInicio;
    @OneToMany
    private List<GradeConsulta> gradeConsultas;
    @OneToMany(mappedBy = "medico")
    private List<Especialidade> especialidades;
    private boolean situacao;
    private Integer notaAvaliacao;
}
