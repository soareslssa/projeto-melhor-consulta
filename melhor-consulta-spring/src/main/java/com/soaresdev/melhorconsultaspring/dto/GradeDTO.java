package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

import java.util.List;

@Data
public class GradeDTO {

    private Long id;
    private Integer espId;
    private Long medicoId;
    private List<String> dtConsulta;
    private String hrInicio;
    private String hrFim;
    private String tempoConsulta;
}
