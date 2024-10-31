package dev.tanvx.userservice.application.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserStatus {
  ENABLED("enabled"),
  EXPIRED("expired"),
  LOCKED("locked"),;

  private final String status;
}
