const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const USER_ID = "RISHABHJAIN"; // Change accordingly
const EMAIL = "rishabhjain7604@gmail.com";
const ROLL_NUMBER = "22BCS50095";

// POST Endpoint
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        let numbers = data.filter((item) => !isNaN(item));
        let alphabets = data.filter((item) => isNaN(item));
        let highest_alphabet = alphabets.length ? [alphabets.sort().slice(-1)[0]] : [];

        res.json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers,
            alphabets,
            highest_alphabet
        });
    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
});

// GET Endpoint
app.get("/bfhl", (req, res) => {
    res.json({ operation_code: 1 });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
