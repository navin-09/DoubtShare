"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }

  Session.init(
    {
      session_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      doubt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tutor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_time: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      end_time: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Session",
      tableName: "Sessions",
      timestamps: false,
    }
  );

  return Session;
};
