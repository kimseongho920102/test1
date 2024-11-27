import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>대시보드</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>매출 현황</h2>
          <p>₩10,000,000</p>
        </div>
        <div className="card">
          <h2>직원 수</h2>
          <p>50명</p>
        </div>
        <div className="card">
          <h2>프로젝트 진행</h2>
          <p>5개</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
