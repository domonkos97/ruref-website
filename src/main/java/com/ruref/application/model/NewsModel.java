package com.ruref.application.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NewsModel {
    @Id
    @GeneratedValue
    private Long id;
    private LocalDate dateOfArticle;
    @Transient
    private UserModel author;
    private String title;
    private String body;
    @ElementCollection
    private List<String> category;


}
