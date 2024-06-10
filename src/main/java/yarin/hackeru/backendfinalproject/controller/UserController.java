package yarin.hackeru.backendfinalproject.controller;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import yarin.hackeru.backendfinalproject.dto.login.LoginRequestDTO;
import yarin.hackeru.backendfinalproject.dto.login.LoginResponseDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserRequestDTO;
import yarin.hackeru.backendfinalproject.dto.user.UserResponseDTO;
import yarin.hackeru.backendfinalproject.service.user.UserService;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(
        name = "User Controller",
        description = "personal area"
)
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> register(@RequestBody @Valid UserRequestDTO request,
                                                    UriComponentsBuilder uriBuilder){
        return ResponseEntity.created(uriBuilder.path("/login").build().toUri()).body(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid LoginRequestDTO request){
        return ResponseEntity.ok(userService.login(request));
    }



    @Hidden
    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> userDetails(Authentication authentication){
        return ResponseEntity.ok(
                Map.of(
                        "username", authentication.getName(),
                        "authorities", authentication.getAuthorities()
                )
        );
    }
}
