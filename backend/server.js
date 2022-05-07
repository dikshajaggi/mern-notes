const express = require('express');
const notes = require("../backend/data/notes")
const dotenv = require("dotenv");

const app = express();
dotenv.config

app.get("/", (req, res) => {
    res.send("api working successfully")
});

app.get("/notes", (req, res) => {
    res.json(notes);
})

app.get("/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);

    res.send(note);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));