package com.ruref.application.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserModel {
    @Id
    private long id;
    private String email;
    private String name;
    private String password;
    private AccessType access;

}
