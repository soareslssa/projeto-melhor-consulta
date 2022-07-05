package com.soaresdev.melhorconsultaspring.dto;

import lombok.Data;

import java.util.List;

@Data
public class GradeHorarioDTO {

    private Long gradeId;
    private Integer espId;
    private List<String> datasDisponiveis;
}
