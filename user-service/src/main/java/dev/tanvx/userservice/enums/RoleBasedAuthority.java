package dev.tanvx.userservice.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RoleBasedAuthority {

  ROLE_USER("USER"),
  ROLE_ADMIN("ADMIN");

  private final String role;
}
