const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    answers: {
      type: Object,
      required: false,
    },
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
