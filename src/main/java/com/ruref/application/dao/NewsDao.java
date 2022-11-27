package com.ruref.application.dao;

import com.ruref.application.model.News;

import java.util.List;
import java.util.UUID;

public class NewsDao implements INewsDao{

    @Override
    public List<News> getAllNews() {
        throw new UnsupportedOperationException();
    }

    @Override
    public News getNewsById(UUID id) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void addNews(News news) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void updateNews(UUID id, News news) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void deleteNews(UUID id) {
        throw new UnsupportedOperationException();
    }
}
