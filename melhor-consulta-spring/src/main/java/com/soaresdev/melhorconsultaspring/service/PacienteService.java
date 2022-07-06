package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.models.Paciente;
import com.soaresdev.melhorconsultaspring.repository.PacienteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PacienteService {

    private final PacienteRepository pacienteRepository;

    public Paciente obterPacientePorId(Long id){
        return pacienteRepository.findPacienteById(id);
    }

    public void save(Paciente paciente) {
        pacienteRepository.save(paciente);
    }
}
