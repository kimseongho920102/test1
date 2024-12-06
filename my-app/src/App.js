import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        {/* MainLayout에 로그아웃 핸들러 전달 */}
        <Route path="/mainLayout" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
