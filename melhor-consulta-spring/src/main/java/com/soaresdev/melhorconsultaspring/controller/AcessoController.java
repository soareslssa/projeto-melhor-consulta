package com.soaresdev.melhorconsultaspring.controller;

import com.soaresdev.melhorconsultaspring.dto.AcessoUsuarioDTO;
import com.soaresdev.melhorconsultaspring.dto.UsuarioDTO;
import com.soaresdev.melhorconsultaspring.service.AcessoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/acesso")
@AllArgsConstructor
public class AcessoController {

    private final AcessoService acessoService;

    @PostMapping("/cadastrarUsuario")
    public void inserirUsuario(@RequestBody AcessoUsuarioDTO acesso){
        this.acessoService.inserirUsuario(acesso);
    }

    @GetMapping("/login")
    public UsuarioDTO logarUsuario(@RequestBody AcessoUsuarioDTO acesso){
        return this.acessoService.logar(acesso);
    }
}
