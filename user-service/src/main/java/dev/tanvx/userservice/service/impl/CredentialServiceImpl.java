package dev.tanvx.userservice.service.impl;

import dev.tanvx.commonservice.exception.ServiceException;
import dev.tanvx.userservice.constants.UserErrorMessage;
import dev.tanvx.userservice.repository.CredentialRepository;
import dev.tanvx.userservice.service.CredentialService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CredentialServiceImpl implements CredentialService {

  private final CredentialRepository credentialRepository;

  @Override
  public void checkExistsByEmail(String email) throws ServiceException {
    credentialRepository.findByEmail(email)
        .orElseThrow(() -> new ServiceException(UserErrorMessage.EMAIL_HAS_ALREADY_BEEN_TAKEN));
  }
}
