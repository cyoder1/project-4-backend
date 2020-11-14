// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class cost extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   cost.init({
//     cost_desc: DataTypes.STRING,
//     date: DataTypes.STRING,
//     amount: DataTypes.NUMBER,
//     project_cost_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'cost',
//   });
//   return cost;
// };

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