package com.ruref.application.model;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class NewsStorage {
    private List<News> newsList;

    public List<News> getAllNews(){
        return newsList;
    }
    public Optional<News> getNewsById(UUID id){
        return newsList.stream().filter(news -> news.getId() == id).findFirst();
    }
    public void addNews(News news){
        newsList.add(news);
    }
    public void updateNews(UUID id, News news){
        getNewsById(id).ifPresent(newsToUpdate -> {
            newsToUpdate.setTitle(news.getTitle());
            newsToUpdate.setBody(news.getBody());
            newsToUpdate.setAuthor(news.getAuthor());
            newsToUpdate.setCategory(news.getCategory());
            newsToUpdate.setDateOfArticle(news.getDateOfArticle());
        });
    }
    public void deleteNews(UUID id){
        throw new UnsupportedOperationException();
    }
}
