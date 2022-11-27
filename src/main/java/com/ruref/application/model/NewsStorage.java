package com.ruref.application.model;

import java.util.List;
import java.util.UUID;

public class NewsStorage {
    private List<News> news;

    public List<News> getAllNews(){
        throw new UnsupportedOperationException();
    }
    public List<News> getNewsById(UUID id){
        throw new UnsupportedOperationException();
    }
    public List<News> addNews(News news){
        throw new UnsupportedOperationException();
    }
    public List<News> updateNews(UUID id, News news){
        throw new UnsupportedOperationException();
    }
    public List<News> deleteNews(UUID id){
        throw new UnsupportedOperationException();
    }
}
