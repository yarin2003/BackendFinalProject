package yarin.hackeru.backendfinalproject.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Music API",
                version = "1.0",
                description = "API for artists including their albums and songs",
                contact = @Contact(
                        name = "Yarin Burya",
                        url = "https://github.com/yarin2003",
                        email = "yarinb0307@gmail.com"
                ),
                license = @License(name = "Apache", url = "https://www.apache.org/licenses/LICENSE-2.0.txt")
        ))
@SecurityScheme(
        name = "Bearer Authentication",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "Bearer"
)
public class OpenApi3Config {
}
