package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

    @Query("SELECT c from Consulta c where c.especialidade.id = :espId")
    List<Consulta> findAllByEspecialidadeId(@Param("espId") Long espId);
}
