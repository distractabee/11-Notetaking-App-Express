const path = require("node:path");
const router = require("express").Router();

// returns the index.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})



module.exports = router;