package dev.tanvx.userservice.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserRegistrationResponse {

  private final String message;
}
