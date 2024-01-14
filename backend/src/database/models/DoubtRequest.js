"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DoubtRequest extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }

  DoubtRequest.init(
    {
      doubt_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "DoubtRequest",
      tableName: "DoubtRequests",
      timestamps: false,
    }
  );

  return DoubtRequest;
};
