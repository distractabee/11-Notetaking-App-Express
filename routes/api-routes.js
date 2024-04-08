const db = require("../db/db.json");
const fs = require('fs');
const router = require("express").Router();
const path = require('path');
// the uuid package will generate unique ids for each note
const { v4 } = require('uuid');
// post api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and return the new note to the client.

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            console.error(err)
        } else {
            res.send(db)
        }
    })
})

router.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    console.log(db)
    // const dbData = JSON.parse(db);
    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: v4()
        };
        db.push(newNote);
        fs.writeFile('../db/db.json', JSON.stringify(db), (err) => {
            if (err) {
                return res.json({ error: err })
            }
           return res.json(newNote)
        });

        // res.json(newNote);
    }
})

router.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id

})
// BONUS: add a delete /api/notes/:id route
module.exports = router;