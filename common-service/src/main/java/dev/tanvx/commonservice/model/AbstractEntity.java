package dev.tanvx.commonservice.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

@Data
@MappedSuperclass
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public abstract class AbstractEntity implements Serializable {

  @Serial
  private static final long serialVersionUID = 1L;

  @CreatedDate
  @JsonFormat(shape = Shape.STRING)
  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @CreatedBy
  @Column(name = "created_by")
  private String createdBy;

  @LastModifiedDate
  @JsonFormat(shape = Shape.STRING)
  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  @LastModifiedBy
  @Column(name = "updated_by")
  private String updatedBy;
}
