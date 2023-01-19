const express = require("express");
const mongoose = require("mongoose");
const contactSchema = require("./contactSchema");
const Contact = new mongoose.model("Contact", contactSchema);

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const data = await Contact.find({});
    res.status(200).json({ result: data, message: "Get All Requested Data" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Contact.find({ _id: req.params.id });
    res.status(200).json({ result: data, message: "Success" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const data = await Contact.find({ name: req.query.name });
//     res.status(200).json({ result: data, message: "Success" });
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const data = await newContact.save();
    res
      .status(200)
      .json({ result: data, message: "Added Contact Successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res
      .status(200)
      .json({ result: data, message: "Updated Contact Successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Contact.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .json({ result: data, message: "Deleted Contact Successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
