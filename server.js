const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" })); // ✅ Allow requests from anywhere

// ✅ News API Route
app.get("/news", async (req, res) => {
    try {
        const apiKey = "d07b80fc76c7461290560f5364516396"; // Replace with your actual API key
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
        
        res.json(response.data); // ✅ Send JSON response
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

// ✅ Start the Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
