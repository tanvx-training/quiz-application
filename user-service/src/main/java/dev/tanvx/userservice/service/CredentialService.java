package dev.tanvx.userservice.service;

import dev.tanvx.commonservice.exception.ServiceException;

public interface CredentialService {

  void checkExistsByEmail(String email) throws ServiceException;
}
