package yarin.hackeru.backendfinalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yarin.hackeru.backendfinalproject.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findRoleByNameIgnoreCase(String roleName);
}
