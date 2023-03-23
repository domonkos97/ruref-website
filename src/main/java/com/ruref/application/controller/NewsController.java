package com.ruref.application.controller;

import com.ruref.application.model.NewsModel;
import com.ruref.application.model.dto.NewsDTO;
import com.ruref.application.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {

    private final NewsService service;

    @GetMapping
    public List<NewsDTO> getAllNews() {
        System.out.println(service.getAllNews());
        return service.getAllNews();
    }

    @GetMapping("/{id}")
    public NewsModel getNewsById(@PathVariable Long id){
        return service.getNewsById(id);
    }

    @PostMapping("/add")
    public void addNews(@RequestBody NewsDTO news) {
        service.addNews(news);
    }

}
