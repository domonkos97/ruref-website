package com.ruref.application.repository;

import com.ruref.application.model.NewsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewRepository extends JpaRepository<NewsModel, Long> {
}
