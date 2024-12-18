package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
public class StaticResourceController {
    @CrossOrigin(origins = "http://34.64.157.30:8080")
    @GetMapping("/manifest.json")
    public ResponseEntity<String> getManifest() {
        return new ResponseEntity<>("{}", HttpStatus.OK); // 예시 응답
    }
}
