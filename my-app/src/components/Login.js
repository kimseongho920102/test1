import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DBConnection from "../common/DBConnection";
import BaseInput from "./baseComponents/BaseInput";
import BaseButton from "./baseComponents/BaseButton"; // 공통 버튼 컴포넌트 import
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true); // 로딩 상태 활성화
    try {
      const { token } = await DBConnection.post("/api/login", { email, password });
      localStorage.setItem("authToken", token);
      navigate("/MainLayout");
    } catch (error) {
      alert(`로그인 실패: ${error}`);
    } finally {
      setLoading(false); // 로딩 상태 비활성화
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <BaseInput
          label="이메일"
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <BaseInput
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <BaseButton
          label="로그인"
          type="primary"
          onClick={handleLogin}
          loading={loading}
          className="login-button"
        />
      </form>
      <div className="signup-link">
        계정이 없으신가요? 
      </div>
      <div>
        <BaseButton
          label = "회원가입"
          className="signup-button"
          onClick={() => navigate("/signup")}
          />
      </div>
    </div>
  );
};

export default Login;
