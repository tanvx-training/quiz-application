package dev.tanvx.userservice.repository;

import dev.tanvx.userservice.entity.Credential;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialRepository extends JpaRepository<Credential, Long> {

  Optional<Credential> findByEmail(String email);
}
