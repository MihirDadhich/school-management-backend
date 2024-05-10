// server.js

const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Sync model with database and start server
sequelize
  .sync({ force: false }) // set force: true to drop existing table (data loss)
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
