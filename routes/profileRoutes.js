const express = require("express");

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const router = express.Router();

router.get("/:email", getProfile);

router.put("/:email", updateProfile);

module.exports = router;