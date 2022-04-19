package com.soaresdev.melhorconsultaspring.dto;

import com.soaresdev.melhorconsultaspring.models.Especialidade;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class MedicoDTO {
    private String nomeSocial;
    private String nome;
    private String sobrenome;
    private String cpf;
    private String email;
    private String telefone;
    private String sexo;
    private Date dtNascimento;
    private String logradouro;
    private String nroLogradouro;
    private String complemento;
    private String cep;
    private String localidade;
    private String uf;
    private String crm;
    private List<Integer> especialidades;
}
