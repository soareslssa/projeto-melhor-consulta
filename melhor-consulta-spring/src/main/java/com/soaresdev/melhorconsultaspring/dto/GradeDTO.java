package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class GradeDTO {

    private Long id;
    private Integer espId;
    private Long medicoId;
    private List<Date> dtConsulta;
    private Date hrInicio;
    private Date hrFim;
}
