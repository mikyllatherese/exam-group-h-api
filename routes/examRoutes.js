<<<<<<< HEAD
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
=======
// POST /exams - Add a new exam
router.post("/exams", (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: "ID and Name are required" });
    }

    exams.push({ id, name });
    res.status(201).json({ message: "Exam added successfully", exam: { id, name } });
});
>>>>>>> Caballero-post-exams
