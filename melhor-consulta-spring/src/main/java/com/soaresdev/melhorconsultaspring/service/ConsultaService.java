package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dominio.DominioSituacaoConsulta;
import com.soaresdev.melhorconsultaspring.dto.GradeHorarioDTO;
import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ConsultaService {

    private final ConsultaRepository consultaRepository;
    private final GradeConsultaService gradeConsultaService;

    public void gerarConsultasPorDia(GradeHorarioDTO gradeHorarioDTO) {
        String inicio = "08";
        String fim = "17";
        LocalDateTime hrInicial = LocalDateTime.now().with(LocalTime.of(Integer.parseInt(inicio), 0));
        LocalDateTime hrFinal = LocalDateTime.now().with(LocalTime.of(Integer.parseInt(fim), 0));
        long qtHorarios = Duration.between(hrInicial, hrFinal).toHours();

        GradeConsulta grade = gradeConsultaService.obterGradePorId(gradeHorarioDTO.getGradeId());
        List<Consulta> consultasPorDia = new ArrayList<>();

        try {
            for (String dataConsulta : gradeHorarioDTO.getDatasDisponiveis()) {
                for (int i = 0; i < qtHorarios; i++) {
                    Date horario = new SimpleDateFormat("dd-MM-yyyy").parse(dataConsulta);
                    horario.setHours(hrInicial.getHour() + i);

                    Consulta consulta = new Consulta();
                    consulta.setGradeConsulta(grade);
                    consulta.setSituacao(DominioSituacaoConsulta.LIVRE.getCodigo());
                    consulta.setMedico(grade.getMedico());
                    consulta.setDtMarcacao(new SimpleDateFormat("dd-MM-yyyy").parse(dataConsulta));
                    consulta.setHorarioConsulta(horario);

                    consultasPorDia.add(consulta);
                }
            }
        } catch (ParseException e) {
            // todo adicionar exceção
        }

        consultaRepository.saveAll(consultasPorDia);
    }


    public List<Consulta> findAllByMedicoGradeSituacao(Long medId, Long gradeId, String sitCodigo) {
        return consultaRepository.findAllByMedicoGradeSituacao(medId, gradeId, sitCodigo);
    }
}
