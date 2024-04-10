const path = require("node:path");
const router = require("express").Router();

// returns the index.html file
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

module.exports = router;