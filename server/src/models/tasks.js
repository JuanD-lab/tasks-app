'use strict';
const { v4: uuidv4 } = require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Users, {
        through: "users_tasks",
        foreignKey: "task_id",
      });
      this.belongsToMany(models.Status, {
        through: "tasks_statuses",
        foreignKey: "task_id",
      });
    }
  }
  Tasks.init({
    name: DataTypes.STRING,
    expiration: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: "tasks",
    timestamps: true,
    underscored: true
  });
  Tasks.beforeCreate(async (task) => {
    const universalId = uuidv4();
    task.id = universalId;
  });
  return Tasks;
};