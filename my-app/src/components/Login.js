import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // CSS 파일을 import합니다.

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      const { token } = response.data;

      // JWT 토큰을 로컬 스토리지에 저장
      localStorage.setItem("authToken", token);

      // 로그인 성공 후 대시보드로 이동
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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

        <button type="button" className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </form>
      <div className="signup-link">
        계정이 없으신가요? 
        <button
        type="button"
        className="signup-button"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
      </div>
    </div>
  );
};

export default Login;
