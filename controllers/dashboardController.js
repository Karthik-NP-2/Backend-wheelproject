const Feedback = require("../models/Feedback");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalFeedback = await Feedback.countDocuments();

    const averageRating = await Feedback.aggregate([
      {
        $group: {
          _id: null,
          average: { $avg: "$rating" },
        },
      },
    ]);

    res.status(200).json({
      totalUsers,
      totalFeedback,
      averageRating:
        averageRating.length > 0
          ? averageRating[0].average.toFixed(1)
          : 0,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};