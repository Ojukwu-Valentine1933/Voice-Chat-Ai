const express = require("express")
const app = express()
const cors = require("cors");
const dotenv = require ("dotenv")
const mongoose = require("mongoose");




const corsOption = {
    origin: "http://localhost:3001",
    optionSuccessStatus: 200,
};

dotenv.config();

app.use(cors(corsOption));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is running fine" });
})

module.exports = app

