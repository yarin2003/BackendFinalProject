package yarin.hackeru.backendfinalproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import yarin.hackeru.backendfinalproject.config.RSAKeyProperties;

@SpringBootApplication()
@ConfigurationPropertiesScan(basePackageClasses = {RSAKeyProperties.class})
public class BackendFinalProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendFinalProjectApplication.class, args);
    }
}
