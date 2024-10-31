package dev.tanvx.userservice.application.exception;

import dev.tanvx.commonservice.application.constant.MessageProperties;
import dev.tanvx.commonservice.application.dto.ErrorResponse;
import dev.tanvx.commonservice.application.dto.ValidationErrorResponse;
import dev.tanvx.commonservice.application.dto.ValidationErrorResponse.Errors;
import dev.tanvx.commonservice.application.exception.BusinessException;
import dev.tanvx.commonservice.application.exception.ValidationException;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@RestControllerAdvice
@RequiredArgsConstructor
public class UserExceptionHandler extends ResponseEntityExceptionHandler {

  private static final String RESULT_NG = "NG";

  private final MessageSource messageSource;

  // Handle validation exception
  @ExceptionHandler(ValidationException.class)
  public ResponseEntity<ValidationErrorResponse> handleValidationException(
      ValidationException error) {
    // Logging
    log.error(error.getMessage(), Objects.isNull(error.getCause()) ? error : error.getCause());
    // Convert to validation error response
    List<Errors> errors = error.getErrors().entrySet().stream()
        .map(c -> Errors
            .builder()
            .name(c.getKey())
            .messages(c.getValue())
            .build())
        .toList();
    // Build validation error response
    ValidationErrorResponse.ValidationErrors validationErrors = ValidationErrorResponse.ValidationErrors
        .builder()
        .title(messageSource.getMessage(MessageProperties.RESPONSE_400, null,
            Locale.getDefault()))
        .errors(errors)
        .build();
    // Build response
    ValidationErrorResponse response = ValidationErrorResponse
        .builder()
        .result(RESULT_NG)
        .validationErrors(validationErrors)
        .errorMessages(error.getErrorMessages())
        .build();
    // Return response
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
  }

  // Handle service exception
  @ExceptionHandler(BusinessException.class)
  public ResponseEntity<ErrorResponse> handleBusinessExceptionException(BusinessException error) {
    // Logging
    log.error(CollectionUtils.isEmpty(error.getMessages())
            ? error.getMessage()
            : error.getMessages().toString(),
        Objects.isNull(error.getCause()) ? error : error.getCause());
    // Return response
    return ResponseEntity.status(error.getHttpStatus())
        .body(ErrorResponse
            .builder()
            .result(RESULT_NG)
            .errorMessages(CollectionUtils.isEmpty(error.getMessages())
                ? Collections.singletonList(error.getMessage())
                : error.getMessages())
            .build());
  }

  @ExceptionHandler(Throwable.class)
  public ResponseEntity<ErrorResponse> handleThrowable(Throwable throwable) {

    String errorMessage = "An unexpected error occurred: " + throwable.getMessage();

    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(ErrorResponse
            .builder()
            .result(RESULT_NG)
            .errorMessages(Collections.singletonList(errorMessage))
            .build());
  }
}
