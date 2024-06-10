package yarin.hackeru.backendfinalproject.error;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.HandlerMethod;
import yarin.hackeru.backendfinalproject.dto.error.ExceptionHandlerDTO;

import java.sql.SQLIntegrityConstraintViolationException;
import java.time.LocalDateTime;
import java.util.HashMap;

@ControllerAdvice
public class BackendFinalProjectExceptionHandler {

    //BackendFinalProjectException
    @ExceptionHandler(BackendFinalProjectException.class)
    public ResponseEntity<ExceptionHandlerDTO> handle(
            BackendFinalProjectException e,
            HandlerMethod method,
            HttpServletRequest request){

        var dto = getExceptionHandlerDTO(e, method, request);

        if(!e.getClass().isAnnotationPresent(ResponseStatus.class))
            return ResponseEntity.internalServerError().body(dto);

        var statusCode = e.getClass().getAnnotation(ResponseStatus.class).value();

        return new ResponseEntity<>(dto, statusCode);
    }

    //SQL exceptions
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ExceptionHandlerDTO> handle(
            SQLIntegrityConstraintViolationException e,
            HandlerMethod method,
            HttpServletRequest request){

        var dto = getExceptionHandlerDTO(e, method, request);

        return ResponseEntity.badRequest().body(dto);
    }

    //SQL exceptions
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ExceptionHandlerDTO> handle(
            ResourceNotFoundException e,
            HandlerMethod method,
            HttpServletRequest request){

        var dto = getExceptionHandlerDTO(e, method, request);

        return ResponseEntity.notFound().build();
    }

    //validation exception
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionHandlerDTO> handle(
            MethodArgumentNotValidException e,
            HandlerMethod method,
            HttpServletRequest request){

        var dto = getExceptionHandlerDTO(e, method, request);

        e.getBindingResult().getFieldErrors().forEach(
                exc -> dto.getErrors().put(
                        "field_" + exc.getField(), exc.getDefaultMessage()
                )
        );

        return ResponseEntity.internalServerError().body(dto);
    }

    //general Exception
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionHandlerDTO> handle(
            Exception e,
            HandlerMethod method,
            HttpServletRequest request){

        var dto = getExceptionHandlerDTO(e, method, request);

        dto.getErrors().put("internalServerError", "Contact Admin");

        return ResponseEntity.internalServerError().body(dto);
    }

    //Helper
    private ExceptionHandlerDTO getExceptionHandlerDTO(
            Exception e,
            HandlerMethod method,
            HttpServletRequest request) {

        var status = HttpStatus.BAD_REQUEST.toString();
        var timestamp = LocalDateTime.now().toString();
        var message = e.getMessage();
        var controller = method.getMethod().getDeclaringClass().getSimpleName();
        var controllerMethod = method.getMethod().getName();
        var requestMethod = request.getMethod();
        var path = request.getRequestURI();

        return ExceptionHandlerDTO.builder()
                .status(status)
                .timestamp(timestamp)
                .message(message)
                .controller(controller)
                .controllerMethod(controllerMethod)
                .requestMethod(requestMethod)
                .path(path)
                .errors(new HashMap<>())
                .build();
    }
}
