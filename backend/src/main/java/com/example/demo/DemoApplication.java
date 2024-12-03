package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.demo")
public class DemoApplication {

    @Autowired
    private ApplicationContext context;

    @PostConstruct
    public void checkBeans() {
        if (context.getBean("bcryptPasswordEncoder") != null) {
            System.out.println("BCryptPasswordEncoder bean is registered.");
        } else {
            System.err.println("BCryptPasswordEncoder bean is NOT registered!");
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
