package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

@Data
public class ConsultaDTO {

    private Long id;
    private Long gradeId;
    private Long pacienteId;
    private String situacao;
}
