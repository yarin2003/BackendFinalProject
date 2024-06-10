package yarin.hackeru.backendfinalproject.dto.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionHandlerDTO {

    private String status;

    private String timestamp;

    private String message;

    private String controller;

    private String controllerMethod;

    private String requestMethod;

    private String path;

    private Map<String, String> errors;
}
