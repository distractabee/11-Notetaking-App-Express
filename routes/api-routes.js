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
        const notes = JSON.parse(data);
        if (err) {
            console.error(err)
        } 

        res.json(notes);
    });
})

router.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    const notes = JSON.parse(data);
    console.log(db)
    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: v4()
        };
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                return res.json({ error: err })
            }
           return res.json(newNote)
        });

        // res.json(newNote);
    }
})

router.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        const notes = JSON.parse(data);
        if (err) {
            console.error(err)
        } 
    const index = notes.findIndex(note => note.id === parseInt(noteId));
        // finds the index number of the note and splices it off the json file
    if (index !== -1) {
        notes.splice(index, 1);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                console.log(error);
            }
            res.json({ message: 'Note deleted!' })
        });
    } else {
        res.status(404).json({ error: 'Note not found!' })
    }
})
});

// BONUS: add a delete /api/notes/:id route
module.exports = router;