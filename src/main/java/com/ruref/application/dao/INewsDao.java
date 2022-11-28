package com.ruref.application.dao;

import com.ruref.application.exceptions.NewsNotFoundError;
import com.ruref.application.model.News;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface INewsDao {
    public List<News> getAllNews();

    public Optional<News> getNewsById(UUID id);

    public void addNews(News news);

    public void updateNews(UUID id, News news);

    public void deleteNews(UUID id);

}
