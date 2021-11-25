const router = require("express").Router();
const mongoose = require("mongoose");
const Form = require("../models/Form");
const Feedback = require("../models/Feedback");

// CREATE NEW FORM
router.post("/", async (req, res) => {
  const newForm = new Form({ _id: new mongoose.Types.ObjectId(), ...req.body });
  try {
    const savedForm = await newForm.save();
    res.status(200).json(savedForm);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE FORM
router.put("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (form.username === req.body.username) {
      try {
        const updatedForm = await Form.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedForm);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your forms");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FORM
router.delete("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (form.username === req.body.username) {
      try {
        await Feedback.deleteMany({ form: req.params.id });
        await Form.findByIdAndDelete(req.params.id);
        res.status(200).json("Form deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your forms");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET FORM
router.get("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL FORMS FOR USER
router.post("/userforms", async (req, res) => {
  try {
    const form = await Form.find({ username: req.body.username });
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
