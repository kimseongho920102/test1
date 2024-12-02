import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [value, setValue] = useState("");
    const [response, setResponse] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const res = await axios.get("https://vigilant-parakeet-rv5jwrg9qp63xr65-8080.app.github.dev/api/selectWithValue", {
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
