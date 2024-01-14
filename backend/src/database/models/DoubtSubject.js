"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DoubtSubject extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }

  DoubtSubject.init(
    {
      subject_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DoubtSubject",
      tableName: "DoubtSubjects",
      timestamps: false,
    }
  );

  return DoubtSubject;
};
