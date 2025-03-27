// POST /exams - Add a new exam
router.post("/exams", (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: "ID and Name are required" });
    }

    exams.push({ id, name });
    res.status(201).json({ message: "Exam added successfully", exam: { id, name } });
});