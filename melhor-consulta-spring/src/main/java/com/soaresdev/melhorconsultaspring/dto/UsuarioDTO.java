package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

@Data
public class UsuarioDTO {

    private Long id;
    private String login;
    private String perfil;
    private boolean situacao;
}
