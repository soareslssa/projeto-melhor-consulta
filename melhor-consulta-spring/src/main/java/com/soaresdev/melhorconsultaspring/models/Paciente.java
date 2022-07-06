package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
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
    @OneToMany
    private List<Consulta> horarioConsultas;




}
