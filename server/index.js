const express = require("express");
const dotenv = require("dotenv/config");
const cors = require("cors");
const router = require("./routes/index.js")
const { Connection } = require("./db/connection.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

const MONGODB_URI = process.env.MONGODB_URI;
Connection(MONGODB_URI);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});