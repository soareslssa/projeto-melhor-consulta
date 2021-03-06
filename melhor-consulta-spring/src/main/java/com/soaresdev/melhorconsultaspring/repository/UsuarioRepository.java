package com.soaresdev.melhorconsultaspring.repository;

import com.soaresdev.melhorconsultaspring.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface UsuarioRepository  extends JpaRepository<Usuario, Long> {

    @Query("SELECT u from Usuario u where u.email = :email and u.senha = :senha")
    Usuario findUsuarioByEmailAndSenha(@Param("email") String email, @Param("senha") String senha);
}
