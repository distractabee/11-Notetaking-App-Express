const db = require("../db/db.json");
const fs = require('fs');
const router = require("express").Router();
// the uuid package will generate unique ids for each note
const { uuid } = require('uuid');
// post api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and return the new note to the client.

router.get("/api/notes", (req, res) => {
    readFromFile("./db/db.json")
    .then((data) => res
    .json(JSON.parse(data)))
})

router.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid()
        };
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db), err => {
            if (err) throw err
        });

        res.json(newNote);
    }
})

router.delete("/api/notes/:id", (req, res) => {
    
})
// BONUS: add a delete /api/notes/:id route
module.exports = router;