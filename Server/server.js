const express = require("express");
const app = express();
const router = require('./router/auth-router')


// USE MIDDLEWARE
app.use(express.json());

app.use("/api/auth", router)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sucessfull port is ${PORT}`)
})