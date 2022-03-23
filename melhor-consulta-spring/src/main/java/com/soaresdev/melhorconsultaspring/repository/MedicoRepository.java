package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {
}
