package yarin.hackeru.backendfinalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yarin.hackeru.backendfinalproject.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByUsernameIgnoreCaseOrEmailIgnoreCase(String username, String email);

    Optional<User> findUserByUsernameIgnoreCase(String username);
}
