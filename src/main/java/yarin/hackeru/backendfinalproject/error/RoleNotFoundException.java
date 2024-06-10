package yarin.hackeru.backendfinalproject.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RoleNotFoundException extends BackendFinalProjectException{
    public RoleNotFoundException(){
        super("ROLE NOT FOUND");
    }
}
