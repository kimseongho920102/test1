import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Table, Button, Space } from "antd"; // Ant Design 컴포넌트
import { useNavigate } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://34.64.32.164:8080";
  const columns = useMemo(() => [
    {
      title: "이름",
      dataIndex: "username", // 데이터 키
      key: "username",
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "가입일",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleDateString(), // 날짜 포맷팅
    },
  ],[]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>회원 목록</h1>
      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        rowKey="id" // 고유한 키
        pagination={{ pageSize: 5 }} // 페이지네이션 설정
      />

      <Space style={{ marginTop: "20px" }}>
        <Button type="primary" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </Button>
      </Space>
    </div>
  );
};

export default Users;
