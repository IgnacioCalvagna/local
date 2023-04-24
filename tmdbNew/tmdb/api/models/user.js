const { Model, DataTypes } = require("sequelize");
const db = require("../db/db")


class User extends Model {}

User.init(
  {
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);
