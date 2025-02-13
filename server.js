const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend requests

// ✅ Serve static files (if needed)
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// ✅ News API Route
app.get("/news", async (req, res) => {
    try {
        const apiKey = "d07b80fc76c7461290560f5364516396"; // Replace with a valid API key
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

// ✅ Default Route (To Prevent "Cannot GET")
app.get("/", (req, res) => {
    res.send("Server is running! Use /news to get data.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

});

app.listen(PORT, () => console.log(`Server running on port ${PORT} `))
