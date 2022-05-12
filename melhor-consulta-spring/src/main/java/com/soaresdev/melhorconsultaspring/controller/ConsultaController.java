package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/consultas")
@AllArgsConstructor
public class ConsultaController {

    private final ConsultaRepository consultaRepository;

    @GetMapping
    public List<Consulta> listarTodas(){
        return consultaRepository.listarTodos();
    }
}
