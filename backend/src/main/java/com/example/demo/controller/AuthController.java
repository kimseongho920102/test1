package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class AuthController {


    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        if (userService.authenticate(request.getUserId(), request.getPassword())) {
            // JWT 토큰 생성 (예제)
            String jwtToken = "mock-jwt-token-for-" + request.getUserId();
            return ResponseEntity.ok(new LoginResponse(jwtToken));
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }



}
