package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "USER", uniqueConstraints = {
    @UniqueConstraint(columnNames = "USER_ID"),
    @UniqueConstraint(columnNames = "USER_EMAIL")
})
public class User {

    @Id
    @Column(name = "USER_ID", length = 20, nullable = false)
    private String userId; // 유저 ID (Primary Key)

    @Column(name = "USER_EMAIL", length = 255, nullable = false, unique = true)
    private String userEmail; // 유저 이메일 (Unique)

    @Column(name = "PASSWORD", length = 255, nullable = false)
    private String password; // 패스워드

    @Column(name = "USER_NAME", length = 255, nullable = false)
    private String userName; // 유저 이름

    @Column(name = "USE_YN", length = 1, nullable = false)
    private String useYn = "Y"; // 사용 여부 (기본값: 'Y')

    @Column(name = "LAST_LOGIN")
    private LocalDateTime lastLogin; // 마지막 로그인 시간

    @Column(name = "SIGN_DATE", nullable = false, updatable = false)
    private LocalDateTime signDate = LocalDateTime.now(); // 가입 날짜

    @Column(name = "UPDATED_AT", nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now(); // 업데이트 시간

    // Getter와 Setter
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public LocalDateTime getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(LocalDateTime lastLogin) {
        this.lastLogin = lastLogin;
    }

    public LocalDateTime getSignDate() {
        return signDate;
    }

    public void setSignDate(LocalDateTime signDate) {
        this.signDate = signDate;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    // 업데이트 시간 자동 갱신
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
