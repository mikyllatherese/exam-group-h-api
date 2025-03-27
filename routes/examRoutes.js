// PUT /exams/:id - Update an exam by ID
router.put("/exams/:id", (req, res) => {
    const examId = parseInt(req.params.id);
    const { name } = req.body;

    const exam = exams.find(exam => exam.id === examId);
    if (!exam) {
        return res.status(404).json({ message: "Exam not found" });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    exam.name = name;
    res.json({ message: "Exam updated successfully", exam });
});