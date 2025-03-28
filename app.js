const express = require("express");
const bodyParser = require("body-parser");
const examRoutes = require("./routes/examRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); 

// routes
app.use("/api", examRoutes); 

// default route
app.get("/", (req, res) => {
    res.send("Welcome to the Group H API!");
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
