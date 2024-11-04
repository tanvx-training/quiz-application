package dev.tanvx.userservice.annotation;


import dev.tanvx.userservice.constants.UserRegex;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.util.Objects;

public class PasswordValidator implements ConstraintValidator<ValidPassword, String> {

  @Override
  public boolean isValid(String password, ConstraintValidatorContext context) {

    return Objects.nonNull(password) && password.matches(UserRegex.PASSWORD_REGEXP);
  }
}
