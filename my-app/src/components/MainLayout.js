import React from "react";
import { Layout, Menu } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
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
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">소개</Menu.Item>
          <Menu.Item key="2">프로젝트</Menu.Item>
          <Menu.Item key="3">기술 스택</Menu.Item>
          <Menu.Item key="4">연락처</Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header style={{ background: "#001529", color: "white", padding: "10px" }}>
          <h1 style={{ color: "white", margin: 0 }}>My Name</h1>
        </Header>

        {/* Content */}
        <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
          <h2>환영합니다!</h2>
          <p>저는 React와 Spring Boot를 사용하여 웹 애플리케이션을 개발할 수 있는 개발자입니다.</p>
          <h3>주요 프로젝트</h3>
          <ul>
            <li>프로젝트 A: E-commerce 플랫폼 구축</li>
            <li>프로젝트 B: 실시간 채팅 애플리케이션</li>
          </ul>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          <div>
            <MailOutlined style={{ margin: "0 10px" }} />
            <GithubOutlined style={{ margin: "0 10px" }} />
            <LinkedinOutlined style={{ margin: "0 10px" }} />
          </div>
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
