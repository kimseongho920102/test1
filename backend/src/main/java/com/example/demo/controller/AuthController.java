package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public String showRegistrationForm() {
        return "register"; // 회원가입 HTML 페이지
    }

    @PostMapping("/register")
    public String register(@RequestParam String username,
                           @RequestParam String password,
                           @RequestParam String email,
                           Model model) {
        try {
            userService.registerUser(username, password, email);
            return "redirect:/login"; // 회원가입 후 로그인 페이지로 리다이렉트
        } catch (Exception e) {
            model.addAttribute("error", "Username already exists");
            return "register";
        }
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login"; // 로그인 HTML 페이지
    }

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        Model model) {
        Optional<User> user = userService.authenticate(username, password);
        if (user.isPresent()) {
            return "redirect:/dashboard"; // 대시보드로 이동
        } else {
            model.addAttribute("error", "Invalid username or password");
            return "login";
        }
    }

    @GetMapping("/dashboard")
    public String showDashboard() {
        return "dashboard"; // 대시보드 HTML 페이지
    }
}
