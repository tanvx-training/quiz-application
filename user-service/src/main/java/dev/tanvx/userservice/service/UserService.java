package dev.tanvx.userservice.service;

import dev.tanvx.userservice.service.request.UserRegistrationServiceRequest;
import dev.tanvx.userservice.service.response.UserRegistrationServiceResponse;

public interface UserService {

  UserRegistrationServiceResponse registerUser(UserRegistrationServiceRequest serviceRequest);
}
