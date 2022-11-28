package com.ruref.application.model;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class NewsStorage {
    private List<News> news;

    public List<News> getAllNews(){
        return news;
    }
    public Optional<News> getNewsById(UUID id){
        return news.stream().filter(news -> news.getId() == id).findFirst();
    }
    public void addNews(News news){
        throw new UnsupportedOperationException();
    }
    public void updateNews(UUID id, News news){
        throw new UnsupportedOperationException();
    }
    public void deleteNews(UUID id){
        throw new UnsupportedOperationException();
    }
}
