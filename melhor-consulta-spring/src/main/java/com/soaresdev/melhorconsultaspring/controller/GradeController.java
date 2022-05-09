package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.service.GradeConsultaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/grades")
@AllArgsConstructor
public class GradeController {

    private final GradeConsultaService service;

    @PostMapping
    public void inserirGrade(@RequestBody GradeDTO gradeDTO){
        service.save(gradeDTO);
    }
}
