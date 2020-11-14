'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('costs', [
      {
        cost_desc: "materials",
        date: "11/14/20",
        amount: 40.00,
        project_cost_id: 43
      },
      {
        cost_desc: "hardware",
        date: "11/15/20",
        amount: 20.00,
        project_cost_id: 43
      },
      {
        cost_desc: "labor - pay for part time employee",
        date: "11/14/20",
        amount: 100.00,
        project_cost_id: 43
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('costs', null, {});
  }
};
