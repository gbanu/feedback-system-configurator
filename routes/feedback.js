const router = require("express").Router();
const mongoose = require("mongoose");
const Form = require("../models/Form");
const Feedback = require("../models/Feedback");

// CREATE NEW FEEDBACK
router.post("/", async (req, res) => {
  const newFeedback = new Feedback({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  try {
    const savedFeedback = await newFeedback.save();
    res.status(200).json(savedFeedback);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FEEDBACK
router.delete("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    const form = await Form.findById(feedback.form);
    if (form.username === req.body.username) {
      try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json("Feedback deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete feedbacks to your forms");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET FEEDBACK
router.get("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL FEEDBACK FOR THE FORM
router.post("/formfeedback", async (req, res) => {
  try {
    const feedback = await Feedback.find({
      form: req.body.form,
    });
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
