'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TasksStatuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TasksStatuses.init({
    task_id: DataTypes.UUID,
    status_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'TasksStatuses',
    tableName: 'tasks_statuses',
    timestamps: true,
    underscored: true,
  });
  return TasksStatuses;
};