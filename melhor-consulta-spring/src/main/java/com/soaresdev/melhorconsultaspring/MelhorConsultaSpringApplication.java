package com.soaresdev.melhorconsultaspring;

import com.soaresdev.melhorconsultaspring.models.Especialidade;
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
	CommandLineRunner initDatabase(EspecialidadeRepository especialidadeRepository){
		return args -> {
			especialidadeRepository.deleteAll();

			Especialidade e = new Especialidade("Cardiologia");
			Especialidade e2 = new Especialidade("Psiquiatria");
			Especialidade e3 = new Especialidade("Medico da Familia");

			especialidadeRepository.save(e);
			especialidadeRepository.save(e2);
			especialidadeRepository.save(e3);
		};
	}

}
