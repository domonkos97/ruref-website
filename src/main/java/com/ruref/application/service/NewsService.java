package com.ruref.application.service;

import com.ruref.application.dao.NewsDao;
import com.ruref.application.model.News;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

public class NewsService {

    NewsDao newsDao;

    @Autowired
    public NewsService(NewsDao newsDao) {
        this.newsDao = newsDao;
    }

    public List<News> getAllNews(){
        return newsDao.getAllNews();
    }
    public News getNewsById(UUID id){
        return newsDao.getNewsById(id);
    }
    public void addNews(News news){
        newsDao.addNews(news);
    }
    public void updateNews(UUID id, News news){
        newsDao.updateNews(id, news);
    }
    public void deleteNews(UUID id){
        newsDao.deleteNews(id);
    }
}
