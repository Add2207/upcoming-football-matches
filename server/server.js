const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { BalldontlieAPI } = require('@balldontlie/sdk');
const api = new BalldontlieAPI({ apiKey: process.env.BALLDONTLIE_API_KEY });


const app = express();
const PORT = 5000;

app.use(cors());



app.get("/api/epl-matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.balldontlie.io/epl/v1/games",
      {
        headers: {
          Authorization: process.env.BALLDONTLIE_API_KEY,
        },
        params: {
          season: 2024, // You can change this based on the current season
          per_page: 20, // Adjust pagination as needed
        },
      }
    );

    if (response.status !== 200 || !response.data) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch EPL matches" });
    }

    console.log("Matches fetched:", response.data.data.length);
    res.json(response.data.data);
  } catch (error) {
    console.error("Error fetching EPL matches:", error.message);
    res.status(500).json({ error: "Error fetching EPL matches" });
  }
});

app.get("/api/teams", async (req, res) => {
    try {
        const response = await axios.get("https://api.balldontlie.io/epl/v1/teams?season=2024", {
        headers: {
            Authorization: process.env.BALLDONTLIE_API_KEY
        }
    });
    console.log("Teams fetched:", response.data.data.length);

    res.json(response.data);
} catch (error) {
    console.error("Error fetching teams:", error.message);
    res.status(500).json({ error: "Error fetching teams" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
