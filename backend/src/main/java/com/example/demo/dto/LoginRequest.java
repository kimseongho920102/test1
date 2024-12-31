package com.example.demo.dto;

    // DTO 클래스 정의
    public class LoginRequest {
        private String userId;
        private String password;

        // Getters and Setters
        public String getUserId() {
            return userId;
        }

        public void setUserId(String userId) {
            this.userId = userId;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

}
