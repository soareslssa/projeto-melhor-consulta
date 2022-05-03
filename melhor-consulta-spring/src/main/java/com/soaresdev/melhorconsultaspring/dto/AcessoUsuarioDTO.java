package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

import java.util.Date;

@Data
public class AcessoUsuarioDTO {

    private String nome;
    private String sobrenome;
    private String email;
    private String senha;
    private String sexo;
    private Date dtNascimento;
}
