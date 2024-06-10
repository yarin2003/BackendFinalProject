package yarin.hackeru.backendfinalproject.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import yarin.hackeru.backendfinalproject.dto.role.RoleResponseDTO;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponseDTO {

    private Long id;
    private String username;
    private String email;
    private Set<RoleResponseDTO> roles;
}

