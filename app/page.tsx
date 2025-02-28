"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState([]);

  const API_URL = "YOUR_BACKEND_URL/bfhl"; // 🔥 Replace with your Vercel backend URL

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!parsedInput.data) throw new Error("Invalid format");

      const response = await axios.post(API_URL, parsedInput);
      setResponseData(response.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON or API Error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Backend Filter App</h1>
      <textarea
        rows={4}
        cols={50}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='{"data": ["A", "1", "B", "3"]}'
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {responseData && (
        <>
          <h2>Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
