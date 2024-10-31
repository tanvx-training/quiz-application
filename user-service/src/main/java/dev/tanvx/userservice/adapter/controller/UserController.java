package dev.tanvx.userservice.adapter.controller;

import dev.tanvx.userservice.application.constants.UserPaths;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(UserPaths.USER_BASE)
public class UserController {

  public ResponseEntity<> registerUser() {

  }
}
