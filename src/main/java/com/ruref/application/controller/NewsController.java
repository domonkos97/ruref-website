package com.ruref.application.controller;

import com.ruref.application.model.NewsModel;
import com.ruref.application.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/news")
@RequiredArgsConstructor
public class NewsController {

    private final NewsService service;

    @GetMapping
    public List<NewsModel> getAllNews() {
        return service.getAllNews();
    }

}
