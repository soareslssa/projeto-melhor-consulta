package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    Paciente findPacienteById(@Param("id") Long id);
}
