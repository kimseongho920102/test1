import React, { useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/selectOne");
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>대시보드</h1>
      <button onClick={fetchData}>데이터 조회</button>
      {result !== null && <p>결과: {result}</p>}
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
