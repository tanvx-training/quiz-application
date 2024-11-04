package dev.tanvx.commonservice.event;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import dev.tanvx.commonservice.enums.EventType;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class BaseEvent {

  private final UUID eventId;

  private final String serviceId;

  private final LocalDateTime timestamp;

  private final EventType eventType;
}
