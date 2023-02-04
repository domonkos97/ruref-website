package com.ruref.application.repository;

import com.ruref.application.model.NewsModel;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface NewsRepository extends JpaRepository<NewsModel, Long> {
}
