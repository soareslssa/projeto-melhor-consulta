package com.soaresdev.melhorconsultaspring.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String cnpj;
    private String crm;
    private Date dtInicio;
    private Date dtNascimento;
    private String endereco;
    @OneToMany
    private List<Consulta> consultas;
    private boolean situacao;
}
