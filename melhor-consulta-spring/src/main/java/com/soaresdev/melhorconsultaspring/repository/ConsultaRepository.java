package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
    @Query("select c from Consulta  c join c.gradeConsulta g")
    List<Consulta> listarTodos();

    @Query("SELECT  c FROM Consulta c JOIN c.medico m JOIN c.gradeConsulta g  WHERE m.id = :medId and (:gradeId is null or g.id = :gradeId)")
    List<Consulta> findAllByMedicoGradeSituacao(@Param("medId") Long medId, @Param("gradeId") Long gradeId);

    @Query("SELECT c FROM Consulta  c JOIN c.medico m JOIN c.gradeConsulta g LEFT JOIN c.paciente p WHERE m.id = :medId and g.id = :gradeId and c.situacao = 'L' ")
    List<Consulta> listarConsultasLivresPorMedicoGrade(@Param("medId") Long medId, @Param("gradeId") Long gradeId);

    Consulta findConsultaById(@Param("id") Long id);
}
