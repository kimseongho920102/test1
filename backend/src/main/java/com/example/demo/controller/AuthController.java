package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

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
        if (userService.authenticate(request.getEmail(), request.getPassword())) {
            // JWT 토큰 생성 (예제)
            String jwtToken = "mock-jwt-token-for-" + request.getEmail();
            return ResponseEntity.ok(new LoginResponse(jwtToken));
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }

    // DTO 클래스 정의
    public static class LoginRequest {
        private String email;
        private String password;

        // Getters and Setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    public static class LoginResponse {
        private String token;

        public LoginResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}
