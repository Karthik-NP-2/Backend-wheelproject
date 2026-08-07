const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    status: {
  type: String,
  enum: ["Pending", "Reviewed", "Resolved"],
  default: "Pending",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);