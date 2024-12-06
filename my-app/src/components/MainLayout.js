import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Users from "./Users"; // Users.js 컴포넌트 가져오기

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("1"); // 현재 선택된 메뉴 상태

  const handleMenuClick = ({ key }) => {
    setSelectedMenu(key);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // 토큰 삭제
    window.location.href = "/"; // 로그인 페이지로 이동
  };

  // 메뉴 선택에 따라 Content에 렌더링할 내용 결정
  const renderContent = () => {
    switch (selectedMenu) {
      case "1":
        return <h2>소개 페이지</h2>;
      case "2":
        return <h2>프로젝트 페이지</h2>;
      case "3":
        return <h2>기술 스택 페이지</h2>;
      case "4":
        return <h2>연락처 페이지</h2>;
      case "5":
        return <Users />; // 시스템관리 메뉴 선택 시 Users 컴포넌트 렌더링
      default:
        return <h2>환영합니다!</h2>;
    }
  };

  return (
    <Layout>
      {/* Sidebar */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", background: "#001529" }}
      >
        <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
          <h2>My Portfolio</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick} // 메뉴 클릭 시 상태 변경
        >
          <Menu.Item key="1">소개</Menu.Item>
          <Menu.Item key="2">프로젝트</Menu.Item>
          <Menu.Item key="3">기술 스택</Menu.Item>
          <Menu.Item key="4">연락처</Menu.Item>
          <Menu.Item key="5">시스템관리</Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#001529",
            color: "white",
            padding: "10px",
          }}
        >
          <h1 style={{ color: "white", margin: 0 }}>My Name</h1>
          <Button
            icon={<LogoutOutlined />}
            type="text"
            style={{ color: "white" }}
            onClick={handleLogout}
          >
            로그아웃
          </Button>
        </Header>

        {/* Content */}
        <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
          {renderContent()} {/* 현재 선택된 메뉴에 따른 내용 렌더링 */}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
