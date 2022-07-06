package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import com.soaresdev.melhorconsultaspring.service.GradeConsultaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grades")
@AllArgsConstructor
public class GradeController {

    private final GradeConsultaService gradeConsultaService;
    private final GradeRepository gradeRepository;

    @GetMapping
    public List<GradeConsulta> listar() {
        return gradeRepository.findAll();
    }

    @GetMapping("/medico")
    public List<GradeConsulta> listarPorMedico(@RequestParam("medId") Long medId) {
        return gradeRepository.findAllByMedico(medId);
    }


    @PostMapping
    public void inserirGrade(@RequestBody GradeDTO gradeDTO) {
        gradeConsultaService.save(gradeDTO);
    }

    @GetMapping("/listarPorEspecialidade")
    public List<GradeConsulta> listarPorEspecialidade(@RequestParam() Long espId) {
        return gradeRepository.findAllByEspecialidadeId(espId);
    }

    @PutMapping
    public void atualizarGrade(@RequestBody GradeConsulta grade){
        gradeRepository.save(grade);
    }
}
