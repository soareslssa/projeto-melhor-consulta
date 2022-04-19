package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dto.AcessoUsuarioDTO;
import com.soaresdev.melhorconsultaspring.dto.UsuarioDTO;
import com.soaresdev.melhorconsultaspring.models.Usuario;
import com.soaresdev.melhorconsultaspring.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@AllArgsConstructor
public class AcessoService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioDTO logar(AcessoUsuarioDTO acesso){
        Usuario usuario = usuarioRepository.findUsuarioByEmailAndSenha(acesso.getEmail(),acesso.getSenha());
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(usuario.getId());
        dto.setSituacao(usuario.isSituacao());
        dto.setPerfil(usuario.getPerfil());

        return dto;
    }

    public void inserirUsuario(AcessoUsuarioDTO dto){
        Usuario usuario = new Usuario();
        usuario.setEmail(dto.getEmail());
        usuario.setSenha(dto.getSenha());
        usuario.setNome(dto.getNome());
        usuario.setSobrenome(dto.getSobrenome());
        usuario.setSexo(dto.getSexo());
        usuario.setDtNascimento(dto.getDtNascimento());
        usuario.setSituacao(true);
        usuario.setDtInicio(new Date());
        usuario.setPerfil("U");

        usuarioRepository.save(usuario);
    }
}
