const express = require("express");

const {
  addFeedback,
  getFeedback,
  getMyFeedback,
  deleteFeedback,
  updateFeedbackStatus,
  editFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", addFeedback);
router.get("/", getFeedback);
router.delete("/:id", deleteFeedback);
router.put("/:id/status", updateFeedbackStatus);
router.get("/my/:email", getMyFeedback);
router.put("/:id", editFeedback);
module.exports = router;