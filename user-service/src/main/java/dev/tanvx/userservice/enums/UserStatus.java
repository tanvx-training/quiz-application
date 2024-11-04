package dev.tanvx.userservice.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserStatus {
  PENDING("pending"),
  ENABLED("enabled"),
  EXPIRED("expired"),
  LOCKED("locked"),;

  private final String status;
}
