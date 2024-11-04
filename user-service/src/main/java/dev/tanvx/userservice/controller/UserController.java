package dev.tanvx.userservice.controller;

import dev.tanvx.userservice.constants.UserPaths;
import dev.tanvx.userservice.controller.usecase.UserUseCase;
import dev.tanvx.userservice.dto.request.UserRegistrationRequest;
import dev.tanvx.userservice.dto.response.UserRegistrationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(UserPaths.USER_BASE)
public class UserController {

  private final UserUseCase useCase;

  @PostMapping(UserPaths.USER_REGISTRATION)
  public ResponseEntity<UserRegistrationResponse> registerUser(
      @RequestBody UserRegistrationRequest request) {

    return useCase.registerUser(request);
  }
}
