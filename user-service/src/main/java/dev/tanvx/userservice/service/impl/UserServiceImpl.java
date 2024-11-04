package dev.tanvx.userservice.service.impl;

import dev.tanvx.userservice.repository.UserRepository;
import dev.tanvx.userservice.service.UserService;
import dev.tanvx.userservice.service.request.UserRegistrationServiceRequest;
import dev.tanvx.userservice.service.response.UserRegistrationServiceResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Override
  public UserRegistrationServiceResponse registerUser(
      UserRegistrationServiceRequest serviceRequest) {
    // Implement user registration logic here

    return null;
  }
}
