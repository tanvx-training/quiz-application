package dev.tanvx.commonservice.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EventType {

  REGISTRATION_USER("REGISTRATION_USER");

  private final String eventType;
}
