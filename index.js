const express = require("express");
const mongoose = require("mongoose");

const contactHandler = require("./contactHandler");

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/contacts")
  .then(() => console.log("Connection successfully"))
  .catch((err) => console.log(err));

app.use("/contact", contactHandler);

app.listen(5000, () => {
  console.log("Port running on 5000");
});
