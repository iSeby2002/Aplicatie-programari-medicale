package com.example.demo;

import com.example.demo.dtos.RegisterDto;
import com.example.demo.model.Medic;
import com.example.demo.service.MedicService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.SQLOutput;

@SpringBootApplication
public class AplicatieProgramariMedicaleApplication {

	public static void main(String[] args) {



		SpringApplication.run(AplicatieProgramariMedicaleApplication.class, args);
	}

	@Bean
	CommandLineRunner init(MedicService medicService) {


		return args -> {

			RegisterDto registerDto1= RegisterDto.builder()
					.nume("Diana")
					.prenume("Anghelus")
					.phoneNumber("0745706903")
					.role("oftalmolog")
					.email("anghelus_diana@yahoo.com")
					.password("1234")
					.build();
			Medic registerDto = medicService.register(registerDto1);

		};
	}

}
