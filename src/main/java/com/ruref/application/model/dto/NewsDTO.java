package com.ruref.application.model.dto;

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
    private Long authorId;
    private String title;
    private String body;
    @ElementCollection
    private List<String> categoryIds;

}