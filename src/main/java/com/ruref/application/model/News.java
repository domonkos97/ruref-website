package com.ruref.application.model;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public class News {

    // FIELDS
    private UUID id;

    private LocalDate dateOfArticle;

    private UserModel author;
    private String title;
    private String body;
    private List<String> category;

    // CONSTRUCTOR(S)

    public News(UUID id, LocalDate dateOfArticle, UserModel author, String title, String body, List<String> category) {
        this.id = id;
        this.dateOfArticle = dateOfArticle;
        this.author = author;
        this.title = title;
        this.body = body;
        this.category = category;
    }


    // GETTERS SETTERS
    public UUID getId() {
        return id;
    }

    public LocalDate getDateOfArticle() {
        return dateOfArticle;
    }

    public UserModel getAuthor() {
        return author;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setDateOfArticle(LocalDate dateOfArticle) {
        this.dateOfArticle = dateOfArticle;
    }

    public void setAuthor(UserModel author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }



}
