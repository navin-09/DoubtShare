// tutorSubjects.js
"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TutorSubjects", {
      tutor_subject_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
      subject_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "DoubtSubjects",
          key: "subject_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("TutorSubjects");
  },
};
