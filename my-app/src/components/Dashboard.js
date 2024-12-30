import React, { useState } from "react";
import DBConnection from "../common/DBConnection"; // 공통 API 모듈 import

const Dashboard = () => {
    const [value, setValue] = useState("");
    const [response, setResponse] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const res = await DBConnection.get("/api/selectWithValue", {
                params: { value: value },
            });
            setResponse(res.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder="Enter a value"
            />
            <button onClick={handleButtonClick}>Fetch Data</button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Dashboard;
