package yarin.hackeru.backendfinalproject.service.user;

import org.springframework.security.core.userdetails.UserDetailsService;
import yarin.hackeru.backendfinalproject.dto.login.LoginRequestDTO;
import yarin.hackeru.backendfinalproject.dto.login.LoginResponseDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserRequestDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserResponseDTO;

public interface UserService extends UserDetailsService {

    UserResponseDTO register(UserRequestDTO request);

    LoginResponseDTO login(LoginRequestDTO request);
}

