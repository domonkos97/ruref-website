package com.ruref.application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewsModel {
    @Id
    private long id;
    private LocalDate dateOfArticle;
    @Transient
    private UserModel author;
    private String title;
    private String body;
    @ElementCollection
    private List<String> category;


}
