'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      nomeAluno: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpfAluno: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      telefoneAluno: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      emailAluno: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rendaAluno: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      nomeGarantidor: {
        type: Sequelize.STRING
      },
      cpfGarantidor: {
        type: Sequelize.INTEGER
      },
      telefoneGarantidor: {
        type: Sequelize.INTEGER
      },
      emailGarantidor: {
        type: Sequelize.STRING
      },
      rendaGarantidor: {
        type: Sequelize.DOUBLE
      },
      instituicao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      curso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};