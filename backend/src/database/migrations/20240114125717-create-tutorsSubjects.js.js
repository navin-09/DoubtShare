"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TutorsSubjects", {
      tutor_id: {
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
      class_grade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("TutorsSubjects");
  },
};
