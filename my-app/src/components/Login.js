import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://vigilant-parakeet-rv5jwrg9qp63xr65-8080.app.github.dev/api/login", {
        email,
        password,
      });
      if (response.data.success) {
        // Redirect to the dashboard on successful login
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
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

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
      <button
        className="signup-button"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
    </div>
  );
};

export default Login;
