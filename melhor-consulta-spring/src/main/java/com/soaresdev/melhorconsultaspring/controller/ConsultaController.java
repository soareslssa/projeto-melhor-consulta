package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.dto.ConsultaDTO;
import com.soaresdev.melhorconsultaspring.dto.GradeHorarioDTO;
import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.service.ConsultaService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/consultas")
@AllArgsConstructor
public class ConsultaController {

    private final ConsultaRepository consultaRepository;
    private final ConsultaService consultaService;

    @GetMapping
    public List<Consulta> listarTodas() {
        return consultaRepository.listarTodos();
    }

    @DeleteMapping
    public void delete(@RequestParam Long id) {
        consultaRepository.deleteById(id);
    }

    @GetMapping("/findAllByMedicoGradeSituacao")
    public List<Consulta> findAllByMedicoGradeSituacao(@RequestParam("medId") Long medId, @RequestParam(value = "gradeId", required = false) Long gradeId, @RequestParam(value = "sitCodigo", required = false) String sitCodigo) {
        return consultaService.findAllByMedicoGradeSituacao(medId, gradeId, sitCodigo);
    }

    @PostMapping("/horarios/gerar")
    public void gerarHorariosPorEspecialidade(@RequestBody GradeHorarioDTO dto) {
        consultaService.gerarConsultasPorDia(dto);
    }

    @PostMapping
    public void agendarConsulta(@RequestBody ConsultaDTO dto){
        consultaService.agendarConsulta(dto);
    }
}
