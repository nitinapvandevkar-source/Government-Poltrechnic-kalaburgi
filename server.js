const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const student = {
    username: "nitin",
    password: "12345"
};

app.post("/login", (req, res) => {
    const username = String(req.body.username || "").trim().toLowerCase();
    const password = String(req.body.password || "").trim();

    console.log("Username entered:", username);
    console.log("Password entered:", password);

    if (username === student.username && password === student.password) {
        res.json({
            success: true,
            message: "Login Successful!"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid username or password."
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`College Website running on port${PORT}`);
});