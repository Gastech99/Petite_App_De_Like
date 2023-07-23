const express = require("express");
const app = express();
const port = 4000;

app.get("/", (_, res) => {
    res.send("Hello Express")
})

app.listen(port, () => {
    console.log("Serveur sur le port 4000");
})