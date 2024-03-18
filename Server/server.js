// ENV ACCESS
require("dotenv").config();

const express = require("express");
const app = express();
const router = require('./router/auth-router')
const connectionDb = require("./dataBase/db")

// USE MIDDLEWARE
app.use(express.json());

app.use("/api/auth", router)

const PORT = 3000;

connectionDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Sucessfull port is ${PORT}`)
    })
})
