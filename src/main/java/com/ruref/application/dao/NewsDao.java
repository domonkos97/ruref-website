package com.ruref.application.dao;

import com.ruref.application.model.News;
import com.ruref.application.model.NewsStorage;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class NewsDao implements INewsDao{

    NewsStorage newsStorage;
    @Autowired
    public NewsDao(NewsStorage newsStorage){
        this.newsStorage = newsStorage;
    }

    @Override
    public List<News> getAllNews() {
        return newsStorage.getAllNews();
    }

    @Override
    public News getNewsById(UUID id) {
        return newsStorage.getNewsById(id);
    }

    @Override
    public void addNews(News news) {
        newsStorage.addNews(news);
    }

    @Override
    public void updateNews(UUID id, News news) {
        newsStorage.updateNews(id, news);
    }

    @Override
    public void deleteNews(UUID id) {
        newsStorage.deleteNews(id);
    }
}
