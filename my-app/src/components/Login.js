import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DBConnection from "../common/DBConnection"; // 공통 API 모듈 import
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 공통 API 호출: 이메일과 비밀번호를 객체로 전달
      const { token } = await DBConnection.post("/api/login", { email, password });

      localStorage.setItem("authToken", token); // JWT 토큰 저장

      navigate("/MainLayout"); // 대시보드로 이동
      console.log('화면이 바뀔꺼야');
    } catch (error) {
      alert(`로그인 실패: ${error}`);
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
    </div>
  );
};

export default Login;
