const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const formsRoute = require("./routes/forms");
const feedbackRoute = require("./routes/feedback");
const path = require("path");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/forms", formsRoute);
app.use("/feedback", feedbackRoute);

app.listen(process.env.PORT || "5000", () => {
  console.log("Backend is running");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
