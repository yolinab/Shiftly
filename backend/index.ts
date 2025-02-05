require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Test Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Add endpoints for:
app.post("/meetings", /* handler */)
app.post("/availability", /* handler */)
app.get("/meetings/:id", /* handler */)
