"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TutorsSubject extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }

  TutorsSubject.init(
    {
      tutor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subject_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_grade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TutorsSubject",
      tableName: "TutorsSubjects",
      timestamps: false,
    }
  );

  return TutorsSubject;
};
