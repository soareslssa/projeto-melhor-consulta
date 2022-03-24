package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorarioConsultaRepository extends JpaRepository<Consulta, Long> {
}
