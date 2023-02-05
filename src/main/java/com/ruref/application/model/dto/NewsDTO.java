package com.ruref.application.model.dto;

import com.ruref.application.model.UserModel;
import jakarta.persistence.ElementCollection;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class NewsDTO {
    private Long id;
    private LocalDate dateOfArticle;
    private UserModel author;
    private String title;
    private String body;
    @ElementCollection
    private List<String> category;

}