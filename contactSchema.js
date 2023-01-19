const { timeStamp } = require("console");
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    address: String,
  },
  { timestamps: true }
);

module.exports = contactSchema;
