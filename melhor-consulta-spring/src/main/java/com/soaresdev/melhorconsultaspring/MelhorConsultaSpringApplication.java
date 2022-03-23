package com.soaresdev.melhorconsultaspring;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.models.Especialidade;
import com.soaresdev.melhorconsultaspring.models.Medico;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import com.soaresdev.melhorconsultaspring.repository.MedicoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class MelhorConsultaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MelhorConsultaSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(EspecialidadeRepository especialidadeRepository, ConsultaRepository consultaRepository, MedicoRepository medicoRepository){
		return args -> {
			especialidadeRepository.deleteAll();
			consultaRepository.deleteAll();
			medicoRepository.deleteAll();

			Medico m1 = new Medico();
			m1.setNome("César Manoel Enrico Sales");
			m1.setEmail("cesarmanoelsales@alcoa.com.br");
			m1.setDtInicio(new Date());
			m1.setDtNascimento(new Date());
			m1.setCpf("99947738019");
			m1.setCnpj("83671897000102");
			m1.setCrm("436.167.697-60");
			m1.setSituacao(true);
			m1.setEndereco("Travessa A 520");
			m1.setCep("22710-480");
			m1.setUf("Rio de Janeiro");

			Medico m2 = new Medico();
			m2.setNome("Marina Fabiana Assunção");
			m2.setEmail("marina.fabiana.assuncao@onvale.com");
			m2.setDtInicio(new Date());
			m2.setDtNascimento(new Date());
			m2.setCpf("96493250773");
			m2.setCnpj("83671897000102");
			m2.setCrm("436.167.697-60");
			m2.setSituacao(true);
			m2.setEndereco("Rua Caém 330");
			m2.setCep("22710-480");
			m2.setUf("Sao Paulo");

			Especialidade e = new Especialidade("Cardiologia",m1,true);
			Especialidade e2 = new Especialidade("Psiquiatria",m2,true);
			Especialidade e3 = new Especialidade("Medico da Familia",m1,true);

			Consulta c = new Consulta();
			c.setId(1L);
			c.setCodigo("1");
			c.setEspecialidade(e);
			c.setSituacao(true);
			c.setMedico(m1);
			c.setDtConsulta(new Date());
			c.setValor(140.0);

			Consulta c2 = new Consulta();
			c2.setId(1L);
			c2.setCodigo("2");
			c2.setEspecialidade(e2);
			c2.setSituacao(true);
			c2.setMedico(m2);
			c2.setDtConsulta(new Date());
			c2.setValor(300.0);

			medicoRepository.save(m1);
			medicoRepository.save(m2);

			especialidadeRepository.save(e);
			especialidadeRepository.save(e2);
			especialidadeRepository.save(e3);

			consultaRepository.save(c);
			consultaRepository.save(c2);

		};
	}

}
