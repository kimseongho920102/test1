package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // 예제용 하드코딩 사용자 정보
        if ("user@example.com".equals(request.getEmail()) && "password".equals(request.getPassword())) {
            // JWT 토큰 생성 (샘플)
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
