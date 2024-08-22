package com.example.demo;

import com.example.demo.dtos.RegisterDto;
import com.example.demo.service.MedicService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AplicatieProgramariMedicaleApplication {

	public static void main(String[] args) {
		SpringApplication.run(AplicatieProgramariMedicaleApplication.class, args);
	}

	@Bean
	CommandLineRunner init(MedicService medicService) {
		return args -> {
			//medici
//			RegisterDto registerDtoAdmin= RegisterDto.builder()
//					.nume("Admin")
//					.prenume("Admin")
//					.phoneNumber("0745706903")
//					.role("admin")
//					.email("admin@yahoo.com")
//					.password("admin")
//					.build();
//			RegisterDto registerDto1= RegisterDto.builder()
//					.nume("Diana")
//					.prenume("Anghelus")
//					.phoneNumber("0745706903")
//					.role("oftalmolog")
//					.email("anghelus_diana@yahoo.com")
//					.password("1234")
//					.build();
//			RegisterDto registerDto2= RegisterDto.builder()
//					.nume("Oana")
//					.prenume("Ilies")
//					.phoneNumber("0745706902")
//					.role("oftalmolog")
//					.email("oana_ilies@yahoo.com")
//					.password("1234")
//					.build();
//			RegisterDto registerDto3= RegisterDto.builder()
//					.nume("Damian")
//					.prenume("Sebastian")
//					.phoneNumber("0770994687")
//					.role("diabetolog")
//					.email("damiansebastian2002@gmail.com")
//					.password("1234")
//					.build();
//			medicService.register(registerDtoAdmin);
//			medicService.register(registerDto1);
//			medicService.register(registerDto2);
//			medicService.register(registerDto3);
		};
	}
}