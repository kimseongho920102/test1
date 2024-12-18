package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class SignupController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        // 이메일 중복 체크
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body(
                new SignupResponse(false, "이미 사용 중인 이메일입니다.")
            );
        }

        // 사용자 등록
        User newUser = userService.registerUser(request.getUsername(), request.getEmail(), request.getPassword());
        if (newUser != null) {
            return ResponseEntity.ok(new SignupResponse(true, "회원가입에 성공했습니다."));
        } else {
            return ResponseEntity.badRequest().body(
                new SignupResponse(false, "회원가입 중 오류가 발생했습니다.")
            );
        }
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
