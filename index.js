import express from "express";
import bodyParser from "body-parser";

const date = new Date();
const month = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "Novemebr", "December"];

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let today = date.getDate();
let mon = date.getMonth();
let year = date.getFullYear();

let newTasks = [];

app.get("/", (req, res) => {
    res.render("index.ejs",{currentDate: today, currentMonth: month[mon], currentYear: year, newTaskOfDay: newTasks});
});

app.post("/submit", (req, res) => {
    let newTask = req.body["taskForToday"];
    newTasks.push(newTask);
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
