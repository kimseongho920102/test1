package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors().and()  // CORS 활성화
            .csrf().disable()  // CSRF 비활성화
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/login", "/signup", "/api/auth/**").permitAll()  // 인증 없이 접근 가능
                .anyRequest().authenticated()  // 기타 요청은 인증 필요
            );
        return http.build();
    }
}
