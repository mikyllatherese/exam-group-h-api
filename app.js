const express = require("express");
const app = express();
const examRoutes = require("./routes/examRoutes");

app.use(express.json());
app.use("/api", examRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

