package com.example.demo.controller;

import com.example.demo.service.MyService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String redirect() {
        return "forward:/index.html";
    }
}