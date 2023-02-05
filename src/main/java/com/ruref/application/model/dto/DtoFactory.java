package com.ruref.application.model.dto;

import com.ruref.application.model.NewsModel;

public class DtoFactory {
    public static NewsDTO createNewsDto(NewsModel newsModel){
        NewsDTO dto = new NewsDTO();
        dto.setTitle(newsModel.getTitle());
        dto.setAuthorId(newsModel.getAuthor().getId());
        dto.setBody(newsModel.getBody());
        dto.setCategoryIds(newsModel.getCategory());
        dto.setDateOfArticle(newsModel.getDateOfArticle());
        return dto;
    }
}
