package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
public class StaticResourceController {
    @CrossOrigin(origins = "https://vigilant-parakeet-rv5jwrg9qp63xr65-8080.app.github.dev")
    @GetMapping("/manifest.json")
    public ResponseEntity<String> getManifest() {
        return new ResponseEntity<>("{}", HttpStatus.OK); // 예시 응답
    }
}
