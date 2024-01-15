"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DoubtSessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doubt_request_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "DoubtRequests",
          key: "doubt_requests_id",
        },
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
      chat_log: {
        type: Sequelize.TEXT,
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("DoubtSessions");
  },
};
