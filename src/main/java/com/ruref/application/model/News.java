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


}
