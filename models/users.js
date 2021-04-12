'use strict';
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
    }
  };
  Users.init({
    status: DataTypes.STRING,
    nomeAluno: DataTypes.STRING,
    cpfAluno: DataTypes.INTEGER,
    telefoneAluno: DataTypes.INTEGER,
    emailAluno: DataTypes.STRING,
    rendaAluno: DataTypes.DOUBLE,
    nomeGarantidor: DataTypes.STRING,
    cpfGarantidor: DataTypes.INTEGER,
    telefoneGarantidor: DataTypes.INTEGER,
    emailGarantidor: DataTypes.STRING,
    rendaGarantidor: DataTypes.DOUBLE,
    instituicao: DataTypes.STRING,
    curso: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};