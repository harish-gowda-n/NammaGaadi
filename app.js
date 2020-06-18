const express = require("express");
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

})

app.get("/users", (req, res) => {
    res.json({ id: "1", name: "Harish" });
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on port 3001");
});
