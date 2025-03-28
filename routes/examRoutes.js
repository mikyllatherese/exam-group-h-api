const express = require("express");
const router = express.Router();

let exams = [
    { id: 1, name: "INTPROG Exam" },
    { id: 2, name: "SYSAD Exam" }
];

// GET /exams 
router.get("/exams", (req, res) => {
    res.json(exams);
});

// POST /exams 
router.post("/exams", (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ message: "ID and name are required." });
    }

    const newExam = { id, name };
    exams.push(newExam);

    res.status(201).json({ message: "Exam added successfully", exam: newExam });
});

// UPDATE /exams/:id 
router.put("/exams/:id", (req, res) => {
    const examId = parseInt(req.params.id);
    const { name } = req.body;

    const exam = exams.find(ex => ex.id === examId);
    
    if (!exam) {
        return res.status(404).json({ message: "Exam not found." });
    }

    exam.name = name || exam.name;

    res.json({ message: "Exam updated successfully", exam });
});

// default test route
router.get("/exam-group", (req, res) => {
    res.json({ message: "Group H API" });
});

module.exports = router;
