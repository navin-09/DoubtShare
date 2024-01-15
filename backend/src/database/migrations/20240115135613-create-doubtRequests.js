"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the enum type first

    // Then create the table using the enum type
    await queryInterface.createTable("DoubtRequests", {
      doubt_requests_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "DoubtSubjects",
          key: "subject_id",
        },
      },
      question: {
        type: Sequelize.TEXT,
      },
      status: {
        type: DataTypes.STRING,
      }, // Use the created enum type here
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
    // Drop the table first
    await queryInterface.dropTable("DoubtRequests");

    // Then drop the enum type
    await queryInterface.sequelize.query("DROP TYPE enum_DoubtRequests_status");
  },
};
