package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dto.GradeDTO;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Date;

@Service
@AllArgsConstructor
public class GradeConsultaService {

    private final GradeRepository gradeRepository;
    private final MedicosService medicosService;
    private final ConsultaService consultaService;
    private final EspecialidadeService especialidadeService;

    public void save(GradeDTO dto) throws ParseException {
        GradeConsulta grade = new GradeConsulta();
        grade.setMedico(medicosService.obterPorId(dto.getMedicoId()));
        grade.setEspecialidade(especialidadeService.obterPorId(dto.getEspId()));
        grade.setSituacao(true);
        grade.setCriadoEm(new Date());
        grade.setConsultas(consultaService.gerarConsultasPorDia(dto, grade));
        gradeRepository.saveAndFlush(grade);
    }


}
