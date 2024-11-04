package dev.tanvx.userservice.controller.usecase;

import dev.tanvx.commonservice.exception.ServiceException;
import dev.tanvx.commonservice.util.MessageUtils;
import dev.tanvx.commonservice.util.ValidationUtils;
import dev.tanvx.userservice.dto.request.UserRegistrationRequest;
import dev.tanvx.userservice.dto.response.UserRegistrationResponse;
import dev.tanvx.userservice.service.CredentialService;
import dev.tanvx.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserUseCase {

  private final UserService userService;

  private final CredentialService credentialService;

  private final ValidationUtils validationUtils;

  private final MessageUtils messageUtils;

  @Transactional
  public ResponseEntity<UserRegistrationResponse> registerUser(UserRegistrationRequest request) {

    validationUtils.validateRequest(request);

    try {
      credentialService.checkExistsByEmail(request.getEmail());

    } catch (ServiceException e) {

    }

    return null;
  }
}
