import express from "express";

const app = express();
// Conditional route for foo
app.get("/foo", (req, res, next) => {
// Randomly choose between conditions or go to next route
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        res.send("Sometimes this");
    } else {
        next();
    }
});
// Second conditional route for foo
app.get("/foo", (req, res) => {
    res.send("And sometimes that");
});
// 404 error for invalid routes
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});
// Set server to listen on provided port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});