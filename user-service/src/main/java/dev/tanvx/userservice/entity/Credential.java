package dev.tanvx.userservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.tanvx.commonservice.model.AbstractEntity;
import dev.tanvx.userservice.enums.RoleBasedAuthority;
import dev.tanvx.userservice.enums.UserStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "credentials")
public class Credential extends AbstractEntity {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "email", unique = true)
  private String email;

  @Column(name = "password")
  private String password;

  @Column(name = "role")
  @Enumerated(EnumType.STRING)
  private RoleBasedAuthority roleBasedAuthority;

  @Column(name = "status")
  @Enumerated(EnumType.STRING)
  private UserStatus userStatus;

  @JsonIgnore
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @OneToMany(mappedBy = "credential")
  private List<Token> tokens;
}
