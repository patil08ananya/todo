import express from "express";
import bodyParser from "body-parser";

const date = new Date();
const month = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "Novemebr", "December"];

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let today = date.getDate();
let mon = date.getMonth();
let year = date.getFullYear();

app.get("/", (req, res) => {
    res.render("index.ejs",{currentDate: today, currentMonth: month[mon], currentYear: year});
});

app.post("/submit", (req, res) => {
    let newTask = req.body["taskForToday"];
    res.render("index.ejs",{currentDate: today, currentMonth: month[mon], currentYear: year,task: newTask});
});


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
