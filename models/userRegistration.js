// models/userRegistration.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserRegistration = sequelize.define(
  "UserRegistration",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "ID",
    },
    userCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UserCategory",
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UserID",
    },
    userPw: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UserPw",
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "UserName",
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "UserEmail",
    },
    administrator: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: "Administrator",
    },
  },
  {
    // Additional model options
    tableName: "UserRegistration",
    timestamps: true,
    underscored: true,
  }
);

module.exports = UserRegistration;
