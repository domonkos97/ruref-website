package com.ruref.application.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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
    @OneToOne
    private UserModel author;
    private String title;
    private String body;
    @ElementCollection
    private List<String> category;
}
