const UserRegistration = require("../models/userRegistration");
const axios = require("axios");

function getUserActivity(userId) {
  return { lastLogin: "2024-05-10", totalLogins: 25 };
}

exports.registerUser = async (req, res) => {
  try {
    const { userCategory, userID, userPw, userName, userEmail } = req.body;
    if (!userCategory || !userID || !userPw || !userName || !userEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newUser = await UserRegistration.create({
      userCategory,
      userID,
      userPw,
      userName,
      userEmail,
      administrator: req.body.administrator || false,
    });

    console.log("==============================================");
    console.log(`New user registered: ${newUser.userName}`);
    console.log("==============================================");

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);

    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ error: "Validation Error", details: error.errors });
    } else if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ error: "Duplicate Entry", details: error.message });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserRegistration.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userActivity = getUserActivity(id);

    res.json({ user, userActivity });
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
