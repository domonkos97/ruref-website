package com.ruref.application.service;

import com.ruref.application.model.NewsModel;
import com.ruref.application.model.dto.DtoFactory;
import com.ruref.application.model.dto.NewsDTO;
import com.ruref.application.repository.NewsRepository;
import com.ruref.application.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class NewsService {

    private final NewsRepository repository;
    private final UserService userService;

    @Autowired
    public NewsService(NewsRepository repository,
                       UserService userService) {
        this.repository = repository;
        this.userService = userService;
    }

    public List<NewsDTO> getAllNews(){
        return repository.findAll().stream().map(DtoFactory::createNewsDto).collect(Collectors.toList());
    }
    public NewsModel getNewsById(Long id){
        return repository.getReferenceById(id);
    }
    public void addNews(NewsDTO dto){
        NewsModel news = new NewsModel();
        news.setTitle(dto.getTitle());
        news.setBody(dto.getBody());
//        news.setAuthor(userService.getUserById(dto.getAuthorId()));
        news.setCategory(dto.getCategoryIds());
        news.setDateOfArticle(dto.getDateOfArticle());
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
