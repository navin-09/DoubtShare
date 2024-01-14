"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Sessions", {
      session_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doubt_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "DoubtRequests",
          key: "doubt_id",
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
      start_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Sessions");
  },
};
