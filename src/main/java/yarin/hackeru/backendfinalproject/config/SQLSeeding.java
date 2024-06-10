package yarin.hackeru.backendfinalproject.config;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import yarin.hackeru.backendfinalproject.entity.Role;
import yarin.hackeru.backendfinalproject.entity.User;
import yarin.hackeru.backendfinalproject.repository.RoleRepository;
import yarin.hackeru.backendfinalproject.repository.UserRepository;

import java.util.Set;

@Configuration
@RequiredArgsConstructor
public class SQLSeeding implements CommandLineRunner {

    private final RoleRepository roleRepository;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        if (roleRepository.count() == 0){
            var adminRole = roleRepository.save(new Role(1L, "ROLE_ADMIN"));
            var userRole = roleRepository.save(new Role(2L, "ROLE_USER"));

            userRepository.save(
                    new User(
                            1L,
                            "admin",
                            "admin1@gmail.com",
                            passwordEncoder.encode("Passw0rd1!"),
                            Set.of(adminRole)
                    )
            );

            userRepository.save(
                    new User(
                            2L,
                            "user",
                            "user1@gmail.com",
                            passwordEncoder.encode("Passw0rd1!"),
                            Set.of(userRole)
                    )
            );
        }
    }
}
