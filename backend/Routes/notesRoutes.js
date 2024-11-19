const express = require("express");
const { allNotes, saveNotes } = require ("../Controllers/notesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:userId").get(allNotes);
router.route("/save").post(saveNotes);
module.exports = router;