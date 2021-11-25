const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    questions: {
      type: Object,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Form", FormSchema);
