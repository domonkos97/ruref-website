package com.ruref.application.repository;

import com.ruref.application.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface UserRepository extends JpaRepository<UserModel, Long> {
}
