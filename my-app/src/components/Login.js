import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form className="login-form">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" placeholder="이메일을 입력하세요" required />

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" placeholder="비밀번호를 입력하세요" required />

        <button type="submit" className="login-button">로그인</button>
      </form>
      <p className="signup-link">
        계정이 없으신가요? <a href="/signup">회원가입</a>
      </p>
    </div>
  );
};

export default Login;
