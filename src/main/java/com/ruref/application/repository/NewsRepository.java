package com.ruref.application.repository;

import com.ruref.application.model.NewsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<NewsModel, Long> {
}
