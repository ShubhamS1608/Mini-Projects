const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.use(express.static(path.join(__dirname, '../Frontend')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB with Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/college-mate")
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(" MongoDB error:", err));

// Define schema
const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  }
});

// Define model
const Chat = mongoose.model("Chat", chatSchema);

app.get("/", (req,res) => {
    res.redirect("../login.html")
})

// -------- CRUD Routes --------

// READ (Show all chats)
app.get("/task", async (req, res) => {
  const chats = await Chat.find();
  res.render("index", { chats });
});

// CREATE (Add chat)
app.post("/add", async (req, res) => {
  const newChat = new Chat({ message: req.body.message });
  await newChat.save();
  res.redirect("/task");
});

// UPDATE (Edit chat)
app.post("/update/:id", async (req, res) => {
  await Chat.findByIdAndUpdate(req.params.id, { message: req.body.newMessage });
  res.redirect("/task");
});

// DELETE (Remove chat)
app.post("/delete/:id", async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.redirect("/task");
});

// Start server
app.listen(8080, () => console.log(" Server running on http://localhost:8080"));
