'use strict';
const { v4: uuidv4 } = require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Tasks, {
        through: "users_tasks",
        foreignKey: "user_id",
    });
    }
  }
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
    tableName: "users",
    timestamps: true,
    underscored: true
  });
  Users.beforeCreate(async (user, options) => {
    const universalId = uuidv4();
    user.id = universalId;
  });
  return Users;
};