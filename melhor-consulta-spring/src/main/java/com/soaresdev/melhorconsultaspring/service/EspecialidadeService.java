package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.models.Especialidade;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EspecialidadeService {

    private final EspecialidadeRepository especialidadeRepository;

    public Especialidade obterPorId(Integer id){
        return especialidadeRepository.getById(id);
    }


}
