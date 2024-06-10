package yarin.hackeru.backendfinalproject.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class AuthenticationException extends BackendFinalProjectException{
    public AuthenticationException(String message){
        super(message);
    }
}
