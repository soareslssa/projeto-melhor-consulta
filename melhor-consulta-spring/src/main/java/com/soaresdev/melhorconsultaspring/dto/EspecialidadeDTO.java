package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

@Data
public class EspecialidadeDTO {

    private String sigla;
    private String descricao;
    private boolean situacao;
    private Integer medicoId;

}
