const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register a new user
router.post("/registeruser", userController.registerUser);

// Get user by ID
router.get("/:id", userController.getUserById);

module.exports = router;
