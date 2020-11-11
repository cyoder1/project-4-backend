// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Project extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Project.init({
//     project_name: DataTypes.STRING,
//     class: DataTypes.STRING,
//     description: DataTypes.STRING,
//     img: DataTypes.STRING,
//     user_project_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Project',
//   });
//   return Project;
// };

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
    // User.hasMany(models.Post, { foreignKey: 'userId' })
  };
  return Project;
};