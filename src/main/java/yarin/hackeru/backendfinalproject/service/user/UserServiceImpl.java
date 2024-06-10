package yarin.hackeru.backendfinalproject.service.user;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import yarin.hackeru.backendfinalproject.dto.login.LoginRequestDTO;
import yarin.hackeru.backendfinalproject.dto.login.LoginResponseDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserRequestDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserResponseDTO;
import yarin.hackeru.backendfinalproject.entity.User;
import yarin.hackeru.backendfinalproject.error.AuthenticationException;
import yarin.hackeru.backendfinalproject.error.RoleNotFoundException;
import yarin.hackeru.backendfinalproject.error.UserAlreadyExistsException;
import yarin.hackeru.backendfinalproject.repository.RoleRepository;
import yarin.hackeru.backendfinalproject.repository.UserRepository;
import yarin.hackeru.backendfinalproject.service.jwt.JWTService;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final ModelMapper modelMapper;

    private final PasswordEncoder passwordEncoder;

    private final JWTService jwtService;

    @Override
    public UserResponseDTO register(UserRequestDTO request) {

        userRepository.findUserByUsernameIgnoreCaseOrEmailIgnoreCase(request.getUsername(), request.getEmail())
                .ifPresent((u) -> {
                    throw new UserAlreadyExistsException(u.getUsername(), u.getEmail());
                });

        var user = modelMapper.map(request, User.class);
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        var role = roleRepository.findRoleByNameIgnoreCase("ROLE_USER").orElseThrow(
                RoleNotFoundException::new
        );
        user.setRoles(Set.of(role));

        var saved = userRepository.save(user);

        return modelMapper.map(saved, UserResponseDTO.class);
    }

    @Override
    public LoginResponseDTO login(LoginRequestDTO request) {

        var user = userRepository.findUserByUsernameIgnoreCase(request.username()).orElseThrow(
                () -> new UsernameNotFoundException(request.username())
        );

        if (!passwordEncoder.matches(request.password(), user.getPassword())){
            throw new AuthenticationException("Username or password don't match");
        }

        Authentication authentication = new UsernamePasswordAuthenticationToken(
                user.getUsername(),
                user.getPassword(),
                user.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getName())).toList()
        );

        var jwt = jwtService.jwtToken(authentication);
        return new LoginResponseDTO(jwt);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        var user = userRepository.findUserByUsernameIgnoreCase(username).orElseThrow(
                () -> new UsernameNotFoundException(username)
        );

        var roles =
                user.getRoles().stream()
                    .map(r -> new SimpleGrantedAuthority(r.getName()))
                    .collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), roles);
    }
}
