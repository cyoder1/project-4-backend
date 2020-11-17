'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: DataTypes.STRING,
    class: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    user_project_id: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: 'user_project_id' })
    Project.hasMany(models.cost, { foreignKey: 'project_cost_id' })
  };
  return Project;
};