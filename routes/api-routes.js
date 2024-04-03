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

})
// BONUS: add a delete /api/notes/:id route
module.exports = router;