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
@Constraint(validatedBy = FullNameValidator.class)
public @interface ValidFullName {

  String message() default "Full name can only contain letters, spaces, hyphens, and apostrophes.";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
