const express = require("express");
const router = express.Router();

router.get("/exam-group", (req, res) => {
    res.json({ message: "Group H API" });
});

let exams = [
    { id: 1, name: "INTPROG Exam" },
    { id: 2, name: "SYSAD Exam" }
];

// GET /exams 
router.get("/exams", (req, res) => {
    res.json(exams);
}); 

module.exports = router;