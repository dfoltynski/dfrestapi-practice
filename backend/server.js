require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const port = process.env.PORT || 8080;
const routes = require("./router");

app.use(logger("dev"));
app.use(express.json());

mongoose.connect(
    process.env.DB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (err) console.log(err);
        console.log("Connected to db");
    }
);

app.use("/api", routes);

app.listen(port, (err) => {
    if (err) console.log(err);

    console.log(`Server is running on ${port}`);
});
