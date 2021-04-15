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
    cpfAluno: DataTypes.STRING,
    telefoneAluno: DataTypes.STRING,
    emailAluno: DataTypes.STRING,
    rendaAluno: DataTypes.STRING,
    nomeGarantidor: DataTypes.STRING,
    cpfGarantidor: DataTypes.STRING,
    telefoneGarantidor: DataTypes.STRING,
    emailGarantidor: DataTypes.STRING,
    rendaGarantidor: DataTypes.STRING,
    instituicao: DataTypes.STRING,
    curso: DataTypes.STRING,
    cep: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};