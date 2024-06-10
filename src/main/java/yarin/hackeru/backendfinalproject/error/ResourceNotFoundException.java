package yarin.hackeru.backendfinalproject.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.function.Supplier;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends BackendFinalProjectException{

    public ResourceNotFoundException(String resourceName, String name, Object value) {
        super("Entity %s with %s = %s NOT FOUND".formatted(resourceName, name, value));
    }

    public static Supplier<RuntimeException> newInstance(String resourceName, String name, Object value){
        return () -> new ResourceNotFoundException(resourceName, name, value);
    }
}
