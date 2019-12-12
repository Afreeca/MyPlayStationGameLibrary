package com.sony.ps.gamelibraryservice.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.sony.playstation"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo());
	}

	ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Playstation Game Library API").description("API for supporting users game library management").version("1.0.0")
				.license("License of API").licenseUrl("API license URL")
				.contact(new Contact("Adilson Mendes", "https://www.linkedin.com/in/adilsonmendes/", "adilsonmendesramos@gmail.com")).build();
	}

}
