package com.ruref.application.service;

import com.ruref.application.model.UserModel;
import com.ruref.application.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserModel getUserById(Long id){
        return userRepository.getReferenceById(id);
    }

    public void addNewUser(UserDTO dto){
    }
}
