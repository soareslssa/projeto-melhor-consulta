package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

@Data
public class GradeDTO {

    private Long id;
    private Integer espId;
    private Long medicoId;
    private Double valor;
}
