const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static("../"));
app.use(express.static("../components/"));
if(fs.existsSync("../pages/"))
    app.use(express.static("../pages/"));
app.get("*", (req, res) => {
    res.send(`<code style='color:red'>Page ${req.path} does not exist</code>`);
})

app.listen(3000);