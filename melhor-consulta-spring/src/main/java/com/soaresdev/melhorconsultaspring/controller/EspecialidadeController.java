package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.models.Especialidade;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/especialidades")
@AllArgsConstructor
public class EspecialidadeController {


    private final EspecialidadeRepository especialidadeRepository;

    @GetMapping
    public List<Especialidade> listar(){
        return especialidadeRepository.findAll();
    }

    @PostMapping
    public void inserirEspecialidade(@RequestBody Especialidade novaEspecialidade){
        this.especialidadeRepository.save(novaEspecialidade);
    }

    @PutMapping
    public void atualizarEspecialidade(@RequestBody Especialidade especialidade){
        this.especialidadeRepository.save(especialidade);
    }

    @DeleteMapping
    public void removerEspecialidade(@RequestParam Integer id){
        this.especialidadeRepository.deleteById(id);
    }
}
