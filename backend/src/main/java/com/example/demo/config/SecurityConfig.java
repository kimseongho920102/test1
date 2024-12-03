package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/auth/**", "/api/public/**").permitAll() // 인증 없이 접근 가능
                .anyRequest().authenticated() // 나머지는 인증 필요
            )
            .csrf(csrf -> csrf.disable()) // CSRF 비활성화
            .cors(cors -> {}); // CORS 설정 (내용이 비어 있어도 기본 동작 설정)
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
