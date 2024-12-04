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
            // CSRF 비활성화 (React와 연동 시 필요)
            .csrf().disable()

            // 모든 요청 허용
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll()
            )
            .headers()
            .frameOptions()
            .sameOrigin()  // 또는 .disable()로 설정할 수도 있음
            ;

        return http.build();
    }
}
