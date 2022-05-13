package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GradeRepository extends JpaRepository<GradeConsulta, Long> {

    @Query("SELECT c from GradeConsulta c where c.especialidade.id = :espId")
    List<GradeConsulta> findAllByEspecialidadeId(@Param("espId") Long espId);

    @Query("SELECT g FROM GradeConsulta g JOIN g.medico m where m.id = :medId")
    List<GradeConsulta> findAllByMedico(@Param("medId") Long medId);
}
