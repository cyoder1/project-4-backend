'use strict';
module.exports = (sequelize, DataTypes) => {
  const cost = sequelize.define('cost', {
    cost_desc: DataTypes.STRING,
    date: DataTypes.STRING,
    amount: DataTypes.NUMBER,
    project_cost_id: DataTypes.INTEGER
  }, {});
  cost.associate = function(models) {
    cost.belongsTo(models.Project, { foreignKey: 'project_cost_id' })
    // Project.hasMany(models.cost, { foreignKey: 'project_cost_id' })
  };
  return cost;
};