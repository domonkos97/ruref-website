package com.ruref.application.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_entity")
public class UserEntity {
    @Id
    @GeneratedValue
    private long id;
    private String email;
    private String name;
    private String password;
    private AccessType access;

}
