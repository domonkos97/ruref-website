package com.ruref.application.model;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public class News {
    private UUID id;

    private LocalDate dateOfArticle;
    private UserModel author;
    private String title;
    private String body;
    private List<String> category;

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

    // CONSTRUCTOR




}
