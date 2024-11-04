package dev.tanvx.userservice.annotation;

import dev.tanvx.userservice.constants.UserRegex;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Objects;

public class FullNameValidator implements ConstraintValidator<ValidFullName, String> {

  @Override
  public boolean isValid(String fullName, ConstraintValidatorContext context) {

    return Objects.nonNull(fullName) && fullName.matches(UserRegex.FULL_NAME_REGEXP);
  }
}
