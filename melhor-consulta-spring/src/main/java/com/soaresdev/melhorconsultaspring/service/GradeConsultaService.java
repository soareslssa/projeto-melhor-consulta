package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class GradeConsultaService {

    private final GradeRepository gradeRepository;
    private final MedicosService medicosService;
    private final EspecialidadeService especialidadeService;

    public void save(GradeDTO dto) {
        GradeConsulta grade = new GradeConsulta();
        grade.setMedico(medicosService.obterPorId(dto.getMedicoId()));
        grade.setEspecialidade(especialidadeService.obterPorId(dto.getEspId()));
        grade.setValor(dto.getValor());
        grade.setSituacao(true);
        grade.setCriadoEm(new Date());
        gradeRepository.save(grade);
    }

    public GradeConsulta obterGradePorId(Long id){
        return gradeRepository.findById(id).get();
    }


}
