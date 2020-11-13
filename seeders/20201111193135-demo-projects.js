'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        project_name: "Cabinets",
        class: "woodworking",
        description: "Building storage cabinets",
        img: "",
        user_project_id: 1
      },
      {
        project_name: "1972 Bronco",
        class: "Automotive",
        description: "Complete restoration project",
        img: "",
        user_project_id: 1
      },
      {
        project_name: "Wiring",
        class: "electrical",
        description: "wiring a garage",
        img: "",
        user_project_id: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
