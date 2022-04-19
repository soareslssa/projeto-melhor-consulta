package com.soaresdev.melhorconsultaspring.service;

import com.soaresdev.melhorconsultaspring.dto.MedicoDTO;
import com.soaresdev.melhorconsultaspring.models.Medico;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import com.soaresdev.melhorconsultaspring.repository.MedicoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;

@Service
@AllArgsConstructor
public class MedicosService {

    private final MedicoRepository repository;
    private final EspecialidadeRepository especialidadeRepository;

    public void inserirMedico(MedicoDTO dto){
        repository.save(obterMedicoEntity(dto));

    }

    private Medico obterMedicoEntity(MedicoDTO dto) {
        Medico medico = new Medico();
        medico.setNome(dto.getNome());
        medico.setSobrenome(dto.getSobrenome());
        medico.setNomeSocial(dto.getNomeSocial());
        medico.setEmail(dto.getEmail());
        medico.setCpf(dto.getCpf());
        medico.setCrm(dto.getCrm());
        medico.setDtNascimento(dto.getDtNascimento());
        medico.setSexo(dto.getSexo());
        medico.setCelular(dto.getTelefone());
        medico.setLogradouro(dto.getLogradouro());
        medico.setNroLogradouro(dto.getNroLogradouro());
        medico.setCep(dto.getNome());
        medico.setCidade(dto.getLocalidade());
        medico.setEstado(dto.getUf());
        medico.setDtInicio(new Date());
        medico.setSituacao(true);
        medico.setNotaAvaliacao(0);

      /*  medico.setEspecialidades(new ArrayList<>());
        for (Integer espId: dto.getEspecialidades()){
            medico.getEspecialidades().add(especialidadeRepository.getById(espId));
        }*/

        return medico;
    }


}
