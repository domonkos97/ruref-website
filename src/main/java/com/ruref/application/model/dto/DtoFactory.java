package com.ruref.application.model.dto;

import com.ruref.application.model.NewsModel;
import com.ruref.application.model.UserModel;

public class DtoFactory {
    public static NewsDTO createNewsDto(NewsModel newsModel){
        NewsDTO dto = new NewsDTO();
        dto.setId(newsModel.getId());
        dto.setTitle(newsModel.getTitle());
        dto.setAuthorId(newsModel.getAuthor().getId());
        dto.setBody(newsModel.getBody());
//        dto.setCategoryIds(newsModel.getCategory());
        dto.setDateOfArticle(newsModel.getDateOfArticle());
        dto.setPhoto(newsModel.getPhoto());
        return dto;
    }

    public static UserDTO createUserDTO(UserModel userModel){
        UserDTO dto = new UserDTO();
        dto.setId(userModel.getId());
        dto.setName(userModel.getName());
        dto.setEmail(userModel.getEmail());
        dto.setAccessType(userModel.getAccess());
        return dto;
    }
}
