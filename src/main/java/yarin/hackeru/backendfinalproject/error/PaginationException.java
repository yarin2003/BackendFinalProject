package yarin.hackeru.backendfinalproject.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class PaginationException extends BackendFinalProjectException{

    public PaginationException(String message){

        super(message);
    }
}
