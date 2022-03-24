package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.models.Medico;
import com.soaresdev.melhorconsultaspring.repository.MedicoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicos")
@AllArgsConstructor
public class MedicoController {

    private final MedicoRepository medicoRepository;

    @GetMapping
    public List<Medico> listar(){
        return medicoRepository.findAll();
    }

    @PostMapping
    public void inserirMedico(@RequestBody Medico medico){
        this.medicoRepository.save(medico);
    }

    @GetMapping("/id")
    public Medico obterMedicoPorId(@RequestParam Long id){
         return  this.medicoRepository.getById(id);
    }


}
