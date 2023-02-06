package com.ruref.application.service;

import com.ruref.application.model.UserModel;
import com.ruref.application.model.dto.DtoFactory;
import com.ruref.application.model.dto.UserDTO;
import com.ruref.application.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public UserModel getUserById(Long id){
        return repository.getReferenceById(id);
    }

    public void addNewUser(UserModel userModel){
        repository.save(userModel);
    }

    public List<UserDTO> getAllUsers(){
        return repository.findAll().stream().map(DtoFactory::createUserDTO).collect(Collectors.toList());
    }
}
