'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsersTasks.init({
    user_id: DataTypes.UUID,
    task_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UsersTasks',
    tableName: 'users_tasks',
    timestamps: true,
    underscored: true
  });
  return UsersTasks;
};