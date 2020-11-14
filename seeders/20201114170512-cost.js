'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('costs', [
      {
        cost_desc: "materials",
        date: "11/14/20",
        amount: 40.71,
        project_cost_id: 4
      },
      {
        cost_desc: "hardware",
        date: "11/15/20",
        amount: 20.20,
        project_cost_id: 4
      },
      {
        cost_desc: "labor - pay for part time employee",
        date: "11/14/20",
        amount: 100.40,
        project_cost_id: 4
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('costs', null, {});
  }
};
