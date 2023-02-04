package com.ruref.application.dao;

import com.ruref.application.model.NewsModel;

import java.util.List;
import java.util.UUID;

public interface INewsDao {
    public List<NewsModel> getAllNews();

    public NewsModel getNewsById(UUID id);

    public void addNews(NewsModel news);

    public void updateNews(UUID id, NewsModel news);

    public void deleteNews(UUID id);

}
