import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("${API_URL}/api/signup", {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Error during signup. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <label htmlFor="email">사용자명</label>
        <input
          type="text"
          id="username"
          placeholder="이름을알려주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="signup-button">
          회원가입
        </button>
      </form>
      <button
        className="back-to-login-button"
        onClick={() => navigate("/login")}
      >
        로그인으로 돌아가기
      </button>
    </div>
  );
};

export default Signup;
