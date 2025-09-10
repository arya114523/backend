const express = require("express");
const app = express();

let port = 3000;

app.use((req, res) => {
    console.log("request received");
    res.send("<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>");
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

