package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<GradeConsulta, Long> {

    @Query("SELECT c from GradeConsulta c where c.especialidade.id = :espId")
    List<GradeConsulta> findAllByEspecialidadeId(@Param("espId") Long espId);
}
