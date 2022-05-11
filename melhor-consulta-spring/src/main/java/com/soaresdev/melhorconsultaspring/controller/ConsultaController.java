package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consultas")
@AllArgsConstructor
public class ConsultaController {

    private final ConsultaRepository consultaRepository;
}
