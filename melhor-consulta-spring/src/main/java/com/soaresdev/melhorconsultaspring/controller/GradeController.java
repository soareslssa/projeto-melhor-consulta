package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import com.soaresdev.melhorconsultaspring.service.GradeConsultaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/api/grades")
@AllArgsConstructor
public class GradeController {

    private final GradeConsultaService gradeConsultaService;
    private final GradeRepository gradeRepository;

    @GetMapping
    public List<GradeConsulta> listar(){
        return gradeRepository.findAll();
    }


    @PostMapping
    public void inserirGrade(@RequestBody GradeDTO gradeDTO) throws ParseException {
        gradeConsultaService.save(gradeDTO);
    }

    @GetMapping("/listarPorEspecialidade")
    public List<GradeConsulta> listarPorEspecialidade(@RequestParam() Long espId){
        return gradeRepository.findAllByEspecialidadeId(espId);
    }
}
