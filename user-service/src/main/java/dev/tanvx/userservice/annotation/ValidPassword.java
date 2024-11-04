package dev.tanvx.userservice.annotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = PasswordValidator.class)
public @interface ValidPassword {

  String message() default "Password must contain at least 8 characters, including uppercase, lowercase, digit, and special character.";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
