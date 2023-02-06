package com.ruref.application.controller;

import com.ruref.application.model.UserModel;
import com.ruref.application.model.dto.UserDTO;
import com.ruref.application.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return service.getAllUsers();
    }

    @PostMapping
    public void addNewUser(@RequestBody UserModel userModel){
        service.addNewUser(userModel);
    }
}
