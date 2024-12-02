import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직은 생략
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form className="login-form">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" placeholder="이메일을 입력하세요" required />

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" placeholder="비밀번호를 입력하세요" required />

        <button type="button" className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
