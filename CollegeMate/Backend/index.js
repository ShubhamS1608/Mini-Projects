const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const port = 8080;

main()
.then(()=> { 
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/college-mate');
}
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.static(path.join(__dirname, "views")));
app.get("/", (req,res) => {
    res.redirect("/login.html")
})
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = model("User", userSchema);

module.exports = User;
app.listen(8080 , () => {
    console.log("Server is listening on port 8080")
});