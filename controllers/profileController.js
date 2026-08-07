const User = require("../models/User");

// Get User Profile
const getProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update User Profile
const updateProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const { name, phone } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = name;

    if (phone) {
      user.phone = phone;
    }

    await user.save();

    res.status(200).json({
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};