package dev.tanvx.userservice.application.constants;

import static dev.tanvx.commonservice.application.constant.CommonPaths.API_BASE_V1;

public class UserPaths {

  // user-service paths
  public static final String USER_BASE = API_BASE_V1 + "/users";
  public static final String USER_REGISTRATION = USER_BASE + "/registration";

  // user parameter names
  public static final String PARAM_USER_ID = "userId";
}
