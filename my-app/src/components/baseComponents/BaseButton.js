import React from "react";
import { Button } from "antd";

const BaseButton = ({
  label,           // 버튼 텍스트
  type = "default", // Ant Design의 버튼 타입 (default, primary, danger 등)
  onClick,         // 클릭 이벤트 핸들러
  loading = false, // 로딩 상태
  disabled = false, // 비활성화 상태
  className,       // 추가 클래스명
  ...props         // 기타 속성
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      className={className}
      {...props}
    >
      {label}
    </Button>
  );
};

export default BaseButton;
