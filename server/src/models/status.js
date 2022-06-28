'use strict';
const { v4: uuidv4 } = require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Tasks, {
        through: "tasks_statuses",
        foreignKey: "status_id",
      });
    }
  }
  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
    tableName: 'status',
    timestamps: true,
    underscored: true
  });
  Status.beforeCreate(async (status, options) => {
    const universalId = await uuidv4();
    status.id = universalId;
  });
  return Status;
};