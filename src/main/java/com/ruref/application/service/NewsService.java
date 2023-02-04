package com.ruref.application.service;

import com.ruref.application.model.NewsModel;
import com.ruref.application.repository.NewsRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class NewsService {

    private final NewsRepository repository;

    public List<NewsModel> getAllNews(){
        return repository.findAll();
    }
    public NewsModel getNewsById(Long id){
        return repository.getReferenceById(id);
    }
    public void addNews(NewsModel news){
        repository.save(news);
    }
    public void updateNews(Long id, NewsModel news){
        NewsModel newsToUpdate = repository.getReferenceById(id);
        newsToUpdate.setAuthor(news.getAuthor());
        newsToUpdate.setBody(news.getBody());
        newsToUpdate.setCategory(news.getCategory());
        newsToUpdate.setTitle(news.getTitle());
        newsToUpdate.setDateOfArticle(news.getDateOfArticle());
        repository.save(newsToUpdate);
    }
    public void deleteNews(Long id){
        repository.delete(repository.getReferenceById(id));
    }
}
