const Feedback = require("../models/Feedback");
// Get My Feedback
const getMyFeedback = async (req, res) => {
  try {
    const { email } = req.params;

    const feedback = await Feedback.find({ email }).sort({
      createdAt: -1,
    });

    res.status(200).json(feedback);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Edit Feedback
const editFeedback = async (req, res) => {
  try {
    const { rating, message } = req.body;

    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found",
      });
    }

    feedback.rating = rating;
    feedback.message = message;

    await feedback.save();

    res.status(200).json({
      message: "Feedback Updated Successfully",
      feedback,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Add Feedback
const addFeedback = async (req, res) => {
  try {
    const { name, email, rating, message } = req.body;

    const feedback = await Feedback.create({
      name,
      email,
      rating,
      message,
    });

    res.status(201).json({
      message: "Feedback Submitted Successfully",
      feedback,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Feedback
const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json(feedback);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Delete Feedback
const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found",
      });
    }

    await Feedback.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Feedback Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Feedback Status
const updateFeedbackStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found",
      });
    }

    feedback.status = status;

    await feedback.save();

    res.status(200).json({
      message: "Feedback Status Updated Successfully",
      feedback,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addFeedback,
  getFeedback,
  getMyFeedback,
  editFeedback,
  deleteFeedback,
  updateFeedbackStatus,
};