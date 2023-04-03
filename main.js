const express = require("express");

// Initializing express
const app = express();

app.get("/", (req, res) => {
    return res.json("Hello world");
})

// Starting server
app.listen("3000", () => {
    console.log("Listening on port 3000");
});
