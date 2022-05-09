package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class GradeConsultaService {

    private final GradeRepository gradeRepository;
    private final MedicosService medicosService;
    private final ConsultaRepository consultaRepository;
    private final EspecialidadeService especialidadeService;

    public void save(GradeDTO dto){
        GradeConsulta gradeConsulta = new GradeConsulta();
        gradeConsulta.setMedico(medicosService.obterPorId(dto.getMedicoId()));
        gradeConsulta.setEspecialidade(especialidadeService.obterPorId(dto.getEspId()));
        gradeConsulta.setSituacao(true);
        gradeConsulta.setCriadoEm(new Date());
    }
}
