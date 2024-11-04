package dev.tanvx.userservice.dto.request;

import dev.tanvx.userservice.annotation.ValidEmail;
import dev.tanvx.userservice.annotation.ValidFullName;
import dev.tanvx.userservice.annotation.ValidPassword;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserRegistrationRequest {

  @ValidFullName
  private final String fullName;

  @ValidEmail
  private final String email;

  @ValidPassword
  private final String password;
}
