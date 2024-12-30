import React from "react";
import { Input } from "antd"; // Ant Design의 Input 사용

const BaseInput = ({
  label,         // 입력 필드와 연결된 레이블
  id,            // 입력 필드의 ID (label과 연결)
  placeholder,   // 입력 필드의 Placeholder
  value,         // 입력 값
  onChange,      // 값 변경 시 호출되는 이벤트 핸들러
  required,      // 필수 입력 여부
  type = "text", // 입력 타입 (기본값: "text")
  ...props       // 기타 추가 속성
}) => {
  return (
    <div className="base-input-container" style={{ marginBottom: "1rem" }}>
      {label && (
        <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
};

export default BaseInput;
