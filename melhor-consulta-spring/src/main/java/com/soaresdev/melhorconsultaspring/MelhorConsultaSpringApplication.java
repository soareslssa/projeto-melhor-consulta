package com.soaresdev.melhorconsultaspring;

import com.soaresdev.melhorconsultaspring.models.GradeConsulta;
import com.soaresdev.melhorconsultaspring.models.Especialidade;
import com.soaresdev.melhorconsultaspring.models.Medico;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import com.soaresdev.melhorconsultaspring.repository.GradeRepository;
import com.soaresdev.melhorconsultaspring.repository.MedicoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class MelhorConsultaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MelhorConsultaSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(EspecialidadeRepository especialidadeRepository, GradeRepository gradeRepository, MedicoRepository medicoRepository){
		return args -> {
			especialidadeRepository.deleteAll();
			gradeRepository.deleteAll();
			medicoRepository.deleteAll();

			Especialidade e = new Especialidade("CAR","Cardiologia",true);
			Especialidade e2 = new Especialidade("PSI","Psiquiatria",true);
			Especialidade e3 = new Especialidade("MED","Medico da Familia",true);

			List<Especialidade> espCardio = new ArrayList<>();
			espCardio.add(e);

			List<Especialidade> espCardioFamilia = new ArrayList<>();
			espCardio.add(e);
			espCardio.add(e3);


			Medico m1 = new Medico();
			m1.setNome("César Manoel");
			m1.setSobrenome("Enrico Sales");
			m1.setNomeSocial("Dr. César Sales");
			m1.setEmail("cesarmanoelsales@alcoa.com.br");
			m1.setDtInicio(new Date());
			m1.setDtNascimento(new Date());
			m1.setCpf("99947738019");
			m1.setCnpj("83671897000102");
			m1.setCrm("436.167.697-60");
			m1.setSituacao(true);
			m1.setLogradouro("Travessa A");
			m1.setNroLogradouro("520");
			m1.setCep("22710-480");
			m1.setEstado("Rio de Janeiro");
			m1.setEspecialidades(espCardio);
			m1.setNotaAvaliacao(4);

			Medico m2 = new Medico();
			m2.setNome("Marina Fabiana");
			m2.setSobrenome("Assunção");
			m2.setNomeSocial("Dra. Mariana Assunção");
			m2.setEmail("marina.fabiana.assuncao@onvale.com");
			m2.setDtInicio(new Date());
			m2.setDtNascimento(new Date());
			m2.setCpf("96493250773");
			m2.setCnpj("83671897000102");
			m2.setCrm("436.167.697-60");
			m2.setSituacao(true);
			m2.setLogradouro("Rua Caém");
			m2.setNroLogradouro("330");
			m2.setCep("22710-480");
			m2.setEstado("Sao Paulo");
			m2.setEspecialidades(espCardioFamilia);
			m2.setNotaAvaliacao(5);

			Medico m3 = new Medico();
			m3.setNome("Antônia");
			m3.setSobrenome("Analu Nogueira");
			m3.setNomeSocial("Dra. Analu Nogueira");
			m3.setEmail("antonia.analu.nogueira@brws.com.br");
			m3.setDtInicio(new Date());
			m3.setDtNascimento(new Date());
			m3.setCpf("626.530.138-19");
			m3.setCnpj("83671897000102");
			m3.setCrm("436.167.697-60");
			m3.setSituacao(true);
			m3.setLogradouro("Rua dos Aloes");
			m3.setNroLogradouro("845");
			m3.setCep("13328-734");
			m3.setEstado("Sao Paulo");
			m3.setEspecialidades(espCardio);
			m3.setNotaAvaliacao(3);

			GradeConsulta g = new GradeConsulta();
			g.setCriadoEm(new Date());
			g.setEspecialidade(e);
			g.setSituacao(true);
			g.setMedico(m1);
			g.setValor(140.0);

			GradeConsulta g3 = new GradeConsulta();
			g3.setCriadoEm(new Date());
			g3.setEspecialidade(e);
			g3.setSituacao(true);
			g3.setMedico(m2);
			g3.setValor(150.0);

			GradeConsulta g2 = new GradeConsulta();
			g2.setId(1L);
			g2.setEspecialidade(e2);
			g2.setSituacao(true);
			g2.setMedico(m3);
			g2.setCriadoEm(new Date());
			g2.setValor(300.0);

			especialidadeRepository.save(e);
			especialidadeRepository.save(e2);
			especialidadeRepository.save(e3);

			medicoRepository.save(m1);
			medicoRepository.save(m2);
			medicoRepository.save(m3);

			gradeRepository.save(g);
			gradeRepository.save(g2);
			gradeRepository.save(g3);

		};
	}

}
