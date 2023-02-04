package com.ruref.application.dao;

import com.ruref.application.model.NewsModel;

import java.util.List;
import java.util.UUID;

public class NewsDao implements INewsDao{

    @Override
    public List<NewsModel> getAllNews() {
        throw new UnsupportedOperationException();
    }

    @Override
    public NewsModel getNewsById(UUID id) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void addNews(NewsModel news) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void updateNews(UUID id, NewsModel news) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void deleteNews(UUID id) {
        throw new UnsupportedOperationException();
    }
}
