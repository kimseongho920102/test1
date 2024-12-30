import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DBConnection from "../common/DBConnection"; // 공통 API 모듈 import
import BaseInput from "./baseComponents/BaseInput";
import BaseButton from "./baseComponents/BaseButton"; // 공통 버튼 컴포넌트 import
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }
      
      const response = await DBConnection.post("/api/login", {username, userId, email, password });
      setSuccess("회원가입 성공!");
      // 회원가입 후 회원 목록 페이지로 이동
      setTimeout(() => {
        navigate("/"); 
      }, 1500);  // 성공 메시지를 1.5초 정도 보여주고 로그인 페이지 이동
    } catch (error) {
      console.error("Error details:", error.response || error.message);
      alert("회원가입 실패. 콘솔을 확인하세요.");
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
        <BaseInput
          label="유저명"
          id="username"
          type="text"
          placeholder="이름을 알려주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <BaseInput
          label="아이디"
          id="userId"
          type="text"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
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
        <BaseInput
          label="비밀번호 확인"
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <BaseButton
          label="가입"
          type="submit"
          className="signup-button"
        />
      </form>
       <BaseButton
          label="로그인으로 돌아가기"
          type="primary"
          onClick={() => navigate("/login")}
          className="back-to-login-button"
        />
    </div>
  );
};

export default Signup;
