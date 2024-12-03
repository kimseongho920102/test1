import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors().and() // CORS 허용
            .csrf().disable() // CSRF 비활성화
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login", "/signup", "/error", "/api/auth/**").permitAll() // 인증 없이 접근 가능 경로 설정
                .anyRequest().authenticated() // 그 외 요청은 인증 필요
            )
            .formLogin()
                .loginPage("/login") // 커스텀 로그인 페이지 설정
                .permitAll()
            .and()
            .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login")
                .permitAll();

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bcryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
