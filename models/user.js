'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Project, { foreignKey: 'user_project_id' })
  };
  return User;
};