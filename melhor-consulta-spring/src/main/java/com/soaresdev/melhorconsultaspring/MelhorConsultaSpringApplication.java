package com.soaresdev.melhorconsultaspring;

import com.soaresdev.melhorconsultaspring.models.Consulta;
import com.soaresdev.melhorconsultaspring.models.Especialidade;
import com.soaresdev.melhorconsultaspring.repository.ConsultaRepository;
import com.soaresdev.melhorconsultaspring.repository.EspecialidadeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MelhorConsultaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MelhorConsultaSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(EspecialidadeRepository especialidadeRepository, ConsultaRepository consultaRepository){
		return args -> {
			especialidadeRepository.deleteAll();
			consultaRepository.deleteAll();

			Especialidade e = new Especialidade("Cardiologia");
			Especialidade e2 = new Especialidade("Psiquiatria");
			Especialidade e3 = new Especialidade("Medico da Familia");

			Consulta c = new Consulta();
			c.setId(1L);
			c.setCodigo("1");
			c.setEspecialidade(e);
			c.setSituacao(true);
			c.setMedico("MEDICO TESTE");
			c.setDtConsulta("23-03-2022");

			Consulta c2 = new Consulta();
			c2.setId(1L);
			c2.setCodigo("2");
			c2.setEspecialidade(e);
			c2.setSituacao(true);
			c2.setMedico("MEDICO TESTE 2");
			c2.setDtConsulta("23-03-2022");

			especialidadeRepository.save(e);
			especialidadeRepository.save(e2);
			especialidadeRepository.save(e3);

			consultaRepository.save(c);
			consultaRepository.save(c2);

		};
	}

}
