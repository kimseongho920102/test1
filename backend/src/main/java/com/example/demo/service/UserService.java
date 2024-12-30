package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(String username, String userId, String email , String password) {
        User user = new User();
        user.setUsername(username);
        user.setUserId(userId);
        user.setEmail(email);
        user.setPassword(password); // 암호화를 제거하고 평문 저장
        
        return userRepository.save(user);
    }

    public boolean authenticate(String userId, String password) {
        Optional<User> userOptional = userRepository.findByUserId(userId);

        // 사용자가 존재하고 비밀번호가 일치하는지 확인
        return userOptional.isPresent() && userOptional.get().getPassword().equals(password);
    }
}
