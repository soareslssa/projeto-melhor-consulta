package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String sobrenome;
    private String email;
    private String senha;
    private String sexo;
    private Date dtNascimento;
    private String perfil;
    private boolean situacao;
    private Date dtInicio;
}
