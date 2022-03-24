package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.repository.HorarioConsultaRepository;
import lombok.AllArgsConstructor;
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
    private final HorarioConsultaRepository horarioConsultaRepository;

    @GetMapping
    public List<GradeConsulta> listar(){
        return consultaRepository.findAll();
    }

    @GetMapping("/listarPorEspecialidade")
    public List<GradeConsulta> listarPorEspecialidade(@RequestParam() Long espId){
        return consultaRepository.findAllByEspecialidadeId(espId);
    }

    @PostMapping("/agendarHorario")
    public void agendarHorarioConsulta(@RequestBody Consulta horarioConsulta){
        this.horarioConsultaRepository.save(horarioConsulta);
    }
}
