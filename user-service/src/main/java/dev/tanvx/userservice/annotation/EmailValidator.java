package dev.tanvx.userservice.annotation;

import dev.tanvx.userservice.constants.UserRegex;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Objects;

public class EmailValidator implements ConstraintValidator<ValidEmail, String> {

  @Override
  public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {

    return Objects.nonNull(email) && email.matches(UserRegex.USER_EMAIL_REGEXP);
  }
}
